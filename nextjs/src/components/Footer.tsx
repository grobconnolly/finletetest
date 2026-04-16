import Link from "next/link";
import { FinleteLogo } from "./FinleteLogo";

const ARCHIVO = "var(--font-archivo), 'Archivo Placeholder', sans-serif";

const COMPANY_LINKS = [
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "mailto:info@finlete.com" },
];

const PRODUCT_LINKS = [
  { label: "Athletes", href: "/athletes" },
  { label: "How it works", href: "/#how-it-works" },
];

const RESOURCES_LINKS = [
  { label: "Terms of Service", href: "/legal/terms-of-service" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
];

const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/finlete", icon: "x" as const },
  { label: "Facebook", href: "https://www.facebook.com/FinletePro/", icon: "facebook" as const },
  { label: "Instagram", href: "https://www.instagram.com/finlete/", icon: "instagram" as const },
];

/**
 * Site footer — dark (#111), border-top rgba(255,255,255,0.25).
 * Desktop padding: 60 80 16, overall ~341 px tall at 1440 wide.
 *
 * Layout verified against live mirror:
 *   Left col  (x=80):   logo → tagline → socials → copyright
 *   Col 1     (x=902):  Company (About us, Contact us)
 *   Col 2     (x=1072): Product (Athletes, How it works)
 *   Col 3     (x=1242): Resources (Terms of Service, Privacy Policy)
 *   Col gap:  170 px each
 */
export function Footer() {
  return (
    <footer
      className="bg-[#111111] text-white border-t border-white/25"
      style={{ padding: "60px 80px 16px", fontFamily: ARCHIVO }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-x-[170px] gap-y-10 max-w-[1440px] mx-auto">
        {/* Left: brand + tagline + socials */}
        <div className="flex flex-col gap-6">
          <Link href="/" aria-label="Finlete home" className="inline-block w-fit">
            <FinleteLogo height={24} />
          </Link>
          <p className="text-[16px] font-semibold leading-[1.4] max-w-[320px]">
            Own a stake in tomorrow&rsquo;s champions
          </p>
          <div className="flex items-center gap-4 mt-4">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center text-white hover:text-[#44a647] transition-colors"
              >
                <SocialIcon type={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <FooterColumn heading="Company" links={COMPANY_LINKS} />

        {/* Product */}
        <FooterColumn heading="Product" links={PRODUCT_LINKS} />

        {/* Resources */}
        <FooterColumn heading="Resources" links={RESOURCES_LINKS} />
      </div>

      {/* Copyright */}
      <p className="mt-20 text-[16px] text-white/80">
        © {new Date().getFullYear()} Finlete. All rights reserved
      </p>
    </footer>
  );
}

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h6
        className="text-[20px] font-bold mb-2"
        style={{ fontFamily: ARCHIVO, lineHeight: 1.2, color: "#ffffff" }}
      >
        {heading}
      </h6>
      {links.map((l) => (
        <FooterLink key={l.label} href={l.href}>
          {l.label}
        </FooterLink>
      ))}
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("mailto:") || href.startsWith("http");
  const className =
    "text-[16px] text-white hover:text-[#44a647] transition-colors w-fit";
  if (isExternal) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function SocialIcon({ type }: { type: "x" | "facebook" | "instagram" }) {
  const common = { width: 24, height: 24, fill: "currentColor" } as const;
  if (type === "x") {
    return (
      <svg {...common} viewBox="0 0 24 24" aria-hidden>
        <path d="M18.244 2h3.308l-7.227 8.26L22 22h-6.828l-5.35-7.013L3.58 22H.27l7.73-8.837L0 2h6.998l4.837 6.4L18.244 2zm-1.161 18h1.833L7.045 3.89H5.08L17.083 20z" />
      </svg>
    );
  }
  if (type === "facebook") {
    return (
      <svg {...common} viewBox="0 0 24 24" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }
  // instagram
  return (
    <svg {...common} viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
