import type { Metadata } from "next";
import Link from "next/link";
import "../home.css";
import "../athlete.css";
import { FUNDED_OFFERINGS, money } from "@/data/athletes";
import { Nav } from "@/components/home/Nav";
import { SiteFooter } from "@/components/home/SiteFooter";
import { OfferingGrid } from "@/components/athlete/OfferingGrid";

export const metadata: Metadata = {
  title: "Funded deals | Finlete",
  description:
    "The athlete offerings Finlete has already raised and closed. Investing is speculative and you can lose your entire investment.",
};

export default function FundedPage() {
  const withTerms = FUNDED_OFFERINGS.filter((a) => a.offering);
  const totalMax = withTerms.reduce((s, a) => s + (a.offering?.maximumRaise ?? 0), 0);
  const compact = totalMax >= 1_000_000 ? `$${(totalMax / 1_000_000).toFixed(1)}M` : money(totalMax);
  return (
    <div className="page">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <section className="hero on-dark idx-hero">
          <div className="wrap">
            <span className="hero-label">Funded</span>
            <h1 className="display">Deals we have already raised.</h1>
            <p className="lead">
              {FUNDED_OFFERINGS.length} offerings have reached their raise and closed. No shares in them
              are for sale. Fans who invested hold a % of each athlete&apos;s pay from every MLB contract he
              signs in the 25-year term.
            </p>
            <p className="hero-legal">
              A funded raise says nothing about what an athlete will be paid. Investing is speculative and
              you can lose your entire investment.
            </p>
          </div>
        </section>

        <section className="trust" aria-label="Funded in numbers">
          <div className="wrap">
            <dl className="scoreboard">
              <div className="sb-cell">
                <dd className="sb-num">{FUNDED_OFFERINGS.length}</dd>
                <dt className="sb-label">Offerings fully funded</dt>
              </div>
              <div className="sb-cell">
                <dd className="sb-num">{compact}</dd>
                <dt className="sb-label">Combined maximum raise</dt>
              </div>
              <div className="sb-cell">
                <dd className="sb-num">{new Set(FUNDED_OFFERINGS.map((a) => a.organization)).size}</dd>
                <dt className="sb-label">MLB clubs</dt>
              </div>
            </dl>
            <p className="note micro" style={{ marginTop: 0 }}>
              Maximum raise is the ceiling each offering filed with the SEC, not the amount finally
              sold. Final amounts are in each offering&apos;s Form C-U.
            </p>
          </div>
        </section>

        <section className="section slash-top" id="deals">
          <div className="wrap">
            <div className="section-head">
              <h2 className="h2">The funded athletes</h2>
              <p className="lead">Each card opens the deal: terms, the athlete, and the filings.</p>
            </div>
            <OfferingGrid items={FUNDED_OFFERINGS} />
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <h2 className="display">Missed these? Others are open.</h2>
            <div className="actions">
              <Link className="btn btn-primary" href="/athletes#open">
                See who is open now
              </Link>
              <Link href="/#alerts">Get a text when a new athlete opens</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
