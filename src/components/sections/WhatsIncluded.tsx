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
    <section className="wi-section">
      <div className="wi-inner">
        <p className="wi-eyebrow">What&apos;s Included</p>

        <h2 className="wi-heading">
          What&apos;s Included
        </h2>
        <p className="wi-subtext">
          One enrollment covers the full program experience — tools, support, and materials.
        </p>

        <div className="wi-grid">
          {items.map((item, i) => (
            <div
              key={i}
              className="wi-item"
              style={{
                border: `1px solid ${hoveredIndex === i ? "#05966933" : "var(--border)"}`,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="wi-check">✓</span>
              <div>
                <div className="wi-item-title">{item.title}</div>
                <div className="wi-item-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
