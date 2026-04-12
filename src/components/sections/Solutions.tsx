"use client";
import { useState } from "react";
import styles from "./Solutions.module.css";

const solutions = [
  {
    icon: "🔬",
    title: "Production-ready pipeline — built and handed to you",
    body: "No time lost building infrastructure from scratch. You receive a fully developed, tested bioinformatics pipeline on Day 1. Focus entirely on learning and applying it to real data, not configuring tools.",
    accent: "#2563eb",
  },
  {
    icon: "🐧",
    title: "Linux from zero — live, guided practice",
    body: "We start with 'how to open a terminal' and build up. Every command is explained, practiced, and applied in the context of bioinformatics. You'll be fluent in the commands that actually matter.",
    accent: "#059669",
  },
  {
    icon: "📄",
    title: "Real data formats, demystified live",
    body: "We open and explain every file format you'll encounter — FASTQ quality scores, SAM/BAM alignment files, GTF annotations — using real sequencing data, not abstract examples.",
    accent: "#7c3aed",
  },
  {
    icon: "📊",
    title: "Lean R — only what you need for RNA-seq",
    body: "Most R courses try to teach the whole language. We cover exactly the R you need for differential expression analysis — nothing more, nothing less. Efficient and immediately applicable.",
    accent: "#d97706",
  },
  {
    icon: "💾",
    title: "Ready-to-use scripts for your own data",
    body: "You'll leave with annotated, working scripts covering the complete RNA-seq pipeline — code you can apply directly to your own samples, not just classroom examples.",
    accent: "#2563eb",
  },
  {
    icon: "🔁",
    title: "Lifetime recordings",
    body: "Miss something live? Re-watch any session and revisit every lesson at your own pace — forever.",
    accent: "#059669",
  },
];

export default function Solutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>How This Program Solves It</p>

        <h2 className={styles.heading}>
          Everything designed
          <br />
          for the absolute beginner
        </h2>
        <p className={styles.subtext}>
          Every obstacle has a specific solution built into this program. Here&apos;s how.
        </p>

        <div className={styles.grid}>
          {solutions.map((s, i) => (
            <div
              key={i}
              className={styles.card}
              style={{
                border: `1px solid ${hoveredIndex === i ? s.accent + "44" : "var(--border)"}`,
                transform: hoveredIndex === i ? "translateY(-3px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={styles.iconBox}
                style={{
                  background: s.accent + "18",
                  border: `1px solid ${s.accent}30`,
                }}
              >
                {s.icon}
              </div>
              <h4 className={styles.cardTitle}>{s.title}</h4>
              <p className={styles.cardBody}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
