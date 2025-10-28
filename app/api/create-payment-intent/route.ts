import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
	try {
		const { amount, currency = "usd", metadata } = await request.json();

		// Validate amount
		if (!amount || amount < 0) {
			return NextResponse.json(
				{ error: "Invalid amount" },
				{ status: 400 }
			);
		}

		// Create payment intent
		const paymentIntent = await stripe.paymentIntents.create({
			amount: Math.round(amount * 100), // Convert to cents
			currency,
			automatic_payment_methods: {
				enabled: true,
			},
			metadata: metadata || {},
		});

		return NextResponse.json({
			clientSecret: paymentIntent.client_secret,
			paymentIntentId: paymentIntent.id,
		});
	} catch (error: any) {
		console.error("Error creating payment intent:", error);
		return NextResponse.json(
			{ error: error.message || "Failed to create payment intent" },
			{ status: 500 }
		);
	}
}

