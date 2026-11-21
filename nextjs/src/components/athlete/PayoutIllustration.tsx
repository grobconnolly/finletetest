"use client";

import { useId, useState } from "react";
import { formatPct, money, type Athlete, careerOf } from "@/data/athletes";
import { rangePct, useAnimatedNumber } from "@/components/fx/useAnimatedNumber";

const FEE = 0.1;

/**
 * What a stake would pay for a chosen career: investment slider and a career
 * MLB pay slider. Same maths as the homepage simulator: shares = amount / price,
 * share of pay = shares × 1% / 100,000, paid = career pay × share × (1 − fee).
 */
export function PayoutIllustration({ a }: { a: Athlete }) {
  const o = a.offering!;
  const amtId = useId();
  const payId = useId();
  const [amt, setAmt] = useState(1000);
  const [payM, setPayM] = useState(50); // $ millions

  const shares = Math.floor(amt / o.sharePrice);
  const frac = (shares * 0.01) / 100_000;
  const paid = payM * 1_000_000 * frac * (1 - FEE);
  // The headline figures roll toward their targets as the sliders move.
  const shownAmt = useAnimatedNumber(amt);
  const shownPaid = useAnimatedNumber(paid);

  return (
    <section className="section sim-wrap slash-top" id="illustration">
      <div className="wrap">
        <div className="sim">
          <div className="sim-head">
            <h2 className="h2">What a stake would pay</h2>
            <span className="sim-tag">Illustration</span>
          </div>
          <p className="sim-intro">
            Pick an amount and a career. The page does the maths for this offering&apos;s terms.
            Nobody knows what {a.shortName} will be paid.
          </p>

          <div className="sim-two">
            <div className="sim-slider">
              <label htmlFor={amtId}>Your investment</label>
              <span className="amount" aria-live="polite">
                {money(shownAmt)}
              </span>
              <input
                id={amtId}
                className="sim-range"
                type="range"
                min={300}
                max={10_000}
                step={100}
                value={amt}
                style={{ "--pct": rangePct(amt, 300, 10_000) } as React.CSSProperties}
                onChange={(e) => setAmt(Number(e.target.value))}
                aria-valuetext={money(amt)}
              />
              <div className="range-ends">
                <span>$300</span>
                <span>$10,000</span>
              </div>
            </div>
            <div className="sim-slider">
              <label htmlFor={payId}>Pay from his MLB contracts in the term</label>
              <span className="amount" aria-live="polite">
                {payM === 0 ? "$0" : `$${payM}M`}
              </span>
              <input
                id={payId}
                className="sim-range"
                type="range"
                min={0}
                max={400}
                step={5}
                value={payM}
                style={{ "--pct": rangePct(payM, 0, 400) } as React.CSSProperties}
                onChange={(e) => setPayM(Number(e.target.value))}
                aria-valuetext={`$${payM} million`}
              />
              <div className="range-ends">
                <span>$0, never reaches MLB</span>
                <span>$400M</span>
              </div>
            </div>
          </div>

          <div className="sim-result" role="status">
            {payM === 0 ? (
              <>
                <span className="res-label">He never reaches MLB</span>
                <span className="res-num">You would lose your {money(amt)}</span>
              </>
            ) : (
              <>
                <span className="res-label">Paid to you from the MLB contracts he signs in the {o.termYears}-year term, before tax</span>
                <span className="res-num count">{money(shownPaid)}</span>
              </>
            )}
          </div>

          <p className="sim-working">
            {money(amt)} buys {shares.toLocaleString("en-US")} shares at {money(o.sharePrice, true)},
            which is {formatPct(frac)} of his MLB pay, less a 10% management fee.
          </p>
          {o.cartUrl && (
            <p className="sim-cta">
              <a
                className="btn btn-primary"
                href={`${o.cartUrl}${o.cartUrl.includes("?") ? "&" : "?"}amount=${amt}`}
                rel="noopener"
              >
                Invest {money(amt)} in {careerOf(a)}
              </a>
              <span>Checkout opens with this amount filled in. No fees at checkout.</span>
            </p>
          )}
          <p className="sim-disclaimer">
            An illustration, not a forecast. Most minor leaguers never reach MLB and a short MLB
            career can also mean a loss. Payments depend on the terms in the Form C. You can lose
            your entire investment.
          </p>
        </div>
      </div>
    </section>
  );
}
