"use client";
import { useState, useEffect } from "react";

const stats = [
  { value: "12",   label: "Weeks" },
  { value: "20",   label: "Max Seats" },
  { value: "8",    label: "Live Sessions" },
  { value: "100%", label: "Research Output" },
];

const steps = [
  { done: true,  active: false, text: "Load TCGA-BRCA dataset  (1,095 samples)" },
  { done: true,  active: false, text: "Salmon alignment + quantification" },
  { done: true,  active: false, text: "DESeq2 differential expression" },
  { done: false, active: true,  text: "Pathway enrichment + visualizations" },
  { done: false, active: false, text: "Manuscript preparation" },
];

const outputs = [
  { label: "DEGs Found", value: "342",  color: "#4d9fff" },
  { label: "Pathways",   value: "28",   color: "#7fff9f" },
  { label: "Figures",    value: "12",   color: "#b97fff" },
];

const meta = [
  { k: "Track",    v: "Cancer Genomics" },
  { k: "Dataset",  v: "TCGA-BRCA" },
  { k: "Samples",  v: "1,095 patients" },
  { k: "Pipeline", v: "Salmon + DESeq2" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [cursor, setCursor]   = useState(true);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
        background: "#0a0e14",
      }}
    >
      {/* Dot-grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(77,159,255,0.07) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          pointerEvents: "none",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 90% at 50% 40%, black 30%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "0%",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(77,159,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "0%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(127,255,159,0.05) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="stack-on-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* ── LEFT: copy ── */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(77,159,255,0.07)",
                border: "1px solid rgba(77,159,255,0.18)",
                borderRadius: 20,
                padding: "7px 16px",
                marginBottom: 32,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-10px)",
                transition: "all 0.5s ease-out",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#7fff9f",
                  display: "inline-block",
                  animation: "heroPulse 2.5s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#4d9fff",
                  fontWeight: 600,
                }}
              >
                Cohort 01 · Enrollment Open
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(2.6rem, 4.2vw, 4rem)",
                lineHeight: 1.1,
                color: "#e8edf5",
                marginBottom: 22,
                letterSpacing: "-0.02em",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.6s ease-out 0.1s",
              }}
            >
              From Student
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  background:
                    "linear-gradient(135deg, #4d9fff 0%, #7fff9f 55%, #b97fff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                to Published Researcher
              </em>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "1rem",
                color: "#8a9ab0",
                lineHeight: 1.8,
                maxWidth: 460,
                marginBottom: 40,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.2s",
              }}
            >
              A 12-week intensive mentorship in cancer genomics and
              neurogenomics. Work directly with Md. Jubayer Hossain — from
              raw sequencing data to a manuscript ready for peer review.
            </p>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                gap: 36,
                marginBottom: 44,
                flexWrap: "wrap",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.6s ease-out 0.3s",
              }}
            >
              {stats.map((s, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-serif), serif",
                      fontSize: "2rem",
                      color: "#e8edf5",
                      lineHeight: 1,
                      marginBottom: 5,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      color: "#4a6a8a",
                      fontFamily: "monospace",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.6s ease-out 0.4s",
              }}
            >
              <a
                href="https://tinyurl.com/bmp-application"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#4d9fff",
                  color: "#0a0e14",
                  fontWeight: 700,
                  fontSize: "0.93rem",
                  padding: "14px 32px",
                  borderRadius: 8,
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  boxShadow: "0 0 36px rgba(77,159,255,0.28)",
                  transition: "all 0.25s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.background = "#6db3ff";
                  e.currentTarget.style.boxShadow =
                    "0 8px 40px rgba(77,159,255,0.42)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "#4d9fff";
                  e.currentTarget.style.boxShadow =
                    "0 0 36px rgba(77,159,255,0.28)";
                }}
              >
                Apply for Cohort 5 →
              </a>

              <a
                href="#curriculum"
                style={{
                  background: "transparent",
                  color: "#8a9ab0",
                  fontWeight: 500,
                  fontSize: "0.93rem",
                  padding: "14px 28px",
                  borderRadius: 8,
                  textDecoration: "none",
                  border: "1px solid #1e2a38",
                  transition: "all 0.25s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(77,159,255,0.35)";
                  e.currentTarget.style.color = "#4d9fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1e2a38";
                  e.currentTarget.style.color = "#8a9ab0";
                }}
              >
                View 12-Week Roadmap
              </a>
            </div>

            {/* Mentor line */}
            <p
              style={{
                fontSize: "0.72rem",
                color: "#2e4a62",
                marginTop: 28,
                fontFamily: "monospace",
                letterSpacing: "0.04em",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.6s ease-out 0.55s",
              }}
            >
              Mentor: Md. Jubayer Hossain · Founder & CEO, DeepBio Ltd ·{" "}
              <span style={{ color: "#3a6a4a" }}>20 seats available</span>
            </p>
          </div>

          {/* ── RIGHT: analysis panel ── */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(28px)",
              transition: "all 0.7s ease-out 0.35s",
            }}
          >
            <div
              style={{
                background: "#0d1219",
                border: "1px solid #1e2a38",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(77,159,255,0.04)",
              }}
            >
              {/* Window chrome */}
              <div
                style={{
                  background: "#111720",
                  borderBottom: "1px solid #1e2a38",
                  padding: "11px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div style={{ display: "flex", gap: 6 }}>
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <div
                      key={c}
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: c,
                        opacity: 0.8,
                      }}
                    />
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.7rem",
                    color: "#3a5a7a",
                    marginLeft: 8,
                  }}
                >
                  bmp_analysis.R — BigBioinformatics Lab
                </span>
              </div>

              {/* Panel body */}
              <div style={{ padding: "18px 20px" }}>
                {/* Meta grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                    marginBottom: 18,
                  }}
                >
                  {meta.map(({ k, v }) => (
                    <div
                      key={k}
                      style={{
                        background: "#0a0e14",
                        border: "1px solid #1a2535",
                        borderRadius: 8,
                        padding: "9px 12px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.6rem",
                          color: "#2e4a62",
                          fontFamily: "monospace",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          marginBottom: 3,
                        }}
                      >
                        {k}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          color: "#b0c4d8",
                        }}
                      >
                        {v}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pipeline steps */}
                <div
                  style={{
                    fontSize: "0.6rem",
                    fontFamily: "monospace",
                    color: "#2e4a62",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 8,
                  }}
                >
                  Analysis Pipeline
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    marginBottom: 18,
                  }}
                >
                  {steps.map((step, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "7px 10px",
                        borderRadius: 6,
                        background: step.active
                          ? "rgba(77,159,255,0.06)"
                          : "transparent",
                        border: step.active
                          ? "1px solid rgba(77,159,255,0.12)"
                          : "1px solid transparent",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "monospace",
                          fontSize: "0.72rem",
                          flexShrink: 0,
                          width: 14,
                          color: step.done
                            ? "#7fff9f"
                            : step.active
                            ? "#4d9fff"
                            : "#1e2a38",
                        }}
                      >
                        {step.done ? "✓" : step.active ? "▶" : "○"}
                      </span>
                      <span
                        style={{
                          fontSize: "0.77rem",
                          fontFamily: "monospace",
                          color: step.done
                            ? "#3a6a4a"
                            : step.active
                            ? "#c0d0e0"
                            : "#1e2a38",
                        }}
                      >
                        {step.text}
                        {step.active && (
                          <span
                            style={{ opacity: cursor ? 1 : 0, transition: "opacity 0.1s" }}
                          >
                            _
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Output metrics */}
                <div
                  style={{
                    fontSize: "0.6rem",
                    fontFamily: "monospace",
                    color: "#2e4a62",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 8,
                  }}
                >
                  Output
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {outputs.map(({ label, value, color }) => (
                    <div
                      key={label}
                      style={{
                        flex: 1,
                        background: "#0a0e14",
                        border: "1px solid #1a2535",
                        borderRadius: 8,
                        padding: "10px 10px",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-dm-serif), serif",
                          fontSize: "1.5rem",
                          color,
                          lineHeight: 1,
                          marginBottom: 5,
                        }}
                      >
                        {value}
                      </div>
                      <div
                        style={{
                          fontSize: "0.6rem",
                          color: "#2e4a62",
                          fontFamily: "monospace",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(127,255,159,0.5); }
          50%       { opacity: 0.7; box-shadow: 0 0 0 6px rgba(127,255,159,0); }
        }
      `}</style>
    </section>
  );
}
