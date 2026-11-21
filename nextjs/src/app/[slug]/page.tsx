import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../home.css";
import "../athlete.css";
import { ALL_OFFERINGS, getAthlete } from "@/data/athletes";
import { Nav } from "@/components/home/Nav";
import { SiteFooter } from "@/components/home/SiteFooter";
import { AthleteHero } from "@/components/athlete/AthleteHero";
import { InvestBar } from "@/components/athlete/InvestBar";
import { Terms } from "@/components/athlete/Terms";
import { HowItWorks } from "@/components/athlete/HowItWorks";
import { PayoutIllustration } from "@/components/athlete/PayoutIllustration";
import { Bio } from "@/components/athlete/Bio";
import { BundleMembers } from "@/components/athlete/BundleMembers";
import { Statement } from "@/components/athlete/Statement";
import { Videos } from "@/components/athlete/Videos";
import { Spotlight } from "@/components/athlete/Spotlight";
import { Perks } from "@/components/athlete/Perks";
import { OfferingFaq } from "@/components/athlete/OfferingFaq";
import { OfferingClose } from "@/components/athlete/OfferingClose";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_OFFERINGS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getAthlete(slug);
  if (!a) return {};
  const open = a.status === "open";
  return {
    title: `${a.firstName} ${a.lastName} | Finlete`,
    description: a.bundle
      ? `${a.bundle.intro} Shares in a % of six pitchers' future MLB pay under Regulation Crowdfunding. Investing is speculative and you can lose your entire investment.`
      : `${open ? `Invest in ${a.firstName} ${a.lastName}’s career.` : `Fully funded: ${a.firstName} ${a.lastName}.`} ${a.position[0].toUpperCase()}${a.position.slice(1).toLowerCase()} in the ${a.organization} organization. Shares in a % of his future MLB pay under Regulation Crowdfunding. Investing is speculative and you can lose your entire investment.`,
  };
}

export default async function AthletePage({ params }: Props) {
  const { slug } = await params;
  const a = getAthlete(slug);
  if (!a) notFound();
  const open = a.status === "open" && !!a.offering?.cartUrl;

  return (
    <div className={`page${open ? " has-invest-bar" : ""}`}>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <AthleteHero a={a} />
        <Terms a={a} />
        <HowItWorks a={a} />
        {open && a.offering?.pctOfPay ? <PayoutIllustration a={a} /> : null}
        {a.bundle ? <BundleMembers a={a} /> : <Bio a={a} />}
        {a.statement && <Statement a={a} />}
        {a.videos?.length ? <Videos ids={a.videos} name={a.bundle ? "the bundle" : a.firstName} /> : null}
        {a.spotlight?.length ? <Spotlight a={a} /> : null}
        {open && <Perks />}
        <OfferingFaq a={a} />
        <OfferingClose a={a} />
      </main>
      <SiteFooter perks={open} />
      {open && <InvestBar a={a} />}
    </div>
  );
}
