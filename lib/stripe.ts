import Stripe from "stripe";

// During build time, env vars might not be available. Use a placeholder to allow build to succeed.
// At runtime, the actual env vars will be used.
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey && process.env.NODE_ENV === "production") {
	throw new Error("STRIPE_SECRET_KEY environment variable is required in production.");
}

if (!stripeSecretKey) {
	console.warn("[stripe] STRIPE_SECRET_KEY not set. Using placeholder for build.");
}

export const stripe = new Stripe(stripeSecretKey || "sk_test_placeholder_key_for_build", {
	// Use the Stripe API version that matches the installed Stripe types.
	// The project's Stripe types expect "2025-09-30.clover".
	apiVersion: "2025-09-30.clover",
	typescript: true,
});

