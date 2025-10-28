import { headers } from "next/headers";
import { whopsdk } from "@/lib/whop-sdk";

export async function getAuthenticatedUser() {
	try {
		const headerList = await headers();
		const { userId } = await whopsdk.verifyUserToken(headerList);
		const user = await whopsdk.users.retrieve(userId);
		return { userId, user };
	} catch (error) {
		// In local development without Whop iframe, return mock user
		if (process.env.NODE_ENV === "development") {
			console.log("Running in development mode - using mock user");
			return {
				userId: "dev_user_id",
				user: {
					id: "dev_user_id",
					username: "testuser",
					name: "Test User",
					email: "test@example.com",
				},
			};
		}
		// In production, re-throw the error
		throw error;
	}
}

