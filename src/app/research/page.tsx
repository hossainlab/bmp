import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Publications from "@/components/sections/Publications";
import ResearchAssistant from "@/components/sections/ResearchAssistant";
import EnrollCTA from "@/components/sections/EnrollCTA";

export const metadata = {
  title: "Join Us — Bioinformatics Mentorship Program",
  description: "Explore research tracks, computational workflows, and join as a research assistant.",
};

export default function ResearchPage() {
  const workflows = [
    {
      num: "01",
      name: "Bulk RNA-Seq Meta-Analysis",
      goal: "Large-scale transcriptomic discovery using harmonized public datasets from GEO, SRA, and TCGA.",
      tech: ["FastQC", "STAR/Salmon", "DESeq2", "MetaVolcanoR", "RankProd"]
    },
    {
      num: "02",
      name: "Single-Cell Harmonization",
      goal: "Cross-cohort atlas construction and comparative analysis using global single-cell repositories.",
      tech: ["Harmony", "scVI", "CellTypist", "PySCENIC", "Scanpy/Seurat"]
    },
    {
      num: "03",
      name: "ML/DL in Genomics",
      goal: "Training predictive models (XGBoost, DNNs) on high-dimensional data for clinical applications.",
      tech: ["XGBoost", "Deep Learning", "SHAP/LIME", "Tidyverse/Pandas"]
    }
  ];

  const projects = [
    {
      title: "Harmonized Cancer Cell Atlas",
      tag: "Cancer Genomics",
      desc: "Constructing high-resolution single-cell atlases across 10+ cancer types using variational integration.",
      icon: "🧬"
    },
    {
      title: "Neurogenomics Reference Map",
      tag: "Neuroscience",
      desc: "Mapping cell-type-specific dysregulation in neurodegenerative disorders via cross-cohort harmonization.",
      icon: "🧠"
    },
    {
      title: "Pan-Cancer TME Analysis",
      tag: "Immunology",
      desc: "Computational profiling of the tumor immune microenvironment to identify universal prognostic markers.",
      icon: "🛡️"
    },
    {
      title: "Genomic Drug Discovery",
      tag: "Precision Medicine",
      desc: "Training deep learning models on multi-omics data to predict patient-specific therapeutic responses.",
      icon: "💊"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="res-page">
        {/* Hero */}
        <section className="res-hero">
          <div className="res-hero-inner">
            <p className="res-eyebrow">Join Our Research Lab</p>
            <h1 className="res-title">Be Part of Real Research That Matters</h1>
            <p className="res-subtitle">
              Top-performing BMP participants get the opportunity to join active research projects in cancer genomics and neurogenomics — building publication-ready work and a path to graduate school.
            </p>
          </div>
        </section>

        {/* Research Tracks */}
        <section className="res-tracks-section">
          <div className="res-container">
            <p className="res-eyebrow" style={{ textAlign: "center" }}>Active Research Focus</p>
            <h2 className="res-section-heading">Research Tracks</h2>
            <div className="res-tracks-grid">
              <div className="res-track-card">
                <div className="res-track-icon">🧬</div>
                <h3 className="res-track-title">Track 1: Cancer Genomics</h3>
                <p className="res-track-desc">
                  Integrative analysis of tumor transcriptomes, somatic mutations, and immune microenvironments to identify prognostic biomarkers and therapeutic targets across multiple cancer types.
                </p>
                <ul className="res-track-focus">
                  <li>Tumor subtype classification via bulk &amp; single-cell RNA-Seq</li>
                  <li>Survival modeling with multi-omics signatures</li>
                  <li>Immune cell deconvolution &amp; tumor microenvironment profiling</li>
                  <li>Drug sensitivity prediction using ML/DL pipelines</li>
                </ul>
              </div>
              <div className="res-track-card">
                <div className="res-track-icon">🧠</div>
                <h3 className="res-track-title">Track 2: Neurogenomics</h3>
                <p className="res-track-desc">
                  Computational dissection of gene expression landscapes in neurological and neurodegenerative disorders to uncover cell-type-specific dysregulation and novel drug targets.
                </p>
                <ul className="res-track-focus">
                  <li>Single-cell atlas construction of brain regions</li>
                  <li>Differential expression &amp; pathway analysis in neurodegeneration</li>
                  <li>Gene regulatory network inference in neural cell types</li>
                  <li>Cross-disorder comparative transcriptomics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* One-Year Research Programs */}
        <section className="res-programs-section">
          <div className="res-container">
            <div className="res-programs-box">
              <p className="res-eyebrow" style={{ color: "var(--accent-blue)" }}>Career Acceleration</p>
              <h2 className="res-section-heading" style={{ marginBottom: "20px" }}>One-Year Research Programs</h2>
              <p className="res-subtitle" style={{ margin: "0 auto 60px", fontSize: "1.1rem" }}>
                Participate in ambitious, publication-ready research projects. Our programs are designed to build real-world skills through the construction of large-scale single-cell atlases.
              </p>

              <div className="res-project-grid">
                {projects.map((proj) => (
                  <div key={proj.title} className="res-project-card">
                    <div className="res-project-tag">{proj.tag}</div>
                    <div className="res-project-icon">{proj.icon}</div>
                    <h3 className="res-project-title">{proj.title}</h3>
                    <p className="res-project-desc">{proj.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Workflows */}
        <section className="res-workflow-section">
          <div className="res-container">
            <h2 className="res-section-heading">Core Computational Workflows</h2>
            <div className="res-workflow-list">
              {workflows.map((wf) => (
                <div key={wf.num} className="res-wf-item">
                  <div className="res-wf-meta">
                    <span className="res-wf-num">Workflow {wf.num}</span>
                  </div>
                  <div className="res-wf-content">
                    <h3 className="res-wf-name">{wf.name}</h3>
                    <p className="res-wf-goal">{wf.goal}</p>
                    <div className="res-wf-tech">
                      {wf.tech.map(t => (
                        <span key={t} className="res-wf-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Publications />
        <ResearchAssistant />
        <EnrollCTA />
      </main>
      <Footer />
    </>
  );
}
