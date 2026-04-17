import Image from "next/image";
import Link from "next/link";

const ARCHIVO = "var(--font-archivo), 'Archivo Placeholder', sans-serif";

/**
 * Homepage hero — measured against live finlete.com at 1440 px:
 *   Active-users pill  x=120 y=134 w=238 h=48
 *   Green phrase       color #3cc03e  font-size 54px / weight 700 / lh 1.04
 *   Browse CTA         222×56 dark (#111) pill, 8 px radius, 16/20 padding
 *   Stat chip          204×38 white pill, 19 px radius, shadow 0 1px 24px rgba(0,0,0,.17)
 *   Athlete photo src  /images/Fk2I9sJIBpiJ7KNjIWWb1nmEwM_w759.png
 *
 * Responsive: 5:7 column split at ≥1000 px, stacked below.
 */
export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)",
      }}
    >
      {/* subtle grid pattern under the right column */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          backgroundPosition: "0 0",
        }}
      />

      <div
        className="relative mx-auto grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-0"
        style={{
          maxWidth: 1440,
          paddingInline: 20,
          paddingBlock: "70px 0",
          minHeight: 836,
        }}
      >
        {/* ==================== LEFT COLUMN ==================== */}
        <div className="flex flex-col justify-center gap-6" style={{ maxWidth: 580 }}>
          {/* Active Users pill */}
          <ActiveUsersPill />

          {/* Headline */}
          <h1
            style={{
              fontFamily: ARCHIVO,
              fontSize: "clamp(39px, 4.5vw, 54px)",
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-0.01em",
              color: "#111",
              margin: 0,
            }}
          >
            Invest in the careers of{" "}
            <span style={{ color: "#3cc03e" }}>top MLB prospects.</span>{" "}
            Earn as they do.
          </h1>

          {/* Sub paragraph */}
          <p
            style={{
              fontFamily: ARCHIVO,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#666666",
              maxWidth: 500,
              margin: 0,
            }}
          >
            Pick a prospect. Buy shares through an SEC registered broker
            dealer. If they sign an MLB contract, you earn a fixed percentage
            of their salary.
          </p>

          {/* Structured athlete agreements callout */}
          <div
            style={{
              borderLeft: "3px solid #3cc03e",
              paddingLeft: 16,
              marginTop: 8,
            }}
          >
            <p
              style={{
                fontFamily: ARCHIVO,
                fontSize: 15,
                fontWeight: 700,
                color: "#111",
                margin: 0,
              }}
            >
              Structured athlete agreements.
            </p>
            <p
              style={{
                fontFamily: ARCHIVO,
                fontSize: 14,
                fontWeight: 400,
                color: "#666666",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              No loans. No equity. Transparent income-share agreements.
            </p>
          </div>

          {/* CTA */}
          <div>
            <Link
              href="/athletes"
              className="inline-flex items-center justify-center transition-opacity hover:opacity-90"
              style={{
                background: "#111111",
                color: "#ffffff",
                padding: "16px 20px",
                borderRadius: 8,
                fontFamily: ARCHIVO,
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                minWidth: 222,
                height: 56,
              }}
            >
              Browse Live Offerings
            </Link>
          </div>

          {/* Check list */}
          <ul className="flex flex-col gap-2.5 mt-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "SEC-registered broker-dealer",
              "Regulation CF offerings",
              "Clear, upfront, standardized terms",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle />
                <span
                  style={{
                    fontFamily: ARCHIVO,
                    fontSize: 15,
                    color: "#111",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ==================== RIGHT COLUMN ==================== */}
        <div className="relative min-h-[520px] lg:min-h-[760px]">
          {/* Athlete photo — Yairo Padilla */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/Ym6LypgeRMRKqdwoOMt1QLxYoo_w1200.png"
              alt="Yairo Padilla"
              fill
              sizes="(max-width: 1000px) 100vw, 58vw"
              priority
              style={{ objectFit: "contain", objectPosition: "center bottom" }}
            />
          </div>

          {/* Stat chips — upper right */}
          <div className="absolute right-0 flex flex-col gap-3 items-end" style={{ top: 120, paddingRight: 24 }}>
            <StatChip>90 Percentile EV (2025)</StatChip>
            <StatChip>24 SB in 120 AB (2025)</StatChip>
            <StatChip>.396 OBP (2025)</StatChip>
          </div>

          {/* ELITE ATHLETICISM card */}
          <EliteCard />
        </div>
      </div>
    </section>
  );
}

/* ==================== Sub-components ==================== */

function ActiveUsersPill() {
  return (
    <div
      className="inline-flex items-center gap-3"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 999,
        padding: "8px 16px 8px 8px",
        width: "fit-content",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <span style={{ width: 8, height: 8, borderRadius: 999, background: "#44a647" }} />
      <div className="flex -space-x-2">
        <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-white bg-gray-300">
          <Image src="/images/eNmW7Pob4objsXYnoXu7IOQbvcU_w200.png" alt="" width={28} height={28} style={{ objectFit: "cover", filter: "grayscale(100%)" }} />
        </div>
        <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-white bg-gray-400">
          <Image src="/images/oD5hGY2bk5J2Y8OGgAS1Qn4Ljs_w400.jpg" alt="" width={28} height={28} style={{ objectFit: "cover", filter: "grayscale(100%)" }} />
        </div>
        <div
          className="w-7 h-7 rounded-full ring-2 ring-white flex items-center justify-center"
          style={{ background: "#111", color: "#fff", fontSize: 11, fontWeight: 700, fontFamily: ARCHIVO }}
        >
          +4k
        </div>
      </div>
      <span
        style={{
          fontFamily: ARCHIVO,
          fontSize: 14,
          fontWeight: 600,
          color: "#111",
        }}
      >
        Active Users
      </span>
    </div>
  );
}

function CheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="10" fill="#44a647" />
      <path
        d="M5 10l3.5 3.5L15 7"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatChip({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2"
      style={{
        background: "#ffffff",
        borderRadius: 999,
        padding: "10px 16px",
        boxShadow: "0 1px 24px rgba(0,0,0,0.17)",
        fontFamily: ARCHIVO,
        fontSize: 14,
        fontWeight: 700,
        color: "#262626",
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: 999, background: "#44a647" }} />
      {children}
    </div>
  );
}

function EliteCard() {
  return (
    <div
      className="absolute"
      style={{
        right: 0,
        bottom: 0,
        width: 362,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow:
          "0 16px 48px -8px rgba(68, 166, 71, 0.4), 0 4px 16px rgba(0,0,0,0.1)",
      }}
    >
      {/* ELITE ATHLETICISM label band */}
      <div
        style={{
          background: "#111",
          color: "#fff",
          fontFamily: ARCHIVO,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.1em",
          padding: "12px 24px",
          textAlign: "left",
        }}
      >
        ELITE ATHLETICISM
      </div>
      {/* Green gradient body */}
      <div
        style={{
          background: "linear-gradient(231deg, #111 10%, #44a647 100%)",
          padding: "28px 28px 32px",
          color: "#fff",
        }}
      >
        <h3
          style={{
            fontFamily: ARCHIVO,
            fontSize: 36,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "#fff",
            margin: 0,
          }}
        >
          Yairo
          <br />
          Padilla
        </h3>
        <p
          style={{
            fontFamily: ARCHIVO,
            fontSize: 13,
            color: "rgba(255,255,255,0.85)",
            margin: "12px 0 20px",
          }}
        >
          St. Louis Cardinals · SS · Rookie
        </p>
        <p
          style={{
            fontFamily: ARCHIVO,
            fontSize: 13,
            color: "#fff",
            lineHeight: 1.45,
            margin: 0,
          }}
        >
          Has been compared to{" "}
          <strong style={{ fontWeight: 700 }}>Elly De La Cruz</strong> and{" "}
          <strong style={{ fontWeight: 700 }}>Fernando Tatis Jr.</strong>
        </p>
      </div>
    </div>
  );
}
