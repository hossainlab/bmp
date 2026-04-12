"use client";
import { useState, useEffect } from "react";

function HelixIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {/* Strand A */}
      <path d="M7 5 C24 5 8 27 25 27" stroke="#2563eb" strokeWidth="2.4" strokeLinecap="round"/>
      {/* Strand B */}
      <path d="M25 5 C8 5 24 27 7 27" stroke="#059669" strokeWidth="2.4" strokeLinecap="round"/>
      {/* Rung — upper */}
      <line x1="13.5" y1="7.5" x2="18.5" y2="7.5" stroke="rgba(0,0,0,0.12)" strokeWidth="1.4" strokeLinecap="round"/>
      {/* Rung — lower */}
      <line x1="13.5" y1="24.5" x2="18.5" y2="24.5" stroke="rgba(0,0,0,0.12)" strokeWidth="1.4" strokeLinecap="round"/>
      {/* Endpoint nodes */}
      <circle cx="7"  cy="5"  r="2.2" fill="#2563eb"/>
      <circle cx="25" cy="5"  r="2.2" fill="#059669"/>
      <circle cx="25" cy="27" r="2.2" fill="#2563eb"/>
      <circle cx="7"  cy="27" r="2.2" fill="#059669"/>
      {/* Centre crossing node */}
      <circle cx="16" cy="16" r="2.5" fill="#1a1a2e" opacity="0.92"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > 20);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      suppressHydrationWarning
      className="navbar-header"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(226,232,240,0.8)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#" className="navbar-logo-link">
          <HelixIcon size={28} />
          <div>
            <div className="navbar-wordmark">BMP</div>
            <div className="navbar-subtitle">Bioinformatics Mentorship Program</div>
          </div>
        </a>

        {/* Right side */}
        <div className="navbar-right">
          <a
            className="navbar-nav-link navbar-schedule-link"
            href="https://tinyurl.com/bmp-schedule"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule
          </a>
          <a
            className="navbar-cta"
            href="https://tinyurl.com/bmp-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now →
          </a>
        </div>
      </div>
    </header>
  );
}
