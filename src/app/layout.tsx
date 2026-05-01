import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-dm-sans", // Keeping variable name to avoid breaking existing styles
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
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
      className={inter.variable}
      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
