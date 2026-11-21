"use client";

import { useState } from "react";

/**
 * YouTube facades: a thumbnail and play button per video; the iframe loads
 * only when one is chosen, so the page carries no third-party script by default.
 */
export function Videos({ ids, name }: { ids: string[]; name: string }) {
  const [playing, setPlaying] = useState<string | null>(null);
  if (!ids.length) return null;
  return (
    <section className="section videos" id="videos">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">Watch {name}</h2>
        </div>
        <div className="video-grid">
          {ids.map((id, i) => (
            <div className={`video ${i === 0 ? "lead" : ""}`} key={id}>
              {playing === id ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
                  title={`${name} video ${i + 1}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button type="button" onClick={() => setPlaying(id)} aria-label={`Play video ${i + 1}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${id}/${i === 0 ? "maxresdefault" : "mqdefault"}.jpg`}
                    alt=""
                    loading={i === 0 ? "eager" : "lazy"}
                    width={i === 0 ? 1280 : 320}
                    height={i === 0 ? 720 : 180}
                  />
                  <span className="play" aria-hidden="true" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
