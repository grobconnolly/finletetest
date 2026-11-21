"use client";

import { useEffect } from "react";

/**
 * Nav that gets out of the way: a shadow once the page has scrolled, hidden
 * while scrolling down past the hero, back the moment the reader scrolls up.
 * Never hides while something inside it has focus.
 */
export function NavBehavior() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    if (!nav) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      nav.classList.toggle("is-scrolled", y > 8);
      if (!reduce) {
        const down = y > last + 6;
        const up = y < last - 6;
        if (down && y > 180 && !nav.contains(document.activeElement)) nav.classList.add("is-hidden");
        else if (up || y < 80) nav.classList.remove("is-hidden");
      }
      last = y;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      nav.classList.remove("is-scrolled", "is-hidden");
    };
  }, []);
  return null;
}
