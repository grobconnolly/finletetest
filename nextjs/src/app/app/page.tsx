import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MetricBand } from "@/components/MetricBand";
import { Footer } from "@/components/Footer";

const ARCHIVO = "var(--font-archivo), 'Archivo Placeholder', sans-serif";

export default function AppPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MetricBand />

        {/* Placeholder for sections still to build. Click the links to see the
            corresponding Framer mirror until the React version lands. */}
        <section
          className="mx-auto text-center"
          style={{
            maxWidth: 1200,
            paddingInline: 20,
            paddingBlock: "80px 0",
            fontFamily: ARCHIVO,
          }}
        >
          <p style={{ color: "#44a647", fontSize: 14, fontWeight: 700, margin: 0 }}>
            Building now
          </p>
          <h2
            style={{
              fontSize: 39,
              fontWeight: 800,
              color: "#111",
              marginTop: 8,
              lineHeight: 1.1,
            }}
          >
            Header, Hero, Metric Band, Footer are live.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#666",
              maxWidth: 560,
              margin: "24px auto 0",
              lineHeight: 1.6,
            }}
          >
            Next sessions: How it works, Audience cards, Roster, Perks, Testimonials,
            FAQ, For-Athletes CTA, Final CTA, and the athlete profile template.
            Compare this page to{" "}
            <a
              href="https://finlete.com"
              style={{ color: "#44a647", textDecoration: "underline" }}
            >
              finlete.com
            </a>{" "}
            to judge the fidelity so far.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
