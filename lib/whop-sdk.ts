import { Whop } from "@whop/sdk";

export const whopsdk = new Whop({
	appID: process.env.NEXT_PUBLIC_WHOP_APP_ID,
	apiKey: process.env.WHOP_API_KEY,
	webhookKey: btoa(process.env.WHOP_WEBHOOK_SECRET || ""),
});

// Additional environment variables for ChargePilot
export const WHOP_AGENT_USER_ID = process.env.NEXT_PUBLIC_WHOP_AGENT_USER_ID;
export const WHOP_COMPANY_ID = process.env.NEXT_PUBLIC_WHOP_COMPANY_ID;