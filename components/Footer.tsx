"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      style={{
        borderTop: "1px solid #1e2a38",
        background: "#0a0e14",
        padding: "36px 24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', 'Courier New', monospace",
            fontSize: "0.82rem",
            color: "#4a6a8a",
          }}
        >
          <span style={{ color: "#4d9fff", fontWeight: 700 }}>BMP</span>
          {" · "}Bioinformatics Mentorship Program
        </div>

        <div style={{ fontSize: "0.78rem", color: "#3a5a7a" }}>
          RNA-seq Mentorship Program · © {year} Bioinformatics Mentorship Program
        </div>

        <FooterLinks />
      </div>
    </footer>
  );
}

function FooterLinks() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", gap: 20 }}>
      {["Privacy", "Contact"].map((link) => (
        <a
          key={link}
          href="#"
          style={{
            fontSize: "0.78rem",
            color: hovered === link ? "#8a9ab0" : "#3a5a7a",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={() => setHovered(link)}
          onMouseLeave={() => setHovered(null)}
        >
          {link}
        </a>
      ))}
    </div>
  );
}
