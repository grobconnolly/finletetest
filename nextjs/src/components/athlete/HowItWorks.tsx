import Link from "next/link";
import type { Athlete } from "@/data/athletes";

export function HowItWorks({ a }: { a: Athlete }) {
  const term = a.offering?.termYears ?? 25;
  const b = !!a.bundle;
  const steps = [
    {
      n: "1",
      h: b ? "Invest in their careers" : "Invest in his career",
      p: b
        ? "You buy shares in this offering. Finlete sends each of the six pitchers his share of the capital, with no debt, so they can train, eat and recover like big leaguers."
        : `You buy shares in this offering. Finlete sends ${a.shortName} the capital, with no debt, so he can train, eat and recover like a big leaguer.`,
    },
    {
      n: "2",
      h: b ? "Follow their journeys" : "Follow his journey",
      p: b
        ? "Watch their progress through the minors and the majors. Updates, stats and the wins along the way."
        : "Watch his progress through the minors. Updates, stats and the wins along the way.",
    },
    {
      n: "3",
      h: b ? "A % of their MLB pay" : "A % of his MLB pay",
      p: b
        ? `When a pitcher reaches MLB, Finlete collects its % of the pay from every MLB contract he signs during the ${term}-year term, including pay deferred past the term, and passes it to shareholders twice a year, less a management fee.`
        : `If he reaches MLB, Finlete collects its % of the pay from every MLB contract he signs during the ${term}-year term, including pay deferred past the term, and passes it to shareholders twice a year, less a management fee.`,
    },
  ];
  return (
    <section className="section slash-top hiw" id="how-it-works">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">How it works</h2>
          <p className="lead">This is not fantasy. This is not gambling. This is investing.</p>
        </div>
        <ol className="hiw-steps">
          {steps.map((s) => (
            <li key={s.n}>
              <span className="mrow-n">{s.n}</span>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </li>
          ))}
        </ol>
        <p className="hiw-never">
          <span className="mrow-n off">!</span>
          <span>
            {b
              ? "A pitcher who never reaches MLB earns no MLB pay, so his part of the bundle pays nothing. If none of the six reaches MLB, you lose your entire investment. They owe nothing back."
              : "If he never reaches MLB, there is no MLB pay, so nothing is paid. You lose your entire investment. He owes nothing back."}{" "}
            <Link href="/#how-it-works">See where the money goes</Link>
          </span>
        </p>
      </div>
    </section>
  );
}
