"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);

  useEffect(() => {
    // Set initial scroll state
    setScrolled(window.scrollY > 20);

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      suppressHydrationWarning
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(10,14,20,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid #1e2a38" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "'JetBrains Mono', 'Courier New', monospace",
            fontSize: "0.9rem",
            fontWeight: 700,
            color: "#e8edf5",
            letterSpacing: "0.02em",
            display: "flex",
            alignItems: "center",
            minWidth: 0,
            textDecoration: "none",
          }}
        >
          <span style={{ color: "#4d9fff", flexShrink: 0 }}>BMP</span>
          <span className="hide-xs" style={{ color: "#6a8aaa", margin: "0 6px", flexShrink: 0 }}>·</span>
          <span className="hide-xs" style={{ fontSize: "0.8rem", color: "#c0d0e0", whiteSpace: "nowrap" }}>
            Bioinformatics Mentorship Program
          </span>
        </a>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a
            href="https://tinyurl.com/bmp-schedule"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "monospace",
              fontSize: "0.78rem",
              color: "#8a9ab0",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#4d9fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8a9ab0")}
          >
            Schedule
          </a>

          <a
            href="https://tinyurl.com/bmp-application"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: hoverButton ? "#6db3ff" : "#4d9fff",
              color: "#0a0e14",
              fontWeight: 600,
              fontSize: "0.82rem",
              padding: "8px 20px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </header>
  );
}
