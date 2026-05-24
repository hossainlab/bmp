import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import FacebookPixel from "@/components/layout/FacebookPixel";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bioinformatics Mentorship Program — 12-Week Intensive Research Mentorship",
  description:
    "An intensive 12-week mentorship program designed for researchers to conduct independent, high-impact bioinformatics research across any disease area. Master production-grade pipelines, build a publication-ready portfolio, and launch your scientific career under expert guidance from Md. Jubayer Hossain.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={inter.variable}
    >
      <body className="min-h-screen">
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
