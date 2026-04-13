# Implementation Kickstart — Atelier Nord

---

## 1. Identité de l'agence

**Nom choisi : Atelier Nord**
> Sobre, mémorable, évoque la rigueur nordique sans être froid. 
> "Atelier" ancre l'idée de travail artisanal et sur-mesure, bien 
> adapté au positionnement B2B agence-à-agence.

**Tagline suggérée :** *Stratégie. Clarté. Résultats.*

---

## 2. Palette de couleurs

| Rôle            | Valeur HEX | Usage                                      |
|-----------------|------------|--------------------------------------------|
| Fond            | `#0A0A0A`  | Background général (presque noir)          |
| Surface         | `#141414`  | Cards, sections alternées, nav             |
| Texte principal | `#F5F5F5`  | Titres, body text                          |
| Texte secondaire| `#A0A0A0`  | Sous-titres, labels, placeholders          |
| **Accent**      | **`#C9A961`** | **Or sobre — CTA, highlights, underlines** |

**Accent choisi : `#C9A961` (or sobre)**
> Justification : L'or sobre communique le premium et la confiance 
> sans ostentation — exactement le positionnement d'une agence conseil 
> s'adressant à des pairs avertis. Le bleu marine (`#1E3A5F`) aurait 
> été trop corporate/générique dans ce secteur.

---

## 3. Typographie

- **Police unique : Satoshi** (headings + body)
- **CDN :** Fontshare — `https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap`
- Weights utilisés :
  - `400` — body, paragraphes
  - `500` — labels, nav links, sous-titres
  - `700` — headings H1/H2, CTA buttons

---

## 4. Tech Stack

| Élément       | Choix                                              |
|---------------|----------------------------------------------------|
| Markup        | HTML5 sémantique                                   |
| Styles        | Tailwind CSS v3 via CDN Play                       |
| Styles custom | `/css/style.css` (animations, variables CSS, overrides) |
| JS            | Vanilla JS (`/js/main.js`) — aucune dépendance     |
| Fonts         | Fontshare CDN (Satoshi)                            |
| Icônes        | Heroicons SVG inline (pas de lib externe)          |

**CDN Tailwind :** `<script src="https://cdn.tailwindcss.com"></script>`

---

## 5. Phases de build (ordre strict)

1. **Nav + Hero** — Logo texte, nav desktop/mobile, headline, sous-titre, CTA principal, badge de confiance
2. **Résultats / Preuves chiffrées** — 3–4 métriques clés (ex : +340% leads, 47 agences accompagnées)
3. **Témoignages** — 2–3 citations clients avec nom, poste, agence (fictifs)
4. **FAQ** — 4–5 questions accordion (objections courantes)
5. **Footer** — Mentions légales, liens, copyright Atelier Nord 2025
6. **Background dynamique** — Grain SVG subtle + gradient radial animé derrière le Hero
7. **UX fixes** — Scroll indicator, hover states, transitions, focus visible, sticky nav avec blur
8. **SEO + méta** — `<title>`, description, Open Graph, canonical, lang="fr"

---

## 6. Composants JS

| Composant        | Déclencheur                          | Comportement                                              |
|------------------|--------------------------------------|-----------------------------------------------------------|
| `Modal`          | Clic sur tout bouton `.cta-btn`      | Overlay sombre, formulaire 3 champs, fermeture Esc/outside |
| `BurgerMenu`     | Clic `#burger-btn` (mobile < 768px)  | Toggle `#mobile-nav`, aria-expanded, body scroll lock      |
| `SmoothScroll`   | Clic sur liens `href="#section-id"`  | `scrollIntoView({ behavior: 'smooth' })`                  |
| `AccordionFAQ`   | Clic sur `.faq-item` header          | Expand/collapse, une seule ouverte à la fois, animation height |

---

## 7. Conventions de nommage

### Classes CSS custom (en plus de Tailwind)
- Format : **kebab-case**, préfixe par composant
- Exemples : `.modal-overlay`, `.modal-card`, `.faq-item`, `.faq-answer`, `.hero-grain`

### IDs HTML
- Format : **kebab-case**, descriptifs et uniques
- Exemples : `#main-nav`, `#hero`, `#resultats`, `#temoignages`, `#faq`, `#footer`
- JS hooks : `#modal-overlay`, `#modal-form`, `#burger-btn`, `#mobile-nav`

### Variables CSS (dans `style.css`)
```css
:root {
  --color-bg:         #0A0A0A;
  --color-surface:    #141414;
  --color-text:       #F5F5F5;
  --color-muted:      #A0A0A0;
  --color-accent:     #C9A961;
  --font-base:        'Satoshi', sans-serif;
  --transition-base:  200ms ease;
  --radius-card:      12px;
}
```

### Fonctions JS
- Format : **camelCase**, verbe + nom
- Exemples : `openModal()`, `closeModal()`, `toggleBurger()`, `initAccordion()`, `initSmoothScroll()`

---

## 8. Formulaire Modal — Champs

| # | Label            | Type   | Attribut HTML                        | Validation       |
|---|------------------|--------|--------------------------------------|------------------|
| 1 | Votre nom        | text   | `id="field-nom"` `autocomplete="name"` | `required`     |
| 2 | Email professionnel | email | `id="field-email"` `autocomplete="email"` | `required`, pattern email |
| 3 | Nom de l'agence  | text   | `id="field-agence"` `autocomplete="organization"` | `required` |

CTA du formulaire : **"Confirmer mon appel"** (bouton accent gold)
