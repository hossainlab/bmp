"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const meta = [
    { label: "12-Week Program", sub: "Cancer Genomics or Neurogenomics" },
    { label: "8 Live Sessions", sub: "2 hours per session, monthly" },
    { label: "Research Portfolio", sub: "Publication-quality output" },
    { label: "20 Seats Maximum", sub: "Limited cohort enrollment" },
    { label: "Industry-Grade Tools", sub: "DESeq2, Seurat, TCGA/GEO access" },
  ];

  const outcomes = [
    { icon: "📊", label: "Publication-Ready", value: "100% of mentees" },
    { icon: "🧬", label: "Data Mastery", value: "TCGA/GEO/GTEx" },
    { icon: "📈", label: "Research Impact", value: "Peer-reviewed" },
  ];

  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    setAnimateElements(true);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Enhanced background with multiple glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(77,159,255,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "5%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(127,255,159,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "15%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(185,127,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      {/* Animated DNA helix accent - top right */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "10%",
          opacity: animateElements ? 0.15 : 0,
          transition: "opacity 0.8s ease-in-out",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: "4rem",
            animation: animateElements
              ? "float 6s ease-in-out infinite"
              : "none",
          }}
        >
          🧬
        </div>
      </div>

      {/* Animated microscope accent - bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "8%",
          opacity: animateElements ? 0.15 : 0,
          transition: "opacity 0.8s ease-in-out",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: "4rem",
            animation: animateElements
              ? "float 8s ease-in-out infinite 1s"
              : "none",
          }}
        >
          🔬
        </div>
      </div>

      <div
        style={{
          maxWidth: 920,
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Status badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(77,159,255,0.08)",
            border: "1px solid rgba(77,159,255,0.2)",
            borderRadius: 20,
            padding: "8px 16px",
            marginBottom: 32,
            opacity: animateElements ? 1 : 0,
            transform: animateElements ? "translateY(0)" : "translateY(-10px)",
            transition: "all 0.6s ease-out",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#7fff9f",
              display: "inline-block",
              animation: "pulseGlow 2.5s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#4d9fff",
              fontWeight: 600,
            }}
          >
            Research-Driven Program · Enrollment Open
          </span>
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(2.8rem, 6.5vw, 4.6rem)",
            lineHeight: 1.08,
            color: "#e8edf5",
            marginBottom: 20,
            letterSpacing: "-0.02em",
            fontWeight: 700,
            opacity: animateElements ? 1 : 0,
            transform: animateElements ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease-out 0.1s",
          }}
        >
          Turn Raw Data
          <br />
          <em
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #4d9fff 0%, #7fff9f 50%, #b97fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            into Published Research
          </em>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1.12rem",
            color: "#8a9ab0",
            lineHeight: 1.8,
            maxWidth: 650,
            margin: "0 auto 48px",
            opacity: animateElements ? 1 : 0,
            transform: animateElements ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease-out 0.2s",
          }}
        >
          A 12-week intensive mentorship transforming researchers into bioinformaticians. Master cancer genomics and neurogenomics analysis, build publication-quality figures, and submit your findings to peer-reviewed journals.
        </p>

        {/* Research impact metrics */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
            marginBottom: 52,
            opacity: animateElements ? 1 : 0,
            transform: animateElements ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease-out 0.3s",
          }}
        >
          {outcomes.map((outcome, idx) => (
            <div
              key={idx}
              style={{
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.2rem", marginBottom: 6 }}>
                {outcome.icon}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#4d9fff", fontWeight: 600 }}>
                {outcome.label}
              </div>
              <div style={{ fontSize: "0.88rem", color: "#e8edf5", fontWeight: 700 }}>
                {outcome.value}
              </div>
            </div>
          ))}
        </div>

        {/* Feature chips */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
            marginBottom: 44,
            opacity: animateElements ? 1 : 0,
            transform: animateElements ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease-out 0.4s",
          }}
        >
          {meta.map((m) => (
            <div
              key={m.label}
              style={{
                background:
                  "linear-gradient(135deg, rgba(77,159,255,0.08), rgba(127,255,159,0.04))",
                border: "1px solid rgba(77,159,255,0.15)",
                borderRadius: 10,
                padding: "12px 18px",
                textAlign: "left",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#4d9fff",
                }}
              >
                {m.label}
              </div>
              <div style={{ fontSize: "0.72rem", color: "#8a9ab0" }}>
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Mentor callout */}
        <p
          style={{
            fontSize: "0.82rem",
            color: "#4a6a8a",
            marginBottom: 32,
            fontFamily: "monospace",
            letterSpacing: "0.05em",
            opacity: animateElements ? 1 : 0,
            transform: animateElements ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.7s ease-out 0.5s",
          }}
        >
          Mentor: Md. Jubayer Hossain, Founder & CEO, DeepBio Ltd · {" "}
          <span style={{ color: "#7fff9f" }}>Limited to 20 participants</span>
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: animateElements ? 1 : 0,
            transform: animateElements ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.7s ease-out 0.6s",
          }}
        >
          <a
            href="https://tinyurl.com/bmp-application"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(135deg, #4d9fff, #6db3ff)",
              color: "#0a0e14",
              fontWeight: 700,
              fontSize: "0.98rem",
              padding: "16px 36px",
              borderRadius: 10,
              textDecoration: "none",
              letterSpacing: "0.01em",
              boxShadow: "0 8px 32px rgba(77,159,255,0.3)",
              transition: "all 0.3s ease",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 40px rgba(77,159,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(77,159,255,0.3)";
            }}
          >
            Apply Now → Start Your Research Journey
          </a>
          <a
            href="#curriculum"
            style={{
              background: "rgba(77,159,255,0.08)",
              color: "#8a9ab0",
              fontWeight: 600,
              fontSize: "0.98rem",
              padding: "16px 32px",
              borderRadius: 10,
              textDecoration: "none",
              border: "1px solid rgba(77,159,255,0.2)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(77,159,255,0.4)";
              e.currentTarget.style.background = "rgba(77,159,255,0.12)";
              e.currentTarget.style.color = "#4d9fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(77,159,255,0.2)";
              e.currentTarget.style.background = "rgba(77,159,255,0.08)";
              e.currentTarget.style.color = "#8a9ab0";
            }}
          >
            ↓ Explore 12-Week Roadmap
          </a>
        </div>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(127,255,159,0.7);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 0 8px rgba(127,255,159,0);
          }
        }
      `}</style>
    </section>
  );
}
