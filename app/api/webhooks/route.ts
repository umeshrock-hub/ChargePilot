import { waitUntil } from "@vercel/functions";
import type { Invoice } from "@whop/sdk/resources.js";
import type { NextRequest } from "next/server";
import { whopsdk } from "@/lib/whop-sdk";

export async function POST(request: NextRequest): Promise<Response> {
	// Validate the webhook to ensure it's from Whop
	const requestBodyText = await request.text();
	const headers = Object.fromEntries(request.headers);
	const webhookData = whopsdk.webhooks.unwrap(requestBodyText, { headers });

	// Handle billing-related webhook events
	// The SDK may type `webhookData.type` as a narrower union that doesn't
	// include every possible event string. Cast to `string` so we can handle
	// additional events (like `invoice.overdue`) without a TypeScript error.
	const eventType = webhookData.type as string;
	switch (eventType) {
		case "invoice.paid":
			waitUntil(handleInvoicePaid(webhookData.data as Invoice));
			break;
		case "invoice.created":
			waitUntil(handleInvoiceCreated(webhookData.data as Invoice));
			break;
		case "invoice.overdue":
			waitUntil(handleInvoiceOverdue(webhookData.data as Invoice));
			break;
		case "invoice.cancelled":
			waitUntil(handleInvoiceCancelled(webhookData.data as Invoice));
			break;
		case "payment.succeeded":
			waitUntil(handlePaymentSucceeded(webhookData.data));
			break;
		case "payment.failed":
			waitUntil(handlePaymentFailed(webhookData.data));
			break;
		case "subscription.created":
			waitUntil(handleSubscriptionCreated(webhookData.data));
			break;
		case "subscription.cancelled":
			waitUntil(handleSubscriptionCancelled(webhookData.data));
			break;
		default:
			console.log("[UNHANDLED WEBHOOK]", webhookData.type);
	}

	// Make sure to return a 2xx status code quickly. Otherwise the webhook will be retried.
	return new Response("OK", { status: 200 });
}

async function handleInvoicePaid(invoice: Invoice) {
	console.log("[INVOICE PAID]", invoice);
	// In production: Update database, send confirmation email, trigger analytics event
}

async function handleInvoiceCreated(invoice: Invoice) {
	console.log("[INVOICE CREATED]", invoice);
	// In production: Send invoice to customer, update records, trigger notifications
}

async function handleInvoiceOverdue(invoice: Invoice) {
	console.log("[INVOICE OVERDUE]", invoice);
	// In production: Send overdue notice, trigger payment retry, update customer status
}

async function handleInvoiceCancelled(invoice: Invoice) {
	console.log("[INVOICE CANCELLED]", invoice);
	// In production: Update records, notify customer, process refunds if needed
}

async function handlePaymentSucceeded(data: any) {
	console.log("[PAYMENT SUCCEEDED]", data);
	// In production: Update subscription status, grant access, send receipt
}

async function handlePaymentFailed(data: any) {
	console.log("[PAYMENT FAILED]", data);
	// Import dunning logic for automated retry
	const { handleFailedPayment, DEFAULT_DUNNING_CONFIG } = await import("@/lib/dunning");
	
	// Automatically handle failed payment with dunning
	await handleFailedPayment(
		data.invoice_id || data.id,
		1, // First retry attempt
		DEFAULT_DUNNING_CONFIG
	);
}

async function handleSubscriptionCreated(data: any) {
	console.log("[SUBSCRIPTION CREATED]", data);
	// In production: Activate subscription, send welcome email, provision resources
}

async function handleSubscriptionCancelled(data: any) {
	console.log("[SUBSCRIPTION CANCELLED]", data);
	// In production: Revoke access, update status, send cancellation confirmation
}
