"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="navbar-header"
      style={{
        background: mounted && scrolled ? "rgba(255, 255, 255, 0.95)" : (mounted && !scrolled ? "white" : "white"),
        borderBottom: "1px solid var(--border)",
        backdropFilter: mounted && scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: mounted && scrolled ? "blur(20px)" : "none",
      }}
    >
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
          <Link
            className="navbar-nav-link"
            href="/tutorials"
          >
            Tutorials
          </Link>
          <Link
            className="navbar-nav-link"
            href="/resources"
          >
            Resources
          </Link>
          <a
            className="navbar-nav-link navbar-schedule-link"
            href="https://docs.google.com/spreadsheets/d/1_1Cj7DarlaLFG2UZq_whijYMnW2HbdDxj4wTewBK3mI/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule
          </a>
          <Link
            className="navbar-nav-link"
            href="/policies"
          >
            Policies
          </Link>
          <Link
            className="navbar-cta"
            href="/apply"
          >
            Apply Now →
          </Link>
        </div>
      </div>
    </header>
  );
}
