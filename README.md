# E.S.I. Website

> **Entrepreneur & Startup Incubator** - Remote student startup incubator helping founders build, launch, and grow their ventures.

## 🚀 Overview

This is the official website for E.S.I. (Entrepreneur & Startup Incubator), a remote student startup incubator program that provides intensive mentorship, community support, and practical guidance to help student founders transform their ideas into successful ventures.

## ✨ Features

### 🎨 Dual Theme System
- **Theme 1**: Black + Red + White (Bold, high-energy, disruptive startup aesthetic)
- **Theme 2**: Grey + White + Cobalt Blue (Clean, modern, trustworthy tech aesthetic)
- Smooth animated transitions between themes
- Theme preference saved to localStorage

### 📱 Responsive Design
- Mobile-first responsive design
- Optimized for desktop, tablet, and mobile
- Accessible components with AA contrast compliance
- Keyboard navigation support

### 🔍 SEO Optimized
- Comprehensive meta tags and Open Graph support
- JSON-LD structured data for search engines
- Automatically generated sitemap and robots.txt
- Optimized for both Google and LLM scrapers

### 📄 Complete Page Structure
- **Home**: Hero section, features, testimonials, partners
- **About**: Founder profiles and company history
- **Program**: 60-day structure and benefits
- **Founders**: Alumni showcase with project highlights
- **Speakers**: Expert mentor profiles
- **Hackathons**: Competition wins and achievements
- **Partners**: Organization partnerships
- **Apply**: Application process and criteria
- **Resources**: Press coverage and updates
- **Contact**: Team information and contact form
- **404**: Custom error page

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **SEO**: next-seo, next-sitemap
- **Package Manager**: Bun
- **Deployment**: Netlify

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+
- Bun (recommended) or npm

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd esi-website

# Install dependencies
bun install

# Start development server
bun run dev
```

Visit `http://localhost:3000` to see the website.

### Available Scripts
```bash
bun run dev          # Start development server
bun run build        # Build for production
bun run start        # Start production server
bun run lint         # Run TypeScript and ESLint checks
bun run format       # Format code with Biome
```

## 🎯 Key CTAs & Links

The website includes these critical call-to-action links:

- **Apply**: https://forms.gle/K8eJKTutyrdXeJFM6
- **Discord**: https://discord.gg/5RK2MYTSw3
- **Instagram**: https://www.instagram.com/foundersclubesi/?hl=en
- **LinkedIn**: https://www.linkedin.com/company/entrepreneur-startup-incubator/

## 📊 Program Highlights

- **Format**: 100% remote with regional meetups
- **Schedule**: Daily 7-9 PM PT sessions
- **Duration**: 60-day intensive program
- **Cohort Size**: 30+ founders per cohort
- **Benefits**: Expert mentorship, $100 tool credit, community support
- **Success**: Y Combinator AI Hackathon winners (August 9, 2025)

## 🏗 Project Structure

```
esi-website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/
│   │   ├── apply/
│   │   ├── contact/
│   │   ├── founders/
│   │   ├── hackathons/
│   │   ├── partners/
│   │   ├── program/
│   │   ├── resources/
│   │   ├── speakers/
│   │   ├── layout.tsx       # Root layout with SEO
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   │   ├── Header.tsx       # Navigation with theme toggle
│   │   ├── Footer.tsx       # Site footer
│   │   ├── HackathonBanner.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ui/              # shadcn/ui components
│   └── lib/
│       └── utils.ts
├── public/                  # Static assets
│   ├── humans.txt          # Team information for scrapers
│   ├── ai.txt              # AI/LLM scraper information
│   └── manifest.json       # PWA manifest
├── next-sitemap.config.js   # Sitemap configuration
├── netlify.toml            # Netlify deployment config
├── DEPLOY.md               # Deployment instructions
└── package.json
```

## 🎨 Theme System

### Theme 1: Black + Red + White
```css
--background: #000000
--primary: #E50914 (Deep red)
--foreground: #FFFFFF
--muted-foreground: #CCCCCC
```

### Theme 2: Grey + White + Cobalt Blue
```css
--background: #F5F5F5 (Light grey)
--primary: #0047AB (Cobalt blue)
--foreground: #1C1C1C (Dark grey)
--muted-foreground: #666666
```

## 📝 Content Management

### Key Content Areas
- **Founder Profiles**: 10 alumni with project descriptions
- **Speaker Profiles**: 8 expert mentors with specialties
- **Hackathon Wins**: Y Combinator + 7 other competitions
- **Partner Organizations**: 5 strategic partnerships
- **Program Structure**: Weekly progression and benefits

### Content Updates
Most content is stored in component files as constants, making it easy to update without database dependencies.

## 🔧 Customization

### Adding New Pages
1. Create new folder in `src/app/`
2. Add `page.tsx` with content and metadata
3. Update navigation in `Header.tsx`
4. Add to sitemap configuration

### Modifying Themes
1. Update CSS variables in `globals.css`
2. Modify theme classes (.theme1, .theme2)
3. Test contrast ratios for accessibility

### Adding Components
```bash
# Add shadcn/ui components
bunx shadcn@latest add -y -o [component-name]
```

## 📈 SEO & Analytics

### Included SEO Features
- **Meta Tags**: Comprehensive title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Organization, Website, Event schemas
- **Sitemap**: Auto-generated with custom priorities
- **Robots.txt**: Search engine crawling instructions

### Analytics Setup
- Ready for Google Analytics 4 integration
- Contact form submissions tracked via Netlify
- Social media traffic monitoring recommended

## 🚀 Deployment

### Netlify (Recommended)
1. Push code to GitHub repository
2. Connect repository to Netlify
3. Configure build settings:
   - **Build command**: `bun run build`
   - **Publish directory**: `.next`
4. Set environment variables
5. Configure custom domain

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

### Environment Variables
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_TELEMETRY_DISABLED=1
```

## ✅ Pre-Launch Checklist

- [ ] Update site URL in all configurations
- [ ] Add founder LinkedIn URLs
- [ ] Upload logo and og:image files
- [ ] Set up Google Search Console
- [ ] Test contact form submissions
- [ ] Verify all external links work
- [ ] Test theme switching functionality
- [ ] Run accessibility audit
- [ ] Performance optimization check
- [ ] Mobile responsiveness test

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

- **Website Issues**: Create GitHub issue
- **Program Questions**: Contact via website form
- **Technical Support**: Check deployment documentation

## 📄 License

This project is proprietary to the Entrepreneur & Startup Incubator (E.S.I.).

## 🙏 Acknowledgments

- **Team**: Iman Yael Schaefer, Alex Aghili, Ashley Kim, Bee Schaefer
- **Design System**: shadcn/ui components
- **Framework**: Next.js team
- **Deployment**: Netlify platform

---

**E.S.I.** - Transforming student ideas into successful ventures through community, mentorship, and accountability.

Visit us at: [Website] | [Discord](https://discord.gg/5RK2MYTSw3) | [Instagram](https://www.instagram.com/foundersclubesi/?hl=en) | [LinkedIn](https://www.linkedin.com/company/entrepreneur-startup-incubator/)
