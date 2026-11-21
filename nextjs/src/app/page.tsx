import type { Metadata } from "next";
import "./home.css";
import { Nav } from "@/components/home/Nav";
import { Hero } from "@/components/home/Hero";
import { ProofBand } from "@/components/home/ProofBand";
import { Athletes } from "@/components/home/Athletes";
import { MoneyFlow } from "@/components/home/MoneyFlow";
import { Simulator } from "@/components/home/Simulator";
import { Players } from "@/components/home/Players";
import { Signup } from "@/components/home/Signup";
import { Faq } from "@/components/home/Faq";
import { Closing } from "@/components/home/Closing";
import { SiteFooter } from "@/components/home/SiteFooter";

export const metadata: Metadata = {
  title: "Invest in athletes' careers | Finlete",
  description:
    "Finlete is where athletes raise capital and investors can invest in athletes' careers. Investing is speculative and you can lose your entire investment.",
};

export default function HomePage() {
  return (
    <div className="page">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <ProofBand />
        <Athletes />
        <MoneyFlow />
        <Simulator />
        <Players />
        <Signup />
        <Faq />
        <Closing />
      </main>
      <SiteFooter />
    </div>
  );
}
