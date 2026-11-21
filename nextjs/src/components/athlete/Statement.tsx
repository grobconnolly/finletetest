import Link from "next/link";
import Image from "next/image";
import type { Athlete } from "@/data/athletes";

export function Statement({ a }: { a: Athlete }) {
  return (
    <section className="section dark slash-top statement" id="why">
      <div className="wrap">
        <div className="st-grid">
          <div className="st-head">
            <span className="eyebrow on-dark">In his words</span>
            <h2 className="h2 display">
              Why I&apos;m
              <br />
              raising capital
            </h2>
          </div>
          <div className="st-body">
            {(a.statement ?? []).map((p, i) => (
              <p key={i} className={i === 0 ? "st-lead" : undefined}>
                {p}
              </p>
            ))}
            <div className="st-sign">
              {a.photos.head && (
                <Image
                  src={a.photos.head.src}
                  width={a.photos.head.width}
                  height={a.photos.head.height}
                  alt=""
                  sizes="56px"
                />
              )}
              <div>
                <b>
                  {a.firstName} {a.lastName}
                </b>
                <span>
                  {a.position}, {a.organization}
                </span>
              </div>
            </div>
            <Link className="btn btn-secondary" href="/#alerts">
              Follow {a.firstName}&apos;s journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
