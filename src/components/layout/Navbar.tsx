"use client";
import { useState, useEffect } from "react";

import Link from "next/link";

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
      <path d="M7 5 C24 5 8 27 25 27" stroke="#06b6d4" strokeWidth="2.4" strokeLinecap="round"/>
      {/* Strand B */}
      <path d="M25 5 C8 5 24 27 7 27" stroke="#14b8a6" strokeWidth="2.4" strokeLinecap="round"/>
      {/* Rung — upper */}
      <line x1="13.5" y1="7.5" x2="18.5" y2="7.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" strokeLinecap="round"/>
      {/* Rung — lower */}
      <line x1="13.5" y1="24.5" x2="18.5" y2="24.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" strokeLinecap="round"/>
      {/* Endpoint nodes */}
      <circle cx="7"  cy="5"  r="2.2" fill="#06b6d4"/>
      <circle cx="25" cy="5"  r="2.2" fill="#14b8a6"/>
      <circle cx="25" cy="27" r="2.2" fill="#06b6d4"/>
      <circle cx="7"  cy="27" r="2.2" fill="#14b8a6"/>
      {/* Centre crossing node */}
      <circle cx="16" cy="16" r="2.5" fill="#f8fafc" opacity="0.92"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
        background: scrolled ? "rgba(15, 23, 42, 0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(51, 65, 85, 0.8)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="navbar-logo-link">
          <HelixIcon size={28} />
          <div>
            <div className="navbar-wordmark">BMP</div>
            <div className="navbar-subtitle">Bioinformatics Mentorship Program</div>
          </div>
        </Link>

        {/* Right side */}
        <div className="navbar-right">
          <a
            className="navbar-nav-link"
            href="/tutorials"
          >
            Tutorials
          </a>
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
            href="https://forms.gle/uEvaGfskpwmqdWBX9"
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
