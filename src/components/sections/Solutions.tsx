"use client";
import { useState } from "react";


const solutions = [
  {
    icon: "🔬",
    title: "Production-grade Nextflow pipelines",
    body: "Master reproducible bioinformatics with Nextflow. Learn to build and run production-ready pipelines that are standard in international research labs and industry settings.",
    accent: "#2563eb",
  },
  {
    icon: "🐳",
    title: "Docker for bioinformatics",
    body: "Solve the 'it works on my machine' problem. Learn to containerize your environments using Docker, ensuring your research is fully reproducible and portable across any system.",
    accent: "#059669",
  },
  {
    icon: "🤖",
    title: "AI-powered productivity",
    body: "Leverage Claude Code and Gemini CLI to accelerate your bioinformatics workflows. Learn to use LLMs responsibly for code generation, debugging, and data interpretation.",
    accent: "#7c3aed",
  },
  {
    icon: "🐧",
    title: "Linux & HPC Mastery",
    body: "Go beyond the basics. Master the Linux command line and learn to scale your analyses on High-Performance Computing (HPC) and Cloud environments.",
    accent: "#d97706",
  },
  {
    icon: "📊",
    title: "Fluent R & Python",
    body: "Gain technical mastery in the two most important languages for bioinformatics. Learn exactly what you need for high-impact NGS and Single-Cell analysis.",
    accent: "#2563eb",
  },
  {
    icon: "✍️",
    title: "Bioinformatics Writing",
    body: "Learn the art of manuscript writing. From data visualization to results interpretation, we guide you through the process of communicating complex findings effectively.",
    accent: "#059669",
  },
];

export default function Solutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="sol-section">
      <div className="sol-inner">
        <p className="sol-eyebrow">How This Program Solves It</p>

        <h2 className="sol-heading">
          Our Solution
        </h2>
        <p className="sol-subtext">
          We built this program to solve every specific bottleneck for beginners.
        </p>

        <div className="sol-grid">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="sol-card"
              style={{
                border: `1px solid ${hoveredIndex === i ? s.accent + "44" : "var(--border)"}`,
                transform: hoveredIndex === i ? "translateY(-3px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="sol-icon-box"
                style={{
                  background: s.accent + "18",
                  border: `1px solid ${s.accent}30`,
                }}
              >
                {s.icon}
              </div>
              <h4 className="sol-card-title">{s.title}</h4>
              <p className="sol-card-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
