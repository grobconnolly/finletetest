import type { NextConfig } from "next";

/**
 * `/` is the React homepage (src/app/page.tsx).
 *
 * The other routes are a pixel-perfect static mirror of finlete.com. Each is a
 * captured Framer HTML file at its exact URL path inside `public/`:
 *   /framer                    → public/framer/index.html (the old Framer home)
 *   /framer/padilla, /framer/avila
 *                              → public/framer/<slug>/index.html (old offering pages;
 *                                /padilla and /avila are now React, src/app/[slug])
 *   /framer/athletes, /framer/escobar, /framer/ornelas, /framer/santos,
 *   /framer/teodo              → public/framer/<slug>/index.html (old pages; the
 *                                React versions live at /<slug>, src/app/[slug])
 *   /about                     → public/about/index.html
 *   /athlete-landingpage-2026  → public/athlete-landingpage-2026/index.html
 *   /legal/terms-of-service    → public/legal/terms-of-service/index.html
 *   /legal/privacy-policy      → public/legal/privacy-policy/index.html
 *
 * Assets (images, fonts) are served from public/images/ and public/fonts/,
 * referenced by absolute paths from inside each mirrored HTML file.
 *
 * `vercel.json` sets framework=nextjs so Vercel runs `next build` (rather
 * than treating this as a static-HTML-only project).
 */
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Static redesign prototype lives in public/redesign; Next.js only
      // serves public files at their exact path, so map the clean URL.
      { source: "/redesign", destination: "/redesign/index.html" },
      // The captured Framer homepage, kept for comparison.
      { source: "/framer", destination: "/framer/index.html" },
      { source: "/framer/:slug", destination: "/framer/:slug/index.html" },
    ];
  },
};

export default nextConfig;
