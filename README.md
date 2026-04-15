# Finlete — Bootstrap rebuild

A static Bootstrap 5 rebuild of [finlete.com](https://finlete.com). No build step, no framework — just plain HTML, a small custom CSS file, and Bootstrap via CDN.

## Run locally

From the project root, start any static file server and open `http://localhost:8000`:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Every page is a standalone `.html` file — you can also open `index.html` directly in a browser.

## File map

```
finlete-claude/
├── index.html              # Homepage (canonical nav + footer + all section patterns)
├── athletes.html           # Roster: Available + Funded sections
├── how-it-works.html
├── about.html
├── faqs.html
├── sign-in.html            # Static auth shell (no real auth wired up)
├── contact.html
├── terms.html
├── privacy-policy.html
├── athletes/
│   ├── avila.html          # Canonical profile template
│   ├── escobar.html
│   ├── teodo.html
│   ├── padilla.html
│   ├── santos.html
│   ├── ornelas.html
│   ├── lagrange.html       # Funded (offering closed)
│   ├── garcia.html         # Funded
│   ├── bernal.html         # Funded
│   └── vargas.html         # Funded
└── assets/
    ├── css/custom.css      # Brand tokens + Bootstrap overrides
    ├── js/main.js          # Smooth scroll, mobile-nav close
    └── img/
        ├── finlete-logo.png
        ├── favicon.png
        └── clients/        # Real press logos (Yahoo Finance, LA Times, etc.)
```

## Tech stack

- **Bootstrap 5.3** (CSS + JS bundle) via jsDelivr CDN
- **Bootstrap Icons 1.11** via jsDelivr CDN
- **Google Fonts**: Archivo (titles) + Inter (body) — closest matches to the legacy site's Archivo SemiExpanded + Inter stack
- **No npm, no Sass, no build tooling.** Theme tokens are expressed as CSS custom properties that override Bootstrap's own CSS variables.

Brand palette (sampled from the legacy Next.js site, now in [`assets/css/custom.css`](assets/css/custom.css)):

| Token | Value |
| --- | --- |
| Primary green | `#32cd32` |
| Primary hover | `#37ba39` |
| Ink / near-black | `#0a0a0a` |
| Muted text | `#6b7280` |

## Shared partials

There's no build step, so the navbar and footer are copy-pasted across every page. Each page marks its own nav link with `class="nav-link active"`. If you need to change the nav or footer:

1. Edit it on `index.html` first.
2. Paste the updated markup into every other `.html` file.
3. Re-set the `active` class on the current page's nav entry.

If this becomes painful, a one-time conversion to a static-site generator (11ty, Astro, Hugo) would eliminate the duplication.

## TODOs / placeholders to swap in later

- **Athlete photos.** Every athlete image is a `placehold.co` placeholder. Replace with real photos in `assets/img/athletes/<slug>.jpg` and update the `<img src>` on each athlete's card and profile page.
- **Athlete bios.** The "Why" narrative on each profile page is generic filler copy (the Avila template's paragraph about a "mid-90s fastball"). Rewrite per athlete with real scouting notes.
- **Hero and how-it-works videos.** Currently `placehold.co` placeholder blocks. Replace with real `<video>` or embedded `<iframe>`.
- **Press logos.** The homepage shows a curated subset from `assets/img/clients/`. Swap in whichever outlets you want featured first.
- **SEC / DealMaker links.** Footer regulatory links point to generic Regulation CF / DealMaker pages. Update to each offering's specific Form C + Offering Circular as deals go live.
- **Investment CTAs.** `sign-in.html` is a static shell. "Invest now" buttons link there instead of a real funnel.
- **Related athletes on each profile.** Currently a fixed trio (Escobar / Teodo / Padilla on most pages, Avila swapped in on those three's own pages to avoid self-reference). On Santos / Ornelas / the four funded pages, the "More to back" strip still includes Escobar / Teodo / Padilla — edit per page if you want a different curation.
- **Copy on `terms.html` and `privacy-policy.html`** is a plain-language placeholder. Replace with the real legal text from the live site before going to production.

## Content sourced from the legacy repo

Where possible, copy was pulled from [grobconnolly/finlete](https://github.com/grobconnolly/finlete) (the Emmanuel Clase-specific Next.js site) and generalized for a multi-athlete context:

- Testimonials (homepage) — verbatim.
- Contact info, social links, DealMaker disclaimer language — verbatim.
- FAQs — adapted from the Clase-specific set to be athlete-agnostic.
- Fonts, color palette, press logos — copied/referenced directly.

## What's out of scope

- Real authentication or a real investment funnel.
- Scraping photos or athlete-specific content from the current Framer-hosted finlete.com.
- Analytics, GTM, cookie banners, GDPR plumbing.
- Any Sass or Bootstrap customization via a build step.
