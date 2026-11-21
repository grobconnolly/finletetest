/**
 * Offering pages. Every figure here was read from the live finlete.com
 * offering pages on 19 November 2026 (terms, stats, statements, documents)
 * unless a comment says otherwise. Keep wording within DESIGN.md: the page
 * states terms and facts; it does not promise outcomes.
 */

export type StatRow = { label: string; values: (string | null)[] };

export type Athlete = {
  slug: string;
  firstName: string;
  lastName: string;
  /** Surname used in buttons: "Invest in Padilla's career". */
  shortName: string;
  status: "open" | "funded";
  badge?: "New";
  /** Month the raise closed, for funded offerings. */
  closed?: string;
  /** Data that could only be read from an older copy of the page carries its date here. */
  asOf?: string;
  /** Set on the bundle offering: the member athletes' slugs and an intro line. */
  bundle?: { members: string[]; intro: string };
  organization: string;
  /** Position written out, with the abbreviation. */
  position: string;
  positionAbbr: string;
  level: string;
  team: string;
  /** Four short facts shown as tags under the name. */
  highlights: string[];
  quote?: { text: string; who: string; outlet: string };
  offering?: {
    /** DealMaker checkout. Absent once the offering is closed. */
    cartUrl?: string;
    sharePrice: number;
    minimumInvestment?: number;
    totalShares: number;
    maximumRaise: number;
    minimumRaise: number;
    termYears: number;
    /** 100,000 shares = 1% of MLB pay (founder's rule). totalShares / 100,000. Unknown for the bundle. */
    pctOfPay?: number;
    formC: string;
    offeringCircular?: string;
    offeringCircularLabel?: string;
  };
  bio?: {
    birthdate: string; // ISO
    birthdateLabel: string;
    birthplace: string;
    bats?: string;
    throws?: string;
    height?: string;
    weight?: string;
    orgRank: string;
    top100?: string;
    acquired?: string;
    eta?: string;
  };
  stats?: { kind: "hitting" | "pitching"; columns: string[]; rows: StatRow[]; source: string };
  statement?: string[];
  photos: {
    cutout?: { src: string; width: number; height: number };
    action: { src: string; width: number; height: number; alt: string };
    head?: { src: string; width: number; height: number };
    /** "card": a small photo shown as a portrait card instead of the full-bleed hero photo. */
    heroStyle?: "card";
  };
  videos?: string[]; // YouTube ids, first is the lead
  spotlight?: { text: string; author: string; handle: string; date: string; url: string }[];
};

export type Post = NonNullable<Athlete["spotlight"]>[number];

export const PERKS = [
  {
    title: "Digital ownership",
    tier: "All investors",
    body: "Customized digital stock certificate to mark your stake in this athlete's career.",
  },
  {
    title: "Signed memorabilia",
    tier: "Invest $2,500 or more",
    body: "A baseball and a baseball card autographed by the athlete you are backing.",
  },
  {
    title: "VIP experience",
    tier: "Invest $5,000 or more",
    body: "An invitation to attend MLB Spring Training with the Finlete team.",
  },
  {
    title: "Meet the athlete",
    tier: "Invest $10,000 or more",
    body: "A one-on-one virtual meet and greet with the athlete you are backing.",
  },
];

export const PERK_RULES =
  "To receive a perk, one single investment must meet that perk's minimum. Several smaller investments that add up to the minimum do not qualify. Perks are expected to be issued when the offering closes. Fractional shares are not issued; any bonus shares round down to the nearest whole share.";

/** Answers come from finlete.com's FAQ page; two are written from this offering's terms. */
export function offeringFaqs(a: Athlete) {
  const o = a.offering;
  const term = o?.termYears ?? 25;
  const faqs = [
    {
      q: "What types of securities are being sold?",
      a: "Athlete-specific preferred stock, a class of preferred stock issued by Finlete Funding, Inc. or an athlete-specific subsidiary. The offering circular describes the exact security on sale.",
    },
    {
      q: "What is a future earnings contract?",
      a: "An agreement where one party receives capital in exchange for a percentage of the other party's future earnings. In Finlete's case, the covered earnings are salary, performance bonuses and other income paid directly by the team or league. Sponsorships, endorsements, investments and other off-the-field income are excluded.",
    },
    {
      q: "When do investors begin receiving dividends?",
      a: "Dividends are paid twice a year: within 30 days after the All-Star Game and within 30 days after the World Series. Payments begin once the athlete earns MLB income that Finlete is entitled to collect. If he never earns MLB income, nothing is paid.",
    },
    {
      q: "How long does Finlete receive earnings from the athlete?",
      a: `The agreement covers every MLB contract he signs during the ${term}-year term. Pay under those contracts counts whenever it is paid, so salary deferred past year ${term} is still collected. Contracts signed after the term are not covered. The Form C states when the term starts.`,
    },
    ...(o?.pctOfPay
      ? [
          {
            q: "How much of the athlete's earnings will I get?",
            a: `This offering covers ${formatPct(o.pctOfPay)} of his pre-tax, on-field MLB pay (${o.totalShares.toLocaleString("en-US")} shares, where 100,000 shares equal 1%). Your share is in proportion to the shares you hold, after Finlete's management fee. The Form C states the exact terms.`,
          },
        ]
      : []),
    {
      q: "What fees do I pay?",
      a: "None at checkout. You pay the share price and nothing on top: Finlete covers the broker-dealer, identity-check and anti-money-laundering costs that investors often pay elsewhere. The one charge is later, on payouts: Finlete keeps a 10% management fee from the MLB pay it collects before passing the rest to shareholders. The Form C states the exact terms.",
    },
    {
      q: "Why do athletes do these deals?",
      a: "Two reasons. Capital up front pays for better training, coaching, nutrition and recovery, which improves their odds of reaching the majors. And a committed community of investor-fans deepens the athlete's support network.",
    },
    {
      q: "How much can I invest?",
      a: "Accredited investors can invest as much as they want. If you are not accredited, your limit depends on your annual income or net worth, whichever is greater. If that figure is below $124,000, you may invest 5% of it. If both income and net worth exceed $124,000, your limit is 10%.",
    },
    {
      q: "Can I change my mind?",
      a: "Yes. You can cancel for any reason until 48 hours before a closing. If your funds are already in escrow, they are refunded. To cancel, email info@dealmakersecurities.com.",
    },
  ];
  return faqs;
}

export function formatPct(p: number) {
  return (p * 100).toFixed(3).replace(/0+$/, "").replace(/\.$/, "") + "%";
}

export const money = (n: number, cents = false) =>
  "$" +
  n.toLocaleString("en-US", {
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  });

export function ageOn(iso: string, on = new Date()) {
  const b = new Date(iso + "T00:00:00Z");
  let age = on.getUTCFullYear() - b.getUTCFullYear();
  const m = on.getUTCMonth() - b.getUTCMonth();
  if (m < 0 || (m === 0 && on.getUTCDate() < b.getUTCDate())) age--;
  return age;
}

const SEC = "https://www.sec.gov/Archives/edgar/data/2010670/";

export const ATHLETES: Athlete[] = [
  {
    slug: "padilla",
    firstName: "Yairo",
    lastName: "Padilla",
    shortName: "Padilla",
    status: "open",
    organization: "St. Louis Cardinals",
    position: "Shortstop",
    positionAbbr: "SS",
    level: "High-A",
    team: "Peoria Chiefs",
    // FanGraphs, 2026 updated report: org rank 8, ETA 2029, FV 45+. Promoted to High-A on 19 August 2026.
    highlights: ["Cardinals No. 8 prospect", "Promoted to High-A in August 2026", ".828 OPS at Single-A in 2026", "Switch-hitting shortstop"],
    quote: {
      text: "If it goes good, this is like Fernando Tatis Jr. If this goes good, this is Elly De La Cruz.",
      who: "Geoff Pontes",
      outlet: "Baseball America",
    },
    offering: {
      cartUrl: "https://cart.finlete.com/?id=3988",
      sharePrice: 1.08,
      minimumInvestment: 300.24,
      totalShares: 75_000,
      maximumRaise: 81_000,
      minimumRaise: 10_000,
      termYears: 25,
      pctOfPay: 0.0075,
      formC: SEC + "000187285626000271/xslC_X01/primary_doc.xml",
      offeringCircular: SEC + "000187285626000271/padillaformca080726.pdf",
      offeringCircularLabel: "Offering circular (Form C/A, August 2026)",
    },
    bio: {
      birthdate: "2007-06-28",
      birthdateLabel: "June 28, 2007",
      birthplace: "Dominican Republic",
      bats: "Switch",
      throws: "Right",
      height: "6'0\"",
      weight: "170 lb",
      orgRank: "No. 8 (FanGraphs, 2026)",
      top100: "Not ranked",
      acquired: "Amateur free agent (Dominican Republic), January 2024",
      eta: "2029 (FanGraphs)",
    },
    stats: {
      kind: "hitting",
      columns: ["AB", "H", "HR", "RBI", "SB", "AVG", "OPS"],
      // FanGraphs minor-league totals. 2026 combines the complex league, Single-A Palm Beach and High-A Peoria.
      rows: [
        { label: "2024 (DSL)", values: ["136", "39", "1", "17", "22", ".287", ".796"] },
        { label: "2025 (Complex)", values: ["120", "34", "0", "10", "24", ".283", ".763"] },
        { label: "2026 (A / A+)", values: ["138", "38", "5", "28", "10", ".275", ".844"] },
        { label: "Career", values: ["394", "111", "6", "55", "56", ".282", ".803"] },
      ],
      source: "FanGraphs, 19 November 2026",
    },
    statement: [
      "Some kids grow up with posters on their wall. I grew up with a glove in my hand.",
      "I'm Yairo Padilla. I'm 18 years old. I'm a shortstop in the St. Louis Cardinals organization. My dream is to hear my name called in a major league stadium one day.",
      "In the minor leagues, we compete a lot, we travel a lot, and we are grateful we are being paid to play a sport we love but the pay is not very much.",
      "That's why I'm on Finlete. The money I receive here will help me focus on baseball and be the best I can be. And if I make it, we will celebrate together. Let's go get it.",
    ],
    photos: {
      cutout: { src: "/img/home/padilla.webp", width: 650, height: 1200 },
      action: {
        src: "/img/athletes/padilla-action.webp",
        width: 1600,
        height: 1067,
        alt: "Yairo Padilla throwing across the infield in training",
      },
      head: { src: "/img/athletes/padilla-head.webp", width: 211, height: 211 },
    },
    videos: ["jW070oRZsS8", "tSTnAmB-RCE", "dLBWLnAsz4w", "Ujq_7fuw1rM", "sMOdj7BGDLs"],
    spotlight: [
      {
        text: "If you want to roster a 2024 DSL player without the buzz, it's Yairo Padilla of the Cardinals. Ranked 7th in the system for me. Highly athletic frame that is bigger than his listed 6'0\".",
        author: "Chris Clegg",
        handle: "@ChrisCleggMiLB",
        date: "January 11, 2025",
        url: "https://twitter.com/ChrisCleggMiLB/status/1878096638171873738",
      },
      {
        text: "Two #stlcards in the top 10 - C Rainiel Rodriguez and SS Yairo Padilla.",
        author: "Brian Walton",
        handle: "@B_Walton",
        date: "July 16, 2025",
        url: "https://twitter.com/B_Walton/status/1945529084164919440",
      },
      {
        text: "The FCL Cardinals scored 26 runs across their two games today, with Rainiel Rodriguez and Yairo Padilla both having incredible days. Padilla: 5-for-7, 2 3B, 5 R, 4 RBI, BB",
        author: "Kareem Haq",
        handle: "@KareemSSN",
        date: "May 13, 2025",
        url: "https://twitter.com/KareemSSN/status/1922388088333992307",
      },
      {
        text: "@MLBPipeline released their top 30 prospects for the #STLCards today. Rainiel Rodriguez, Yairo Padilla, and Leonardo Bernal join the top 10.",
        author: "Thomas Gauvain",
        handle: "@thomasgauvain",
        date: "March 4, 2025",
        url: "https://twitter.com/thomasgauvain/status/1896956719449935907",
      },
      {
        text: "Welcome to Spring Breakout, Yairo Padilla.",
        author: "Derrick Goold",
        handle: "@dgoold",
        date: "March 14, 2025",
        url: "https://twitter.com/dgoold/status/1900578087567573052",
      },
      {
        text: "1-1 today. Yairo Padilla picks up his second 2 hit day in a row, and Reiner Lopez makes his best appearance of the year.",
        author: "Redbird Farmhands",
        handle: "@RedbirdFarmhand",
        date: "June 8, 2025",
        url: "https://twitter.com/RedbirdFarmhand/status/1931521998649237608",
      },
    ],
  },
  {
    slug: "mejia",
    firstName: "Esteban",
    lastName: "Mejia",
    shortName: "Mejia",
    status: "open",
    badge: "New",
    organization: "Baltimore Orioles",
    position: "Pitcher",
    positionAbbr: "RHP",
    level: "Single-A",
    team: "Delmarva Shorebirds",
    highlights: ["102 mph at 18 years old", "Orioles No. 6 prospect", "MLB Top 100 in 2025", "67 K in 52 IP in 2025"],
    quote: {
      text: "Armed with the body, athleticism and pitch package that allow evaluators to dream big.",
      who: "Josh Norris",
      outlet: "Baseball America",
    },
    offering: {
      cartUrl: "https://cart.finlete.com/?id=4342",
      sharePrice: 0.76,
      minimumInvestment: 300.2,
      totalShares: 137_500,
      maximumRaise: 104_500,
      minimumRaise: 10_000,
      termYears: 25,
      pctOfPay: 0.01375,
      formC: SEC + "000187285626000191/xslC_X01/primary_doc.xml",
      offeringCircular: SEC + "000187285626000194/mejiaformca052026.pdf",
      offeringCircularLabel: "Offering circular (Form C/A, May 2026)",
    },
    bio: {
      birthdate: "2007-03-07",
      birthdateLabel: "March 7, 2007",
      birthplace: "Dominican Republic",
      throws: "Right",
      height: "6'3\"",
      weight: "175 lb",
      orgRank: "No. 6",
      top100: "No. 84 (2025)",
    },
    stats: {
      kind: "pitching",
      columns: ["W", "L", "ERA", "G", "IP", "SO", "WHIP"],
      rows: [
        { label: "2025", values: ["1", "4", "2.94", "14", "52.0", "67", "1.29"] },
        { label: "Career", values: ["1", "9", "3.72", "29", "94.1", "131", "1.37"] },
      ],
      source: "finlete.com, November 2026",
    },
    statement: [
      "I grew up in the Dominican Republic where baseball is everything. From the time I was a kid I knew this was my path, and I gave everything to make it happen.",
      "I pitched in the Dominican Summer League and got the chance to come stateside. Now I'm at Single-A with the Orioles organization, and I'm one of their top prospects. That means a lot to me, but I'm not satisfied. I want to get to Baltimore.",
      "Minor league ball is hard. The travel, the schedule, the pressure. It adds up. Taking care of my body and staying focused costs money that I don't always have.",
      "That's why I'm on Finlete. If you support me, I won't forget it. Every time I pitch, I'll know you're part of this.",
    ],
    photos: {
      cutout: { src: "/img/home/mejia.webp", width: 650, height: 1200 },
      action: {
        src: "/img/athletes/mejia-action.webp",
        width: 800,
        height: 800,
        alt: "Esteban Mejia mid-delivery on the mound",
      },
      head: { src: "/img/athletes/mejia-head.webp", width: 320, height: 320 },
    },
    videos: ["6_OqVGxdMd8", "j-ryR0Jk2VY", "_zPzijM9XNw", "NDqdwdm5buo", "SHeL3aMqa9Q"],
    spotlight: [
      {
        text: "Esteban Mejia's raw stuff was impressive this spring. His fastball sat 97-100 mph, maxing out at 101, while his sinker showed heavy armside run in the high 90s.",
        author: "Baseball America",
        handle: "@BaseballAmerica",
        date: "March 31, 2026",
        url: "https://twitter.com/BaseballAmerica/status/2038785856043933990",
      },
      {
        text: "Esteban Mejia (BAL) is one of the most advanced pitchers for his age. At just 18 years old, Mejia can run his heater up to 102 MPH and his slider to the low 90s as a starting pitcher.",
        author: "Nate Roper",
        handle: "@NateRoper_",
        date: "February 6, 2026",
        url: "https://twitter.com/NateRoper_/status/2019582503166910468",
      },
      {
        text: "Final line for Esteban Mejia: 4 IP, 3 H, 0 R, 1 BB, 8 K. Continued to hit 100 mph into the 4th inning.",
        author: "The Verge, an Orioles MiLB podcast",
        handle: "@TheVergePod",
        date: "April 24, 2026",
        url: "https://twitter.com/TheVergePod/status/2047470931518366145",
      },
      {
        text: "He has the ceiling to become a genuine ace. The stuff is insane.",
        author: "Alex Jensen, Prospects Live",
        handle: "@jensen_juicy",
        date: "April 6, 2026",
        url: "https://twitter.com/jensen_juicy/status/2041221011925066200",
      },
      {
        text: "RHP Esteban Mejia's first start of the year: 4.1 IP, 1 H, 3 R (1 ER), 3 BB, 6 K. Hit 100 mph a couple of times.",
        author: "The Verge, an Orioles MiLB podcast",
        handle: "@TheVergePod",
        date: "April 5, 2026",
        url: "https://twitter.com/TheVergePod/status/2040581575805468747",
      },
      {
        text: "Long levers help generate velo but also lead to inconsistent delivery. FF was very hittable today. Needs to up the strike rate from 59%.",
        author: "YGM Fantasy Baseball",
        handle: "@YGMfantasy",
        date: "August 19, 2025",
        url: "https://twitter.com/YGMfantasy/status/1957616775396540757",
      },
    ],
  },
  {
    slug: "avila",
    firstName: "Luinder",
    lastName: "Avila",
    shortName: "Avila",
    status: "open",
    organization: "Kansas City Royals",
    position: "Pitcher",
    positionAbbr: "RHP",
    level: "MLB",
    team: "Kansas City Royals",
    highlights: ["MLB debut in 2025", "Started 12 MLB games in 2026", "WBC champion in 2026", "Recovering from Tommy John surgery"],
    quote: {
      text: "Luinder Avila allowed 2 runs while setting career highs with 7 strikeouts and 6.1 innings.",
      who: "Field Level Media",
      outlet: "Reuters, July 21, 2026",
    },
    offering: {
      cartUrl: "https://cart.finlete.com/?id=3994",
      sharePrice: 1.46,
      minimumInvestment: 300.76,
      totalShares: 75_000,
      maximumRaise: 109_500,
      minimumRaise: 10_000,
      termYears: 25,
      pctOfPay: 0.0075,
      formC: SEC + "000187285626000269/xslC_X01/primary_doc.xml",
      offeringCircular: SEC + "000187285626000269/avilaformca080726.pdf",
      offeringCircularLabel: "Offering circular (Form C/A, August 2026)",
    },
    bio: {
      birthdate: "2001-08-24",
      birthdateLabel: "August 24, 2001",
      birthplace: "Venezuela",
      throws: "Right",
      height: "6'3\"",
      weight: "195 lb",
      orgRank: "No. 9",
      top100: "Not ranked",
    },
    stats: {
      kind: "pitching",
      columns: ["W", "L", "ERA", "G", "IP", "SO", "WHIP"],
      rows: [
        // The live page prints the 2025 WHIP as ".085", which cannot be right; left blank until confirmed.
        { label: "2025 (MLB)", values: ["1", "0", "1.29", "5", "7.0", "8", null] },
        { label: "Career", values: ["23", "35", "4.54", "120", "477.1", "448", "1.32"] },
      ],
      source: "finlete.com, November 2026",
    },
    statement: [
      "Ever since I was a kid in Venezuela, baseball has been my world. I spent countless hours on fields in my hometown dreaming about one day playing in the United States. I signed with the Kansas City Royals and took my first real step toward that dream.",
      "I just got off the injured list in the first week of August. I am back in Triple-A, working every day to earn a call-up to the Royals major league team.",
      "The minor league season is long, there is a lot of travel, and staying healthy takes resources beyond what's provided. That's why I'm raising funds on Finlete, to help be the best, healthiest, most focused player I can be.",
      "Your support means more than you know. If you choose to be part of this journey, I'll carry that with me every time I pitch.",
    ],
    photos: {
      cutout: { src: "/img/home/avila.webp", width: 620, height: 1145 },
      action: {
        src: "/img/athletes/avila-action.webp",
        width: 1600,
        height: 1600,
        alt: "Luinder Avila pitching for the Kansas City Royals",
      },
      head: { src: "/img/athletes/avila-head.webp", width: 320, height: 320 },
    },
    videos: ["zMt9Im97N-o", "ww2sZ7eOmNw", "iYPZho1MV_o", "sxTMIJd50Lo", "ryPMWLebQ0g"],
    spotlight: [
      {
        text: "Luinder Avila picks up his first big league strikeout in his MLB debut! The Royals' No. 14 prospect has been with the organization since 2018 and compiled 61 K's over 50 1/3 Minor League innings this year.",
        author: "MLB Pipeline",
        handle: "@MLBPipeline",
        date: "August 14, 2025",
        url: "https://twitter.com/MLBPipeline/status/1955782765523452160",
      },
      {
        text: "Whoa ... what a pitch. Luinder Avila drops in a nasty changeup for the strikeout!",
        author: "World Baseball Classic",
        handle: "@WBCBaseball",
        date: "March 17, 2026",
        url: "https://twitter.com/WBCBaseball/status/2033720450925187577",
      },
      {
        text: "That first Major League victory feeling! Congratulations Luinder Avila!",
        author: "Raising Royals",
        handle: "@KCRoyalsPD",
        date: "September 11, 2025",
        url: "https://twitter.com/KCRoyalsPD/status/1965948820086468649",
      },
      {
        text: "Outstanding effort from the Royals bullpen tonight, especially Luinder Avila (2.0 IP), Lucas Erceg (2.0 IP), and Carlos Estevez (1.0) who combined for 5.0 scoreless to end the game. First career win for Avila.",
        author: "Jake Eisenberg",
        handle: "@JakeEisenberg_",
        date: "September 2025",
        url: "https://twitter.com/JakeEisenberg_/status/1965951336245334375",
      },
      {
        text: "Over six years ago, a 17-year-old Luinder Avila was celebrating Valentine's Day at our DR Academy. Now he's officially a big leaguer! Congratulations, Luinder!",
        author: "Raising Royals",
        handle: "@KCRoyalsPD",
        date: "August 13, 2025",
        url: "https://twitter.com/KCRoyalsPD/status/1955728985842766300",
      },
      {
        text: "Really been impressed with Luinder Avila. This has been a nice showcase for him.",
        author: "Jack Johnson",
        handle: "@JohnyJ_15",
        date: "September 2025",
        url: "https://twitter.com/JohnyJ_15/status/1965934188097581146",
      },
    ],
  },
];

import { FUNDED, BUNDLES } from "./athletes-funded";

/** Every offering page: open athletes, bundles, then funded athletes. */
export const ALL_OFFERINGS: Athlete[] = [...ATHLETES, ...BUNDLES, ...FUNDED];
export const OPEN_OFFERINGS = ALL_OFFERINGS.filter((a) => a.status === "open");
export const FUNDED_OFFERINGS = ALL_OFFERINGS.filter((a) => a.status === "funded");

/** "Padilla's career", or "their careers" for a bundle. Compliance: we sell a share of future pay, never the person. */
export function careerOf(a: Pick<Athlete, "shortName" | "bundle">): string {
  if (a.bundle) return "their careers";
  return `${a.shortName}${a.shortName.endsWith("s") ? "’" : "’s"} career`;
}

export function getAthlete(slug: string) {
  return ALL_OFFERINGS.find((a) => a.slug === slug);
}
