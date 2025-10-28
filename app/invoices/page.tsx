import { Button } from "@whop/react/components";
import { getAuthenticatedUser } from "@/lib/auth";

export default async function InvoicesPage() {
	// Verify user authentication (or use mock in development)
	const { userId } = await getAuthenticatedUser();

	// Sample invoice data (in production, fetch from Whop API)
	const invoices = [
		{
			id: "INV-2024-1001",
			date: "2024-11-15",
			amount: "$149.00",
			status: "Paid",
			dueDate: "2024-11-15",
		},
		{
			id: "INV-2024-1002",
			date: "2024-10-15",
			amount: "$149.00",
			status: "Paid",
			dueDate: "2024-10-15",
		},
		{
			id: "INV-2024-1003",
			date: "2024-09-15",
			amount: "$149.00",
			status: "Paid",
			dueDate: "2024-09-15",
		},
	];

	return (
		<div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="mb-8">
				<h1 className="text-8 font-bold text-gray-12 mb-2">Invoices</h1>
				<p className="text-3 text-gray-10">
					View and download all your invoices
				</p>
			</div>

			{/* Summary Cards */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
				<div className="rounded-xl bg-gray-a2 border border-gray-a4 p-4">
					<div className="text-2 text-gray-10">Total Invoices</div>
					<div className="text-5 font-bold text-gray-12">42</div>
				</div>
				<div className="rounded-xl bg-gray-a2 border border-gray-a4 p-4">
					<div className="text-2 text-gray-10">Total Paid</div>
					<div className="text-5 font-bold text-gray-12">$6,258</div>
				</div>
				<div className="rounded-xl bg-gray-a2 border border-gray-a4 p-4">
					<div className="text-2 text-gray-10">This Month</div>
					<div className="text-5 font-bold text-gray-12">$149</div>
				</div>
				<div className="rounded-xl bg-gray-a2 border border-gray-a4 p-4">
					<div className="text-2 text-gray-10">Overdue</div>
					<div className="text-5 font-bold text-red-11">$0</div>
				</div>
			</div>

			{/* Filters */}
			<div className="mb-6 flex gap-3">
				<Button variant="classic" size="3">
					All
				</Button>
				<Button variant="outline" size="3">
					Paid
				</Button>
				<Button variant="outline" size="3">
					Pending
				</Button>
				<Button variant="outline" size="3">
					Overdue
				</Button>
			</div>

			{/* Invoices Table */}
			<div className="rounded-2xl bg-gray-a2 border border-gray-a4 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-gray-a1">
							<tr>
								<th className="px-6 py-3 text-left text-3 font-semibold text-gray-11">
									Invoice ID
								</th>
								<th className="px-6 py-3 text-left text-3 font-semibold text-gray-11">
									Date
								</th>
								<th className="px-6 py-3 text-left text-3 font-semibold text-gray-11">
									Due Date
								</th>
								<th className="px-6 py-3 text-left text-3 font-semibold text-gray-11">
									Amount
								</th>
								<th className="px-6 py-3 text-left text-3 font-semibold text-gray-11">
									Status
								</th>
								<th className="px-6 py-3 text-left text-3 font-semibold text-gray-11">
									Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{invoices.map((invoice) => (
								<tr
									key={invoice.id}
									className="border-t border-gray-a4 hover:bg-gray-a1"
								>
									<td className="px-6 py-4 text-3 text-gray-12">
										{invoice.id}
									</td>
									<td className="px-6 py-4 text-3 text-gray-11">
										{invoice.date}
									</td>
									<td className="px-6 py-4 text-3 text-gray-11">
										{invoice.dueDate}
									</td>
									<td className="px-6 py-4 text-4 font-semibold text-gray-12">
										{invoice.amount}
									</td>
									<td className="px-6 py-4">
										<span className="text-2 font-semibold text-green-11 bg-green-2 px-3 py-1 rounded-full">
											{invoice.status}
										</span>
									</td>
									<td className="px-6 py-4">
										<Button variant="ghost" size="2">
											Download
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* Pagination */}
			<div className="mt-6 flex justify-between items-center text-3 text-gray-11">
				<div>Showing 1-3 of 42 invoices</div>
				<div className="flex gap-2">
					<Button variant="outline" size="2" disabled>
						Previous
					</Button>
					<Button variant="outline" size="2">
						Next
					</Button>
				</div>
			</div>
		</div>
	);
}

