import { Whop } from "@whop/sdk";

// Validate required environment variables
const apiKey = process.env.WHOP_API_KEY;
const appID = process.env.NEXT_PUBLIC_WHOP_APP_ID;

if (!apiKey) {
	throw new Error(
		"WHOP_API_KEY environment variable is required. Please add it to your .env.local file."
	);
}

if (!appID) {
	throw new Error(
		"NEXT_PUBLIC_WHOP_APP_ID environment variable is required. Please add it to your .env.local file."
	);
}

export const whopsdk = new Whop({
	appID,
	apiKey,
	webhookKey: btoa(process.env.WHOP_WEBHOOK_SECRET || ""),
});

// Additional environment variables for ChargePilot
export const WHOP_AGENT_USER_ID = process.env.NEXT_PUBLIC_WHOP_AGENT_USER_ID;
export const WHOP_COMPANY_ID = process.env.NEXT_PUBLIC_WHOP_COMPANY_ID;