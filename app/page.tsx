import { Button } from "@whop/react/components";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<div className="text-center">
					<h1 className="text-9 font-bold text-gray-12 mb-6">
						Smart Billing for Modern Businesses
					</h1>
					<p className="text-5 text-gray-10 max-w-2xl mx-auto mb-8">
						Automate invoicing, track payments, and manage subscriptions with
						ChargePilot. The complete billing solution for growing companies.
					</p>
					<div className="flex gap-4 justify-center">
						<Link href="/pricing">
							<Button variant="classic" size="4">
								View Plans
							</Button>
						</Link>
						<Link href="/dashboard">
							<Button variant="outline" size="4">
								Customer Portal
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h2 className="text-8 font-bold text-gray-12 mb-12 text-center">
					Everything You Need
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="p-6 rounded-2xl bg-gray-a2 border border-gray-a4">
						<div className="text-6 font-bold text-gray-12 mb-3">
							Automated Invoicing
						</div>
						<p className="text-3 text-gray-10">
							Generate and send invoices automatically. Track payments and
							never miss a billing cycle.
						</p>
					</div>
					<div className="p-6 rounded-2xl bg-gray-a2 border border-gray-a4">
						<div className="text-6 font-bold text-gray-12 mb-3">
							Smart Analytics
						</div>
						<p className="text-3 text-gray-10">
							Real-time insights into your revenue, payment trends, and
							customer behavior.
						</p>
					</div>
					<div className="p-6 rounded-2xl bg-gray-a2 border border-gray-a4">
						<div className="text-6 font-bold text-gray-12 mb-3">
							Secure Payments
						</div>
						<p className="text-3 text-gray-10">
							Bank-level security with PCI compliance. Accept payments
							securely worldwide.
						</p>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h2 className="text-8 font-bold text-gray-12 mb-12 text-center">
					Trusted by Leading Companies
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="p-8 rounded-2xl bg-gray-a2 border border-gray-a4">
						<p className="text-4 text-gray-11 mb-4">
							"ChargePilot transformed our billing process. We save 10+ hours per
							week on invoice management."
						</p>
						<div className="text-3 font-semibold text-gray-12">
							Sarah Johnson, CFO
						</div>
					</div>
					<div className="p-8 rounded-2xl bg-gray-a2 border border-gray-a4">
						<p className="text-4 text-gray-11 mb-4">
							"The payment tracking and analytics help us make better business
							decisions. Highly recommended."
						</p>
						<div className="text-3 font-semibold text-gray-12">
							Michael Chen, Founder
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<div className="rounded-3xl bg-gray-a2 p-12 border border-gray-a4 text-center">
					<h2 className="text-8 font-bold text-gray-12 mb-4">
						Ready to Get Started?
					</h2>
					<p className="text-4 text-gray-10 mb-8">
						Join hundreds of companies using ChargePilot for their billing
						needs.
					</p>
					<Link href="/pricing">
						<Button variant="classic" size="4">
							View Pricing Plans
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
