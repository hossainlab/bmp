"use client";
import { useState } from "react";

const solutions = [
  {
    icon: "🔬",
    title: "Production-ready pipeline — built and handed to you",
    body: "No time lost building infrastructure from scratch. You receive a fully developed, tested bioinformatics pipeline on Day 1. Focus entirely on learning and applying it to real data, not configuring tools.",
    accent: "#4d9fff",
  },
  {
    icon: "🐧",
    title: "Linux from zero — live, guided practice",
    body: "We start with 'how to open a terminal' and build up. Every command is explained, practiced, and applied in the context of bioinformatics. You'll be fluent in the commands that actually matter.",
    accent: "#7fff9f",
  },
  {
    icon: "📄",
    title: "Real data formats, demystified live",
    body: "We open and explain every file format you'll encounter — FASTQ quality scores, SAM/BAM alignment files, GTF annotations — using real sequencing data, not abstract examples.",
    accent: "#b97fff",
  },
  {
    icon: "📊",
    title: "Lean R — only what you need for RNA-seq",
    body: "Most R courses try to teach the whole language. We cover exactly the R you need for differential expression analysis — nothing more, nothing less. Efficient and immediately applicable.",
    accent: "#ffb347",
  },
  {
    icon: "💾",
    title: "Ready-to-use scripts for your own data",
    body: "You'll leave with annotated, working scripts covering the complete RNA-seq pipeline — code you can apply directly to your own samples, not just classroom examples.",
    accent: "#4d9fff",
  },
  {
    icon: "🔁",
    title: "Lifetime recordings",
    body: "Miss something live? Re-watch any session and revisit every lesson at your own pace — forever.",
    accent: "#7fff9f",
  },
];

export default function Solutions() {
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
          How This Program Solves It
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
          Everything designed
          <br />
          for the absolute beginner
        </h2>
        <p
          style={{
            fontSize: "0.97rem",
            color: "#8a9ab0",
            lineHeight: 1.7,
            marginBottom: 60,
            maxWidth: 520,
          }}
        >
          Every obstacle has a specific solution built into this program. Here&apos;s how.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {solutions.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#111720",
                border: `1px solid ${hoveredIndex === i ? s.accent + "44" : "#1e2a38"}`,
                borderRadius: 12,
                padding: "28px 24px",
                transition: "border-color 0.2s, transform 0.2s",
                transform: hoveredIndex === i ? "translateY(-3px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: s.accent + "18",
                  border: `1px solid ${s.accent}30`,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  marginBottom: 16,
                }}
              >
                {s.icon}
              </div>
              <h4
                style={{
                  fontSize: "0.93rem",
                  fontWeight: 600,
                  color: "#e8edf5",
                  marginBottom: 10,
                  lineHeight: 1.4,
                }}
              >
                {s.title}
              </h4>
              <p style={{ fontSize: "0.85rem", color: "#8a9ab0", lineHeight: 1.7 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
