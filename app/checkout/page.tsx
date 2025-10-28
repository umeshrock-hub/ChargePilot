import { getAuthenticatedUser } from "@/lib/auth";
import CheckoutForm from "@/app/components/CheckoutForm";

export default async function CheckoutPage() {
	// Verify user authentication (or use mock in development)
	const { userId, user } = await getAuthenticatedUser();

	const amount = 149; // Professional plan price
	const planName = "Professional Plan";

	return (
		<div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="mb-8">
				<h1 className="text-8 font-bold text-gray-12 mb-2">
					Complete Your Purchase
				</h1>
				<p className="text-3 text-gray-10">
					Welcome back, {user.name || user.username}
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Order Summary */}
				<div className="lg:col-span-2 space-y-6">
					<div className="rounded-2xl bg-gray-a2 border border-gray-a4 p-6">
						<h2 className="text-6 font-bold text-gray-12 mb-4">
							Order Summary
						</h2>
						<div className="space-y-4">
							<div className="flex justify-between items-center">
								<span className="text-4 text-gray-11">{planName}</span>
								<span className="text-5 font-semibold text-gray-12">
									${amount}/mo
								</span>
							</div>
							<div className="flex justify-between items-center text-3 text-gray-10">
								<span>Billed monthly</span>
								<span>Cancel anytime</span>
							</div>
						</div>
						<div className="mt-6 pt-6 border-t border-gray-a4">
							<div className="flex justify-between items-center text-5 font-bold text-gray-12">
								<span>Total</span>
								<span>${amount}.00</span>
							</div>
						</div>
					</div>

					{/* Stripe Payment Form */}
					<div className="rounded-2xl bg-gray-a2 border border-gray-a4 p-6">
						<h2 className="text-6 font-bold text-gray-12 mb-4">
							Payment Information
						</h2>
						<CheckoutForm
							userId={userId}
							amount={amount}
							planName={planName}
						/>
					</div>
				</div>

				{/* Sidebar */}
				<div className="lg:col-span-1">
					<div className="rounded-2xl bg-gray-a2 border border-gray-a4 p-6 sticky top-6">
						<h3 className="text-5 font-bold text-gray-12 mb-4">
							Secure Checkout
						</h3>
						<ul className="space-y-3 mb-6 text-3 text-gray-10">
							<li className="flex items-start">
								<span className="text-green-11 mr-2">✓</span>
								<span>PCI DSS compliant</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-11 mr-2">✓</span>
								<span>256-bit SSL encryption</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-11 mr-2">✓</span>
								<span>Powered by Stripe</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-11 mr-2">✓</span>
								<span>Cancel anytime</span>
							</li>
						</ul>
						<div className="text-center text-2 text-gray-9">
							Your payment is secure and encrypted by Stripe
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

