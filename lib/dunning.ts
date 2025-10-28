/**
 * Automated Dunning Management
 * Handles failed payment retries and customer communication
 */

export interface DunningConfig {
	maxRetries: number;
	retrySchedule: number[]; // days between retries
	notifyOnFailure: boolean;
	notifyOnSuccess: boolean;
}

export const DEFAULT_DUNNING_CONFIG: DunningConfig = {
	maxRetries: 3,
	retrySchedule: [3, 7, 14], // Retry after 3, 7, and 14 days
	notifyOnFailure: true,
	notifyOnSuccess: true,
};

export interface DunningAttempt {
	invoiceId: string;
	attemptNumber: number;
	scheduledDate: Date;
	status: "pending" | "processing" | "succeeded" | "failed";
	result?: string;
}

export async function scheduleRetry(
	invoiceId: string,
	attemptNumber: number,
	config: DunningConfig
): Promise<DunningAttempt> {
	const daysUntilRetry = config.retrySchedule[attemptNumber - 1] || 14;
	const scheduledDate = new Date();
	scheduledDate.setDate(scheduledDate.getDate() + daysUntilRetry);

	if (attemptNumber > config.maxRetries) {
		throw new Error(
			`Maximum retries (${config.maxRetries}) exceeded for invoice ${invoiceId}`
		);
	}

	// In production: Store this in your database
	console.log(
		`Scheduled retry #${attemptNumber} for invoice ${invoiceId} on ${scheduledDate.toISOString()}`
	);

	return {
		invoiceId,
		attemptNumber,
		scheduledDate,
		status: "pending",
	};
}

export async function sendDunningEmail(
	to: string,
	invoiceId: string,
	amount: number,
	attemptNumber: number
): Promise<void> {
	// In production: Use your email service (SendGrid, Mailgun, etc.)
	console.log(
		`Sending dunning email to ${to} for invoice ${invoiceId} (attempt ${attemptNumber})`
	);

	// Example email content:
	const emailContent = {
		to,
		subject: `Payment Failed - Action Required (Attempt ${attemptNumber})`,
		body: `Your payment of $${amount} for invoice ${invoiceId} has failed. 
We will automatically retry the payment. Please update your payment method to avoid service interruption.

Update payment: https://yourdomain.com/portal`,
	};

	console.log("Email content:", emailContent);
}

export async function handleFailedPayment(
	invoiceId: string,
	attemptNumber: number,
	config: DunningConfig
): Promise<void> {
	// Schedule next retry
	if (attemptNumber < config.maxRetries) {
		await scheduleRetry(invoiceId, attemptNumber + 1, config);

		// Send notification
		if (config.notifyOnFailure) {
			await sendDunningEmail(
				"customer@example.com",
				invoiceId,
				149.0,
				attemptNumber
			);
		}
	} else {
		// Max retries reached - escalate
		console.log(
			`Max retries reached for invoice ${invoiceId}. Escalating to manual review.`
		);
		// In production: Notify support team, suspend account, etc.
	}
}

