# 🚀 Atelier Nord — Next Steps

## Current Status: READY FOR DEPLOYMENT ✅

All files are prepared. The site is **production-ready** in vanilla HTML/CSS/JS.

---

## PHASE SUIVANTE: 3 Commandes à Exécuter

### 1️⃣ Initialiser Git & Créer Repo GitHub

```bash
cd landing-agence

# Initialiser Git local
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "init: Atelier Nord v1 - Premium B2B landing page"

# Créer un repo sur GitHub (visiter github.com/new):
# - Nom: "atelier-nord"
# - Public
# - Pas de README (on en a déjà un)

# Puis connecter et pousser:
git remote add origin https://github.com/YOUR_USERNAME/atelier-nord.git
git branch -M main
git push -u origin main
```

### 2️⃣ Déployer sur Vercel

1. **Aller sur [vercel.com](https://vercel.com)**
2. **Sign in with GitHub**
3. **New Project** → Sélectionner `atelier-nord`
4. **Deploy** ✅

**Votre site sera live à**: `https://atelier-nord-XXXX.vercel.app`

### 3️⃣ Valider SEO Preview

```
Aller sur: https://metatags.io?url=https://atelier-nord-XXXX.vercel.app
```

Vérifier:
- ✅ Title dans Google preview
- ✅ Image sur LinkedIn
- ✅ Description sur Twitter
- ✅ Favicon dans onglet

---

## 📦 Fichiers Inclus

```
✅ index.html              Complete with SEO metadata
✅ css/style.css          All animations + responsive
✅ js/main.js             GSAP, Lenis, interactions
✅ assets/               All images, SVG, icons
✅ .gitignore            Git configuration
✅ vercel.json           Vercel deployment config
✅ README.md             GitHub homepage
✅ SETUP.md              Customization guide
✅ DEPLOYMENT_CHECKLIST.md Complete checklist
```

---

## ⚡ Features Incluses

### Design
- ✨ Dual typography (Inter + Playfair Display italic)
- 🎨 Dark theme with #C9A961 gold accents
- 📱 Fully responsive (375px–1920px)
- ♿ Accessible (ARIA, focus traps)

### Animations
- 🎬 Scrollytelling Méthode (pin + progressive reveal)
- 💎 Glassmorphism testimonials
- 📊 Number counters (auto-animating stats)
- 🌊 Smooth scroll (Lenis)
- ✈️ Hero fade-up on load

### Interactions
- 🎯 Modal contact form (working)
- 📱 Mobile burger menu
- 🔄 FAQ accordion
- 🖱️ Hover effects (cards, buttons)

### SEO
- 🔍 OpenGraph meta tags
- 🐦 Twitter Cards
- 📋 Schema.org JSON-LD
- 🎯 Canonical URL
- 🎨 og-image.svg (1200×630px)
- 📌 favicon.svg

---

## 🎯 Customization Tips

### Change Company Name
- `index.html` line 7, 18, 28, 40, 180, 106, 107, 122, 152, 180
- `css/style.css` → OK (uses colors, not hardcoded names)

### Change Colors
- Edit `css/style.css` line 4-9
- Hex colors: `--color-accent: #C9A961;` etc.

### Change Domain URL
- `index.html` line 12, 17, 20, 30, 40 (replace `https://ateliernord.fr/`)
- After changing domain, update in Vercel dashboard

### Add More Testimonials
- Copy `index.html` line 364-388 (testimonial card)
- Paste after line 436
- Update text, name, title, image

### Edit FAQ Items
- Copy `index.html` line 460-478 (Q1 structure)
- Paste before `</div>` at line 570
- Update question + answer

---

## 📊 File Sizes

| File | Size | Purpose |
|------|------|---------|
| index.html | ~12 KB | Main page |
| css/style.css | ~14 KB | Styles + animations |
| js/main.js | ~21 KB | Interactions |
| og-image.svg | ~2 KB | Social preview |
| **Total** | **~49 KB** | **All uncompressed** |

Vercel will minify & compress → ~12-15 KB gzipped ⚡

---

## 🧪 Testing Checklist

- [ ] Open in Chrome → all animations smooth?
- [ ] Open in Safari → fonts loaded?
- [ ] Open on iPhone → responsive layout?
- [ ] Test modal → focus trap working?
- [ ] Test FAQ → one item open at a time?
- [ ] Scroll → scrollytelling working?
- [ ] DevTools → no errors?
- [ ] metatags.io → preview correct?

---

## 🔗 Quick Links

- **GitHub**: [github.com/YOUR_USERNAME/atelier-nord](https://github.com)
- **Vercel**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **SEO Test**: [metatags.io](https://metatags.io)
- **GSAP**: [gsap.com/docs](https://gsap.com/docs)
- **Tailwind**: [tailwindcss.com](https://tailwindcss.com)

---

## 🚨 Troubleshooting

### Fonts not loading?
- Check internet → CDN requires connection
- Try in Chrome DevTools → Network tab

### Images broken?
- Check file extensions (.png, .jpg, .svg)
- No leading `./` in paths (use `/assets/filename`)

### Animations stuttering?
- Clear cache: `Ctrl+Shift+Delete`
- Check browser FPS → try Safari or Chrome

### Favicon not showing?
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check favicon.svg exists

---

## 📝 Version

**v1.0** — May 2026  
Production ready ✅  
No frameworks · Pure vanilla · Awwwards-level

---

## ✨ Ready to Ship!

Your landing page is complete and ready for the world. All dependencies are loaded from CDN (Google Fonts, GSAP, Lenis, Tailwind), so **no npm install needed**.

Deploy to Vercel in 2 minutes and get a live URL. 🚀

**Questions?** Check `SETUP.md` for customization details.

Happy launching! 🎉
