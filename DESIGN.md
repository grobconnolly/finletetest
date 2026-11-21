# Finlete design system

The system behind the production homepage in `redesign/`. Pages use the
token names below, never raw values.

## Files

- `redesign/index.html`, `redesign/styles.css`: the page. The folder is
  self-contained (`img/`, `fonts/`) and uses document-relative paths, so it
  works from disk and from any folder URL.
- `scripts/sync-redesign.py`: copies it to `nextjs/public/redesign` with
  absolute `/redesign/` paths, because Next.js serves the page at
  `/redesign` with no trailing slash. Run it after every change.

## The idea

A homepage for a regulated offering has two jobs: say plainly what the
product is, and send the visitor to an offering page, where the terms and
disclosures live. So the page is short (under 600 words, about seven phone
screens), leads with a player the visitor can actually buy, and shows
rather than tells: athlete cards, a three-step icon row, four short FAQs.

The visual language comes from the back of a baseball card and the term
sheet: labels and numbers in ruled rows, one typeface, no decoration.

## What the page never says

This is advertising for Regulation Crowdfunding offerings. The homepage
carries no return language of any kind:

- No "earn", "returns", "make money", "profit" or "payout".
- No multiples, no dollar outcomes, no calculator or simulator.
- No "own a share of" an athlete or his earnings.
- No perks and no investor testimonials. Those live on the offering pages.

The approved description of the product is exactly this:
**"You get a % of his future MLB earnings. If he never makes it, you get
nothing."**

## Logo

Use the real lockup only: the angled F mark plus the italic FINLETE
wordmark, as inline SVG (path data in `redesign/index.html`, extracted
from the live site; also in `nextjs/src/components/FinleteLogo.tsx`).
Wordmark `--navy` on light, `#fafafa` on dark. 24px tall in the nav, 28px
in the footer. Never redraw it or set the name in a typeface.

## Color

One green. `#44a647` is a surface color: buttons, tiles, icon tiles. Text
on it is black, not white (white fails contrast at 3.1:1; black passes at
6.4:1). Green text on white uses `green-700`.

| Token | Value | Role |
| --- | --- | --- |
| `--green-500` / `--green-600` | `#44a647` / `#3a9240` | Primary surface and its hover. Ink text on it. |
| `--green-700` | `#2f7d33` | Green text, links and icons on white (5.1:1). |
| `--green-300` | `#5ad15e` | Link hover in the announcement bar. |
| `--green-100` | `#e9f5e9` | Icon tiles. |
| `--navy` | `#1b2a39` | Logo wordmark only. |
| `--ink` / `--ink-2` / `--ink-hover` | `#0a0a0a` / `#171717` / `#262626` | Text and dark bands / card surface on dark / hover on ink buttons. |
| `--white` | `#ffffff` | Text on ink buttons, badges, text over photos. |
| `--text-muted` | `#5c5c5c` | Secondary text on white (6.7:1). |
| `--text-on-dark` / `--text-muted-on-dark` | `#f4f4f2` / `#a3a3a3` | Body and secondary text on ink. |
| `--bg` / `--bg-soft` / `--photo-bg` | `#ffffff` / `#f6f6f5` / `#e6e6e4` | Page / alternate band / behind photos. |
| `--portrait-top` / `--portrait-bottom` | `#e5e5e5` / `#f2f2f2` | The portraits' own background gradient, continued beside them. |
| `--rule` / `--rule-strong` / `--rule-on-dark` / `--border-on-dark` | `#e5e5e5` / `#d6d6d3` / `#2a2a2a` / `#5a5a5a` | Rules and borders. |
| `--track-neutral` | `#6b6b6b` | Card border on hover in the dark band. |

One shadow, on the hero card. One gradient: the portrait background
continued beside the figure in the cards. Nothing is laid over a photo
except a status badge in clear space.

## Typography

One family: **Archivo**, self-hosted as a variable font with its width
axis. Display text is expanded and heavy; everything else is normal width.
Tabular figures everywhere. Sizes are in `rem`.

| Token | Size / line height | Width / weight | Use |
| --- | --- | --- | --- |
| `--fs-display` | clamp(36px, min(4.4vw, 7.6vh), 60px) / 1 | wdth 115, 800 | Hero headline, closing band. 64px on large desktops. |
| `--fs-h2` | clamp(30px, 3.4vw, 46px) / 1.06 | wdth 112, 700 | Section headlines. |
| `--fs-h3` | 22px / 1.2 | wdth 105, 600 | Card names, step titles. |
| `--fs-stat` | 30px / 1.1 | wdth 108, 700 | Proof numbers. |
| `--fs-lead` | 19px / 1.5 | 400 | Hero line, section intros. |
| `--fs-body` | 17px / 1.55 | 400 | Body. |
| `--fs-small` | 15px / 1.5 | 400–600 | Card meta, labels, nav. |
| `--fs-micro` | 13px / 1.45 | 500 | Legal, badges. Nothing is smaller. |

Sentence case everywhere. Two-sentence headlines break between the
sentences (`.sent`).

## Spacing and shape

8-point scale `4, 8, 12, 16, 24, 32, 48, 64, 96`. Content width 1200px,
gutter 24px (16px below 600px). Sections 96px desktop, 64px mobile. Radius
4px chips, 8px buttons and small cards, 16px cards and panels, 999px pills.

## Page order

1. **Announcement bar.** One live launch, one link.
2. **Navigation.** Sticky, solid white. Offerings, How it works, Funded
   athletes, FAQs, then Sign in and "Browse offerings". Collapses to a
   menu below 960px.
3. **Hero.** Headline, the approved product line, two buttons, three proof
   numbers, one risk line. Beside it, a player card for an offering that is
   open now: name, position and club, two statistics, share price, minimum
   and a button on the left, and the whole portrait on the right. Never
   taller than one viewport on desktop, down to 520px of height. Lead with
   a player whose recent record a fan can look up without being put off.
   The portrait's gray background covers the whole card, so the photo has
   no box of its own. The photo is set to its column's width and stands on
   the bottom edge; in a short column it moves up by at most 35% of its
   width, which trims only the empty space above the cap. The column is
   capped (264px on tablets, 200px on phones) so the figure is never
   scaled into a head crop. On phones the button spans the card and the
   figure stands on it.
4. **Trust band.** Investor and press logos.
5. **Open offerings.** One card per open offering: photo, name, position
   and club, one fact, share price, minimum, one link covering the card.
   On phones the cards go horizontal (photo left) so four fit in about two
   screens. Material news, such as an injury, is stated on the card.
6. **How it works.** One mission sentence and three steps, each with an
   icon tile.
7. **Funded athletes.** The top-ranked funded athlete as a photo with a
   caption bar under it holding the green ranking tile and his name, and
   the rest as small cards. On phones the small
   cards are one swipeable row.
8. **FAQ.** Four questions, native `<details>`, all closed.
9. **Closing band.** One line, one button.
10. **Footer.** Links, one always-visible risk and regulator sentence, and
    the regulatory text from the offering pages inside a "Disclosures"
    dropdown, without the perks paragraph and with four typos corrected.

## Imagery and icons

- Black-and-white Finlete portraits with the green slash for open
  offerings. Show the **whole figure**, never a face crop: the portraits
  are tall, so they sit at the right of a 4:5 box (or fill a tall column)
  with their own background gradient continued beside them
  (`--portrait-top` to `--portrait-bottom`). Do not scale a portrait to the
  width of a square or landscape box; that is what makes it look zoomed.
- Real game photography for the funded spotlight.
- Three line icons for the steps (1.5px stroke, in a green-100 tile). No
  charts, arrows or anything else that reads as a promise of gains. Plus
  the menu toggle, the plus sign on dropdowns and social marks. No others.
- Images are WebP at display size and load eagerly, so nothing shows as an
  empty box in a capture or on a fast scroll.

## Writing

- Short. If a sentence does not help someone decide whether to open an
  offering page, cut it.
- Every ranking names its source. Statistics carry their season.
- Facts about athletes come from the team or their live Finlete profile.
- Risk is stated in the same size and voice as everything else, in the
  hero line itself.

## Responsive and accessibility rules

- No horizontal page scroll from 320px up.
- Tap targets at least 44px tall.
- The primary button is above the fold on a 320×568 phone.
- Keyboard focus is never hidden under the sticky nav. The offset is a
  `scroll-margin-top` on content, never `scroll-padding` on the page.
- Opening or closing the menu never moves the scroll position.
- Motion is limited to 150ms hover states and is off under
  `prefers-reduced-motion`.

## Analytics

The page carries Finlete's existing tags, ported from the live site and
guarded so they run only on `finlete.com`: the Consent Mode defaults and
the two defer-gate events, Google Tag Manager via Stape, Klaviyo and
PixelFlow. Every call to action has a `data-cta` name and pushes a
`cta_click` event to the data layer.
