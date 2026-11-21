"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tweens a number toward its target so figures roll instead of jumping when
 * a slider moves. Returns the target itself on the server, on the first
 * render, and for reduced-motion users.
 */
export function useAnimatedNumber(target: number, duration = 320): number {
  const [value, setValue] = useState(target);
  const from = useRef(target);
  const raf = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      from.current = target;
      raf.current = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(raf.current);
    }
    const start = from.current;
    if (start === target) return;
    const t0 = performance.now();
    cancelAnimationFrame(raf.current);
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      const v = start + (target - start) * e;
      from.current = v;
      setValue(p < 1 ? v : target);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);

  return value;
}

/** Percentage of a range covered, for the filled slider track. */
export function rangePct(value: number, min: number, max: number): string {
  if (max <= min) return "0%";
  return `${Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100)).toFixed(2)}%`;
}
