import type { Metadata } from "next";
import Link from "next/link";
import "../home.css";
import "../athlete.css";
import { FUNDED_OFFERINGS, OPEN_OFFERINGS } from "@/data/athletes";
import { Nav } from "@/components/home/Nav";
import { SiteFooter } from "@/components/home/SiteFooter";
import { OfferingGrid } from "@/components/athlete/OfferingGrid";

export const metadata: Metadata = {
  title: "Athletes | Finlete",
  description:
    "Every Finlete offering: the athletes open for investment now and the deals that are already funded. Investing is speculative and you can lose your entire investment.",
};

export default function AthletesPage() {
  return (
    <div className="page">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <section className="hero on-dark idx-hero">
          <div className="wrap">
            <span className="hero-label">Athletes</span>
            <h1 className="display">Back a player early.</h1>
            <p className="lead">
              {OPEN_OFFERINGS.length} offerings are open today. {FUNDED_OFFERINGS.length} are fully funded.
              You get a % of the pay from every MLB contract an athlete signs in the next 25 years. If he
              never makes it, you get nothing.
            </p>
            <p className="hero-legal">Investing is speculative and you can lose your entire investment.</p>
          </div>
        </section>

        <section className="section dark slash-top" id="open">
          <div className="wrap">
            <div className="section-head">
              <h2 className="h2">Open now</h2>
              <p className="lead">Back these athletes before their offering is fully funded.</p>
            </div>
            <OfferingGrid items={OPEN_OFFERINGS} />
          </div>
        </section>

        <section className="section slash-top" id="funded">
          <div className="wrap">
            <div className="section-head">
              <h2 className="h2">Fully funded</h2>
              <p className="lead">
                These raises are closed. Fans who invested hold a % of each athlete&apos;s future MLB pay.{" "}
                <Link href="/funded">About funded deals</Link>
              </p>
            </div>
            <OfferingGrid items={FUNDED_OFFERINGS} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
