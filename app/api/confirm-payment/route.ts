import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
	try {
		const { paymentIntentId } = await request.json();

		if (!paymentIntentId) {
			return NextResponse.json(
				{ error: "Payment intent ID is required" },
				{ status: 400 }
			);
		}

		// Retrieve the payment intent
		const paymentIntent = await stripe.paymentIntents.retrieve(
			paymentIntentId
		);

		return NextResponse.json({
			status: paymentIntent.status,
			paymentIntent: {
				id: paymentIntent.id,
				status: paymentIntent.status,
				amount: paymentIntent.amount,
				currency: paymentIntent.currency,
			},
		});
	} catch (error: any) {
		console.error("Error confirming payment:", error);
		return NextResponse.json(
			{ error: error.message || "Failed to confirm payment" },
			{ status: 500 }
		);
	}
}

