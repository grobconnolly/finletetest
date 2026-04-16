import type { NextConfig } from "next";

/**
 * Mirror mode: serve the live finlete.com HTML verbatim from public/mirror/*.html
 * at clean URLs. We use `beforeFiles` rewrites so these take precedence over any
 * filesystem routes (src/app/page.tsx etc.). Over time we'll replace individual
 * rewrites with real Next.js routes as we React-ify each page.
 */
const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // Homepage
        { source: "/",                             destination: "/mirror/index.html" },

        // Top-level pages
        { source: "/about",                        destination: "/mirror/about.html" },
        { source: "/athletes",                     destination: "/mirror/athletes.html" },
        { source: "/athlete-landingpage-2026",     destination: "/mirror/athlete-landingpage-2026.html" },

        // Legal pages
        { source: "/legal/terms-of-service",       destination: "/mirror/terms-of-service.html" },
        { source: "/legal/privacy-policy",         destination: "/mirror/privacy-policy.html" },

        // Athlete profile pages (6 live)
        { source: "/avila",                        destination: "/mirror/avila.html" },
        { source: "/escobar",                      destination: "/mirror/escobar.html" },
        { source: "/ornelas",                      destination: "/mirror/ornelas.html" },
        { source: "/padilla",                      destination: "/mirror/padilla.html" },
        { source: "/santos",                       destination: "/mirror/santos.html" },
        { source: "/teodo",                        destination: "/mirror/teodo.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
