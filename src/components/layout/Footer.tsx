"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-brand-name">BMP</span>
          {" · "}Bioinformatics Mentorship Program
        </div>

        <div className="footer-copyright">
          © {year} Md. Jubayer Hossain
        </div>

        <FooterLinks />
      </div>
    </footer>
  );
}

function FooterLinks() {
  return (
    <div className="footer-links">
      {["Privacy", "Contact"].map((link) => (
        <a key={link} href="#" className="footer-link">
          {link}
        </a>
      ))}
    </div>
  );
}
