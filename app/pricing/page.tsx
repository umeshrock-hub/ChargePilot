import { Button } from "@whop/react/components";
import Link from "next/link";

export default function PricingPage() {
	const plans = [
		{
			name: "Starter",
			price: "$49",
			period: "per month",
			features: [
				"Up to 500 invoices/month",
				"Basic payment tracking",
				"Email support",
				"Custom branding",
				"API access",
			],
			popular: false,
		},
		{
			name: "Professional",
			price: "$149",
			period: "per month",
			features: [
				"Unlimited invoices",
				"Advanced analytics",
				"Priority support",
				"Custom workflows",
				"Webhook integration",
				"Multi-currency support",
			],
			popular: true,
		},
		{
			name: "Enterprise",
			price: "Custom",
			period: "pricing",
			features: [
				"Everything in Professional",
				"Dedicated account manager",
				"Custom integrations",
				"SLA guarantee",
				"On-premise deployment",
				"Training & onboarding",
			],
			popular: false,
		},
	];

	return (
		<div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
			<div className="text-center mb-16">
				<h1 className="text-9 font-bold text-gray-12 mb-4">
					Simple, Transparent Pricing
				</h1>
				<p className="text-4 text-gray-10">
					Choose the plan that fits your business needs
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{plans.map((plan) => (
					<div
						key={plan.name}
						className={`p-8 rounded-2xl border ${
							plan.popular
								? "bg-gray-a2 border-gray-12 ring-2 ring-gray-8"
								: "bg-gray-a1 border-gray-a4"
						}`}
					>
						{plan.popular && (
							<div className="text-2 font-semibold text-center mb-4">
								<span className="bg-blue-3 text-blue-12 px-3 py-1 rounded-full">
									Most Popular
								</span>
							</div>
						)}
						<div className="text-7 font-bold text-gray-12 mb-2">{plan.name}</div>
						<div className="text-9 font-bold text-gray-12 mb-1">
							{plan.price}
						</div>
						<div className="text-3 text-gray-10 mb-8">{plan.period}</div>

						<ul className="space-y-4 mb-8">
							{plan.features.map((feature, index) => (
								<li key={index} className="flex items-start">
									<span className="text-green-11 mr-2">✓</span>
									<span className="text-3 text-gray-11">{feature}</span>
								</li>
							))}
						</ul>

						<Link href="/checkout" className="block">
							<Button
								variant={plan.popular ? "classic" : "ghost"}
								className="w-full"
								size="4"
							>
								Get Started
							</Button>
						</Link>
					</div>
				))}
			</div>

			<div className="mt-16 text-center">
				<p className="text-3 text-gray-10 mb-4">
					All plans include 14-day free trial. No credit card required.
				</p>
				<Link href="/docs" className="text-3 text-blue-10 hover:text-blue-9">
					Compare features →
				</Link>
			</div>
		</div>
	);
}

