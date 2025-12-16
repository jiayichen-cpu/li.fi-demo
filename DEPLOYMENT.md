# Deployment Guide

This project is configured for standalone deployment on Vercel.

## Vercel Deployment

### Automatic Deployment

1. **Connect Repository**
   - Push your code to GitHub, GitLab, or Bitbucket
   - Import the project in Vercel dashboard
   - Vercel will auto-detect Next.js framework

2. **Build Settings** (Auto-detected)
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables**
   - No environment variables required for this static landing page
   - If needed, add them in Vercel dashboard under Settings → Environment Variables

### Manual Deployment via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Project Configuration

### Build Configuration

- **Next.js Version**: 16.0.7
- **Node Version**: 20+ (recommended)
- **Package Manager**: npm (or yarn)

### Build Output

The project builds a static Next.js application:
- Static pages are pre-rendered
- Client-side components hydrate on the client
- No server-side rendering required for this landing page

### Cache Configuration

The `next.config.ts` includes cache headers:
- Static assets: Long-term caching (1 year)
- HTML/Data routes: No caching (always fresh)

## Pre-Deployment Checklist

- [ ] All dependencies are listed in `package.json`
- [ ] `npm install` runs without errors
- [ ] `npm run build` completes successfully
- [ ] `npm run lint` passes (optional)
- [ ] Logo image exists at `public/onekey_icon_default_solid_green_black.svg`
- [ ] All environment variables are set in Vercel (if any)

## Local Testing

Before deploying, test locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm start
```

## Troubleshooting

### Build Errors

1. **TypeScript Errors**: Ensure all types are correct
2. **Missing Dependencies**: Run `npm install`
3. **Image Not Found**: Check `public/` directory for logo file

### Runtime Errors

1. **404 on Routes**: Check `next.config.ts` rewrites
2. **Styling Issues**: Verify Tailwind CSS is properly configured
3. **i18n Not Working**: Check `LanguageProvider` is wrapping the app

## Vercel-Specific Notes

- Vercel automatically detects Next.js projects
- No special configuration needed beyond `vercel.json`
- Edge functions and serverless functions are supported if needed
- Custom domains can be configured in Vercel dashboard

## Alternative Deployment Platforms

This project can also be deployed to:
- **Netlify**: Similar to Vercel, auto-detects Next.js
- **Cloudflare Pages**: Supports Next.js static exports
- **AWS Amplify**: Configure for Next.js framework
- **Railway**: Supports Next.js applications

For static export (if needed), add to `next.config.ts`:
```typescript
output: 'export'
```

## Support

For deployment issues:
1. Check Vercel build logs
2. Verify Node.js version compatibility
3. Ensure all dependencies are compatible with Next.js 16
