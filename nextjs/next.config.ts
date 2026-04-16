import type { NextConfig } from "next";

/**
 * Routing model:
 *   /                      → public/index.html        (Framer mirror, static)
 *   /about, /padilla, …    → public/<slug>/index.html (Framer mirrors)
 *   /legal/*               → public/legal/<slug>/index.html
 *   /v2, /test             → src/app/v2, src/app/test (real Next.js pages)
 *
 * Because the mirror pages live at their exact URL paths inside `public/`,
 * Vercel and `next dev` both serve them without any rewrite rules. This is
 * the simplest working setup — no vercel.json rewrites needed either.
 */
const nextConfig: NextConfig = {};

export default nextConfig;
