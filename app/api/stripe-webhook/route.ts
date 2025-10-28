import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
	const sig = request.headers.get("stripe-signature");
	const body = await request.text();

	if (!sig) {
		return NextResponse.json(
			{ error: "Missing stripe-signature" },
			{ status: 400 }
		);
	}

	let event: Stripe.Event;

	try {
		event = stripe.webhooks.constructEvent(
			body,
			sig,
			process.env.STRIPE_WEBHOOK_SECRET || ""
		);
	} catch (err: any) {
		console.error("Webhook signature verification failed:", err.message);
		return NextResponse.json(
			{ error: `Webhook Error: ${err.message}` },
			{ status: 400 }
		);
	}

	// Handle different event types
	switch (event.type) {
		case "payment_intent.succeeded":
			const paymentIntent = event.data.object as Stripe.PaymentIntent;
			console.log("Payment succeeded:", paymentIntent.id);
			// Handle successful payment (e.g., update database, send confirmation)
			break;

		case "payment_intent.payment_failed":
			const failedPayment = event.data.object as Stripe.PaymentIntent;
			console.log("Payment failed:", failedPayment.id);
			// Import dunning logic for automated retry
			const { handleFailedPayment, DEFAULT_DUNNING_CONFIG } = await import("@/lib/dunning");
			
			// Automatically handle failed payment with dunning
			await handleFailedPayment(
				failedPayment.id,
				1,
				DEFAULT_DUNNING_CONFIG
			);
			break;

		case "charge.refunded":
			const refund = event.data.object as Stripe.Charge;
			console.log("Charge refunded:", refund.id);
			// Handle refund
			break;

		default:
			console.log(`Unhandled event type: ${event.type}`);
	}

	return NextResponse.json({ received: true });
}

