const schedule = [
  { label: "Program Duration", value: "12 weeks" },
  { label: "Monthly Sessions", value: "8 hours total" },
  { label: "Independent Work", value: "10–12 hours/week" },
  { label: "Cohort Size", value: "20 participants max" },
  { label: "Tracks", value: "Cancer Genomics or Neurogenomics" },
];

export default function EnrollCTA() {
  return (
    <section
      id="enroll"
      style={{
        padding: "100px 24px",
        background: "#0d1219",
        borderTop: "1px solid #1e2a38",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(77,159,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#4a6a8a",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Enrollment
        </p>

        <h2
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: "#e8edf5",
            marginBottom: 16,
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          Ready to move from consumer
          <br />
          <span
            style={{
              background: "linear-gradient(135deg,#4d9fff,#7fb3ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            to independent researcher?
          </span>
        </h2>

        <p
          style={{
            fontSize: "0.97rem",
            color: "#8a9ab0",
            lineHeight: 1.7,
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          This is an intensive, hands-on program for serious researchers. Limited to 20 participants to ensure personalized mentorship and accountability toward publication.
        </p>

        {/* Schedule grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            marginBottom: 52,
          }}
        >
          {schedule.map((s) => (
            <div
              key={s.label}
              style={{
                background: "#111720",
                border: "1px solid #1e2a38",
                borderRadius: 8,
                padding: "12px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "0.68rem",
                  color: "#4a6a8a",
                  fontFamily: "monospace",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                {s.label}
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#e8edf5" }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "0.78rem",
            color: "#4a6a8a",
            textAlign: "center",
            marginBottom: 48,
            fontFamily: "monospace",
          }}
        >
          Session times and cohort start dates coordinated based on mentor and participant availability.
        </p>

        {/* Pricing */}
        <div
          className="stack-on-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            maxWidth: 560,
            margin: "0 auto 40px",
          }}
        >
          {/* Monthly fee */}
          <div
            style={{
              background: "rgba(77,159,255,0.07)",
              border: "1px solid rgba(77,159,255,0.3)",
              borderRadius: 12,
              padding: "28px 24px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                background: "#4d9fff",
                color: "#0a0e14",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 0",
                fontFamily: "monospace",
              }}
            >
              Monthly Fee
            </div>
            <div style={{ marginTop: 20 }}>
              <div
                style={{
                  fontFamily: "var(--font-dm-serif), serif",
                  fontSize: "2.6rem",
                  color: "#4d9fff",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                10,200 BDT
              </div>
              <div style={{ fontSize: "0.8rem", color: "#8a9ab0" }}>
                Payable by the 5th of each month
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div
            style={{
              background: "#111720",
              border: "1px solid #1e2a38",
              borderRadius: 12,
              padding: "28px 24px",
              textAlign: "center",
            }}
          >
            <div style={{ marginTop: 12 }}>
              <div
                style={{
                  fontFamily: "var(--font-dm-serif), serif",
                  fontSize: "1.4rem",
                  color: "#e8edf5",
                  lineHeight: 1.2,
                  marginBottom: 8,
                }}
              >
                12-week commitment
              </div>
              <div style={{ fontSize: "0.8rem", color: "#5a7a9a" }}>
                Complete research project + publication pathway
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#3a5a7a",
                  marginTop: 4,
                  fontFamily: "monospace",
                }}
              >
                Non-refundable once month commences
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.78rem",
              color: "#4a6a8a",
              marginBottom: 24,
              fontFamily: "monospace",
            }}
          >
            Selected applicants will be notified within 5 business days.
          </p>
          <a
            href="https://tinyurl.com/bmp-application"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#4d9fff",
              color: "#0a0e14",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "16px 44px",
              borderRadius: 8,
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(77,159,255,0.35)",
              letterSpacing: "0.01em",
              marginBottom: 24,
            }}
          >
            Apply for Next Cohort →
          </a>
          <p style={{ fontSize: "0.82rem", color: "#5a7a9a" }}>
            Questions about the program?{" "}
            <a
              href="mailto:info@mdjubayerhossain.com"
              style={{ color: "#4d9fff", textDecoration: "none" }}
            >
              Contact Md. Jubayer Hossain directly.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
