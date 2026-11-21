import Image from "next/image";
import { LINKS, PLAYER_FACTS } from "@/data/home";

export function Players() {
  return (
    <section className="section players slash-top" id="for-players">
      <div className="wrap">
        <div className="players-copy">
          <span className="eyebrow">For players</span>
          <h2 className="h2 display">Capital up front, no debt.</h2>
          <p className="lead">
            Finlete gives rising players upfront capital, with no debt, so they can reach their
            potential.
          </p>
          <dl className="players-facts">
            {PLAYER_FACTS.map((f) => (
              <div key={f.dt}>
                <dt>{f.dt}</dt>
                <dd>{f.dd}</dd>
              </div>
            ))}
          </dl>
          <div className="players-actions">
            <a className="btn btn-primary" href={LINKS.apply}>
              Apply to become a Finlete athlete
            </a>
            <a className="btn btn-secondary" href="#how-it-works">
              How the money flows
            </a>
          </div>
        </div>
        <figure className="players-card">
          <div className="players-photo">
            <Image
              src="/img/home/avila.webp"
              alt="Luinder Avila, pitcher, Kansas City Royals"
              width={620}
              height={1145}
              sizes="(max-width: 960px) 40vw, 480px"
            />
          </div>
          <figcaption>
            <b>Luinder Avila</b>
            <span>
              Pitcher, Kansas City Royals. Made his MLB debut in 2025. His offering is open on
              Finlete.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
