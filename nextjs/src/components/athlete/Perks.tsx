import { PERKS, PERK_RULES } from "@/data/athletes";

export function Perks() {
  return (
    <section className="section slash-top perks" id="perks">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">Perks for investors</h2>
          <p className="lead">Based on the size of a single investment. Perks are not part of the security.</p>
        </div>
        <ol className="perk-list">
          {PERKS.map((p) => (
            <li key={p.title}>
              <span className="tier">{p.tier}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>
        <p className="note micro">{PERK_RULES}</p>
      </div>
    </section>
  );
}
