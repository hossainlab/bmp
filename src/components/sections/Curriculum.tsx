"use client";
import { useState } from "react";
import styles from "./Curriculum.module.css";

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
    <section id="curriculum" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>12-Week Roadmap</p>

        <h2 className={styles.heading}>
          A structured journey from research question to publication.
        </h2>
        <p className={styles.subtext}>
          From opening a terminal for the first time to submitting your data to
          NCBI GEO — every step, every tool, every concept.
        </p>

        <div className={styles.list}>
          {sessions.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`${styles.item} ${isOpen ? styles.itemOpen : styles.itemClosed}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={styles.trigger}
                >
                  <span className={styles.sessionBadge}>SESSION {s.num}</span>
                  <span className={styles.triggerMeta}>
                    <span className={styles.category}>{s.category}</span>
                    <span className={styles.title}>{s.title}</span>
                  </span>
                  <span
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : styles.chevronClosed}`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className={styles.body}>
                    <p className={styles.bodyText}>{s.body}</p>
                    <div className={styles.tags}>
                      {s.tags.map((t) => (
                        <span key={t} className={styles.tag}>
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
