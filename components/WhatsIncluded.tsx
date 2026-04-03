"use client";
import { useState } from "react";

const items = [
  {
    title: "8 live mentorship sessions",
    sub: "Monthly 2-hour sessions covering theory, logic, and troubleshooting",
  },
  {
    title: "Proprietary analysis pipelines",
    sub: "Pre-developed R/Python/Linux workflows for cancer genomics and neurogenomics",
  },
  {
    title: "Complete research portfolio",
    sub: "End-to-end bioinformatics project with reproducible GitHub repository",
  },
  {
    title: "Publication pathway guidance",
    sub: "Mentor review of abstract, methods, results, and manuscript preparation",
  },
  {
    title: "High-performance computing setup",
    sub: "Guidance on cloud environments and local HPC configuration",
  },
  {
    title: "Dataset mining expertise",
    sub: "Hands-on guidance accessing TCGA, GEO, GTEx, and SRA databases",
  },
  {
    title: "Publication-quality figures",
    sub: "Suite of reproducible visualizations: volcano plots, heatmaps, networks, survival curves",
  },
  {
    title: "Certificate of completion + Letter of Recommendation",
    sub: "Professional credentials for graduate school and industry applications",
  },
];

export default function WhatsIncluded() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#0d1219",
        borderTop: "1px solid #1e2a38",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#4a6a8a",
            marginBottom: 16,
          }}
        >
          What&apos;s Included
        </p>

        <h2
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
            color: "#e8edf5",
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Everything you need,
          <br />
          nothing you don&apos;t
        </h2>
        <p
          style={{
            fontSize: "0.97rem",
            color: "#8a9ab0",
            lineHeight: 1.7,
            marginBottom: 60,
          }}
        >
          One enrollment covers the full program experience — tools, support, and materials.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 12,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#111720",
                border: `1px solid ${hoveredIndex === i ? "#7fff9f33" : "#1e2a38"}`,
                borderRadius: 10,
                padding: "20px 22px",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span
                style={{
                  color: "#7fff9f",
                  fontSize: "1rem",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                ✓
              </span>
              <div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#e8edf5",
                    marginBottom: 4,
                  }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#5a7a9a" }}>
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
