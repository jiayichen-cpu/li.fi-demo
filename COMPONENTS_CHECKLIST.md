# Components Adaptation Checklist

## ✅ Completed Adaptations

### 1. **Global Styles** (`app/globals.css`)
- ✅ Tailwind CSS configuration
- ✅ Dark mode support
- ✅ CSS variables for theming
- ✅ Shimmer animation for gradient text
- ✅ Base layer styles

### 2. **UI Components** (`components/ui/`)
- ✅ **Card** (`card.tsx`) - Exact match with old repo
  - Card, CardHeader, CardTitle, CardContent, CardFooter
  - All styling classes preserved
  
- ✅ **Accordion** (`accordion.tsx`) - Exact match with old repo
  - Accordion, AccordionItem, AccordionTrigger, AccordionContent
  - Radix UI primitives with proper styling
  
- ✅ **Button** (`button.tsx`) - Exact match with old repo
  - All variants (default, destructive, outline, secondary, ghost, link)
  - All sizes (default, sm, lg, icon variants)
  - Class variance authority setup

### 3. **Feature Components**
- ✅ **HeroSection** (`components/HeroSection.tsx`)
  - Gradient background matching old repo
  - Logo and language switcher header
  - Title with shimmer animation effect
  - Responsive grid layout
  
- ✅ **DailyRewards** (`components/DailyRewards.tsx`)
  - Card styling matching EventDetails from old repo
  - Dark mode support (#111111 background)
  - Hover effects and transitions
  - Proper spacing and typography
  
- ✅ **TeamLeaderboard** (`components/TeamLeaderboard.tsx`)
  - Matching card styling
  - List formatting with proper markers
  - Dark mode support
  
- ✅ **HowToParticipate** (`components/HowToParticipate.tsx`)
  - Divided sections matching old repo style
  - Hover effects on each step
  - Proper spacing and typography
  
- ✅ **FAQ** (`components/FAQ.tsx`)
  - Accordion implementation matching old repo
  - Proper styling for triggers and content
  - Dark mode support
  - 6 FAQ items with proper formatting

- ✅ **LanguageSwitcher** (`components/LanguageSwitcher.tsx`)
  - Button styling matching old repo
  - Globe icon from lucide-react
  - Proper hover states

### 4. **Layout & Typography**
- ✅ **Main Page** (`app/page.tsx`)
  - Background colors matching old repo (#F5F5F7 / #000000)
  - Grid layout (12 columns, 4/8 split)
  - Responsive ordering (order-2 lg:order-1)
  - Proper spacing (gap-8, space-y-6)
  
- ✅ **Root Layout** (`app/layout.tsx`)
  - Font configuration (Geist, Geist Mono, Noto Sans SC)
  - LanguageProvider wrapper
  - Metadata configuration

### 5. **Utilities**
- ✅ **Utils** (`lib/utils.ts`)
  - `cn()` function for className merging
  - clsx and tailwind-merge integration

### 6. **Styling Conventions**
- ✅ Card styling: `border-0 shadow-sm dark:shadow-none dark:bg-[#111111] dark:border dark:border-white/10 overflow-hidden rounded-2xl`
- ✅ CardHeader: `border-slate-100 dark:border-white/5 bg-white dark:bg-transparent px-8 pt-2`
- ✅ CardTitle: `text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white`
- ✅ Text sizes: `text-[13px]`, `text-sm`, `text-base`
- ✅ Colors: `text-slate-600 dark:text-slate-400`, `text-slate-900 dark:text-white`
- ✅ Hover effects: `hover:bg-slate-50/50 dark:hover:bg-white/[0.02]`
- ✅ Spacing: `px-8 py-4`, `space-y-4`, `gap-8`

## 📝 Notes

### Image Asset
- Logo path: `/onekey_icon_default_solid_green_black.svg`
- Ensure this file exists in `public/` directory
- If missing, add a placeholder or update the path

### All Components Are Self-Contained
- No imports from old repository
- All styles and components are copied/adapted
- Ready for independent deployment

## ✅ Verification

All components have been:
1. ✅ Extracted from old repository
2. ✅ Adapted for new project structure
3. ✅ Styling conventions preserved
4. ✅ Dark mode support included
5. ✅ Responsive design maintained
6. ✅ Typography and spacing matched

The landing page should now render properly with all styling matching the original perps page design.


