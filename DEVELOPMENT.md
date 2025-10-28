# Local Development Guide

## 🚀 Running Locally

The app now supports running outside of Whop's iframe for local development.

### Authentication in Development

When running locally (not in Whop's iframe), the app uses mock authentication:

- **User ID**: `dev_user_id`
- **Username**: `testuser`
- **Name**: `Test User`
- **Email**: `test@example.com`

This allows you to test all pages without needing the Whop iframe.

### Starting the Server

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Testing Different Pages

- **Home**: `/`
- **Pricing**: `/pricing`
- **Features**: `/features`
- **FAQ**: `/faq`
- **Docs**: `/docs`
- **Customer Portal**: `/portal`
- **Invoices**: `/invoices`
- **Checkout**: `/checkout`

## 🎭 Mock Data

In development mode, when no Whop token is present, the app provides:

1. **Mock User** - Basic user data for development
2. **Mock Experience Data** - Sample experience information
3. **Mock Company Data** - Sample company information
4. **Mock Invoice Data** - Sample invoice list

## 🔄 Production vs Development

### Development (Local)
- Uses mock authentication
- No Whop token required
- Mock data for all pages
- Console logs for debugging

### Production (Whop)
- Requires Whop user token
- Real API calls to Whop
- Live data from your Whop app
- No console logs

## 🐛 Troubleshooting

**"Whop user token not found" error?**
- This is normal when running locally
- The app will automatically use mock authentication
- All pages will work in development mode

**Want to test with real Whop data?**
- Deploy to a staging environment
- Access through Whop's iframe
- Use the whop-proxy for local testing (if needed)

## 📝 Notes

- Mock authentication is only active in development mode
- Production builds require valid Whop tokens
- All mock data is clearly indicated with `dev_user_id`
- Check server console for development mode messages

