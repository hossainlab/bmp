import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Mentorship Policies — Bioinformatics Mentorship Program",
  description: "Official policies, terms, and ethical standards for the BMP Mentorship Program.",
};

export default function PoliciesPage() {
  const sections = [
    {
      title: "1. Professional Conduct & Punctuality",
      points: [
        "Participants must attend all scheduled live sessions on time. Late arrivals disrupt the learning flow of the cohort.",
        "Communication within the program (Discord/Slack/Email) must remain professional, respectful, and research-focused.",
        "Collaboration is encouraged, but plagiarism or claiming others' work as your own will result in immediate termination.",
      ]
    },
    {
      title: "2. Technical Commitment",
      points: [
        "This is an intensive research program. You are expected to dedicate 10–12 hours per week to independent work and analysis.",
        "Failure to submit weekly progress updates or attend two consecutive sessions without prior notice will trigger a 'Fit Review'.",
        "Participants must have a functional computer environment (Linux/WSL/Mac) as guided in Week 1.",
      ]
    },
    {
      title: "3. Financial Policy",
      points: [
        "The monthly mentorship fee is 10,200 BDT.",
        "Payments must be cleared by the 5th of each month. Late payments may result in suspension of access to program resources.",
        "The fee is non-negotiable. Discounts are only considered for documented cases of extreme financial hardship.",
        "Refund Policy: Once a mentorship month commences, the fee for that month is non-refundable.",
      ]
    },
    {
      title: "4. Publication & Authorship Ethics",
      points: [
        "No Authorship Guarantee: Completion of the program does not guarantee authorship on mentor-led publications.",
        "Earned Authorship: Authorship is earned through significant intellectual and technical contribution, following international ICMJE standards.",
        "Strict Ethics: We do not 'sell' or 'gift' authorship. Any attempt to acquire authorship via course fees alone is strictly prohibited.",
        "Independent Research: We guide you toward independent publication. The intellectual property of your independent project remains yours, provided you cite the program's resources properly.",
      ]
    },
    {
      title: "5. Research Assistant (RA) Recruitment Path",
      points: [
        "Team-Building Focus: This mentorship is not solely a tuition-based program; it is a strategic vetting process to build a solid, long-term research team in Bangladesh.",
        "Internal Recruitment: Successful participants who demonstrate exceptional technical mastery, team-oriented mindset, and consistent research contribution may be invited to join as Research Assistants (RAs) after the 12-week program.",
        "Long-term Collaboration: RAs will have the opportunity to collaborate on mentor-led publications, contribute to grant-funded projects, or serve as Teaching Assistants (TAs) for future cohorts.",
        "Career Ecosystem: Our goal is to create a sustainable ecosystem of trained bioinformatics researchers who can compete globally.",
      ]
    },
    {
      title: "6. Termination of Mentorship",
      points: [
        "The mentor reserves the right to terminate a participant's enrollment for serious breaches of conduct, persistent lack of progress, or non-payment.",
        "In cases of termination due to misconduct, no refunds will be issued.",
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="policy-page">
        <section className="policy-hero">
          <div className="policy-hero-inner">
            <h1 className="policy-title">Mentorship Policies</h1>
            <p className="policy-subtitle">
              Transparency is the foundation of a successful research partnership. <br />
              These policies ensure the integrity and quality of the BMP Mentorship Program.
            </p>
          </div>
        </section>

        <section className="policy-content-section">
          <div className="policy-container">
            <div className="policy-grid">
              {sections.map((section, i) => (
                <div key={i} className="policy-box">
                  <h2 className="policy-box-title">{section.title}</h2>
                  <ul className="policy-list">
                    {section.points.map((point, j) => (
                      <li key={j} className="policy-item">
                        <span className="policy-dot"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="policy-footer-note">
              <p>
                By applying to the program, you acknowledge that you have read, understood, and agreed to abide by these policies. For any clarifications, contact <strong>Md. Jubayer Hossain</strong> directly before enrollment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
