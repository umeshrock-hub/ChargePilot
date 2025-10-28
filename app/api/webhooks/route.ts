import { waitUntil } from "@vercel/functions";
import type { Invoice } from "@whop/sdk/resources.js";
import type { NextRequest } from "next/server";
import { whopsdk } from "@/lib/whop-sdk";

export async function POST(request: NextRequest): Promise<Response> {
	// Validate the webhook to ensure it's from Whop. If validation fails
	// return 400 so the sender knows the payload wasn't accepted.
	let requestBodyText: string;
	let webhookData: any;
	
	try {
		requestBodyText = await request.text();
		
		if (!requestBodyText || requestBodyText.trim() === "") {
			console.error("[WEBHOOK] Empty request body");
			return new Response("Empty webhook payload", { status: 400 });
		}

		const headers = Object.fromEntries(request.headers);
		
		try {
			webhookData = whopsdk.webhooks.unwrap(requestBodyText, { headers });
		} catch (unwrapErr) {
			console.error("[WEBHOOK] Signature validation failed:", {
				error: unwrapErr instanceof Error ? unwrapErr.message : String(unwrapErr),
				hasHeaders: !!headers,
				bodyLength: requestBodyText.length,
			});
			return new Response("Invalid webhook signature", { status: 401 });
		}

		if (!webhookData || !webhookData.type) {
			console.error("[WEBHOOK] Invalid webhook data structure");
			return new Response("Invalid webhook data", { status: 400 });
		}

	} catch (err) {
		console.error("[WEBHOOK] Request processing failed:", {
			error: err instanceof Error ? err.message : String(err),
		});
		return new Response("Webhook processing error", { status: 500 });
	}

	// Handle billing-related webhook events
	// The SDK may type `webhookData.type` as a narrower union that doesn't
	// include every possible event string. Cast to `string` so we can handle
	// additional events (like `invoice.overdue`) without a TypeScript error.
	const eventType = webhookData.type as string;
	const data = webhookData.data;

	console.log("[WEBHOOK] Processing event:", {
		type: eventType,
		hasData: !!data,
		timestamp: new Date().toISOString(),
	});

	try {
		switch (eventType) {
			case "invoice.paid":
				waitUntil(handleInvoicePaid(data as Invoice));
				break;
			case "invoice.created":
				waitUntil(handleInvoiceCreated(data as Invoice));
				break;
			case "invoice.overdue":
				waitUntil(handleInvoiceOverdue(data as Invoice));
				break;
			case "invoice.cancelled":
				waitUntil(handleInvoiceCancelled(data as Invoice));
				break;
			case "payment.succeeded":
				waitUntil(handlePaymentSucceeded(data));
				break;
			case "payment.failed":
				waitUntil(handlePaymentFailed(data));
				break;
			case "subscription.created":
				waitUntil(handleSubscriptionCreated(data));
				break;
			case "subscription.cancelled":
				waitUntil(handleSubscriptionCancelled(data));
				break;
			default:
				console.warn("[WEBHOOK] Unhandled event type:", eventType);
		}
	} catch (handlerErr) {
		console.error("[WEBHOOK] Handler error:", {
			type: eventType,
			error: handlerErr instanceof Error ? handlerErr.message : String(handlerErr),
		});
		// Still return 200 to prevent retries for handler errors
	}

	// Make sure to return a 2xx status code quickly. Otherwise the webhook will be retried.
	return new Response("OK", { status: 200 });
}

async function handleInvoicePaid(invoice: Invoice) {
	try {
		console.log("[INVOICE PAID]", { id: invoice.id });
		// In production: Update database, send confirmation email, trigger analytics event
	} catch (err) {
		console.error("[INVOICE PAID] Handler error:", err);
		throw err;
	}
}

async function handleInvoiceCreated(invoice: Invoice) {
	try {
		console.log("[INVOICE CREATED]", { id: invoice.id });
		// In production: Send invoice to customer, update records, trigger notifications
	} catch (err) {
		console.error("[INVOICE CREATED] Handler error:", err);
		throw err;
	}
}

async function handleInvoiceOverdue(invoice: Invoice) {
	try {
		console.log("[INVOICE OVERDUE]", { id: invoice.id });
		// In production: Send overdue notice, trigger payment retry, update customer status
	} catch (err) {
		console.error("[INVOICE OVERDUE] Handler error:", err);
		throw err;
	}
}

async function handleInvoiceCancelled(invoice: Invoice) {
	try {
		console.log("[INVOICE CANCELLED]", { id: invoice.id });
		// In production: Update records, notify customer, process refunds if needed
	} catch (err) {
		console.error("[INVOICE CANCELLED] Handler error:", err);
		throw err;
	}
}

async function handlePaymentSucceeded(data: any) {
	try {
		console.log("[PAYMENT SUCCEEDED]", { id: data?.id });
		// In production: Update subscription status, grant access, send receipt
	} catch (err) {
		console.error("[PAYMENT SUCCEEDED] Handler error:", err);
		throw err;
	}
}

async function handlePaymentFailed(data: any) {
	try {
		console.log("[PAYMENT FAILED]", { id: data?.id, invoice_id: data?.invoice_id });
		
		// Import dunning logic for automated retry
		const { handleFailedPayment, DEFAULT_DUNNING_CONFIG } = await import("@/lib/dunning");
		
		// Automatically handle failed payment with dunning
		await handleFailedPayment(
			data.invoice_id || data.id,
			1, // First retry attempt
			DEFAULT_DUNNING_CONFIG
		);
	} catch (err) {
		console.error("[PAYMENT FAILED] Handler error:", err);
		throw err;
	}
}

async function handleSubscriptionCreated(data: any) {
	try {
		console.log("[SUBSCRIPTION CREATED]", { id: data?.id });
		// In production: Activate subscription, send welcome email, provision resources
	} catch (err) {
		console.error("[SUBSCRIPTION CREATED] Handler error:", err);
		throw err;
	}
}

async function handleSubscriptionCancelled(data: any) {
	try {
		console.log("[SUBSCRIPTION CANCELLED]", { id: data?.id });
		// In production: Revoke access, update status, send cancellation confirmation
	} catch (err) {
		console.error("[SUBSCRIPTION CANCELLED] Handler error:", err);
		throw err;
	}
}
