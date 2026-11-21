import { LINKS } from "@/data/home";

export function Closing() {
  return (
    <section className="cta">
      <div className="wrap">
        <h2 className="display">Back a player early.</h2>
        <div className="actions">
          <a className="btn btn-primary" href="#athletes">
            Browse open offerings
          </a>
          <a href={LINKS.signIn}>Or create a free account</a>
        </div>
      </div>
    </section>
  );
}
