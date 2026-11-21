"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fades sections in as they scroll into view. Runs once per page, after
 * hydration, so the HTML stays fully visible without JavaScript. Anything
 * already on screen at load is left alone (no blink above the fold), and
 * reduced-motion users get no animation at all.
 */
const SELECTORS = [
  ".section-head",
  ".sb-cell",
  ".card",
  ".mrow",
  ".sim",
  ".players-copy",
  ".players-card",
  ".signup-panel",
  ".faq details",
  ".cta > .wrap > *",
  ".og-card",
  ".t-cell",
  ".hiw-step",
  ".perk",
  ".post",
  ".bio-grid > *",
  ".statement",
  ".video-card",
].join(",");

export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const vh = window.innerHeight;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS)).filter((el) => {
      if (el.classList.contains("rv") || el.classList.contains("in")) return false;
      const r = el.getBoundingClientRect();
      // Already visible at load: leave it, so nothing flashes.
      return r.top >= vh - 40;
    });
    if (!nodes.length) return;

    // Stagger siblings that reveal together.
    const byParent = new Map<Element | null, number>();
    nodes.forEach((el) => {
      const n = byParent.get(el.parentElement) ?? 0;
      el.style.setProperty("--rv-i", String(Math.min(n, 5)));
      byParent.set(el.parentElement, n + 1);
      el.classList.add("rv");
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    nodes.forEach((el) => io.observe(el));

    // Safety: never leave something hidden if the observer misses it.
    const t = window.setTimeout(() => nodes.forEach((el) => el.classList.add("in")), 6000);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
