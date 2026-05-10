"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import AnnouncementBar from "./AnnouncementBar";

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
        background: scrolled ? "rgba(255, 255, 255, 0.95)" : "white",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid var(--border)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <AnnouncementBar />
      <div className="navbar-inner">
        {/* Logo */}
        <Link 
          href="/" 
          className="navbar-logo-link"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo size={28} />
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
            href="https://docs.google.com/spreadsheets/d/1_1Cj7DarlaLFG2UZq_whijYMnW2HbdDxj4wTewBK3mI/edit?usp=sharing"
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
