import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bioinformatics Mentorship Program — 12-Week Cancer Genomics & Neurogenomics Research",
  description:
    "An intensive 12-week mentorship program designed for undergraduate and graduate students to conduct independent research in cancer genomics or neurogenomics. Master bulk RNA-seq and multi-omics analysis, build a publication-ready research portfolio, and launch your scientific career under expert guidance from Md. Jubayer Hossain.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable}`}
      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
    >
      <body className="min-h-screen">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
