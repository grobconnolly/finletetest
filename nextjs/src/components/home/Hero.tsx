import Link from "next/link";
import Image from "next/image";
import { CHIPS } from "@/data/home";

export function Hero() {
  return (
    <section className="hero on-dark">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="hero-label">Backed by Finlete fans</span>
            <h1 className="hero-h1">
              <span className="nm">Christian Zazueta.</span>
              <span className="hero-num">No. 24</span>
              <span className="tail">prospect in baseball.</span>
            </h1>
            <p className="hero-source">
              Baseball America. Pitcher, Los Angeles Dodgers. His offering is sold out.
            </p>
            <p className="lead">
              Finlete is where athletes raise capital and investors can invest in athletes&apos;
              careers. You get a % of his future MLB earnings. If he never makes it, you get
              nothing.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#athletes">
                See who is open now
              </a>
              <a className="btn btn-secondary" href="#how-it-works">
                How it works
              </a>
            </div>
            <p className="hero-legal">
              Investing is speculative and you can lose your entire investment. A ranking does
              not predict MLB earnings.
            </p>
          </div>
          <figure className="hero-photo">
            <Image
              src="/img/home/zazueta-1400.webp"
              width={1400}
              height={933}
              alt="Christian Zazueta delivering a pitch"
              sizes="(max-width: 960px) 100vw, 60vw"
              preload
            />
          </figure>
        </div>
      </div>
      <div className="hero-chips">
        <div className="wrap">
          <span className="chips-label">Open now</span>
          <div className="chips-row">
            {CHIPS.map((c) => (
              <Link className="chip" key={c.id} href={c.href}>
                {c.label} · <b>{c.price}</b>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
