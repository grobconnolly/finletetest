"use client";

import { useId, useState } from "react";
import { SIM } from "@/data/home";
import { rangePct, useAnimatedNumber } from "@/components/fx/useAnimatedNumber";

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

function trimPct(frac: number) {
  return (frac * 100)
    .toFixed(3)
    .replace(/0+$/, "")
    .replace(/\.$/, "");
}

export function Simulator() {
  const [inv, setInv] = useState<number>(SIM.initial);
  const rangeId = useId();

  // Figures roll toward the slider value instead of jumping.
  const shown = useAnimatedNumber(inv);
  const shares = shown / SIM.sharePrice;
  const frac = (shares * SIM.pctPerAgreement) / SIM.sharesPerAgreement;

  const rows = SIM.prospects.map((p) => ({
    ...p,
    result:
      p.careerPay > 0
        ? "Could have paid " + money(p.careerPay * frac * (1 - SIM.managementFee))
        : shown > 0
          ? "You would have lost your " + money(shown)
          : "Could have paid $0",
  }));

  return (
    <section className="section sim-wrap slash-top">
      <div className="wrap">
        <div className="sim">
          <div className="sim-head">
            <h2 className="h2">Investment simulator: it&apos;s 2008</h2>
            <span className="sim-tag">Illustration</span>
          </div>
          <p className="sim-intro">
            Say Finlete gave each of these three minor leaguers $100,000 for 1% of his potential
            MLB earnings: 100,000 shares at $1. How much would you have put in?
          </p>

          <div className="sim-slider">
            <label htmlFor={rangeId}>Your investment</label>
            <span className="amount" aria-live="polite">
              {money(shown)}
            </span>
            <input
              id={rangeId}
              className="sim-range"
              type="range"
              min={SIM.min}
              max={SIM.max}
              step={SIM.step}
              value={inv}
              style={{ "--pct": rangePct(inv, SIM.min, SIM.max) } as React.CSSProperties}
              onChange={(e) => setInv(Number(e.target.value))}
              aria-valuetext={money(inv)}
            />
            <div className="range-ends">
              <span>{money(SIM.min)}</span>
              <span>{money(SIM.max)}</span>
            </div>
          </div>

          <table className="sim-table">
            <thead>
              <tr>
                <th>Prospect</th>
                <th>2008 rank</th>
                <th className="num">Career MLB pay</th>
                <th className="num">Could have paid</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name}>
                  <td className="nm">{r.name}</td>
                  <td>No. {r.rank}</td>
                  <td className="num">{r.careerLabel}</td>
                  <td className="num res">{r.result}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="sim-cards" aria-hidden="true">
            {rows.map((r) => (
              <div className="sim-card" key={r.name}>
                <span className="nm">{r.name}</span>
                <span className="meta">No. {r.rank} prospect in 2008</span>
                <span className="meta">Career MLB pay {r.careerLabel}</span>
                <span className="res">{r.result}</span>
              </div>
            ))}
          </div>

          <p className="sim-working">
            Each share is 1% of his potential MLB earnings divided by 100,000. {money(shown)} buys{" "}
            {Math.round(shares).toLocaleString("en-US")} shares, which is {trimPct(frac)}% of his MLB pay,
            less a 10% management fee.
          </p>
          <p className="sim-disclaimer">
            These players are not Finlete athletes. This is an illustration using past careers.
            Past careers do not predict what any prospect will be paid. You can lose your entire
            investment.
          </p>
        </div>
      </div>
    </section>
  );
}
