import Image from "next/image";
import Link from "next/link";
import { money, type Athlete } from "@/data/athletes";

/** Card grid used by the athletes index, the funded page and the bundle's member list. */
export function OfferingGrid({
  items,
  compact = false,
}: {
  items: Athlete[];
  compact?: boolean;
}) {
  return (
    <ul className={`ogrid${compact ? " compact" : ""}`} role="list">
      {items.map((a) => {
        const open = a.status === "open";
        const photo = a.photos.head ?? a.photos.action;
        return (
          <li key={a.slug}>
            <Link href={`/${a.slug}`} className="ocard">
              <div className="ocard-photo">
                <Image
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  alt=""
                  sizes="(max-width: 560px) 30vw, 160px"
                />
                <span className={`corner-tab${open ? "" : " off"}`}>
                  {open ? (a.badge ?? "Open") : "Funded"}
                </span>
              </div>
              <div className="ocard-body">
                <h3>
                  {a.firstName} {a.lastName}
                </h3>
                <p className="ocard-meta">
                  {a.bundle ? a.team : `${a.position}, ${a.organization}`}
                  {!a.bundle && a.level ? ` · ${a.level}` : ""}
                </p>
                <ul className="ocard-tags">
                  {a.highlights.slice(0, 2).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <p className="ocard-terms">
                  {a.offering ? (
                    open ? (
                      <>
                        <b>{money(a.offering.sharePrice, true)}</b> per share
                        {a.offering.minimumInvestment
                          ? ` · min ${money(a.offering.minimumInvestment, true)}`
                          : ""}
                      </>
                    ) : (
                      <>
                        Raised up to <b>{money(a.offering.maximumRaise)}</b>
                        {a.closed ? ` · closed ${a.closed}` : ""}
                      </>
                    )
                  ) : (
                    <>Closed offering</>
                  )}
                </p>
                <span className="ocard-cta">{open ? `View ${a.shortName === "the bundle" ? "the bundle" : `${a.lastName}'s offering`}` : "See the deal"}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
