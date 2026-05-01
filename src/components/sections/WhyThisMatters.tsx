"use client";
import { useState } from "react";

const cards = [
  {
    num: "01",
    label: "Computational Independence",
    title: "Stop waiting. Start analyzing.",
    body: "By the end of this program, you run your own pipelines, interpret your own results, and make decisions grounded in data — without depending on a collaborator or waiting weeks for someone else's availability.",
    accent: "#2563eb",
  },
  {
    num: "02",
    label: "A Publication to Your Name",
    title: "Leave with work you can submit",
    body: "You don't just learn techniques — you apply them to a real research question and produce a manuscript-ready output. Reproducible code, polished figures, a structured methods section, and a results narrative ready for journal submission.",
    accent: "#059669",
  },
  {
    num: "03",
    label: "A Researcher Who Can Do Both",
    title: "Rare, competitive, and in demand",
    body: "Most researchers are strong on one side. You'll leave this program fluent in both. That combination — deep biological understanding paired with hands-on data analysis — is what separates candidates in applications, fellowships, and hiring.",
    accent: "#7c3aed",
  },
];

const ngsCards = [
  {
    num: "01",
    label: "Academia",
    title: "You understand the biology — take ownership of the data",
    body: "RNA-seq is now routine across labs of every scale, yet most researchers still outsource the analysis. No collaborator shares your depth of knowledge about experimental controls, design rationale, or underlying biology. Handling your own data leads to faster turnarounds and more hypothesis-driven, accurate findings.",
    accent: "#2563eb",
  },
  {
    num: "02",
    label: "Industry",
    title: "Bridging bench and computation is a genuine career edge",
    body: "Pharmaceutical and biotech teams increasingly hire researchers who move fluidly between wet and dry lab work. This profile remains rare — and it reflects directly in compensation and the scope of roles available. Specialists anchored to only one side consistently find fewer doors open to them.",
    accent: "#059669",
  },
  {
    num: "03",
    label: "Career",
    title: "The field has shifted — computational literacy is now the floor",
    body: "NGS data spans every corner of life sciences today. Research groups without in-house analysis capability are waiting on collaborators, slipping on deadlines, and falling behind in competitive publication landscapes. Working fluently with sequencing data is no longer a differentiator — it's a baseline expectation.",
    accent: "#7c3aed",
  },
];

export default function WhyThisMatters() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="wtm-section">
      <div className="wtm-inner">
        {/* Label */}
        <p className="wtm-eyebrow">Program Outcomes</p>

        <h2 className="wtm-heading">
          Transition from data consumer to independent researcher
        </h2>
        <p className="wtm-subtext">
          Whether you&apos;re in academia or industry, the ability to analyze your
          own sequencing data is rapidly becoming a baseline expectation — not a
          bonus skill.
        </p>

        {/* Cards */}
        <div className="wtm-grid">
          {cards.map((c) => (
            <div
              key={c.num}
              className="wtm-card"
              style={{
                border: `1px solid ${hoveredCard === c.num ? c.accent + "55" : "var(--border)"}`,
                transform: hoveredCard === c.num ? "translateY(-3px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredCard(c.num)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="wtm-card-header">
                <span
                  className="wtm-badge"
                  style={{
                    color: c.accent,
                    background: c.accent + "18",
                    border: `1px solid ${c.accent}33`,
                  }}
                >
                  {c.num} / {c.label}
                </span>
              </div>
              <h3 className="wtm-card-title">{c.title}</h3>
              <p className="wtm-card-body">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="wtm-divider" />

        {/* NGS sub-section */}
        <p className="wtm-eyebrow">Why This Matters</p>
        <h2 className="wtm-heading">NGS analysis is no longer optional</h2>
        <p className="wtm-subtext">
          Sequencing data is generated in labs of every scale. The question is
          no longer whether your research involves it — it&apos;s whether you can
          work with it directly.
        </p>

        <div className="wtm-grid">
          {ngsCards.map((c) => (
            <div
              key={"ngs-" + c.num}
              className="wtm-card"
              style={{
                border: `1px solid ${hoveredCard === "ngs-" + c.num ? c.accent + "55" : "var(--border)"}`,
                transform: hoveredCard === "ngs-" + c.num ? "translateY(-3px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredCard("ngs-" + c.num)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="wtm-card-header">
                <span
                  className="wtm-badge"
                  style={{
                    color: c.accent,
                    background: c.accent + "18",
                    border: `1px solid ${c.accent}33`,
                  }}
                >
                  {c.num} / {c.label}
                </span>
              </div>
              <h3 className="wtm-card-title">{c.title}</h3>
              <p className="wtm-card-body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
