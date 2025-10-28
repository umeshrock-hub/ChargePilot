import { Button } from "@whop/react/components";
import Link from "next/link";

export default function FAQPage() {
	const faqs = [
		{
			question: "How does ChargePilot handle recurring billing?",
			answer:
				"ChargePilot automatically creates and sends recurring invoices based on your billing cycle. You can set up monthly, quarterly, or annual billing with automatic payment processing through secure payment gateways.",
		},
		{
			question: "What payment methods are supported?",
			answer:
				"We support all major credit cards (Visa, Mastercard, American Express), bank transfers (ACH and SEPA), and digital wallets like PayPal. All payments are processed securely with PCI DSS compliance.",
		},
		{
			question: "Can I customize invoices with my branding?",
			answer:
				"Absolutely! ChargePilot offers full white-label customization. Add your logo, choose your colors, customize the invoice template, and add your company details. Professional invoices build trust with your customers.",
		},
		{
			question: "Is my data secure?",
			answer:
				"Yes, security is our top priority. All data is encrypted using AES-256 encryption, we're PCI DSS compliant, use SSL/TLS for all connections, and implement strict access controls. We never store your payment credentials - all card processing is handled by certified payment processors.",
		},
		{
			question: "Can I integrate ChargePilot with my existing systems?",
			answer:
				"Yes! ChargePilot offers a comprehensive REST API and webhooks for integration. Connect to your CRM, accounting software (QuickBooks, Xero, etc.), and business tools. We provide SDKs for popular languages and detailed documentation.",
		},
		{
			question: "What happens if a customer's payment fails?",
			answer:
				"When a payment fails, we automatically send a notification to both you and the customer. You can set up automatic retry schedules, send dunning emails, and track failed payments in your dashboard. Our smart retry logic improves collection rates.",
		},
		{
			question: "Do you offer tax calculation and compliance?",
			answer:
				"Yes, ChargePilot automatically calculates sales tax, VAT, and other taxes based on your customer's location. We support tax-exempt customers, different tax rates by product, and generate tax reports for compliance and filing.",
		},
		{
			question: "Can I use ChargePilot for international customers?",
			answer:
				"Absolutely! ChargePilot supports multi-currency billing with over 150 currencies, automatic currency conversion, and international payment methods. We handle currency exchange rates and international tax compliance.",
		},
		{
			question: "What kind of customer support do you provide?",
			answer:
				"We offer 24/7 email support for all plans, priority phone support for Professional and Enterprise plans, live chat during business hours, and a comprehensive knowledge base with video tutorials and API documentation.",
		},
		{
			question: "Is there a free trial?",
			answer:
				"Yes! All plans include a 14-day free trial with full access to all features. No credit card required. You can explore all functionality, process test transactions, and see how ChargePilot works for your business before making a commitment.",
		},
	];

	return (
		<div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
			<div className="mb-16 text-center">
				<h1 className="text-9 font-bold text-gray-12 mb-4">
					Frequently Asked Questions
				</h1>
				<p className="text-4 text-gray-10">
					Everything you need to know about ChargePilot
				</p>
			</div>

			<div className="space-y-4 mb-16">
				{faqs.map((faq, index) => (
					<details
						key={index}
						className="rounded-xl bg-gray-a2 border border-gray-a4 overflow-hidden"
					>
						<summary className="p-6 cursor-pointer list-none">
							<div className="flex justify-between items-center">
								<h3 className="text-5 font-bold text-gray-12 pr-8">
									{faq.question}
								</h3>
								<span className="text-6 text-gray-10">+</span>
							</div>
						</summary>
						<div className="px-6 pb-6 pt-0">
							<p className="text-3 text-gray-10 leading-relaxed">
								{faq.answer}
							</p>
						</div>
					</details>
				))}
			</div>

			{/* CTA Section */}
			<div className="rounded-3xl bg-gray-a2 p-12 border border-gray-a4 text-center">
				<h2 className="text-8 font-bold text-gray-12 mb-4">
					Still have questions?
				</h2>
				<p className="text-4 text-gray-10 mb-8">
					Get in touch with our support team. We're here to help.
				</p>
				<div className="flex gap-4 justify-center">
					<Link href="/contact">
						<Button variant="classic" size="4">
							Contact Support
						</Button>
					</Link>
					<Link href="/docs">
						<Button variant="ghost" size="4">
							View Documentation
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

