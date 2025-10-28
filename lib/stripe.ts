import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
	// Use the Stripe API version that matches the installed Stripe types.
	// The project's Stripe types expect "2025-09-30.clover".
	apiVersion: "2025-09-30.clover",
	typescript: true,
});

