# Deploy ChargePilot

Your ChargePilot app is ready to deploy. Follow these steps to get it live.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Create a new repository on GitHub**
   ```bash
   # Create a new repo on github.com
   # Then connect it:
   git remote add origin https://github.com/YOUR_USERNAME/chargepilot.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Add environment variables (see below)
   - Click "Deploy"

### Option 2: Deploy from CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, add environment variables when asked
```

## 🔑 Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

### Whop Variables
```
WHOP_API_KEY=5x7UTuoiXb9lJU1y7vvIfovAarwrqTMzgoCH77QUAQ8
NEXT_PUBLIC_WHOP_APP_ID=app_IyX9IJDigpEk6U
NEXT_PUBLIC_WHOP_AGENT_USER_ID=user_iVaFuVg5fVfq7
NEXT_PUBLIC_WHOP_COMPANY_ID=biz_ePGgm7egLUNIjO
WHOP_WEBHOOK_SECRET=your_webhook_secret_here
```

### Stripe Variables
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
STRIPE_SECRET_KEY=sk_live_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

## 📍 Update Whop App Settings

After deployment:

1. Go to https://whop.com/dashboard/developer/
2. Open your app settings
3. Update **Base URL**: `https://your-app.vercel.app`
4. Set paths:
   - **App path**: `/experiences/[experienceId]`
   - **Dashboard path**: `/dashboard/[companyId]`
   - **Discover path**: `/discover`

## 🔗 Set Up Webhooks

### Whop Webhooks
1. Go to Whop Dashboard → Developers → Your App
2. Add webhook endpoint: `https://your-app.vercel.app/api/webhooks`
3. Enable events: invoices, payments, subscriptions

### Stripe Webhooks
1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://your-app.vercel.app/api/stripe-webhook`
3. Select events:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `charge.refunded`
4. Copy webhook secret to Vercel environment variables

## ✅ After Deployment

1. **Test your app**
   - Visit your deployed URL
   - Test authentication
   - Try checkout flow with test cards

2. **Monitor logs**
   - Check Vercel function logs
   - Monitor Stripe Dashboard
   - Check Whop Dashboard

3. **Update DNS** (if using custom domain)
   - Add domain in Vercel
   - Update DNS records

## 🧪 Testing

### Test Stripe Payments
- Use test card: `4242 4242 4242 4242`
- Expiry: Any future date
- CVC: Any 3 digits

### Test Whop Integration
- Install app in a Whop
- Navigate to your app pages
- Verify authentication works

## 📊 Analytics

Consider adding:
- Google Analytics
- Vercel Analytics
- Stripe Dashboard
- Custom analytics

## 🐛 Troubleshooting

**Deployment fails?**
- Check environment variables are set correctly
- Verify all secrets in Vercel dashboard
- Check build logs in Vercel

**Webhooks not working?**
- Verify URLs in Stripe/Whop dashboards
- Check webhook secret is correct
- Review function logs in Vercel

**Need help?**
- Check Vercel docs: https://vercel.com/docs
- Stripe docs: https://stripe.com/docs
- Whop docs: https://dev.whop.com

## 🎉 Success!

Your ChargePilot app is now live and ready to process real payments!

