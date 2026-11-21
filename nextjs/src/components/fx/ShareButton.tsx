"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Share this page: the system share sheet on phones, copy-the-link on
 * desktops, with a short "Link copied" note either way it falls back.
 */
export function ShareButton({
  title,
  text,
  className = "btn btn-secondary",
}: {
  title: string;
  text?: string;
  className?: string;
}) {
  const [note, setNote] = useState<string | null>(null);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function flash(msg: string) {
    setNote(msg);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setNote(null), 2200);
  }

  async function share() {
    const url = window.location.href.split("#")[0];
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ title, text, url });
        return;
      }
    } catch (err) {
      // The person closed the sheet; nothing to say.
      if ((err as { name?: string })?.name === "AbortError") return;
    }
    try {
      await navigator.clipboard.writeText(url);
      flash("Link copied");
    } catch {
      flash(url);
    }
  }

  return (
    <span className="share-wrap">
      <button type="button" className={className} onClick={share}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: 8 }}>
          <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13" />
        </svg>
        Share
      </button>
      <span className={`share-note${note ? " show" : ""}`} role="status" aria-live="polite">
        {note ?? ""}
      </span>
    </span>
  );
}
