const obstacles = [
  {
    icon: "⌨️",
    title: "The Linux command line — before a single analysis even begins",
    body: "Almost every bioinformatics tool runs in a Linux terminal. Most tutorials skip this entirely, assuming you already know it. Most beginners don't — and get stuck immediately.",
  },
  {
    icon: "🔧",
    title: "Tool installation feels like black magic",
    body: "Setting up STAR, featureCounts, or Salmon from scratch involves dependency management, PATH variables, and environment configuration — all opaque to someone just trying to analyze RNA-seq data.",
  },
  {
    icon: "💻",
    title: "Personal computers simply can't handle the compute",
    body: "Genome indexing, alignment, and quantification require significant RAM and storage. These jobs need a server or HPC — and most beginners have no path to one.",
  },
  {
    icon: "🗂️",
    title: "A maze of file formats with no map",
    body: "FASTQ, BAM, SAM, GTF, BED, VCF — knowing which tool requires which format, and how to convert between them, is genuinely confusing when you're starting out.",
  },
  {
    icon: "📖",
    title: 'Written tutorials have no "start here" arrow',
    body: "Even comprehensive tutorials can overwhelm a beginner who doesn't know which section to read first, what to skip, or how to connect the pieces into a coherent pipeline.",
  },
];

export default function WhyBeginnersGetStuck() {
  return (
    <section style={{ padding: "100px 24px", background: "#0a0e14" }}>
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
          The Real Obstacles
        </p>

        <h2
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
            color: "#e8edf5",
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Why beginners get stuck
        </h2>
        <p
          style={{
            fontSize: "0.97rem",
            color: "#8a9ab0",
            lineHeight: 1.7,
            marginBottom: 56,
          }}
        >
          The biology isn&apos;t the hard part. Here&apos;s what actually blocks
          researchers from getting started.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {obstacles.map((o, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 20,
                padding: "28px 0",
                borderBottom: i < obstacles.length - 1 ? "1px solid #1e2a38" : "none",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: "#111720",
                  border: "1px solid #1e2a38",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                {o.icon}
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "0.97rem",
                    fontWeight: 600,
                    color: "#e8edf5",
                    marginBottom: 8,
                    lineHeight: 1.4,
                  }}
                >
                  {o.title}
                </h4>
                <p style={{ fontSize: "0.87rem", color: "#8a9ab0", lineHeight: 1.7 }}>
                  {o.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
