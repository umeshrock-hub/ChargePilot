import { Button } from "@whop/react/components";
import Link from "next/link";
import { getAuthenticatedUser } from "@/lib/auth";
import { whopsdk } from "@/lib/whop-sdk";

export default async function DashboardPage({
	params,
}: {
	params: Promise<{ companyId: string }>;
}) {
	const { companyId } = await params;
	// Get authenticated user (or mock in development)
	const { userId, user: authUser } = await getAuthenticatedUser();

	// In development, use mock data if not in Whop iframe
	let company, user, access;

	if (userId === "dev_user_id") {
		// Mock data for local development
		company = {
			id: companyId,
			name: "Your Company",
			description: "Business dashboard",
		};
		user = authUser;
		access = { hasAccess: true };
	} else {
		// Fetch the neccessary data from whop.
		[company, user, access] = await Promise.all([
			whopsdk.companies.retrieve(companyId),
			whopsdk.users.retrieve(userId),
			whopsdk.users.checkAccess(companyId, { id: userId }),
		]);
	}

	const displayName = user.name || `@${user.username}`;

	return (
		<div className="flex flex-col p-8 gap-4">
			<div className="flex justify-between items-center gap-4">
				<h1 className="text-9">
					Hi <strong>{displayName}</strong>!
				</h1>
				<Link href="https://docs.whop.com/apps" target="_blank">
					<Button variant="classic" className="w-full" size="3">
						Developer Docs
					</Button>
				</Link>
			</div>

			<p className="text-3 text-gray-10">
				Welcome to you whop app! Replace this template with your own app. To
				get you started, here's some helpful data you can fetch from whop.
			</p>

			<h3 className="text-6 font-bold">Company data</h3>
			<JsonViewer data={company} />

			<h3 className="text-6 font-bold">User data</h3>
			<JsonViewer data={user} />

			<h3 className="text-6 font-bold">Access data</h3>
			<JsonViewer data={access} />
		</div>
	);
}

function JsonViewer({ data }: { data: any }) {
	return (
		<pre className="text-2 border border-gray-a4 rounded-lg p-4 bg-gray-a2 max-h-72 overflow-y-auto">
			<code className="text-gray-10">{JSON.stringify(data, null, 2)}</code>
		</pre>
	);
}
