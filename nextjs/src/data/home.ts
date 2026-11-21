/**
 * Content for the homepage. Figures and copy come from the approved design
 * (Night game, refined) and from finlete.com/athletes, November 2026.
 * Keep wording within the hard rules in DESIGN.md: no outcome language outside
 * the simulator, no perks, no invented facts.
 */

export const LINKS = {
  home: "/",
  signIn: "https://app.finlete.com/",
  apply: "https://form.typeform.com/to/xxnLyFV0",
  allAthletes: "https://finlete.com/athletes",
  about: "https://finlete.com/about",
  contact: "mailto:info@finlete.com",
  terms: "https://finlete.com/legal/terms-of-service",
  privacy: "https://finlete.com/legal/privacy-policy",
  edgar: "https://www.sec.gov/edgar/browse/?CIK=2010670",
  brokerCheck: "https://brokercheck.finra.org/",
  x: "https://x.com/finlete",
  instagram: "https://www.instagram.com/finlete/",
  facebook: "https://www.facebook.com/FinletePro/",
  // App badges point at the web app until the store links are supplied.
  appStore: "https://apps.apple.com/us/app/finlete/id6783164775",
  googlePlay: "https://play.google.com/store/apps/details?id=com.finlete.app",
} as const;

export type Offering = {
  id: string;
  name: string;
  href: string;
  tab: "Open" | "New";
  /** Two short lines shown under the name. */
  meta: [string, string];
  note: string;
  sharePrice: string;
  minimum: string;
  cta: string;
  photo?: { src: string; width: number; height: number };
  bundle?: { big: string; cap: string };
};

export const OFFERINGS: Offering[] = [
  {
    id: "padilla",
    name: "Yairo Padilla",
    href: "/padilla",
    tab: "Open",
    meta: ["Shortstop, St. Louis Cardinals", "Switch-hitter"],
    note: "Promoted to High-A in August 2026, at 19.",
    sharePrice: "$1.08",
    minimum: "$300.24",
    cta: "View Padilla's offering",
    photo: { src: "/img/home/padilla.webp", width: 650, height: 1200 },
  },
  {
    id: "bundle",
    name: "Pitcher Bundle 1",
    href: "/pbundle1",
    tab: "New",
    meta: ["Six athletes", "in a single offering"],
    note: "Includes Christian Zazueta, the No. 23 prospect in baseball.",
    sharePrice: "$8.60",
    minimum: "$860.00",
    cta: "See the bundle",
    photo: { src: "/img/athletes/bundle-group.webp", width: 552, height: 666 },
    bundle: { big: "6 athletes", cap: "one investment" },
  },
  {
    id: "mejia",
    name: "Esteban Mejia",
    href: "/mejia",
    tab: "Open",
    meta: ["Pitcher, Baltimore Orioles", "Single-A, Orioles No. 6 prospect"],
    note: "Threw 102 mph at 18 years old.",
    sharePrice: "$0.76",
    minimum: "$300.20",
    cta: "View Mejia's offering",
    photo: { src: "/img/home/mejia.webp", width: 650, height: 1200 },
  },
  {
    id: "avila",
    name: "Luinder Avila",
    href: "/avila",
    tab: "Open",
    meta: ["Pitcher, Kansas City Royals", "Right-hander"],
    note: "Made his MLB debut in 2025, recovering from Tommy John.",
    sharePrice: "$1.46",
    minimum: "$300.76",
    cta: "View Avila's offering",
    photo: { src: "/img/home/avila.webp", width: 620, height: 1145 },
  },
];

/** "Open now" chips under the hero: name and share price. */
export const CHIPS = OFFERINGS.map((o) => ({
  id: o.id,
  label: o.name,
  price: o.sharePrice,
  href: o.href,
}));

export const SCOREBOARD: { num: string; label: string; href?: string }[] = [
  { num: "$1M+", label: "Raised for athletes" },
  { num: "1,000+", label: "Fan investments" },
  { num: "9", label: "Offerings fully funded", href: "/funded" },
];

export type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Extra class from the design: `solid` keeps the mark's detail; `tall`/`wide` size press marks. */
  variant?: "solid" | "tall" | "wide";
};

export const INVESTOR_LOGOS: Logo[] = [
  {
    src: "/img/home/draper-startup-house.webp",
    alt: "Draper Startup House Accelerator",
    width: 344,
    height: 114,
  },
  {
    src: "/img/home/north-texas-angel-network.webp",
    alt: "North Texas Angel Network",
    width: 410,
    height: 114,
    variant: "solid",
  },
];

export const PRESS_LOGOS: Logo[] = [
  { src: "/img/home/la-times.webp", alt: "Los Angeles Times", width: 503, height: 60 },
  { src: "/img/home/sportico.webp", alt: "Sportico", width: 229, height: 60 },
  { src: "/img/home/sbj.webp", alt: "Sports Business Journal", width: 355, height: 60, variant: "tall" },
  {
    src: "/img/home/fort-worth-star-telegram.webp",
    alt: "Fort Worth Star-Telegram",
    width: 626,
    height: 60,
    variant: "wide",
  },
];

/**
 * Simulator: three prospects from the 2008 Baseball America Top 100 and their
 * career MLB pay (Spotrac). Pending legal sign-off.
 */
export const SIM = {
  sharePrice: 1.0,
  min: 0,
  max: 20000,
  step: 100,
  initial: 3500,
  /** The agreement covers 1% of MLB pay, split into 100,000 shares. */
  pctPerAgreement: 0.01,
  sharesPerAgreement: 100_000,
  managementFee: 0.1,
  prospects: [
    { name: "Max Scherzer", rank: 66, careerPay: 360_149_999, careerLabel: "$360.1M" },
    { name: "Gio Gonzalez", rank: 26, careerPay: 65_356_344, careerLabel: "$65.4M" },
    { name: "Chuck Lofgren", rank: 71, careerPay: 0, careerLabel: "$0" },
  ],
} as const;

export const PLAYER_FACTS = [
  { dt: "Capital today", dd: "Fans buy shares in your offering. Finlete sends you the money." },
  { dt: "Nothing to repay", dd: "It is not a loan. If you never reach MLB, you owe nothing." },
  {
    dt: "A small % of MLB pay",
    dd: "If you make it, you share a small % of your MLB pay during the term. Each offering states its own percentage.",
  },
];

export const FAQS = [
  {
    q: "What am I buying?",
    a: "Shares issued by Finlete Funding, Inc. under Regulation Crowdfunding. Finlete holds a contract for a percentage of the athlete's pre-tax, on-field MLB income and passes it on to shareholders. Each offering's Form C describes the exact security.",
  },
  {
    q: "What if the athlete never makes it?",
    a: "You get nothing and lose your entire investment. The athlete owes nothing back. A short MLB career can also mean a loss.",
  },
  {
    q: "Can I sell my shares?",
    a: "Not easily. There is a one-year lockup, and no public market for the shares after it. Expect to hold for the full 25-year term.",
  },
  {
    q: "Can I change my mind?",
    a: "Yes. You can cancel for any reason until 48 hours before a closing, and your funds are refunded.",
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About us", href: LINKS.about },
      { label: "Contact us", href: LINKS.contact },
      { label: "For athletes", href: LINKS.apply },
    ],
  },
  {
    heading: "Product",
    links: [
      { label: "All athletes", href: "/athletes" },
      { label: "Funded deals", href: "/funded" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Sign in", href: LINKS.signIn },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Terms of Service", href: LINKS.terms },
      { label: "Privacy Policy", href: LINKS.privacy },
      { label: "SEC filings (EDGAR)", href: LINKS.edgar },
    ],
  },
];
