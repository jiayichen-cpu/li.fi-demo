# LI.FI Trading Carnival Landing Page

A standalone Next.js landing page for the OneKey × LI.FI Trading Carnival campaign.

## Features

- 🎨 Modern, responsive design matching the OneKey Perps layout
- 🌐 Multi-language support (English & Chinese)
- 📱 Mobile-first responsive layout
- 🎯 Static content sections:
  - Hero section
  - Daily rewards
  - Team leaderboard description
  - How to participate guide
  - FAQ section

## Getting Started

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm start
# or
yarn start
```

## Project Structure

```
lifi-carnival-landing/
├── app/
│   ├── layout.tsx          # Root layout with LanguageProvider
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   └── button.tsx
│   ├── HeroSection.tsx     # Hero section component
│   ├── DailyRewards.tsx   # Daily rewards section
│   ├── TeamLeaderboard.tsx # Team leaderboard section
│   ├── HowToParticipate.tsx # Participation guide
│   ├── FAQ.tsx            # FAQ accordion
│   └── LanguageSwitcher.tsx # Language toggle
├── lib/
│   ├── i18n.tsx           # Internationalization context
│   ├── dictionary.ts     # Translation dictionary
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Customization

### Updating Content

All text content is managed through the translation dictionary in `lib/dictionary.ts`. Update the `en` and `zh` objects to modify the content.

### Styling

The project uses Tailwind CSS with custom CSS variables defined in `app/globals.css`. The design follows the same conventions as the OneKey Perps page.

### Adding New Sections

1. Create a new component in `components/`
2. Add translations to `lib/dictionary.ts`
3. Import and add the component to `app/page.tsx`

## Deployment

This project is configured for standalone deployment on Vercel. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

1. **Push to Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Or use Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel login
   vercel --prod
   ```

### Configuration

- **Framework:** Next.js (auto-detected by Vercel)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Node Version:** 18+ (auto-detected)

The project includes `vercel.json` with optimized settings for Vercel deployment.

## License

Private project for OneKey × LI.FI Trading Carnival campaign.
