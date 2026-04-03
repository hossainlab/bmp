"use client";
import { useState } from "react";

const sessions = [
  {
    num: "Weeks 1-2",
    category: "Literature Review & Data Acquisition",
    title: "Define your research question and select datasets",
    body: "Start with a compelling research gap in cancer genomics or neurogenomics. Mine TCGA, GEO, and GTEx databases to identify publicly available datasets matching your hypothesis. Review key papers and prepare your experimental design document.",
    tags: ["Research design", "TCGA/GEO mining", "Literature review", "Hypothesis formulation"],
  },
  {
    num: "Week 2-3",
    category: "Environment Setup & Tool Installation",
    title: "Configure your computational workspace",
    body: "Set up Linux environment, configure conda, install Bioconductor, DESeq2, Seurat, and visualization packages. Download reference genomes and annotation files. Ensure reproducibility with version-locked environments.",
    tags: ["Linux", "conda", "Bioconductor", "Docker optional"],
  },
  {
    num: "Week 3-4",
    category: "Data Preprocessing & Quality Control",
    title: "Raw reads to clean count matrices",
    body: "QC with FastQC, alignment with STAR or Salmon, quantification with featureCounts. Normalize counts (TMM, TPM, or CPM). Generate sample-level QC reports (library size, rRNA contamination, alignment rates).",
    tags: ["FastQC", "STAR/Salmon", "featureCounts", "MultiQC"],
  },
  {
    num: "Week 5",
    category: "MIDPOINT CHECK",
    title: "Mentor review & progress assessment",
    body: "Present your quality control outputs, data exploration plots, and initial questions. Get feedback on analysis direction. Ensure all preprocessing steps are reproducible and documented.",
    tags: ["Progress check", "Code review", "Direction refinement"],
  },
  {
    num: "Weeks 5-7",
    category: "Primary Analysis Phase 1 (Differential Expression)",
    title: "Statistical testing and gene discovery",
    body: "Perform differential expression analysis (DESeq2 or limma-voom). PCA, batch effect detection. Extract DEG lists with adjusted p-values and fold changes. Generate volcano plots and heatmaps for top differentially expressed genes.",
    tags: ["DESeq2", "limma", "PCA", "Volcano plots", "Heatmaps"],
  },
  {
    num: "Weeks 7-9",
    category: "Primary Analysis Phase 2 (Advanced)",
    title: "Pathway, trajectory, and network analysis",
    body: "Pathway enrichment (GO, KEGG), GSEA, network analysis (STRING), or trajectory inference for single-cell data. Identify biological themes and validate top candidates with external data.",
    tags: ["GO/KEGG", "GSEA", "Network analysis", "Seurat (if sc-RNA)"],
  },
  {
    num: "Weeks 9-11",
    category: "Visualization & Figure Generation",
    title: "Publication-ready outputs",
    body: "Create high-quality figures in ggplot2/seaborn: pathway networks, expression profiles, survival correlations (if available). Prepare supplementary figures, figure legends, and data tables. Build a reproducible figure-generation script.",
    tags: ["ggplot2", "Figure design", "Publication standards"],
  },
  {
    num: "Weeks 11-12",
    category: "Interpretation & Final Presentation",
    title: "From data to narrative — thesis/manuscript prep",
    body: "Draft manuscript sections (Methods, Results, Discussion). Contextualize findings against the literature. Create a final presentation of your complete analysis pipeline, key findings, and next steps. Submit for journal consideration with mentor guidance.",
    tags: ["Manuscript drafting", "Methods section", "Results interpretation"],
  },
];

export default function Curriculum() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="curriculum"
      style={{
        padding: "100px 24px",
        background: "#0a0e14",
        borderTop: "1px solid #1e2a38",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
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
          12-Week Roadmap
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
          A structured journey from research question to publication.
        </h2>
        <p
          style={{
            fontSize: "0.97rem",
            color: "#8a9ab0",
            lineHeight: 1.7,
            marginBottom: 56,
          }}
        >
          From opening a terminal for the first time to submitting your data to
          NCBI GEO — every step, every tool, every concept.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {sessions.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  background: "#111720",
                  border: `1px solid ${isOpen ? "#4d9fff44" : "#1e2a38"}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "22px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.68rem",
                      color: "#4d9fff",
                      background: "rgba(77,159,255,0.1)",
                      border: "1px solid rgba(77,159,255,0.2)",
                      borderRadius: 4,
                      padding: "3px 8px",
                      flexShrink: 0,
                    }}
                  >
                    SESSION {s.num}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        color: "#4a6a8a",
                        fontFamily: "monospace",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {s.category}
                    </div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "#e8edf5",
                      }}
                    >
                      {s.title}
                    </div>
                  </div>
                  <span
                    style={{
                      color: "#4a6a8a",
                      fontSize: "1.1rem",
                      transition: "transform 0.2s",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div style={{ padding: "0 24px 24px 24px" }}>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "#8a9ab0",
                        lineHeight: 1.75,
                        marginBottom: 18,
                        borderTop: "1px solid #1e2a38",
                        paddingTop: 18,
                      }}
                    >
                      {s.body}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "monospace",
                            fontSize: "0.7rem",
                            background: "rgba(77,159,255,0.06)",
                            border: "1px solid rgba(77,159,255,0.15)",
                            color: "#6aabff",
                            borderRadius: 4,
                            padding: "3px 9px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
