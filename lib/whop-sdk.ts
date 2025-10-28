import { Whop } from "@whop/sdk";

// Validate required environment variables
const apiKey = process.env.WHOP_API_KEY;
const appID = process.env.NEXT_PUBLIC_WHOP_APP_ID;

// During build time, env vars might not be available. Create a dummy SDK instance
// that will be properly initialized at runtime when env vars are present.
if (!apiKey || !appID) {
	if (process.env.NODE_ENV === "production") {
		// In production, we need these values
		throw new Error(
			"WHOP_API_KEY and NEXT_PUBLIC_WHOP_APP_ID environment variables are required."
		);
	}
	// During build/development, create a placeholder
	console.warn(
		"[whop-sdk] Environment variables not set. Using placeholder values for build."
	);
}

export const whopsdk = new Whop({
	appID: appID || "placeholder_app_id",
	apiKey: apiKey || "placeholder_api_key",
	webhookKey: process.env.WHOP_WEBHOOK_SECRET
		? btoa(process.env.WHOP_WEBHOOK_SECRET)
		: "",
});

// Additional environment variables for ChargePilot
export const WHOP_AGENT_USER_ID = process.env.NEXT_PUBLIC_WHOP_AGENT_USER_ID;
export const WHOP_COMPANY_ID = process.env.NEXT_PUBLIC_WHOP_COMPANY_ID;