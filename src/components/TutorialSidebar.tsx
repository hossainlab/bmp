"use client";
import { useEffect, useState } from "react";

export interface TutorialSection {
  id: string;
  title: string;
}

interface TutorialSidebarProps {
  sections: TutorialSection[];
}

export default function TutorialSidebar({ sections }: TutorialSidebarProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio or just take the first one
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // accounting for navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
      <nav className="relative lg:text-sm lg:leading-6 mt-10">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-label)]">
          Contents
        </div>
        <ul className="space-y-3 border-l border-[var(--border)]">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => scrollToSection(e, section.id)}
                className={`block pl-4 -ml-px border-l-2 py-1 transition-colors ${
                  activeSection === section.id
                    ? "text-[var(--accent-blue)] border-[var(--accent-blue)] font-semibold"
                    : "text-[var(--text-muted)] border-transparent hover:border-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="mt-10 p-5 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] shadow-sm">
          <h4 className="font-semibold text-[var(--text-primary)] mb-2">Want to learn more?</h4>
          <p className="text-[var(--text-muted)] mb-4 text-sm">Join our 12-week intensive mentorship program and master these skills on real-world projects.</p>
          <a
            href="https://forms.gle/uEvaGfskpwmqdWBX9"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2 px-4 bg-[var(--accent-blue)] hover:opacity-90 text-white text-center rounded-lg font-medium transition-all shadow-sm"
          >
            Apply Now
          </a>
        </div>
      </nav>
    </div>
  );
}
