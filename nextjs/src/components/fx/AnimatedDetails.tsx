"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

/**
 * A <details> whose answer slides open and closed. Still a real <details>,
 * so it works without JavaScript, stays searchable, and keeps its keyboard
 * behaviour. Reduced-motion users get the native toggle.
 */
export function AnimatedDetails({ summary, children }: { summary: ReactNode; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const anim = useRef<Animation | null>(null);

  function onClick(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    const sum = summaryRef.current;
    if (!el || !sum) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof el.animate !== "function") return;
    e.preventDefault();
    anim.current?.cancel();

    const closedH = sum.getBoundingClientRect().height;
    const startH = el.getBoundingClientRect().height;
    const opening = !el.open;
    el.classList.add("animating");
    if (opening) el.open = true;
    const openH = el.scrollHeight;
    const to = opening ? openH : closedH;

    el.style.height = `${startH}px`;
    anim.current = el.animate([{ height: `${startH}px` }, { height: `${to}px` }], {
      duration: 260,
      easing: "cubic-bezier(.2,.7,.2,1)",
    });
    anim.current.onfinish = () => {
      if (!opening) el.open = false;
      el.style.height = "";
      el.classList.remove("animating");
      anim.current = null;
    };
    anim.current.oncancel = () => {
      el.style.height = "";
      el.classList.remove("animating");
    };
  }

  return (
    <details ref={ref}>
      <summary ref={summaryRef} onClick={onClick}>
        {summary}
      </summary>
      {children}
    </details>
  );
}
