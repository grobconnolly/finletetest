import type { Athlete } from "@/data/athletes";

export function Spotlight({ a }: { a: Athlete }) {
  const posts = a.spotlight ?? [];
  if (!posts.length) return null;
  return (
    <section className="section soft slash-top spotlight" id="spotlight">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">On the field and in the feed</h2>
          <p className="lead">What scouts, writers and the club have said. Posts on X, quoted in part.</p>
        </div>
        <ul className="posts" role="list">
          {posts.map((t) => (
            <li className="post" key={t.url}>
              <p>{t.text}</p>
              <footer>
                <b>{t.author}</b>
                <span>
                  {t.handle} · {t.date}
                </span>
                <a href={t.url} rel="noopener">
                  View post
                </a>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
