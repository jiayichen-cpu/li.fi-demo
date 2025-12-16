# Deployment Checklist

Use this checklist before deploying to Vercel.

## Pre-Deployment

- [ ] All code is committed to Git
- [ ] `npm install` runs without errors
- [ ] `npm run build` completes successfully
- [ ] `npm run lint` passes (or warnings are acceptable)
- [ ] Local development server runs without errors (`npm run dev`)
- [ ] Production build runs locally (`npm run build && npm start`)

## Assets

- [ ] Logo file exists: `public/onekey_icon_default_solid_green_black.svg`
- [ ] All images are optimized
- [ ] No broken image references

## Configuration Files

- [ ] `package.json` has all dependencies
- [ ] `next.config.ts` is properly configured
- [ ] `tsconfig.json` is valid
- [ ] `vercel.json` exists (optional, Vercel auto-detects Next.js)
- [ ] `.gitignore` includes `.next/`, `node_modules/`, etc.

## Content

- [ ] All translations are complete (en/zh)
- [ ] No placeholder text remains
- [ ] All links are valid
- [ ] Content is reviewed and approved

## Testing

- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test on mobile devices
- [ ] Test language switching (en/zh)
- [ ] Test dark mode (if applicable)
- [ ] Test all interactive elements (FAQ accordion, etc.)

## Vercel Deployment

- [ ] Repository is connected to Vercel
- [ ] Build settings are correct (auto-detected)
- [ ] Environment variables are set (if any)
- [ ] Custom domain is configured (if applicable)
- [ ] Deployment preview works correctly

## Post-Deployment

- [ ] Site loads correctly
- [ ] All pages render properly
- [ ] No console errors
- [ ] Performance is acceptable
- [ ] Analytics are working (if configured)

## Rollback Plan

- [ ] Previous deployment is available for rollback
- [ ] Know how to rollback if issues occur
