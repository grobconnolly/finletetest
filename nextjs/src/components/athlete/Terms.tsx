import { formatPct, money, type Athlete } from "@/data/athletes";
import { CountUp } from "@/components/fx/CountUp";

export function Terms({ a }: { a: Athlete }) {
  const o = a.offering;
  if (!o) return null;
  const open = a.status === "open";
  const his = a.bundle ? "their" : "his";
  const cells = [
    { num: money(o.sharePrice, true), label: "Share price" },
    o.minimumInvestment
      ? { num: money(o.minimumInvestment, true), label: "Minimum investment" }
      : { num: money(o.minimumRaise), label: "Minimum raise" },
    o.pctOfPay
      ? { num: formatPct(o.pctOfPay), label: `Of ${his} MLB pay` }
      : { num: "6", label: "Pitchers in the bundle" },
    { num: `${o.termYears} years`, label: "Of MLB contracts covered" },
    { num: o.totalShares.toLocaleString("en-US"), label: "Total shares" },
    { num: money(o.maximumRaise), label: "Maximum raise" },
  ];
  return (
    <section className="trust terms" id="terms" aria-label="Offering terms">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">{open ? "Terms at a glance" : "Terms of the closed offering"}</h2>
          <p className="lead">
            {a.bundle
              ? "One share is a slice of all six agreements. The Form C states each pitcher's percentage."
              : `Each share is 1% of ${his} pre-tax, on-field MLB pay divided by 100,000.`}{" "}
            {open && o.minimumInvestment ? `Minimum raise ${money(o.minimumRaise)}. ` : ""}
            The Form C has the full terms.
          </p>
        </div>
        <dl className="scoreboard six">
          {cells.map((c) => (
            <div className="sb-cell" key={c.label}>
              <dd className="sb-num">
                <CountUp value={c.num} />
              </dd>
              <dt className="sb-label">{c.label}</dt>
            </div>
          ))}
        </dl>
        <div className="term-note">
          <b>What the {o.termYears} years means.</b> The agreement covers every MLB contract{" "}
          {a.bundle ? "each pitcher" : "he"} signs during the {o.termYears}-year term. Pay under those
          contracts counts whenever it is paid: if salary from one of them is deferred past year{" "}
          {o.termYears}, Finlete still collects it. Contracts signed after the term are not covered.
        </div>
        <p className="terms-docs">
          <a href={o.formC} rel="noopener">
            Form C
          </a>
          {o.offeringCircular && (
            <a href={o.offeringCircular} rel="noopener">
              {o.offeringCircularLabel ?? "Offering circular"}
            </a>
          )}
          <a href="https://www.sec.gov/edgar/browse/?CIK=2010670" rel="noopener">
            All SEC filings
          </a>
        </p>
      </div>
    </section>
  );
}
