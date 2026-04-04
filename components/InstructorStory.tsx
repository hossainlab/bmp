export default function InstructorStory() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#0d1219",
        borderTop: "1px solid #1e2a38",
        borderBottom: "1px solid #1e2a38",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#4a6a8a",
            marginBottom: 16,
          }}
        >
          The Mentor
        </p>

        <h2
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
            color: "#e8edf5",
            marginBottom: 36,
            lineHeight: 1.25,
          }}
        >
          <span style={{ color: "#4d9fff" }}>Md. Jubayer Hossain</span>
          <br />
          Founder & CEO, DeepBio Ltd
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            fontSize: "0.97rem",
            color: "#8a9ab0",
            lineHeight: 1.8,
          }}
        >
          <p>
            With over five years of experience in computational biology and cancer genomics research, Md. Jubayer Hossain has guided hundreds of researchers through independent bioinformatics projects. His mentees have published in high-impact journals and advanced to positions in top research institutions and biotech companies.
          </p>
          <p>
            As Founder & CEO of DeepBio Ltd, Jubayer bridges the gap between cutting-edge research and accessible training. He understands the exact obstacles researchers face when learning NGS data analysis — and has built proven pipelines and curricula that accelerate that journey.
          </p>
          <p>
            During these 12-week mentorships, Jubayer provides not just technical guidance, but strategy on dataset selection, research design, and publication. He's committed to moving each mentee from data consumer to independent researcher—capable of asking their own research questions and answering them with confidence.
          </p>
          <p
            style={{
              borderLeft: "3px solid #4d9fff",
              paddingLeft: 20,
              color: "#c0cfe0",
            }}
          >
            The goal of this program is simple: equip you with the bioinformatics skills, research maturity, and publication portfolio that will define your career in cancer genomics or neuroscience research.
          </p>
        </div>
      </div>
    </section>
  );
}
