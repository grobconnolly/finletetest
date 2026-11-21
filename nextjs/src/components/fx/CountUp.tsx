"use client";

import { useEffect, useRef, useState } from "react";

const NUM = /^([^0-9]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/;

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Counts a formatted number up from zero the first time it scrolls into
 * view: "$1M+" → "$0M+" … "$1M+", "75,000" → "0" … "75,000", "$1.08" keeps
 * its two decimals. Prefix and suffix are left as written. Server HTML and
 * reduced-motion users get the final value straight away.
 */
export function CountUp({ value, duration = 1100 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const m = NUM.exec(value);
    if (!el || !m) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, prefix, numText, suffix] = m;
    const target = Number(numText.replace(/,/g, ""));
    if (!Number.isFinite(target)) return;
    const decimals = (numText.split(".")[1] ?? "").length;
    const grouped = numText.includes(",");
    const fmt = (n: number) =>
      prefix +
      n.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: grouped,
      }) +
      suffix;

    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || started) return;
        started = true;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / duration);
          setText(fmt(target * easeOut(p)));
          if (p < 1) raf = requestAnimationFrame(tick);
          else setText(value);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="count" aria-label={value}>
      {text}
    </span>
  );
}
