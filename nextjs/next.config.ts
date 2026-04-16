import type { NextConfig } from "next";

/**
 * Mirror mode: the `/`, `/about`, `/padilla` etc. rewrites to
 * public/mirror/*.html live in `vercel.json` so they apply at Vercel's
 * edge layer. In local dev we need them here as well (Next.js doesn't
 * read vercel.json during `next dev`), so we mirror them below.
 *
 * Any path NOT in this list falls through to Next.js's filesystem routes
 * (e.g. /v2 → src/app/v2/page.tsx).
 */
const MIRROR_REWRITES = [
  { source: "/",                             destination: "/mirror/index.html" },
  { source: "/about",                        destination: "/mirror/about.html" },
  { source: "/athletes",                     destination: "/mirror/athletes.html" },
  { source: "/athlete-landingpage-2026",     destination: "/mirror/athlete-landingpage-2026.html" },
  { source: "/legal/terms-of-service",       destination: "/mirror/terms-of-service.html" },
  { source: "/legal/privacy-policy",         destination: "/mirror/privacy-policy.html" },
  { source: "/avila",                        destination: "/mirror/avila.html" },
  { source: "/escobar",                      destination: "/mirror/escobar.html" },
  { source: "/ornelas",                      destination: "/mirror/ornelas.html" },
  { source: "/padilla",                      destination: "/mirror/padilla.html" },
  { source: "/santos",                       destination: "/mirror/santos.html" },
  { source: "/teodo",                        destination: "/mirror/teodo.html" },
];

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: MIRROR_REWRITES,
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
