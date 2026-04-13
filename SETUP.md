# Atelier Nord — Setup & Deployment Guide

## 🚀 Quick Start

This is a **static HTML/CSS/JS site** with:
- Vanilla JavaScript (no build system needed)
- GSAP + ScrollTrigger for animations
- Lenis for smooth scrolling
- Responsive Tailwind CSS

## 📋 Project Structure

```
landing-agence/
├── index.html          # Main page (complete SEO metadata)
├── css/
│   └── style.css       # All styles + animations
├── js/
│   └── main.js         # All interactions (GSAP, modals, etc)
├── assets/
│   ├── favicon.svg     # Site icon
│   ├── og-image.svg    # Social preview (1200x630px)
│   ├── hero-bg.png     # Hero background
│   ├── acquisition-ui.png
│   ├── nurturing-ui.png
│   ├── dashboard-ui.png
│   ├── executive-1.jpg # Testimonial avatar
│   ├── executive-2.jpg
│   └── executive-3.jpg
├── .gitignore          # Git ignore rules
├── vercel.json         # Vercel deployment config
└── SETUP.md            # This file
```

## 🔧 Local Development

Since this is a static site, no setup required:

```bash
# Option 1: Use VS Code Live Server
# Install "Live Server" extension → Right-click index.html → "Open with Live Server"

# Option 2: Use Python
python -m http.server 8000
# Visit http://localhost:8000

# Option 3: Use Node.js http-server
npx http-server
```

## 📦 Git Setup

```bash
cd landing-agence

# Initialize Git
git init

# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/atelier-nord.git

# First commit
git add .
git commit -m "init: Atelier Nord v1"

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🌐 Vercel Deployment

### Option 1: Via GitHub (Recommended)

1. **Create GitHub repo** (public)
2. **Push code** (see Git Setup above)
3. **Go to vercel.com** → Sign in with GitHub
4. **Import project** → Select `atelier-nord` repo
5. **Deploy!** → Vercel auto-detects static site

### Option 2: Via Vercel CLI

```bash
npm i -g vercel  # Install Vercel CLI (optional)
vercel           # Deploy from current directory
```

### After First Deploy

- ✅ Speed Insights (auto-enabled)
- ✅ Check Deployments tab for live URL
- ✅ Test SEO preview at [metatags.io](https://metatags.io)

## ✅ SEO Checklist

- [x] **Meta tags** in index.html:
  - og:title, og:description, og:image
  - twitter:card = summary_large_image
  - Schema.org JSON-LD (ProfessionalService)
  
- [x] **OG Image** (1200×630px):
  - `/assets/og-image.svg` ✅
  
- [x] **Favicon**:
  - `/assets/favicon.svg` with viewBox ✅
  
- [x] **Canonical URL**:
  - Points to https://ateliernord.fr/ ✅

### Test SEO Preview

```
URL: https://metatags.io?url=https://your-vercel-url.vercel.app
```

Expected results:
- ✅ Title shows in Google preview
- ✅ Description visible in LinkedIn card
- ✅ og-image.svg displays on X/Twitter
- ✅ Favicon visible in browser tab

## 🎨 Customizations

### Change Colors
Edit `css/style.css` line 4-9 (CSS variables):
```css
:root {
  --color-bg:     #030303;
  --color-accent: #C9A961;
  /* ... more colors ... */
}
```

### Change Fonts
Edit `css/style.css` line 10-13 and Google Fonts link in `index.html`

### Edit Content
- Hero: `index.html` line 185-189
- Méthode: `index.html` line 235-304
- Testimonials: `index.html` line 364-436
- FAQ: `index.html` line 460-570

## 📊 Key Features

- **Hero**: Animated H1 with serif + sans-serif typography
- **Scrollytelling**: Progressive reveal of Méthode piliers on scroll
- **Glassmorphism**: Testimonial cards with blur effect
- **Number Counters**: Auto-animating stats (47, +340%, 92%)
- **Smooth Scroll**: Lenis integration
- **Modal**: Contact form with focus trap
- **Mobile Menu**: Burger nav with animations
- **Responsive**: Mobile-first Tailwind CSS

## 🐛 Troubleshooting

### Fonts not loading
- Check Google Fonts link in `<head>`
- Verify internet connection (fonts from CDN)

### Images not displaying
- Check file extensions (.png, .jpg, .svg)
- Verify paths in HTML (no leading `./`)
- Check assets folder exists

### Animations stuttering
- GSAP + ScrollTrigger loaded from CDN
- Check browser DevTools → Network tab
- Clear cache (Ctrl+Shift+Delete)

### Favicon not showing
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check favicon.svg has viewBox attribute

## 📝 Version History

- **v1.0**: Initial launch with Awwwards-level design
  - Hero with serif/sans typography
  - Scrollytelling Méthode
  - Testimonials with glassmorphism
  - FAQ accordion
  - Number counting
  - SEO complete

## 🔗 Useful Links

- [Vercel Docs](https://vercel.com/docs)
- [GSAP Documentation](https://gsap.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [metatags.io](https://metatags.io) - Test SEO preview

---

**Last Updated**: 2026-04-14  
**Status**: Ready for production ✅
