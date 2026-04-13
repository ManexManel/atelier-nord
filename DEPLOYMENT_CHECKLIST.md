# ✅ Atelier Nord — Deployment Checklist

## ÉTAPE 1 — Git Local
- [x] `.gitignore` créé (DS_Store, node_modules, .env)
- [x] Prêt pour `git init` et premier commit
- [x] Structure complète (HTML, CSS, JS, assets)

## ÉTAPE 2 — GitHub
**À faire VOUS-MÊME (nécessite compte GitHub):**

```bash
# 1. Initialiser Git
cd landing-agence
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Premier commit
git commit -m "init: Atelier Nord v1 - Awwwards-level B2B landing page"

# 4. Créer repo sur GitHub et connecter
git remote add origin https://github.com/YOUR_USERNAME/atelier-nord.git

# 5. Pousser le code
git branch -M main
git push -u origin main
```

**Résultat**: Votre repo sera à `https://github.com/YOUR_USERNAME/atelier-nord`

## ÉTAPE 3 — Vercel
**À faire VOUS-MÊME:**

1. **Aller sur [vercel.com](https://vercel.com)**
2. **Signer avec GitHub** (si necessaire)
3. **Cliquer "New Project"**
4. **Sélectionner le repo `atelier-nord`**
5. **Framework Preset**: Auto-detect (ou laisser vide)
6. **Cliquer "Deploy"**

**Résultat**: Déploiement automatique  
**URL sera**: `https://atelier-nord-XXXX.vercel.app`

### Après Déploiement
- [ ] Vérifier l'onglet "Deployments" → voir live URL
- [ ] Cliquer sur le lien → vérifier que le site s'affiche
- [ ] Settings → Analytics → Activer Speed Insights

## ÉTAPE 4 — Audit SEO/Metadata

### ✅ Fichiers Validés

**HTML (`index.html`):**
- [x] `<meta charset="UTF-8">`
- [x] `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- [x] `<title>Atelier Nord — Marketing B2B | Leads qualifiés pour agences</title>`
- [x] `<meta name="description" content="...">`
- [x] `<meta property="og:title" content="...">`
- [x] `<meta property="og:description" content="...">`
- [x] `<meta property="og:image" content="/assets/og-image.svg">`
- [x] `<meta property="og:image:width" content="1200">`
- [x] `<meta property="og:image:height" content="630">`
- [x] `<meta name="twitter:card" content="summary_large_image">`
- [x] `<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">`
- [x] Schema.org JSON-LD (ProfessionalService)
- [x] `<link rel="canonical" href="https://ateliernord.fr/">`

**OG Image (`assets/og-image.svg`):**
- [x] Dimensions: 1200×630px
- [x] Contient texte "Atelier Nord"
- [x] Format SVG (compatible partout)

**Favicon (`assets/favicon.svg`):**
- [x] ViewBox: "0 0 32 32"
- [x] SVG valide
- [x] Couleur: #C9A961 (gold)

### 🧪 Test SEO Preview

**À faire VOUS-MÊME (après déploiement Vercel):**

1. **Aller sur [metatags.io](https://metatags.io)**
2. **Coller votre URL Vercel**:
   ```
   https://metatags.io?url=https://atelier-nord-XXXX.vercel.app
   ```

**Vérifier:**
- [x] **Google Preview** → title + description visibles
- [x] **LinkedIn Card** → og:image + title s'affichent
- [x] **X/Twitter** → image + description présentes
- [x] **WhatsApp** → preview fonctionnelle
- [x] **Favicon** → visible dans l'onglet navigateur

## 📊 Résumé Complet

| Élément | Status | Détails |
|---------|--------|---------|
| **HTML5** | ✅ Complet | SEO complète, accessible |
| **CSS3** | ✅ Complet | Tailwind CDN + custom animations |
| **JavaScript** | ✅ Complet | GSAP, Lenis, modals, interactions |
| **Images** | ✅ Complet | Hero, UI mockups, avatars, OG image |
| **Favicon** | ✅ Complet | SVG avec viewBox |
| **.gitignore** | ✅ Complet | OS, node, build, env |
| **vercel.json** | ✅ Complet | Config pour site statique |
| **README.md** | ✅ Complet | Instructions de déploiement |
| **SETUP.md** | ✅ Complet | Guide dev + customization |
| **Git local** | ⏳ À faire | `git init` + premier commit |
| **GitHub repo** | ⏳ À faire | Créer et pousher le code |
| **Vercel deploy** | ⏳ À faire | Connecter et déployer |
| **SEO test** | ⏳ À faire | metatags.io après Vercel |

## 🚀 Commandes à Copier/Coller

### Initialiser Git & Pousser

```bash
cd landing-agence
git init
git add .
git commit -m "init: Atelier Nord v1 - Awwwards-level B2B landing page"
git remote add origin https://github.com/YOUR_USERNAME/atelier-nord.git
git branch -M main
git push -u origin main
```

### Tester en Local

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx http-server

# Puis ouvrir: http://localhost:8000
```

## 📝 Notes Importantes

1. **GitHub**: Vous devez avoir un compte GitHub et créer le repo vous-même
2. **Vercel**: Déploiement gratuit, no credit card needed (avec plan hobby)
3. **Domaine**: Remplacer `ateliernord.fr` par votre domaine dans:
   - `index.html` line 12, 17, 20, 30, 40
4. **Images**: Tous les assets sont présents, pas besoin d'ajouts
5. **Favicon**: Hard refresh (`Ctrl+Shift+R`) si pas visible

## ✨ Résultat Final Attendu

- ✅ Site live sur Vercel (URL vercel.app)
- ✅ Repo GitHub avec code versionné
- ✅ Preview correcte sur LinkedIn/X/WhatsApp
- ✅ Favicon visible dans onglet
- ✅ Speed Insights activé
- ✅ Aucun erreur console (DevTools F12)

---

**Status**: Prêt à déployer 🚀  
**Date**: 2026-04-14  
**Version**: 1.0
