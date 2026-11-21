import { getAthlete, type Athlete } from "@/data/athletes";
import { OfferingGrid } from "./OfferingGrid";

export function BundleMembers({ a }: { a: Athlete }) {
  if (!a.bundle) return null;
  const members = a.bundle.members.map((s) => getAthlete(s)).filter((m): m is Athlete => !!m);
  return (
    <section className="section bio slash-top" id="athlete">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">Meet the six pitchers</h2>
          <p className="lead">
            Each has his own agreement with Finlete. A bundle share is a slice of all six. Some of
            them also had, or have, an offering of their own.
          </p>
        </div>
        <OfferingGrid items={members} compact />
        <p className="note micro">
          A pitcher&apos;s own page may describe a separate, earlier offering. The bundle&apos;s
          terms are in its Form C.
        </p>
      </div>
    </section>
  );
}
