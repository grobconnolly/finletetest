# Finlete design system (for Superdesign)

## Product context
Finlete (finlete.com) lets fans invest in professional baseball prospects. A fan buys Regulation Crowdfunding shares issued for one athlete (or a bundle of athletes). If that athlete reaches Major League Baseball, shareholders get a percentage of his future MLB earnings during a 25-year term. If he never makes it, they get nothing. Offerings run through DealMaker Securities LLC, a registered broker-dealer, member FINRA/SIPC. The athlete receives capital up front, with no debt.

Audience: baseball fans and retail investors, mostly on phones, most arriving from social and email. They must come away trusting the company (it handles money and is regulated), respecting it (it looks like a funded, serious business) and excited to back a prospect.

Jobs to be done on the homepage: (1) understand the product in one line, (2) see which offerings are open now, (3) open an offering page, where the full terms and disclosures live.

## Key pages
- **Homepage** (this design): announcement bar, sticky nav, hero with a player card for an open offering, trust band, open offerings, how it works, funded athletes, FAQ, closing band, footer with disclosures.
- **Athlete / offering pages** (next): one athlete's profile, statistics, terms, risks, and the invest button.
- **Checkout flow** (after that): invest amount, investor details, payment, confirmation, handled with DealMaker.

## HARD RULES — this is advertising for a securities offering
These are legal constraints, not style preferences. Every design must obey them.
- Never use the words or ideas "earn", "returns", "make money", "profit", "payout", "passive income", "upside", multiples (2x, 10x), projected or example dollar outcomes, or any calculator or simulator of gains. No charts or arrows that go up.
- Never say a fan "owns a share of" an athlete or of his earnings.
- No perks, rewards, investor testimonials, star ratings, user counts beyond those given, or quotes. Do not invent any of these.
- The approved product description is exactly: "You get a % of his future MLB earnings. If he never makes it, you get nothing."
- Keep every fact, number, name, team, ranking, price and minimum exactly as in the source page. Do not invent statistics, athletes, logos, press mentions, partners, awards or deadlines. Do not add countdowns or urgency ("only 3 left", "closing soon").
- Risk is stated plainly near the top: "Investing is speculative and you can lose your entire investment." Keep the legal line under the hero and the Disclosures dropdown in the footer.
- Every ranking names its source; every statistic names its season.

## Agreed homepage structure (founder-approved wireframe, November 2026)
1. Nav: logo, Athletes, How it works, Sign in, one button.
2. Hero: Christian Zazueta as proof (No. 24 prospect in baseball, Baseball America; his offering is sold out), one line saying what Finlete is, a button to the open athletes, and a strip of the four open offerings with their share prices.
3. One proof band: three numbers and the investor and press logos.
4. Athletes you can invest in: the four open offerings as cards.
5. Where the money goes: a flow diagram (fans, Finlete, athlete, MLB pay, Finlete, investors) with both endings shown at the same size.
6. Investment simulator (see the exception below).
7. For players: capital up front, no debt.
8. Stay in touch: text-message sign-up and the app download buttons.
9. FAQ, closing button, footer with the Disclosures dropdown.

## One exception to the hard rules: the investment simulator
The founder has asked for an investment simulator on the homepage. It is PENDING LEGAL SIGN-OFF and exists in designs only. It is the single place where dollar outcomes may appear, and only in this exact form:
- Title: 'Investment simulator: it's 2008'. A slider for 'Your investment' from $0 to $5,000, shown at $3,500, at $1.00 a share.
- Three real prospects from the 2008 Top 100, always shown together, in this order and with these exact figures for a $3,500 investment after Finlete's 10% management fee: Max Scherzer, No. 66 prospect in 2008, career MLB pay $360.1M, 'would have paid $113,447'. Gio Gonzalez, No. 26 prospect in 2008, career MLB pay $65.4M, 'would have paid $20,587'. Chuck Lofgren, No. 71 prospect in 2008, career MLB pay $0, 'you would have lost your $3,500'.
- The losing case is the same size and weight as the other two. Never show only the winners.
- Say 'would have paid', never 'return', 'profit', 'earn' or a multiple.
- Directly under it, at body size: 'These players are not Finlete athletes. This is an illustration using past careers. Past careers do not predict what any prospect will be paid. You can lose your entire investment.'
- How the figure is worked out, in one line: 'Each share is 1% of his MLB pay divided by 100,000. $3,500 buys 3,500 shares, which is 0.035% of his MLB pay, less a 10% management fee.'
Everywhere else on the page the hard rules above apply without exception.

## Responsive is mandatory
Every design must work on every screen from a 320px phone to a large desktop. Check each draft before it is shown:
- No sideways scrolling at any width from 320px up. Anything wider than the screen (a row of chips, a row of cards) scrolls inside its own container.
- Phones first: the nav collapses to the logo and one button; multi-column sections stack to one column; offering cards go horizontal (photo on the left) at 560px and below so four fit in about two screens.
- Tap targets at least 44px tall. Text at least 13px. No clipped or overlapping text.
- The main hero button is on the first screen of a 320x568 phone.
- Sections use 64px vertical padding and a 16px side gutter at 600px and below.

## Visual direction: night game (founder asked for bolder, less generic, November 2026)
The first draft followed the tokens so tightly that it looked plain. These extensions are allowed and expected. They use the existing fonts and colors only.
- **Ink-led page.** Hero, athletes, money flow and simulator sit on ink with off-white text. White and soft-grey bands are the contrast, not the default.
- **Type as graphics.** Archivo at its widest and heaviest for display (width 125, weight 800 to 900). Rankings and key numbers can be set as very large numerals in green, like a jersey number.
- **The brand's own marks as motifs.** The athlete portraits carry a diagonal green slash and fine diagonal hatch lines. Use the same angle for photo edges, section accents and corner tabs, and the hatch as a quiet texture behind numbers.
- **Baseball's own layouts.** Athletes as baseball cards with a nameplate. Numbers and the simulator as a scoreboard or box score in ruled cells with tabular figures. The money flow as a baseball diamond: it leaves home (fans), goes to first (Finlete), second (athlete), third (MLB), and comes home (investors).
- **Still not allowed.** New typefaces, new colors, gradients other than the portrait background, glows, glass effects, emoji, stock icons, anything that looks like a chart of gains. Risk and legal lines never get smaller or fainter than body text.

## Brand
- **Logo:** the real Finlete lockup only (angled F mark + italic FINLETE wordmark). Use the supplied Brand Asset image in every logo position. Never redraw it, never replace it with initials, an emoji, a generic mark or text alone. Navy wordmark on light surfaces, off-white on dark.
- **Voice:** short, plain, confident. Sentence case everywhere. No hype.

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


## Motion
Minimal. 150ms hover transitions on buttons, links and cards. No scroll animations, no parallax, no autoplay. Everything is off under `prefers-reduced-motion`.

## Photography
The athlete portraits are black-and-white studio photos on a light gray gradient with a hatch pattern and a green slash; the figure runs off the right edge of the photo. Always show the whole figure (cap, face, shoulders, arms), never a tight face crop, and never cover a face. Use the supplied image URLs; do not generate or substitute other people.
