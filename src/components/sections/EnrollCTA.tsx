import styles from "./EnrollCTA.module.css";

const schedule = [
  { label: "Program Duration", value: "12 weeks" },
  { label: "Monthly Sessions", value: "8 hours total" },
  { label: "Independent Work", value: "10–12 hours/week" },
  { label: "Cohort Size", value: "20 participants max" },
  { label: "Tracks", value: "Cancer Genomics or Neurogenomics" },
];

export default function EnrollCTA() {
  return (
    <section id="enroll" className={styles.section}>
      {/* background glow */}
      <div className={styles.bgGlow} />

      <div className={styles.inner}>
        <p className={styles.eyebrow}>Enrollment</p>

        <h2 className={styles.heading}>
          Ready to move from consumer
          <br />
          <span className={styles.headingGradient}>to independent researcher?</span>
        </h2>

        <p className={styles.subtext}>
          This is an intensive, hands-on program for serious researchers. Limited to 20 participants to ensure personalized mentorship and accountability toward publication.
        </p>

        {/* Schedule grid */}
        <div className={styles.scheduleRow}>
          {schedule.map((s) => (
            <div key={s.label} className={styles.scheduleChip}>
              <div className={styles.chipLabel}>{s.label}</div>
              <div className={styles.chipValue}>{s.value}</div>
            </div>
          ))}
        </div>

        <p className={styles.scheduleNote}>
          Session times and cohort start dates coordinated based on mentor and participant availability.
        </p>

        {/* Pricing */}
        <div className={`${styles.pricingGrid} stack-on-mobile`}>
          {/* Monthly fee */}
          <div className={styles.feeCard}>
            <div className={styles.feeBanner}>Monthly Fee</div>
            <div className={styles.feeBody}>
              <div className={styles.feeAmount}>10,200 BDT</div>
              <div className={styles.feeSub}>Payable by the 5th of each month</div>
            </div>
          </div>

          {/* Commitment */}
          <div className={styles.commitCard}>
            <div className={styles.commitBody}>
              <div className={styles.commitTitle}>12-week commitment</div>
              <div className={styles.commitSub}>
                Complete research project + publication pathway
              </div>
              <div className={styles.commitNote}>
                Non-refundable once month commences
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className={styles.ctaBlock}>
          <p className={styles.ctaNote}>
            Selected applicants will be notified within 5 business days.
          </p>
          <a
            href="https://tinyurl.com/bmp-application"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Apply for Next Cohort →
          </a>
          <p className={styles.ctaFooter}>
            Questions about the program?{" "}
            <a
              href="mailto:info@mdjubayerhossain.com"
              className={styles.ctaLink}
            >
              Contact Md. Jubayer Hossain directly.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
