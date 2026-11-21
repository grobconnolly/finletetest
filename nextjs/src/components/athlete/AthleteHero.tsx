import Image from "next/image";
import Link from "next/link";
import { money, type Athlete, careerOf } from "@/data/athletes";

export function AthleteHero({ a }: { a: Athlete }) {
  const o = a.offering;
  const open = a.status === "open";
  const bundle = !!a.bundle;
  const term = o?.termYears ?? 25;
  const cardStyle = a.photos.heroStyle === "card";

  return (
    <section className={`hero on-dark ah${cardStyle ? " ah-card" : ""}`} id="top">
      <div className="wrap">
        <div className="ah-grid">
          <div className="ah-copy">
            <span className={`hero-label${open ? "" : " off"}`}>
              {open ? "Open offering" : `Fully funded${a.closed ? ` · closed ${a.closed}` : ""}`}
              {a.badge ? ` · ${a.badge}` : ""}
            </span>
            <h1 className="ah-h1">
              <span className="first">{a.firstName}</span>
              <span className="last">{a.lastName}</span>
            </h1>
            <p className="ah-sub">
              {bundle
                ? a.bundle!.intro
                : `${a.position}, ${a.organization}. ${a.level === "MLB" ? "Major leagues." : `${a.level} level, ${a.team}.`}`}
            </p>
            <ul className="ah-tags" aria-label="What to know">
              {a.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            {open ? (
              <p className="lead">
                You get a % of the pay from every MLB contract {bundle ? "each of them signs" : "he signs"} in the
                next {term} years. If {bundle ? "a pitcher" : "he"} never makes it, that part pays nothing.
              </p>
            ) : (
              <p className="lead">
                This offering reached its raise and is closed. Fans who invested hold a % of the pay from every
                MLB contract he signs in the {term}-year term. If he never makes it, they get nothing.
              </p>
            )}

            {open && o ? (
              <div className="ah-invest" id="invest">
                <div className="ah-price">
                  <span className="num">{money(o.sharePrice, true)}</span>
                  <span className="per">per share</span>
                  {o.minimumInvestment && (
                    <span className="min">Minimum {money(o.minimumInvestment, true)}</span>
                  )}
                </div>
                <div className="ah-invest-actions">
                  <a className="btn btn-primary" href={o.cartUrl} rel="noopener">
                    Invest in {careerOf(a)}
                  </a>
                  {a.videos?.length ? (
                    <a className="btn btn-secondary" href="#videos">
                      Watch video
                    </a>
                  ) : null}
                </div>
                <p className="ah-invest-note">
                  <b>No fees at checkout.</b> The share price is what you pay. Finlete covers the
                  broker-dealer, identity and anti-money-laundering costs. Checkout runs on DealMaker
                  Securities, the broker-dealer for this offering.
                </p>
              </div>
            ) : (
              <div className="ah-invest ah-closed">
                <div className="ah-price">
                  <span className="num">{o ? money(o.sharePrice, true) : "Closed"}</span>
                  <span className="per">{o ? "per share, when open" : ""}</span>
                  <span className="min">
                    {o ? `Raised up to ${money(o.maximumRaise)}.` : "Terms to follow."} No shares are for sale.
                  </span>
                </div>
                <div className="ah-invest-actions">
                  <Link className="btn btn-primary" href="/athletes">
                    See who is open now
                  </Link>
                  {a.videos?.length ? (
                    <a className="btn btn-secondary" href="#videos">
                      Watch video
                    </a>
                  ) : null}
                </div>
              </div>
            )}

            <p className="hero-legal">
              Investing is speculative and you can lose your entire investment.
              {o && (
                <>
                  {" "}
                  Read the{" "}
                  <a href={o.formC} rel="noopener">
                    Form C
                  </a>{" "}
                  before you invest.
                </>
              )}
            </p>
          </div>

          <figure className="ah-photo">
            <Image
              src={a.photos.action.src}
              width={a.photos.action.width}
              height={a.photos.action.height}
              alt={a.photos.action.alt}
              sizes={cardStyle ? "(max-width: 960px) 80vw, 420px" : "(max-width: 960px) 100vw, 50vw"}
              preload
            />
          </figure>
        </div>
      </div>

      {a.quote && (
        <div className="ah-quote">
          <div className="wrap">
            <blockquote>
              <p>“{a.quote.text}”</p>
              <footer>
                {a.quote.who}, {a.quote.outlet}
              </footer>
            </blockquote>
          </div>
        </div>
      )}
    </section>
  );
}
