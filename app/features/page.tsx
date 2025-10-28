import { Button } from "@whop/react/components";
import Link from "next/link";

export default function FeaturesPage() {
	const features = [
		{
			title: "Automated Invoice Generation",
			description:
				"Create and send invoices automatically based on your billing cycles. Set up recurring invoices and never miss a payment.",
			icon: "📄",
		},
		{
			title: "Real-Time Payment Tracking",
			description:
				"Track all your payments in real-time. Get instant notifications when invoices are paid and monitor outstanding balances.",
			icon: "💰",
		},
		{
			title: "Multi-Currency Support",
			description:
				"Accept payments in over 150 currencies. Automatic currency conversion with exchange rate updates.",
			icon: "🌍",
		},
		{
			title: "Smart Analytics Dashboard",
			description:
				"Visualize your revenue trends, customer lifetime value, and payment patterns with beautiful charts and reports.",
			icon: "📊",
		},
		{
			title: "Secure Payment Processing",
			description:
				"Bank-level security with PCI DSS compliance. All payment data is encrypted and stored securely.",
			icon: "🔒",
		},
		{
			title: "Customer Self-Service Portal",
			description:
				"Let customers view invoices, update payment methods, and download receipts on their own time.",
			icon: "👤",
		},
		{
			title: "API & Webhook Integration",
			description:
				"Integrate ChargePilot with your existing systems. Build custom workflows with our robust API.",
			icon: "🔌",
		},
		{
			title: "Tax Compliance",
			description:
				"Automatically calculate taxes based on location. Generate tax reports for compliance and filing.",
			icon: "📋",
		},
		{
			title: "Custom Branding",
			description:
				"White-label your invoices and customer portal with your company logo, colors, and branding.",
			icon: "🎨",
		},
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<div className="text-center mb-16">
					<h1 className="text-9 font-bold text-gray-12 mb-4">
						Powerful Features for Modern Billing
					</h1>
					<p className="text-5 text-gray-10 max-w-2xl mx-auto">
						Everything you need to streamline your billing process, collect
						payments, and grow your business.
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					{features.map((feature, index) => (
						<div
							key={index}
							className="p-6 rounded-2xl bg-gray-a2 border border-gray-a4 hover:border-gray-a6 transition-colors"
						>
							<div className="text-7 mb-4">{feature.icon}</div>
							<h3 className="text-6 font-bold text-gray-12 mb-3">
								{feature.title}
							</h3>
							<p className="text-3 text-gray-10">
								{feature.description}
							</p>
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className="text-center">
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

