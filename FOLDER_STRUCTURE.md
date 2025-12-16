# LI.FI Trading Carnival Landing Page - Directory Structure

```
lifi-carnival-landing/
├── .git/
├── .next/                    # Next.js build output (generated)
├── node_modules/             # Dependencies (generated)
├── app/
│   ├── favicon.ico
│   ├── globals.css           # Global styles with Tailwind
│   ├── layout.tsx            # Root layout with LanguageProvider
│   └── page.tsx              # Main landing page
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── DailyRewards.tsx
│   ├── FAQ.tsx
│   ├── HeroSection.tsx
│   ├── HowToParticipate.tsx
│   ├── LanguageSwitcher.tsx
│   └── TeamLeaderboard.tsx
├── lib/
│   ├── dictionary.ts         # Translation dictionary (en/zh)
│   ├── i18n.tsx              # i18n context provider
│   └── utils.ts              # Utility functions (cn helper)
├── public/
│   ├── onekey_icon_default_solid_green_black.svg
│   └── README.md
├── .eslintrc.json
├── .gitignore
├── components.json           # shadcn/ui config
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── SETUP.md
├── tsconfig.json
└── vercel.json
```


