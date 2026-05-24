import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Research — Bioinformatics Mentorship Program",
  description: "Explore the research areas and computational workflows led by Md. Jubayer Hossain.",
};

export default function ResearchPage() {
  const areas = [
    {
      title: "Precision Medicine & Prognosis",
      desc: "Developing computational models to predict drug response and patient survival outcomes using multi-omics signatures.",
      icon: "🧪"
    },
    {
      title: "Molecular Disease Classification",
      desc: "Identifying robust molecular subtypes across diverse cohorts to enable accurate diagnosis and targeted therapies.",
      icon: "🧬"
    },
    {
      title: "Cellular Heterogeneity",
      desc: "Mapping conserved and rare cell populations in healthy and diseased states using large-scale single-cell integration.",
      icon: "🔬"
    },
    {
      title: "Biomarker Discovery",
      desc: "Systematic identification of diagnostic gene panels and master regulators of disease states through meta-analysis.",
      icon: "📊"
    }
  ];

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

  return (
    <>
      <Navbar />
      <main className="res-page">
        {/* Hero */}
        <section className="res-hero">
          <div className="res-hero-inner">
            <p className="res-eyebrow">Research Overview</p>
            <h1 className="res-title">Computational Decoding of Complex Biological Systems</h1>
            <p className="res-subtitle">
              We leverage large-scale public omics data to uncover biological mechanisms, identify therapeutic targets, and build predictive models for precision medicine.
            </p>
          </div>
        </section>

        {/* Areas */}
        <section className="res-areas-section">
          <div className="res-container">
            <div className="res-grid">
              {areas.map((area, i) => (
                <div key={i} className="res-card">
                  <div className="res-card-icon">{area.icon}</div>
                  <h3 className="res-card-title">{area.title}</h3>
                  <p className="res-card-desc">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflows */}
        <section className="res-workflow-section">
          <div className="res-container">
            <h2 className="res-section-heading">Core Computational Workflows</h2>
            <div className="res-workflow-list">
              {workflows.map((wf, i) => (
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

        {/* Philosophy */}
        <section className="res-philosophy-section">
          <div className="res-container">
            <div className="res-phi-box">
              <h2 className="res-phi-title">Our Research Pillars</h2>
              <div className="res-phi-grid">
                <div className="res-phi-item">
                  <strong>Reproducibility</strong>
                  <p>Independent verification of biological findings using publicly archived datasets.</p>
                </div>
                <div className="res-phi-item">
                  <strong>Scale</strong>
                  <p>Analyzing thousands of samples across diverse tissues, cohorts, and species.</p>
                </div>
                <div className="res-phi-item">
                  <strong>Open Science</strong>
                  <p>Applying FAIR principles for cross-study meta-analyses and transparent research.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
