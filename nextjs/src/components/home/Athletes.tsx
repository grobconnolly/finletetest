import Link from "next/link";
import Image from "next/image";
import { OFFERINGS, type Offering } from "@/data/home";

function Card({ o }: { o: Offering }) {
  return (
    <article className="card">
      {o.bundle && !o.photo ? (
        <div className="card-photo bundle">
          <span className="corner-tab">{o.tab}</span>
          <span className="big">{o.bundle.big}</span>
          <span className="cap">{o.bundle.cap}</span>
        </div>
      ) : (
        <div className={`card-photo${o.bundle ? " group" : ""}`}>
          <span className="corner-tab">{o.tab}</span>
          {o.photo && (
            <Image
              src={o.photo.src}
              alt=""
              width={o.photo.width}
              height={o.photo.height}
              sizes="(max-width: 560px) 40vw, (max-width: 960px) 50vw, 25vw"
            />
          )}
          <span className="nameplate" aria-hidden="true">
            {o.name}
          </span>
        </div>
      )}
      <div className="card-body">
        <h3 className="h3">{o.name}</h3>
        <p className="card-meta">
          {o.meta[0]}
          <br />
          {o.meta[1]}
        </p>
        <p className="card-note">{o.note}</p>
        <dl className="card-terms">
          <div className="row-line">
            <dt>Share price</dt>
            <dd>{o.sharePrice}</dd>
          </div>
          <div className="row-line">
            <dt>Minimum</dt>
            <dd>{o.minimum}</dd>
          </div>
        </dl>
        <Link className="card-cta" href={o.href}>
          {o.cta}
        </Link>
      </div>
    </article>
  );
}

export function Athletes() {
  const open = OFFERINGS.length;
  const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six"];
  return (
    <section className="section dark slash-top" id="athletes">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">Athletes you can invest in</h2>
          <p className="lead">
            {words[open] ?? open} offering{open === 1 ? " is" : "s are"} open today.
          </p>
        </div>
        <div className="cards">
          {OFFERINGS.map((o) => (
            <Card key={o.id} o={o} />
          ))}
        </div>
        <p className="all-link">
          <Link href="/athletes">All athletes and funded deals</Link>
        </p>
        <p className="note micro">
          Investing is speculative and you can lose your entire investment, including in a
          bundle. Rankings and statistics are from finlete.com/athletes, November 2026, and do
          not predict MLB earnings.
        </p>
      </div>
    </section>
  );
}
