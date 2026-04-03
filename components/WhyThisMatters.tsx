"use client";
import { useState } from "react";

const cards = [
  {
    num: "01",
    label: "Computational Independence",
    title: "Stop waiting. Start analyzing.",
    body: "By the end of this program, you run your own pipelines, interpret your own results, and make decisions grounded in data — without depending on a collaborator or waiting weeks for someone else's availability.",
    accent: "#4d9fff",
  },
  {
    num: "02",
    label: "A Publication to Your Name",
    title: "Leave with work you can submit",
    body: "You don't just learn techniques — you apply them to a real research question and produce a manuscript-ready output. Reproducible code, polished figures, a structured methods section, and a results narrative ready for journal submission.",
    accent: "#7fff9f",
  },
  {
    num: "03",
    label: "A Researcher Who Can Do Both",
    title: "Rare, competitive, and in demand",
    body: "Most researchers are strong on one side. You'll leave this program fluent in both. That combination — deep biological understanding paired with hands-on data analysis — is what separates candidates in applications, fellowships, and hiring.",
    accent: "#b97fff",
  },
];

const ngsCards = [
  {
    num: "01",
    label: "Academia",
    title: "You understand the biology — take ownership of the data",
    body: "RNA-seq is now routine across labs of every scale, yet most researchers still outsource the analysis. No collaborator shares your depth of knowledge about experimental controls, design rationale, or underlying biology. Handling your own data leads to faster turnarounds and more hypothesis-driven, accurate findings.",
    accent: "#4d9fff",
  },
  {
    num: "02",
    label: "Industry",
    title: "Bridging bench and computation is a genuine career edge",
    body: "Pharmaceutical and biotech teams increasingly hire researchers who move fluidly between wet and dry lab work. This profile remains rare — and it reflects directly in compensation and the scope of roles available. Specialists anchored to only one side consistently find fewer doors open to them.",
    accent: "#7fff9f",
  },
  {
    num: "03",
    label: "Career",
    title: "The field has shifted — computational literacy is now the floor",
    body: "NGS data spans every corner of life sciences today. Research groups without in-house analysis capability are waiting on collaborators, slipping on deadlines, and falling behind in competitive publication landscapes. Working fluently with sequencing data is no longer a differentiator — it's a baseline expectation.",
    accent: "#b97fff",
  },
];

export default function WhyThisMatters() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section style={{ padding: "100px 24px", background: "#0a0e14" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Label */}
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
          Program Outcomes
        </p>

        <h2
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            color: "#e8edf5",
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Transition from data consumer to independent researcher
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#8a9ab0",
            maxWidth: 580,
            lineHeight: 1.7,
            marginBottom: 60,
          }}
        >
          Whether you're in academia or industry, the ability to analyze your
          own sequencing data is rapidly becoming a baseline expectation — not a
          bonus skill.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {cards.map((c) => (
            <div
              key={c.num}
              style={{
                background: "#111720",
                border: `1px solid ${hoveredCard === c.num ? c.accent + "55" : "#1e2a38"}`,
                borderRadius: 12,
                padding: "32px 28px",
                transition: "border-color 0.2s, transform 0.2s",
                transform: hoveredCard === c.num ? "translateY(-3px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredCard(c.num)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.7rem",
                    color: c.accent,
                    background: c.accent + "18",
                    border: `1px solid ${c.accent}33`,
                    borderRadius: 4,
                    padding: "3px 8px",
                  }}
                >
                  {c.num} / {c.label}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#e8edf5",
                  marginBottom: 12,
                  lineHeight: 1.4,
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#8a9ab0", lineHeight: 1.7 }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid #1e2a38",
            margin: "72px 0 64px",
          }}
        />

        {/* NGS sub-section */}
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
          Why This Matters
        </p>
        <h2
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            color: "#e8edf5",
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          NGS analysis is no longer optional
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#8a9ab0",
            maxWidth: 580,
            lineHeight: 1.7,
            marginBottom: 60,
          }}
        >
          Sequencing data is generated in labs of every scale. The question is
          no longer whether your research involves it — it's whether you can
          work with it directly.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {ngsCards.map((c) => (
            <div
              key={"ngs-" + c.num}
              style={{
                background: "#111720",
                border: `1px solid ${hoveredCard === "ngs-" + c.num ? c.accent + "55" : "#1e2a38"}`,
                borderRadius: 12,
                padding: "32px 28px",
                transition: "border-color 0.2s, transform 0.2s",
                transform: hoveredCard === "ngs-" + c.num ? "translateY(-3px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredCard("ngs-" + c.num)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.7rem",
                    color: c.accent,
                    background: c.accent + "18",
                    border: `1px solid ${c.accent}33`,
                    borderRadius: 4,
                    padding: "3px 8px",
                  }}
                >
                  {c.num} / {c.label}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#e8edf5",
                  marginBottom: 12,
                  lineHeight: 1.4,
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#8a9ab0", lineHeight: 1.7 }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
