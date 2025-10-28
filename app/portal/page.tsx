import { Button } from "@whop/react/components";
import Link from "next/link";
import { getAuthenticatedUser } from "@/lib/auth";

export default async function PortalPage() {
	// Verify user authentication (or use mock in development)
	const { userId, user } = await getAuthenticatedUser();

	return (
		<div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="mb-8">
				<h1 className="text-8 font-bold text-gray-12 mb-2">Customer Portal</h1>
				<p className="text-3 text-gray-10">
					Manage your account, view invoices, and track your subscription
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Main Content */}
				<div className="lg:col-span-2 space-y-6">
					{/* Subscription Card */}
					<div className="rounded-2xl bg-gray-a2 border border-gray-a4 p-6">
						<div className="flex justify-between items-start mb-4">
							<div>
								<h2 className="text-6 font-bold text-gray-12 mb-2">
									Active Subscription
								</h2>
								<p className="text-3 text-gray-10">Professional Plan</p>
							</div>
							<span className="text-2 font-semibold text-green-11 bg-green-2 px-3 py-1 rounded-full">
								Active
							</span>
						</div>
						<div className="grid grid-cols-2 gap-4 mt-4">
							<div>
								<div className="text-2 text-gray-10">Billing Cycle</div>
								<div className="text-4 font-semibold text-gray-12">
									Monthly
								</div>
							</div>
							<div>
								<div className="text-2 text-gray-10">Next Payment</div>
								<div className="text-4 font-semibold text-gray-12">
									Dec 15, 2024
								</div>
							</div>
						</div>
						<div className="mt-6 flex gap-3">
							<Link href="/invoices">
								<Button variant="classic" size="3">
									View Invoices
								</Button>
							</Link>
							<Button variant="outline" size="3">
								Manage Subscription
							</Button>
						</div>
					</div>

					{/* Quick Stats */}
					<div className="grid grid-cols-3 gap-4">
						<div className="rounded-xl bg-gray-a2 border border-gray-a4 p-4">
							<div className="text-2 text-gray-10">Total Invoices</div>
							<div className="text-5 font-bold text-gray-12">42</div>
						</div>
						<div className="rounded-xl bg-gray-a2 border border-gray-a4 p-4">
							<div className="text-2 text-gray-10">This Month</div>
							<div className="text-5 font-bold text-gray-12">$1,245</div>
						</div>
						<div className="rounded-xl bg-gray-a2 border border-gray-a4 p-4">
							<div className="text-2 text-gray-10">Overdue</div>
							<div className="text-5 font-bold text-red-11">$0</div>
						</div>
					</div>

					{/* Recent Activity */}
					<div className="rounded-2xl bg-gray-a2 border border-gray-a4 p-6">
						<h2 className="text-6 font-bold text-gray-12 mb-4">
							Recent Activity
						</h2>
						<div className="space-y-3">
							{[1, 2, 3].map((item) => (
								<div
									key={item}
									className="flex justify-between items-center p-3 rounded-lg bg-gray-a1"
								>
									<div>
										<div className="text-3 font-semibold text-gray-12">
											Invoice #{1000 + item}
										</div>
										<div className="text-2 text-gray-10">
											November 15, 2024
										</div>
									</div>
									<div className="text-right">
										<div className="text-4 font-semibold text-gray-12">
											$149.00
										</div>
										<div className="text-2 text-green-11">Paid</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Sidebar */}
				<div className="lg:col-span-1 space-y-6">
					{/* Account Info */}
					<div className="rounded-2xl bg-gray-a2 border border-gray-a4 p-6">
						<h3 className="text-5 font-bold text-gray-12 mb-4">
							Account Information
						</h3>
						<div className="space-y-3 text-3 text-gray-11">
							<div>
								<div className="text-2 text-gray-10">Name</div>
								<div className="font-semibold text-gray-12">
									{user.name || "No name set"}
								</div>
							</div>
							<div>
								<div className="text-2 text-gray-10">Username</div>
								<div className="font-semibold text-gray-12">
									@{user.username}
								</div>
							</div>
							<div>
								<div className="text-2 text-gray-10">Email</div>
								<div className="font-semibold text-gray-12">
									{user.email || "Not provided"}
								</div>
							</div>
						</div>
					</div>

					{/* Quick Actions */}
					<div className="rounded-2xl bg-gray-a2 border border-gray-a4 p-6">
						<h3 className="text-5 font-bold text-gray-12 mb-4">
							Quick Actions
						</h3>
						<div className="space-y-2">
							<Link href="/subscriptions" className="block">
								<Button variant="classic" className="w-full" size="3">
									Manage Subscription
								</Button>
							</Link>
							<Link href="/invoices" className="block">
								<Button variant="outline" className="w-full" size="3">
									View Invoices
								</Button>
							</Link>
							<Button variant="outline" className="w-full" size="3">
								Update Payment Method
							</Button>
							<Button variant="outline" className="w-full" size="3">
								Contact Support
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

