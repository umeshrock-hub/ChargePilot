# ChargePilot - Smart Business Billing

A modern, professional billing application built with Next.js and Whop SDK for businesses to streamline invoicing, track payments, and manage subscriptions.

## 🚀 Features

- **Automated Invoicing** - Generate and send invoices automatically
- **Stripe Payment Integration** - Secure, PCI-compliant payment processing
- **Payment Tracking** - Real-time payment monitoring and notifications
- **Customer Portal** - Self-service portal for managing subscriptions and invoices
- **Multi-Currency Support** - Accept payments in 150+ currencies
- **Secure Transactions** - PCI DSS compliant with bank-level security
- **Webhook Integration** - Real-time event handling for billing events
- **Analytics Dashboard** - Track revenue, trends, and customer behavior
- **Professional Branding** - White-label customization for your business

## 📋 Prerequisites

- Node.js 18+ installed
- Whop Developer account
- pnpm package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd whop
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Your environment variables are already configured in `.env.local`. Your Whop credentials are ready to use:
   - `WHOP_API_KEY` - Your API key
   - `NEXT_PUBLIC_WHOP_APP_ID` - Your app ID
   - `NEXT_PUBLIC_WHOP_AGENT_USER_ID` - Your user ID
   - `NEXT_PUBLIC_WHOP_COMPANY_ID` - Your company ID
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
   - `STRIPE_SECRET_KEY` - Stripe secret key

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Open in your browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
whop/
├── app/                          # Next.js App Router
│   ├── api/
│   │   └── webhooks/
│   │       └── route.ts         # Webhook handler for billing events
│   ├── checkout/
│   │   └── page.tsx             # Checkout page
│   ├── docs/
│   │   └── page.tsx             # Documentation
│   ├── faq/
│   │   └── page.tsx             # Frequently Asked Questions
│   ├── features/
│   │   └── page.tsx             # Features showcase
│   ├── invoices/
│   │   └── page.tsx             # Invoice management
│   ├── portal/
│   │   └── page.tsx             # Customer portal
│   ├── pricing/
│   │   └── page.tsx             # Pricing plans
│   ├── layout.tsx               # Root layout with WhopApp
│   └── page.tsx                 # Home page
└── lib/
    └── whop-sdk.ts              # Whop SDK configuration
```

## 🎯 Available Routes

- `/` - Homepage with hero, features, testimonials
- `/pricing` - Pricing plans comparison
- `/checkout` - Secure checkout process
- `/portal` - Customer self-service portal
- `/invoices` - View and manage invoices
- `/features` - Detailed feature list
- `/faq` - Frequently asked questions
- `/docs` - API documentation and guides
- `/dashboard/[companyId]` - Company dashboard
- `/experiences/[experienceId]` - User experience pages

## 🔐 Authentication

The app uses Whop SDK for authentication. All pages that require authentication use:

```typescript
const { userId } = await whopsdk.verifyUserToken(await headers());
const user = await whopsdk.users.retrieve(userId);
```

## 📊 Webhooks

The webhook handler at `/api/webhooks/route.ts` supports these billing events:

- `invoice.paid` - Invoice successfully paid
- `invoice.created` - New invoice created
- `invoice.overdue` - Invoice payment overdue
- `invoice.cancelled` - Invoice cancelled
- `payment.succeeded` - Payment processed successfully
- `payment.failed` - Payment failed
- `subscription.created` - New subscription created
- `subscription.cancelled` - Subscription cancelled

## 🎨 Design System

ChargePilot uses a clean, professional, minimal design with:

- Modern glassmorphism effects
- Subtle borders and shadows
- Clean typography with hierarchy
- Professional color palette
- Responsive grid layouts

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect to Vercel
3. Environment variables are already set up
4. Deploy!

The app is production-ready with your Whop credentials configured.

## 📚 Documentation

- [Whop Developer Docs](https://dev.whop.com/introduction)
- [Whop API Reference](https://dev.whop.com/api-reference)
- [Next.js Documentation](https://nextjs.org/docs)

## 🛠️ Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## 🔧 Configuration

The app is configured with your Whop credentials. To update configuration:

1. Edit `.env.local` for environment variables
2. Update `lib/whop-sdk.ts` for SDK configuration
3. Customize pages in `app/` directory

## 💳 Payment Gateway

ChargePilot uses Stripe for secure payments. See [STRIPE_SETUP.md](./STRIPE_SETUP.md) for complete setup instructions.

**Quick Setup:**
1. Get Stripe API keys from https://stripe.com
2. Add keys to `.env.local`
3. Test with Stripe test cards
4. Deploy and switch to live keys

## 💡 Customization

### Update Branding

- Change metadata in `app/layout.tsx`
- Update colors in `tailwind.config.ts`
- Modify components in each page file

### Add New Features

1. Create new page in `app/` directory
2. Add route in navigation
3. Use Whop SDK for API calls
4. Style with Tailwind classes

## 🤝 Support

For issues and questions:

- Check the [FAQ page](/faq)
- Review the [Documentation](/docs)
- Contact Whop Support

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using [Whop](https://whop.com) and [Next.js](https://nextjs.org)
