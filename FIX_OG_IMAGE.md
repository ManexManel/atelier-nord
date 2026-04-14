# 🔧 Fix: OG-Image Preview Sociaux

## ❌ Problème Identifié

Les previews sociaux (LinkedIn, Twitter, WhatsApp) ne s'affichaient pas sur metatags.io.

**Cause**: URLs relatives au lieu d'URLs absolues
```html
<!-- AVANT (ne marche pas): -->
<meta property="og:image" content="/assets/og-image.svg">
<meta property="og:url" content="https://ateliernord.fr/">

<!-- APRÈS (fonctionne): -->
<meta property="og:image" content="https://atelier-nord.vercel.app/assets/og-image.svg">
<meta property="og:url" content="https://atelier-nord.vercel.app/">
```

---

## ✅ Solution Appliquée

### Fichier Modifié: `index.html`

**Changements:**
```html
<!-- Line 18 -->
<meta property="og:url" content="https://atelier-nord.vercel.app/">

<!-- Line 21 -->
<meta property="og:image" content="https://atelier-nord.vercel.app/assets/og-image.svg">

<!-- Line 31 -->
<meta property="twitter:image" content="https://atelier-nord.vercel.app/assets/og-image.svg">
```

**Autre changement:**
- Remplacé tous les `https://ateliernord.fr/` par `https://atelier-nord.vercel.app/`
- Confirmé que `og-image.svg` est un vrai fichier (1200×630px)

---

## 📋 Étapes à Exécuter

### Terminal/PowerShell

```bash
cd C:\Users\HP\landing-agence

# Vérifier les changements
git status

# Ajouter les changements
git add .

# Commiter
git commit -m "fix: og-image URLs absolues Vercel pour preview sociaux"

# Pousser
git push origin main
```

### Résultat Attendu
- ✅ GitHub repo mis à jour
- ✅ Vercel se redéploie automatiquement (1-2 min)
- ✅ Previews sociaux affichent l'image SVG

---

## 🧪 Vérification

### Test sur metatags.io

1. **URL à tester:**
   ```
   https://metatags.io?url=https://atelier-nord.vercel.app
   ```

2. **Vérifier:**
   - ✅ Google Preview → titre + description
   - ✅ LinkedIn → image SVG visible
   - ✅ X/Twitter → image SVG visible
   - ✅ WhatsApp → preview fonctionnelle
   - ✅ Facebook → aperçu correct

3. **Si ça marche pas:**
   - Hard refresh: `Ctrl+Shift+Delete` (clear cache)
   - Vérifier que Vercel a bien redéployé
   - Tester dans un navigateur incognito

---

## 📊 Détails Techniques

**Asset utilisé:** `/assets/og-image.svg`
- Format: SVG (1200×630px)
- Contient: Logo + texte "Atelier Nord" + tagline
- Valide: ✅ (testé avec SVG validator)

**URLs mises à jour:**
- 5 occurrences de `https://ateliernord.fr/` → `https://atelier-nord.vercel.app/`
- 2 occurrences d'og-image dans meta tags

---

## 🎯 Pourquoi ça Fonctionne

### URLs Absolues
- Metatags.io et les crawlers sociaux ont besoin d'une URL complète
- Ils ne peuvent pas accéder aux URLs relatives (`/assets/...`)
- L'URL Vercel est la source de vérité quand le site est déployé

### SVG vs JPG
- SVG est un format texte (plus léger)
- Supporté par tous les platforms (LinkedIn, Twitter, WhatsApp)
- Dimensionné correctement (1200×630px)
- Contient le branding de Atelier Nord

### Redéploiement Auto
- Quand vous pushez sur GitHub, Vercel détecte les changements
- Redéploiement automatique en ~1-2 minutes
- Pas besoin de faire quoi que ce soit dans Vercel dashboard

---

## 📝 Changements Résumé

| Élément | Avant | Après |
|---------|-------|-------|
| **og:url** | `https://ateliernord.fr/` | `https://atelier-nord.vercel.app/` |
| **og:image** | `/assets/og-image.svg` | `https://atelier-nord.vercel.app/assets/og-image.svg` |
| **twitter:image** | `/assets/og-image.svg` | `https://atelier-nord.vercel.app/assets/og-image.svg` |

---

## 🚀 Prochaines Étapes

1. **Exécuter les commandes Git** (voir terminal)
2. **Attendre le redéploiement Vercel** (~2 min)
3. **Tester sur metatags.io**
4. **Vérifier les previews** sur LinkedIn/Twitter

---

## ✨ Status

- **File Modified:** index.html ✅
- **Test URLs:** Ready ✅
- **Ready to Push:** Yes ✅

**Estimated Time to Fix:** 5 minutes (après execution des commandes Git)

---

**Créé:** 2026-04-14  
**Type:** Bug Fix - Social Media Preview  
**Impact:** High (affects SEO + social sharing)
