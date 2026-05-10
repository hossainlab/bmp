

const schedule = [
  { label: "Program Duration", value: "12 weeks" },
  { label: "Monthly Sessions", value: "8 hours total" },
  { label: "Independent Work", value: "10–12 hours/week" },
  { label: "Cohort Size", value: "20 participants max" },
  { label: "Tracks", value: "Cancer Genomics or Neurogenomics" },
];

export default function EnrollCTA() {
  return (
    <section id="enroll" className="enroll-section">
      {/* background glow */}

      <div className="enroll-inner">
        <p className="enroll-eyebrow">Enrollment</p>

        <h2 className="enroll-heading">
          Start Your <span className="enroll-heading-gradient">Journey</span>
        </h2>

        <p className="enroll-subtext">
          This is an intensive, hands-on program for serious researchers. Limited to 20 participants to ensure personalized mentorship and accountability toward publication.
        </p>

        {/* Schedule grid */}
        <div className="enroll-schedule-row">
          {schedule.map((s) => (
            <div key={s.label} className="enroll-schedule-chip">
              <div className="enroll-chip-label">{s.label}</div>
              <div className="enroll-chip-value">{s.value}</div>
            </div>
          ))}
        </div>

        <p className="enroll-schedule-note">
          Session times and cohort start dates coordinated based on mentor and participant availability.
        </p>

        {/* Pricing */}
        <div className="enroll-pricing-grid stack-on-mobile">
          {/* Monthly fee */}
          <div className="enroll-fee-card">
            <div className="enroll-fee-banner">Monthly Fee</div>
            <div className="enroll-fee-body">
              <div className="enroll-fee-amount">10,200 BDT</div>
              <div className="enroll-fee-sub">Payable by the 5th of each month</div>
            </div>
          </div>

          {/* Commitment */}
          <div className="enroll-commit-card">
            <div className="enroll-commit-body">
              <div className="enroll-commit-title">12-week commitment</div>
              <div className="enroll-commit-sub">
                Complete research project + publication pathway
              </div>
              <div className="enroll-commit-note">
                Non-refundable once month commences
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="enroll-cta-block">
          <p className="enroll-cta-note">
            Selected applicants will be notified within 5 business days.
          </p>
          <a
            href="https://forms.gle/uEvaGfskpwmqdWBX9"
            target="_blank"
            rel="noopener noreferrer"
            className="enroll-cta-btn"
          >
            Apply for Next Cohort →
          </a>
          <p className="enroll-cta-footer">
            Questions about the program?{" "}
            <a
              href="mailto:info@mdjubayerhossain.com"
              className="enroll-cta-link"
            >
              Contact Md. Jubayer Hossain directly.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
