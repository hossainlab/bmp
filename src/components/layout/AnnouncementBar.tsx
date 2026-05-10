"use client";

import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)] text-white py-2.5 px-4 text-center relative z-[110]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
        <span className="text-sm font-semibold tracking-wide">
          🚀 Application Open: Bioinformatics Mentorship Program (Cohort 02, July–September)
        </span>
        <a
          href="https://forms.gle/uEvaGfskpwmqdWBX9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[var(--accent-blue)] px-4 py-1 rounded-full text-xs font-bold hover:bg-opacity-90 transition-all shadow-sm whitespace-nowrap"
        >
          Apply Now →
        </a>
      </div>
    </div>
  );
}
