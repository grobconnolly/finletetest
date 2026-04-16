# Finlete.com — Design Reference

**Source of truth:** the live [finlete.com](https://finlete.com) site, captured on 2026-04-16.
The site is built in **Framer** (`<meta name="generator" content="Framer f36d8c8">`). This folder is a complete local snapshot for use when rebuilding the site in Next.js.

> ⚠️ **Important:** the existing repo (`index.html`, `assets/css/custom.css`, etc. at the project root) is a hand-built Bootstrap clone that has diverged from the live Framer site. Treat the live site / this folder as ground truth, not the repo.

---

## Folder contents

```
design-reference/
├── README.md               ← this file
├── sitemap.xml             ← copy of https://finlete.com/sitemap.xml
├── asset-inventory.json    ← every asset URL discovered during scrape
├── html/                   ← raw HTML for every live page
├── css/                    ← inlined <style> blocks extracted per page
├── assets/framer/          ← all images + videos from framerusercontent.com
└── fonts/                  ← all font files (Framer CDN + Google Fonts)
```

---

## Pages captured (22 in sitemap → 12 real)

| Page | Route | HTML file |
|------|-------|-----------|
| Homepage | `/` | `html/index.html` |
| About | `/about` | `html/about.html` |
| Athletes (roster) | `/athletes` | `html/athletes.html` |
| Athlete landing (2026 variant) | `/athlete-landingpage-2026` | `html/athlete-landingpage-2026.html` |
| Avila (profile) | `/avila` | `html/avila.html` |
| Escobar (profile) | `/escobar` | `html/escobar.html` |
| Ornelas (profile) | `/ornelas` | `html/ornelas.html` |
| Padilla (profile) | `/padilla` | `html/padilla.html` |
| Santos (profile) | `/santos` | `html/santos.html` |
| Teodo (profile) | `/teodo` | `html/teodo.html` |
| Terms of Service | `/legal/terms-of-service` | `html/terms-of-service.html` |
| Privacy Policy | `/legal/privacy-policy` | `html/privacy-policy.html` |

The remaining 10 sitemap URLs (`/checkout-static-prototype/*`) are all **identical 39KB placeholders** — not real pages. Skip them.

Only **6 athletes** are live on the site: `avila`, `escobar`, `ornelas`, `padilla`, `santos`, `teodo`. The repo has 11; the extras (`bernal`, `garcia`, `lagrange`, `mejia`, `vargas`) are aspirational.

---

## Tech fingerprint

| Aspect | Finding |
|--------|---------|
| Framework | **Framer** (published 2026-04-16) |
| Rendering | Static HTML with inlined `<style>` blocks (no external stylesheet) |
| HTML size | Homepage = 1.26 MB; typical page = 600 KB |
| Analytics | GTM via `load.stape.finlete.com` (server-side tagging) with `gtag` consent defaults |
| Chat | Intercom widget |
| Image CDN | `framerusercontent.com` |
| Fonts | Google Fonts (`fonts.gstatic.com`) + Framer CDN (`framerusercontent.com`) |
| JS dependencies | Klaviyo, Google Maps, Framer events |

---

## Design tokens

### Colors — verified from live CSS (counts = occurrences across all pages)

**Brand greens** (pick one, standardise):

| Hex | rgb() | Uses | Role |
|------|-------|------|------|
| **`#44a647`** | rgb(68, 166, 71) | 133 | **Primary green** (Framer token `--token-5409bd11…`) |
| `#388b3e` | rgb(56, 139, 62) | 23 | Darker green (hover / border) |
| `#37b24d` | — | — | Intermediate accent |
| `#2d6832` | — | — | Deep green (rare, likely pressed) |
| `#36a93e` | — | — | **Legacy** — appears in CSS but not used as primary on the live site. This is what the repo uses. |
| `#44a64726` | rgba(68,166,71,0.15) | 32 | Green glow / radial gradient stops |

**Neutrals** (ordered by frequency):

| Hex | Uses | Role |
|------|------|------|
| `#000` | 502 | Default black (text, borders, icons) |
| `#111` | 427 | **Primary ink** (Framer token `--token-fd0bff81…`). Dark backgrounds + body text. |
| `#fff` | 350 | White / reverse text |
| `#666` | 177 | **Muted text** |
| `#999` | 77 | Placeholder / disabled |
| `#737373` | 24 | Softer muted |
| `#eee` | 22 | Light background |
| `#1b2a39` | 12 | Dark navy accent |
| `#f6f6f6`, `#f5f5f5` | 12 / 8 | Very light bg |
| `#e6e6e6` | 8 | Border / divider |
| `#333` | 11 | Secondary text (code default) |

**Miscellaneous:**
- `#09f` (89 uses) — default link blue from Framer input focus state, not a brand colour.
- `rgba(0,0,0,0.2)` — standard card shadow colour.

### Typography

**Font families** (in priority order):

1. **Archivo** — primary (795 CSS uses). ⚠️ Plain Archivo, *not* Archivo SemiExpanded (repo uses SemiExpanded — wrong).
2. **Inter** — body / forms (532 uses). Defined as the input font via `--framer-input-font-family: Inter`.
3. **Fragment Mono** — code / monospace (46 uses).
4. **Caveat** — handwritten accent (45 uses).
5. Libertinus Serif / Sans — used on legal pages only.

Framer config:
```css
--framer-font-family: "Archivo","Archivo Placeholder",sans-serif;
--framer-font-size: 14px;       /* base */
--framer-font-weight: 400;
--framer-font-weight-bold: 700;
--framer-input-font-family: "Inter";
```

**Heading scale (in pixels, not rem)** — three responsive variants `desktop / tablet / mobile`:

| Tag | Desktop | Tablet (810–1199) | Mobile (<810) |
|-----|---------|-------------------|---------------|
| h1  | **61 px** | 55 px | 49 px |
| h2  | 49 px | 44 px | 39 px |
| h3  | 39 px | 35 px | 31 px |
| h4  | 31 px | 28 px | 25 px |
| h5  | 25 px | 23 px | 20 px |
| h6  | 20 px | 18 px | 16 px |

**Body font sizes (px, top of the scale):**
`10, 12, 13, 14, 16, 18, 20, 23, 24, 25, 26, 28, 31, 32, 35, 39, 44, 49, 55, 61`

Base body = **14 px** (Framer default). **Everything is in pixels — there is no rem-based scale.** When porting to Tailwind, either extend Tailwind's `fontSize` with raw px values, or pick the closest rem equivalents and accept ±1 px drift.

**Weights in use:** 400, 500, 600, 700, 800, 900 (in order of frequency).

**Line heights:** `1.4em` (body / 237 uses), `1.2em` (headings / 169 uses), `1.6em` (long-form prose / 177 uses), `1.1em` (tight headings / 48 uses).

**Letter spacing:** `0` everywhere. Don't add any.

### Spacing scale (px only)

Seen in padding / gap declarations across the site. Use these as your Tailwind spacing scale:

| Value | Use case |
|-------|----------|
| 0 | reset |
| 4 px | hairline |
| 8 px | tight / pill padding |
| 10 px | tight gap |
| 12 px | small padding |
| 16 px | base padding / card inner padding |
| 20 px | medium gap |
| 24 px | large padding / card gap |
| 32 px | section inner gap |
| 40, 48, 56, 64 px | large section gaps |
| 104 px (`104px 20px`) | hero vertical padding |

### Border radius

| Value | Use |
|-------|-----|
| `50%` | Avatars, step-number circles |
| `6px` | Inputs |
| `8px` | Small cards, badges |
| `11–12 px` | Chips, callouts |
| `16 px` | Cards (default) |
| `20–24 px` | Large cards, hero overlays |
| `32 px` | Extra-rounded cards |
| `48 px` | Large pill |
| `240 px` | Near-circle (full pill) |

### Shadows

- **Default card shadow:** `0 2px 4px rgba(0,0,0,0.2)` (64 uses — the go-to shadow)
- **Elevated "floating" card:** multi-layer stack (6 stops, increasingly spread) — examples:

```css
/* soft, shorter */
box-shadow:
  0 0.6px 0.6px -1.25px rgba(0,0,0,0.18),
  0 2.29px 2.29px -2.5px rgba(0,0,0,0.16),
  0 10px 10px -3.75px rgba(0,0,0,0.06);

/* dramatic, long */
box-shadow:
  0 0.25px 2.21px #00000005,
  0 0.6px 5.32px #00000008,
  0 1.13px 10.02px #0000000a,
  0 2.01px 17.87px #0000000d,
  0 3.76px 33.42px #0000000f,
  0 9px 80px #00000014;
```

### Breakpoints (Framer defaults)

| Range | Tier |
|-------|------|
| `0 – 319 px` | Phone XS (bonus fallback) |
| `320 – 767 px` | **Mobile** |
| `768 – 809 px` | Tablet narrow |
| `810 – 1199 px` | **Tablet** |
| `1200 – 1439 px` | **Desktop** |
| `1440 px+` | XL desktop |

Media-query fingerprint (most used):
```css
@media (max-width:767px) and (min-width:320px) { … }  /* mobile */
@media (max-width:1199px) and (min-width:810px) { … } /* tablet */
@media (min-width:810px) and (max-width:1199.98px) { … }
@media (min-width:1200px) and (max-width:1439.98px) { … }
@media (min-width:1440px) { … }
```

### Container widths

| Max-width | Use |
|-----------|-----|
| `1200 px` | **Main page container** (66 uses) |
| `720 px` | Prose / form column |
| `840 px`, `800 px` | Narrower content columns |
| `1280 px` | Wide hero content |
| `1440 px` | Max desktop canvas |

### Z-index

Small flat stack: `-1, 0, 1, 2, 10`. No need for a complex layer system.

### Signature gradients

```css
/* Green brand gradient (rotated) */
linear-gradient(260deg, #44a647 …)
linear-gradient(159deg, #44a647 …)

/* Dark → green glow (hero ELITE panel) */
linear-gradient(231deg, #111 25%, #44a64726 100%)

/* Green radial glow on dark bg */
radial-gradient(50% 50% at 50% 50%, #44a64726 0%, #111 …)

/* Light fades (card backgrounds) */
linear-gradient(#e4e4e4 0%, #fff 72%)
linear-gradient(#e4e4e4 8%, #fff 79%)

/* Top dark mask */
linear-gradient(#000 70%, transparent 100%)
```

---

## Page composition — Homepage (`/`)

Document height: **9988 px** at 1213 px viewport. Sections top-to-bottom:

1. **Sticky header** — F logo left | `Athletes | How it works | About us | FAQs` centre | `Sign in` (pill button) right
2. **Hero** (≈850 px)
   - Active users pill (`+4k` avatars, "Active Users" label)
   - H1: "Invest in the careers of **top MLB prospects**. Earn as they do." (green brand highlight on phrase)
   - Sub: "Pick a prospect. Buy shares through an SEC registered broker dealer. If they sign an MLB contract, you earn a fixed percentage of their salary."
   - Left-border callout: "Structured athlete agreements. No loans. No equity. Transparent income-share agreements."
   - CTA: **Browse Live Offerings** (dark pill, white text)
   - Three green checks: SEC-registered broker-dealer / Regulation CF offerings / Clear, upfront, standardized terms
   - Right column: hero-stage carousel of athletes with 3 overlay stat chips + dark `ELITE ATHLETICISM` banner + comparison card. Carousel arrows bottom-right.
3. **Metric band** (1 row, 6 stats) — F icon + `Raised for athletes $832,899 | Fan investments 1024 | Average investment $1,161 | Repeat investment rate 23.3% | Athletes 13 | Minimum investment $300`
4. **Video section** — "Invest in the future of sports with Finlete" overlay on baseball-pitcher video, centre green play button
5. **How it works** — Eyebrow "How Finlete works" | H2 "Your journey to athlete investment starts here" | 3 step cards (stacked, each 2-col: text left, green-gradient visual right)
   - Step 1: **Select an athlete** — "Browse vetted rising stars and pros from across sports and pick who you believe in." CTA: Browse our athletes
   - Step 2: **Buy shares** — visual: share quantity selector (`-` `400` `+` with "Shares" label)
   - Step 3: **Track & earn returns** — visual: "Athlete earns $100M" panel on green texture
6. **Who is Finlete for?** — Eyebrow "Next big thing in sports" | 4 audience cards (For Sports Fans / Investors / Collectors / Fantasy GMs) each with themed illustration
7. **Browse our baseball roster** — Eyebrow "Athletes" | H2 | Tab toggle "Available (6) / Closed (4)" | horizontal card carousel
8. **Perks for investors** — 4 perks with illustrated cards (digital certificates, signed memorabilia, VIP experiences, personal connections)
9. **Testimonials / trust** (dark section) — Eyebrow "Trust is everything" | H2 "Backed by top investors, trusted by the community" | press logos row | scrolling testimonials
10. **FAQ** — Eyebrow "FAQs" | H2 "Got questions? We've got answers." | 10 expandable rows with `+` icons
11. **For Athletes CTA** — block with "Become a Finlete athlete" dark pill button on dotted green background
12. **Final CTA (green stadium)** — H2 "Start investing in the future of sports today" | white pill button "View our athletes" over tinted-green stadium image
13. **Footer** (dark) — F logo + tagline "Own a stake in tomorrow's champions" + X/Facebook/Instagram socials | 3 columns: **Company** (About us, Contact us) / **Product** (Athletes, How it works) / **Resources** (Terms of Service, Privacy Policy)

### Header nav — canonical order

```
Athletes   How it works   About us   FAQs           Sign in
```

(Repo currently shows `How it works | Athletes | Learn▾ | About us | Sign in` — wrong order, wrong item.)

---

## Assets

- **Images**: 93 files downloaded to `assets/framer/` (2.4 MB total). All have hash-style filenames; map them to meaningful names during the rebuild.
- **Fonts**: 71 files in `fonts/` — Archivo, Inter, Fragment Mono, Caveat, Libertinus Serif/Sans, in multiple weights and subsets.
- **Videos**: 1 MP4 (`88m6A5IQUcmdy8bYSmohDesd3g.mp4`) — the baseball pitcher hero video.
- **One failed download** — a size variant of `eFEgHg61glHLV0JLbC9tHxRbU.jpg` (URL had HTML-entity-encoded `&amp;` — other sizes of the same image are present, so this is harmless).

---

## Divergences from the current repo

| | Live site | Current repo |
|---|---|---|
| Nav items | Athletes, How it works, About us, FAQs, Sign in | How it works, Athletes, Learn▾, About us, Sign in |
| Nav item order | Athletes first | How it works first |
| Primary green | `#44a647` | `#36a93e` |
| Title font | Archivo (standard width) | Archivo **SemiExpanded** |
| Spacing unit | px (Framer native) | rem (Bootstrap-style) |
| Container max-width | 1200 px | 1320 px (Bootstrap default) |
| Footer columns | Company / Product / Resources | single row |
| Testimonials section | Present (dark) | Not in repo |
| Perks section (4 items) | Present | Not in repo |
| "For Athletes" CTA | Present (dotted-green card) | Not in repo |
| Video section | Present (after hero) | Not in repo |
| Athlete roster | 6 athletes | 11 athletes (aspirational) |
| Profile structure | Framer-generated | 14-section hand-built variant |

Any of these that you want "exactly like the current repo" rather than "exactly like the live site" need explicit direction during the Next.js rebuild.

---

## Recommended Next.js stack

Based on everything captured above:

- **Framework**: Next.js 15 (App Router, SSG — every page is static)
- **Styling**: Tailwind CSS v4, with a custom theme mapping every token above. Use pixel utilities (not rem) to match Framer exactly. Example:

  ```ts
  // tailwind.config.ts (excerpt)
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#44a647",   // primary
          dark:    "#388b3e",
          deeper:  "#2d6832",
          bright:  "#37b24d",
          legacy:  "#36a93e",  // match repo if needed
        },
        ink:     { DEFAULT: "#111", soft: "#262626" },
        muted:   { DEFAULT: "#666", soft: "#737373", ghost: "#999" },
        surface: { default: "#fff", soft: "#f6f6f6", medium: "#f5f5f5", strong: "#e6e6e6" },
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],     // NOT SemiExpanded
        body:    ['Inter', 'sans-serif'],
        mono:    ['"Fragment Mono"', 'monospace'],
        accent:  ['Caveat', 'cursive'],
      },
      fontSize: {
        // Framer headings (desktop): use clamp() for responsive
        'h1': ['61px', '1.2'], 'h2': ['49px', '1.2'], 'h3': ['39px', '1.2'],
        'h4': ['31px', '1.2'], 'h5': ['25px', '1.2'], 'h6': ['20px', '1.2'],
      },
      maxWidth: {
        container: '1200px',
        prose: '720px',
      },
      screens: {
        sm: '320px',
        md: '810px',
        lg: '1200px',
        xl: '1440px',
      },
      borderRadius: { xs: '6px', sm: '8px', md: '12px', lg: '16px', xl: '24px', pill: '240px' },
    }
  }
  ```
- **Fonts**: self-host from `/public/fonts/` (copied from this folder's `fonts/`). Use `next/font/local`.
- **Images**: `next/image` with `remotePatterns` for `framerusercontent.com` if keeping live links, or copy to `/public/` for full pixel-accurate static build.
- **Content model**: athlete profiles as MDX or JSON (10 files), everything else as React components.
- **Analytics**: preserve the GTM + consent-default script exactly as the live site has it.

---

## Open questions for the rebuild

1. **Tailwind vs. inline-CSS port?** Tailwind + token config is cleaner but needs human QA for pixel drift; inline-CSS copy of Framer's stylesheet is faster but carries Framer cruft.
2. **Dynamic athlete data or static MDX?** Six profiles today, more in future — single `[slug].tsx` with a data file is lowest overhead.
3. **Which alternative athlete landing page** — `/athlete-landingpage-2026` (currently separate) — stays, merges, or dies?
4. **Checkout prototype pages** — 10 sitemap URLs all serve the same placeholder. Keep `/checkout-*` URLs at all, or start fresh?
5. **Press logos** — live site lists several; we need the original SVGs (not the framer CDN PNG crops).

Once these are answered we can start the rebuild section-by-section, visual-diffing each against the captured screenshots in this folder.
