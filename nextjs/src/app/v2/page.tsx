import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/**
 * /v2 — progressive React rebuild of finlete.com.
 *
 * Visit this path to preview the hand-written React version alongside
 * the pixel-perfect Framer mirror at `/`. As each section gets rebuilt,
 * we drop its placeholder below.
 */
export default function V2Home() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-[1200px] px-5 py-24 text-center">
          <p
            className="mb-2 font-[var(--font-archivo)] text-sm font-semibold"
            style={{ color: "#44a647" }}
          >
            Progress preview
          </p>
          <h1 className="font-[var(--font-archivo)] text-[49px] font-extrabold leading-[1.1]">
            Header is live.
          </h1>
          <p className="mt-4 text-[16px] text-[#666666] max-w-[560px] mx-auto">
            Compare the nav above to{" "}
            <a
              href="/"
              className="underline hover:text-[#44a647]"
            >
              the mirror
            </a>
            . Hero, Metric Band, and the rest land in follow-up commits.
          </p>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 pb-24 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-[#e6e6e6] p-5">
            <h2 className="font-[var(--font-archivo)] text-[20px] font-bold mb-2">
              Built
            </h2>
            <ul className="text-sm text-[#666666] leading-relaxed list-disc list-inside">
              <li>Header (desktop + tablet + mobile hamburger)</li>
              <li>FinleteLogo SVG</li>
            </ul>
          </div>
          <div className="rounded-lg border border-[#e6e6e6] p-5">
            <h2 className="font-[var(--font-archivo)] text-[20px] font-bold mb-2">
              Next up
            </h2>
            <ul className="text-sm text-[#666666] leading-relaxed list-disc list-inside">
              <li>Hero (headline, chips, athlete photo, ELITE card)</li>
              <li>MetricBand (6-stat row)</li>
              <li>Footer</li>
              <li>How it works / Audience / Roster / Perks / Testimonials / FAQ</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
