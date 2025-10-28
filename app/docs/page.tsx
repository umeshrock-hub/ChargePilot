import { Button } from "@whop/react/components";
import Link from "next/link";

export default function DocsPage() {
	const sections = [
		{
			title: "Getting Started",
			icon: "🚀",
			items: [
				"Quick Start Guide",
				"Account Setup",
				"Creating Your First Invoice",
				"Connecting a Payment Gateway",
			],
		},
		{
			title: "API Reference",
			icon: "🔌",
			items: [
				"Authentication",
				"Endpoints Overview",
				"Invoice Management",
				"Payment Processing",
				"Webhooks",
			],
		},
		{
			title: "Integrations",
			icon: "🔗",
			items: [
				"Stripe Integration",
				"PayPal Setup",
				"Accounting Software",
				"CRM Integration",
				"Custom Integrations",
			],
		},
		{
			title: "Guides",
			icon: "📚",
			items: [
				"Setting Up Recurring Billing",
				"Multi-Currency Configuration",
				"Tax Calculation Guide",
				"Automated Email Templates",
				"Reporting & Analytics",
			],
		},
		{
			title: "Troubleshooting",
			icon: "🛠️",
			items: [
				"Common Issues",
				"Payment Failures",
				"API Errors",
				"Webhook Delivery",
				"Support Resources",
			],
		},
		{
			title: "Security",
			icon: "🔒",
			items: [
				"Data Encryption",
				"PCI Compliance",
				"Access Controls",
				"Webhook Security",
				"Best Practices",
			],
		},
	];

	return (
		<div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="mb-12 text-center">
				<h1 className="text-9 font-bold text-gray-12 mb-4">
					ChargePilot Documentation
				</h1>
				<p className="text-4 text-gray-10">
					Everything you need to integrate and use ChargePilot
				</p>
			</div>

			{/* Quick Links */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
				{sections.map((section, index) => (
					<div
						key={index}
						className="p-6 rounded-2xl bg-gray-a2 border border-gray-a4 hover:border-gray-a6 transition-colors"
					>
						<div className="text-7 mb-4">{section.icon}</div>
						<h2 className="text-6 font-bold text-gray-12 mb-4">
							{section.title}
						</h2>
						<ul className="space-y-2">
							{section.items.map((item, itemIndex) => (
								<li key={itemIndex}>
									<a
										href="#"
										className="text-3 text-gray-10 hover:text-gray-12 transition-colors"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			{/* Popular Articles */}
			<div className="mb-12">
				<h2 className="text-7 font-bold text-gray-12 mb-6">Popular Articles</h2>
				<div className="space-y-3">
					{[
						"How to set up your first automated invoice",
						"Configuring webhooks for real-time notifications",
						"Multi-currency billing setup guide",
						"Tax calculation and compliance",
						"Integrating with QuickBooks and Xero",
					].map((article, index) => (
						<a
							key={index}
							href="#"
							className="flex items-center justify-between p-4 rounded-lg bg-gray-a2 border border-gray-a4 hover:bg-gray-a1 transition-colors"
						>
							<span className="text-4 text-gray-12">{article}</span>
							<span className="text-3 text-gray-10">→</span>
						</a>
					))}
				</div>
			</div>

			{/* API Access */}
			<div className="rounded-2xl bg-gray-a2 border border-gray-a4 p-8 mb-12">
				<h2 className="text-6 font-bold text-gray-12 mb-3">API Access</h2>
				<p className="text-3 text-gray-10 mb-6">
					Get started with our REST API to integrate ChargePilot with your
					applications.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<div className="text-2 text-gray-10 mb-2">Base URL</div>
						<div className="p-3 rounded-lg bg-gray-a1 font-mono text-3 text-gray-12">
							https://api.chargepilot.com/v1
						</div>
					</div>
					<div>
						<div className="text-2 text-gray-10 mb-2">API Key</div>
						<div className="p-3 rounded-lg bg-gray-a1 font-mono text-3 text-gray-12">
							your_api_key_here
						</div>
					</div>
				</div>
				<Button variant="classic" className="mt-6" size="3">
					Generate API Key
				</Button>
			</div>

			{/* Support */}
			<div className="rounded-3xl bg-gray-a2 p-12 border border-gray-a4 text-center">
				<h2 className="text-8 font-bold text-gray-12 mb-4">
					Need more help?
				</h2>
				<p className="text-4 text-gray-10 mb-8">
					Our support team is here to help you succeed with ChargePilot.
				</p>
				<div className="flex gap-4 justify-center">
					<Button variant="classic" size="4">
						Contact Support
					</Button>
					<Button variant="outline" size="4">
						Join Community
					</Button>
				</div>
			</div>
		</div>
	);
}

