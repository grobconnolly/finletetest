import Link from "next/link";
import Image from "next/image";
import { INVESTOR_LOGOS, PRESS_LOGOS, SCOREBOARD, type Logo } from "@/data/home";
import { CountUp } from "@/components/fx/CountUp";

function LogoRow({ label, logos, group }: { label: string; logos: Logo[]; group: string }) {
  return (
    <div className={`trust-group ${group}`}>
      <span className="label">{label}</span>
      {logos.map((l) => (
        <Image
          key={l.src}
          className={l.variant}
          src={l.src}
          alt={l.alt}
          width={l.width}
          height={l.height}
          sizes="(max-width: 760px) 45vw, 200px"
        />
      ))}
    </div>
  );
}

export function ProofBand() {
  return (
    <section className="trust" aria-label="Proof">
      <div className="wrap">
        <dl className="scoreboard">
          {SCOREBOARD.map((s) => (
            <div className="sb-cell" key={s.label}>
              <dd className="sb-num">
                <CountUp value={s.num} />
              </dd>
              <dt className="sb-label">
                {s.href ? <Link href={s.href}>{s.label}</Link> : s.label}
              </dt>
            </div>
          ))}
        </dl>
        <div className="trust-rows">
          <LogoRow label="Backed by" logos={INVESTOR_LOGOS} group="investors" />
          <LogoRow label="Featured in" logos={PRESS_LOGOS} group="press" />
        </div>
      </div>
    </section>
  );
}
