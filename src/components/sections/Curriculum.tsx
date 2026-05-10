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
    <section id="curriculum" className="cur-section">
      <div className="cur-inner">
        <p className="cur-eyebrow">12-Week Roadmap</p>

        <h2 className="cur-heading">
          12-Week Roadmap
        </h2>
        <p className="cur-subtext">
          A structured journey from raw data to a publication-ready manuscript.
        </p>

        <div className="cur-list">
          {sessions.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`cur-item ${isOpen ? "cur-item-open" : "cur-item-closed"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="cur-trigger"
                >
                  <span className="cur-session-badge">SESSION {s.num}</span>
                  <span className="cur-trigger-meta">
                    <span className="cur-category">{s.category}</span>
                    <span className="cur-title">{s.title}</span>
                  </span>
                  <span
                    className={`cur-chevron ${isOpen ? "cur-chevron-open" : "cur-chevron-closed"}`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="cur-body">
                    <p className="cur-body-text">{s.body}</p>
                    <div className="cur-tags">
                      {s.tags.map((t) => (
                        <span key={t} className="cur-tag">
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
