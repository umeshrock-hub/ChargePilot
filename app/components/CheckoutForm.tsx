"use client";

import { useState } from "react";
import { Button } from "@whop/react/components";
import { loadStripe } from "@stripe/stripe-js";
import {
	Elements,
	CardElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

interface CheckoutFormProps {
	userId: string;
	amount: number;
	planName: string;
}

function CheckoutFormComponent({ userId, amount, planName }: CheckoutFormProps) {
	const stripe = useStripe();
	const elements = useElements();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setLoading(true);
		setError(null);

		try {
			// Create payment intent
			const response = await fetch("/api/create-payment-intent", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					amount,
					currency: "usd",
					metadata: {
						userId,
						planName,
					},
				}),
			});

			const { clientSecret } = await response.json();

			// Confirm payment
			const { error: confirmError } = await stripe.confirmCardPayment(
				clientSecret,
				{
					payment_method: {
						card: elements.getElement(CardElement)!,
					},
				}
			);

			if (confirmError) {
				setError(confirmError.message || "Payment failed");
			} else {
				setSuccess(true);
				// Redirect to success page or customer portal
				window.location.href = "/portal";
			}
		} catch (err: any) {
			setError(err.message || "An error occurred");
		} finally {
			setLoading(false);
		}
	};

	const cardElementOptions = {
		style: {
			base: {
				fontSize: "16px",
				color: "#424770",
				"::placeholder": {
					color: "#aab7c4",
				},
			},
			invalid: {
				color: "#9e2146",
			},
		},
	};

	if (success) {
		return (
			<div className="p-6 rounded-lg bg-green-2 text-green-11">
				Payment successful! Redirecting...
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="p-4 rounded-lg border border-gray-a4 bg-gray-a1">
				<CardElement options={cardElementOptions} />
			</div>

			{error && (
				<div className="p-4 rounded-lg bg-red-2 text-red-11">
					{error}
				</div>
			)}

			<Button
				type="submit"
				variant="classic"
				className="w-full"
				size="4"
				disabled={loading || !stripe}
			>
				{loading ? "Processing..." : `Pay $${amount}`}
			</Button>

			<p className="text-2 text-gray-9 text-center">
				Your payment is secure and encrypted
			</p>
		</form>
	);
}

export default function CheckoutForm(props: CheckoutFormProps) {
	return (
		<Elements stripe={stripePromise}>
			<CheckoutFormComponent {...props} />
		</Elements>
	);
}

