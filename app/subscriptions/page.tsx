import { Button } from "@whop/react/components";
import { getAuthenticatedUser } from "@/lib/auth";
import Link from "next/link";

export default async function SubscriptionsPage() {
	const { user } = await getAuthenticatedUser();
	const u = user as any;

	return (
		<div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="mb-8">
				<h1 className="text-8 font-bold text-gray-12 mb-2">
					Manage Your Subscription
				</h1>
				<p className="text-3 text-gray-10">
					Upgrade, downgrade, or cancel your subscription anytime
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Current Plan */}
				<div className="lg:col-span-2 space-y-6">
					{/* Current Subscription */}
					<div className="rounded-2xl bg-gray-a2 border border-gray-a4 p-6">
						<div className="flex justify-between items-start mb-4">
							<div>
								<h2 className="text-6 font-bold text-gray-12 mb-2">
									Current Plan
								</h2>
								<p className="text-3 text-gray-10">
									Professional Plan - $149/month
								</p>
							</div>
							<span className="text-2 font-semibold text-green-11 bg-green-2 px-3 py-1 rounded-full">
								Active
							</span>
						</div>

						<div className="grid grid-cols-2 gap-4 mt-4">
							<div>
								<div className="text-2 text-gray-10">Started</div>
								<div className="text-4 font-semibold text-gray-12">
									Nov 1, 2024
								</div>
							</div>
							<div>
								<div className="text-2 text-gray-10">Next Billing</div>
								<div className="text-4 font-semibold text-gray-12">
									Dec 1, 2024
								</div>
							</div>
						</div>

						<div className="mt-6 space-y-3">
							<Button variant="classic" className="w-full" size="3">
								Change Plan
							</Button>
							<Button variant="ghost" className="w-full" size="3">
								Cancel Subscription
							</Button>
						</div>
					</div>

					{/* Available Plans */}
					<div className="rounded-2xl bg-gray-a2 border border-gray-a4 p-6">
						<h2 className="text-6 font-bold text-gray-12 mb-4">
							Available Plans
						</h2>

						<div className="space-y-4">
							{/* Starter Plan */}
							<div className="p-4 rounded-lg border border-gray-a4 bg-gray-a1">
								<div className="flex justify-between items-center mb-2">
									<div>
										<h3 className="text-5 font-bold text-gray-12">
											Starter
										</h3>
										<p className="text-3 text-gray-10">$49/month</p>
									</div>
									<Button variant="ghost" size="3">
										Downgrade
									</Button>
								</div>
								<ul className="text-3 text-gray-10 space-y-1">
									<li>• Up to 500 invoices/month</li>
									<li>• Basic support</li>
								</ul>
							</div>

							{/* Professional Plan (Current) */}
							<div className="p-4 rounded-lg border-2 border-blue-6 bg-blue-2">
								<div className="flex justify-between items-center mb-2">
									<div>
										<h3 className="text-5 font-bold text-gray-12">
											Professional
										</h3>
										<p className="text-3 text-gray-10">$149/month</p>
									</div>
									<span className="text-2 font-semibold text-blue-11">
										Current Plan
									</span>
								</div>
								<ul className="text-3 text-gray-10 space-y-1">
									<li>• Unlimited invoices</li>
									<li>• Advanced analytics</li>
									<li>• Priority support</li>
									<li>• Webhook integration</li>
								</ul>
							</div>

							{/* Enterprise Plan */}
							<div className="p-4 rounded-lg border border-gray-a4 bg-gray-a1">
								<div className="flex justify-between items-center mb-2">
									<div>
										<h3 className="text-5 font-bold text-gray-12">
											Enterprise
										</h3>
										<p className="text-3 text-gray-10">Custom pricing</p>
									</div>
									<Button variant="ghost" size="3">
										Upgrade
									</Button>
								</div>
								<ul className="text-3 text-gray-10 space-y-1">
									<li>• Everything in Professional</li>
									<li>• Dedicated account manager</li>
									<li>• Custom integrations</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Sidebar */}
				<div className="lg:col-span-1 space-y-6">
					<div className="rounded-2xl bg-gray-a2 border border-gray-a4 p-6">
						<h3 className="text-5 font-bold text-gray-12 mb-4">Quick Info</h3>
						<div className="space-y-3 text-3 text-gray-10">
							<div>
								<div className="text-2 text-gray-10">Payment Method</div>
								<div className="font-semibold text-gray-12">
									•••• •••• •••• 4242
								</div>
							</div>
							<div>
								<div className="text-2 text-gray-10">Billing Email</div>
								<div className="font-semibold text-gray-12">
									{u.email || "test@example.com"}
								</div>
							</div>
							<Button variant="ghost" className="w-full mt-4" size="3">
								Update Payment Method
							</Button>
						</div>
					</div>

					<div className="rounded-2xl bg-blue-2 border border-blue-6 p-6">
						<h3 className="text-5 font-bold text-gray-12 mb-2">
							Need to pause?
						</h3>
						<p className="text-3 text-blue-10 mb-4">
							You can pause or cancel your subscription anytime without losing
							your data.
						</p>
						<Button variant="ghost" className="w-full" size="3">
							Pause Subscription
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

