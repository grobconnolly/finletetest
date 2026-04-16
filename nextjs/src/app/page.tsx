/**
 * This page is only hit if the `/` rewrite in next.config.ts is disabled.
 * Normally the rewrite serves public/mirror/index.html verbatim.
 */
export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "system-ui, sans-serif" }}>
      <h1>Finlete — Next.js shell</h1>
      <p>
        The live-site mirror should be serving at this path. If you see this
        placeholder, the rewrite in <code>next.config.ts</code> isn&rsquo;t
        active (dev server needs a restart after editing it).
      </p>
    </main>
  );
}
