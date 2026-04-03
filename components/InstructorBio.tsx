const stats = [
  { value: "5+", label: "Years in bioinformatics & computational biology" },
  { value: "3K+", label: "Students trained since 2020" },
  { value: "8", label: "Live sessions monthly" },
  { value: "20", label: "Max cohort size" },
];

import Image from "next/image";

export default function InstructorBio() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#0a0e14",
        borderTop: "1px solid #1e2a38",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#4a6a8a",
            marginBottom: 48,
          }}
        >
          About the Mentor
        </p>

        <div
          className="stack-on-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          {/* Left: image + stats + name */}
          <div>
            <div style={{ marginBottom: 32 }}>
              <Image
                src="/jubayer.jpg"
                alt="Md. Jubayer Hossain"
                width={200}
                height={200}
                style={{
                  borderRadius: 12,
                  border: "3px solid #1e2a38",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                gap: 32,
                marginBottom: 36,
                flexWrap: "wrap",
              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-serif), serif",
                      fontSize: "2.2rem",
                      color: "#4d9fff",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#5a7a9a" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <h2
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                color: "#e8edf5",
                marginBottom: 8,
              }}
            >
              Md. Jubayer Hossain
            </h2>
            <p
              style={{
                fontSize: "0.82rem",
                color: "#4a6a8a",
                fontFamily: "monospace",
                letterSpacing: "0.05em",
              }}
            >
              Founder & CEO, DeepBio Ltd
            </p>
          </div>

          {/* Right: bio */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              fontSize: "0.93rem",
              color: "#8a9ab0",
              lineHeight: 1.8,
            }}
          >
            <p>
              Md. Jubayer Hossain is a bioinformatician and computational biologist with five years of experience spanning both active research and teaching. Since 2020, he has trained over 3,000 students — from complete beginners to graduate researchers — in the practical skills required to work with real biological data.
            </p>
            <p>
              As Founder & CEO of DeepBio Ltd, Jubayer combines research rigor with a structured approach to education. His teaching is grounded in what he does daily: designing and running computational analyses on real datasets. Every student in this program works directly with him — not a TA, not a substitute — toward a concrete, submittable research output.
            </p>
            <p
              style={{
                borderLeft: "3px solid #4d9fff",
                paddingLeft: 18,
                color: "#c0cfe0",
                fontStyle: "italic",
              }}
            >
              &quot;My role is to accelerate your journey from question to discovery. You bring the curiosity; I bring the roadmap, the tools, and the accountability to ensure you succeed.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
