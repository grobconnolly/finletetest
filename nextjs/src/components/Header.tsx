"use client";

import Link from "next/link";
import { useState } from "react";
import { FinleteLogo } from "./FinleteLogo";

const NAV_LINKS = [
  { label: "Athletes", href: "/athletes" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "About us", href: "/about" },
  { label: "FAQs", href: "/#faqs" },
] as const;

const ARCHIVO = "var(--font-archivo), 'Archivo Placeholder', sans-serif";

/**
 * Top navigation bar — dark (#111), 64 px tall on desktop, full-width edge-to-edge
 * with a 20 px horizontal gutter, bottom border rgba(255,255,255,0.25).
 *
 * Layout verified against live finlete.com at 1440 px:
 *   Logo      x=20, w=128
 *   Nav links Athletes starts x=188 (left-aligned just after the logo)
 *   Sign in   x=1352 (pushed right by ml-auto)
 *
 * Responsive: hamburger drawer appears below 810 px.
 */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 bg-[#111111] text-white border-b border-white/25"
      style={{ height: 64 }}
    >
      <div className="flex items-center h-full px-5">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Finlete home"
          className="flex items-center shrink-0"
        >
          <FinleteLogo height={24} />
        </Link>

        {/* Desktop nav (≥810px) — left-aligned after logo, 40px gap */}
        <ul className="hidden md:flex items-center ml-10">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block text-[14px] font-semibold text-white transition-colors hover:text-[#44a647]"
                style={{ padding: "22px 12px", fontFamily: ARCHIVO }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign in (desktop) — ml-auto pushes to right edge */}
        <a
          href="https://app.finlete.com"
          className="hidden md:inline-flex items-center ml-auto bg-white text-[#111111] text-[14px] font-semibold transition-colors hover:bg-neutral-100"
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            fontFamily: ARCHIVO,
          }}
        >
          Sign in
        </a>

        {/* Mobile hamburger (<810px) */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
        >
          <span
            className={`block w-6 h-[2px] bg-white transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer (<810px) */}
      <div
        className={`md:hidden overflow-hidden bg-[#111] border-t border-white/10 transition-[max-height] duration-200 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col py-2">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block px-5 py-3 text-[16px] font-semibold text-white hover:text-[#44a647]"
                style={{ fontFamily: ARCHIVO }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="px-5 py-3">
            <a
              href="https://app.finlete.com"
              className="inline-flex items-center bg-white text-[#111] text-[14px] font-semibold px-3 py-2"
              style={{ borderRadius: 6, fontFamily: ARCHIVO }}
              onClick={() => setOpen(false)}
            >
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
