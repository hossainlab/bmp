import Image from "next/image";

const keywords = [
  { text: "RNA-seq", top: "12%", left: "5%", rotate: "-15deg" },
  { text: "DESeq2", top: "25%", left: "2%", rotate: "8deg" },
  { text: "volcano plot", top: "38%", left: "7%", rotate: "-5deg" },
  { text: "heatmap", top: "55%", left: "3%", rotate: "12deg" },
  { text: "FASTQ", top: "68%", left: "8%", rotate: "-8deg" },
  { text: "TCGA", top: "18%", right: "4%", rotate: "10deg" },
  { text: "Salmon", top: "32%", right: "6%", rotate: "-12deg" },
  { text: "GO enrichment", top: "48%", right: "2%", rotate: "6deg" },
  { text: "PCA", top: "62%", right: "7%", rotate: "-10deg" },
  { text: "p-value", top: "75%", right: "3%", rotate: "15deg" },
  { text: "GTEx", top: "82%", left: "12%", rotate: "5deg" },
  { text: "STAR", top: "78%", right: "12%", rotate: "-7deg" },
  { text: "featureCounts", top: "8%", left: "18%", rotate: "4deg" },
  { text: "limma", top: "85%", left: "25%", rotate: "-3deg" },
  { text: "GEO", top: "10%", right: "18%", rotate: "-6deg" },
  { text: "ggplot2", top: "88%", right: "22%", rotate: "8deg" },
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Floating keywords background */}
      <div className="hero-keywords" aria-hidden="true">
        {keywords.map((kw) => (
          <span
            key={kw.text}
            style={{
              top: kw.top,
              left: kw.left,
              right: kw.right,
              transform: `rotate(${kw.rotate})`,
            }}
          >
            {kw.text}
          </span>
        ))}
      </div>

      <div className="hero-inner">
        {/* Badge */}
        <p className="hero-badge">
          🔬 Already 3,000+ mentees trained! 🔬
        </p>

        {/* Heading */}
        <h1 className="hero-heading">
          Become the{" "}
          <span className="hero-heading-highlight">Bioinformatics</span>
          {" "} Expert
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          An all-in-one, <strong>intensive mentorship program</strong> designed
          to take you from raw sequencing data to a publication-ready
          manuscript.
        </p>

        {/* Mentor */}
        <div className="hero-mentor">
          <Image
            src={`${BASE}/jubayer.jpg`}
            alt="Md. Jubayer Hossain"
            width={44}
            height={44}
            className="hero-mentor-photo"
          />
          <span>
            Mentored by <strong>Md. Jubayer Hossain</strong>
          </span>
        </div>

        {/* CTA */}
        <a
          href="https://tinyurl.com/bmp-application"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
