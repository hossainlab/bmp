"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const SCHEDULE_URL =
  "https://docs.google.com/spreadsheets/d/1_1Cj7DarlaLFG2UZq_whijYMnW2HbdDxj4wTewBK3mI/edit?usp=sharing";

const navLinks = [
  { href: "/resources", label: "Resources" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/#mentee-stories", label: "Stories" },
  { href: "/research", label: "Join Us" },
  { href: SCHEDULE_URL, label: "Schedule", external: true },
  { href: "/policies", label: "Policies" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setHasMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="navbar-header"
      style={{
        background: mounted && scrolled ? "rgba(255, 255, 255, 0.95)" : "white",
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
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Logo size={28} />
          <div>
            <div className="navbar-wordmark">BMP</div>
            <div className="navbar-subtitle">Bioinformatics Mentorship Program</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="navbar-right">
          {navLinks.map((l) =>
            l.external ? (
              <a
                key={l.label}
                className="navbar-nav-link navbar-schedule-link"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            ) : (
              <Link key={l.label} className="navbar-nav-link" href={l.href}>
                {l.label}
              </Link>
            )
          )}
          <Link className="navbar-cta" href="/apply">
            Apply Now →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="navbar-burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`navbar-burger-bar ${menuOpen ? "open-1" : ""}`} />
          <span className={`navbar-burger-bar ${menuOpen ? "open-2" : ""}`} />
          <span className={`navbar-burger-bar ${menuOpen ? "open-3" : ""}`} />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div className={`navbar-mobile ${menuOpen ? "navbar-mobile-open" : ""}`}>
        {navLinks.map((l) =>
          l.external ? (
            <a
              key={l.label}
              className="navbar-mobile-link"
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ) : (
            <Link
              key={l.label}
              className="navbar-mobile-link"
              href={l.href}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          )
        )}
        <Link
          className="navbar-mobile-cta"
          href="/apply"
          onClick={() => setMenuOpen(false)}
        >
          Apply Now →
        </Link>
      </div>
    </header>
  );
}
