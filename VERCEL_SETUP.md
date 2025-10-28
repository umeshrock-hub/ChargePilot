# Vercel Deployment Setup

## Required Environment Variables

To deploy ChargePilot to Vercel, you **must** add these environment variables to your Vercel project **before** deploying:

### Step-by-Step Instructions

1. **Go to your Vercel project:**
   - Visit: https://vercel.com/dashboard
   - Select your ChargePilot project (or import from GitHub if you haven't yet)

2. **Navigate to Environment Variables:**
   - Click **Settings** → **Environment Variables**

3. **Add the following variables:**

#### Whop Integration (Required)
```
WHOP_API_KEY=5x7UTuoiXb9lJU1y7vvIfovAarwrqTMzgoCH77QUAQ8
NEXT_PUBLIC_WHOP_APP_ID=app_IyX9IJDigpEk6U
NEXT_PUBLIC_WHOP_AGENT_USER_ID=user_iVaFuVg5fVfq7
NEXT_PUBLIC_WHOP_COMPANY_ID=biz_ePGgm7egLUNIjO
WHOP_WEBHOOK_SECRET=your_webhook_secret_here
```

#### Stripe Integration (Required for payments)
```
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

4. **For each variable:**
   - Click "Add New"
   - Enter the **Name** (e.g., `WHOP_API_KEY`)
   - Enter the **Value** (the actual key)
   - Select environments: **Production**, **Preview**, and **Development** (check all three)
   - Click "Save"

5. **Redeploy:**
   - After adding all variables, go to **Deployments**
   - Click the three dots on the latest deployment
   - Click **Redeploy**

## Alternative: Use Vercel CLI

If you have Vercel CLI installed, you can add variables from the terminal:

```powershell
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Link your project
vercel link

# Add environment variables
vercel env add WHOP_API_KEY
vercel env add NEXT_PUBLIC_WHOP_APP_ID
vercel env add NEXT_PUBLIC_WHOP_AGENT_USER_ID
vercel env add NEXT_PUBLIC_WHOP_COMPANY_ID
vercel env add STRIPE_SECRET_KEY
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
vercel env add STRIPE_WEBHOOK_SECRET

# Deploy
vercel --prod
```

## Troubleshooting

If you still see build errors after adding environment variables:
1. Verify all variables are saved correctly in Vercel settings
2. Make sure you selected all environments (Production, Preview, Development)
3. Trigger a new deployment (redeploy from the Deployments tab)
4. Check build logs in Vercel dashboard for specific errors

## Important Notes

- ⚠️ **NEVER commit `.env.local` to GitHub** (it's already in `.gitignore`)
- ⚠️ Environment variables must be set in Vercel **before** the build runs
- ✅ The codebase now handles missing env vars gracefully during build
- ✅ Variables starting with `NEXT_PUBLIC_` are exposed to the browser
- ✅ Other variables are server-side only and secure
