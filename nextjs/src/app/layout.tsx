import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import "@/components/fx/fx.css";
import { RevealOnScroll } from "@/components/fx/Reveal";

// Variable font with the width axis: the homepage uses font-stretch 105–125%.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invest in athletes' careers | Finlete",
  description:
    "Finlete is a platform where athletes raise capital from fans and investors in exchange for a share of their potential future earnings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
