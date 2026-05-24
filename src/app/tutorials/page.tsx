import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function TutorialsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg-alt)] pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl mb-6 font-dm-sans">
              Teaching Videos
            </h1>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed font-dm-sans">
              Access deep-dive video lectures and hands-on tutorials from our extensive bioinformatics library. Master computational research at your own pace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoPlaylists.map((playlist, i) => (
              <a 
                key={i}
                href={playlist.playlist}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-[var(--bg-card)] rounded-2xl shadow-sm border border-[var(--border)] overflow-hidden hover:shadow-xl hover:border-red-500/30 transition-all duration-300 font-dm-sans"
              >
                <div className="h-40 bg-slate-900 relative border-b border-[var(--border)] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent z-0"></div>
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="flex gap-1">
                      {playlist.categories.map((cat, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-black/40 text-white/90 text-[10px] font-bold rounded uppercase tracking-widest border border-white/10 backdrop-blur-sm">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-red-600 transition-colors">{playlist.course}</h3>
                  <p className="text-[var(--text-muted)] mb-6 flex-1 text-sm leading-relaxed">
                    {playlist.description}
                  </p>
                  <div className="flex items-center text-red-600 font-bold text-xs uppercase tracking-widest">
                    Watch Playlist
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bioinformatics Workflows */}
          <div className="mt-32 mb-12 text-center max-w-3xl mx-auto">
            <p className="res-eyebrow">Reusable Pipelines</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl mb-6 font-dm-sans">
              Bioinformatics Workflows
            </h2>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed font-dm-sans">
              Open-source, production-ready pipelines for high-throughput data analysis. Access our verified workflows on GitHub and Google Colab.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {pipelines.map((pipe, i) => (
              <div key={i} className="flex flex-col bg-[var(--bg-card)] rounded-2xl shadow-sm border border-[var(--border)] overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full uppercase tracking-widest border border-slate-200">
                      {pipe.category}
                    </span>
                    <div className="flex gap-3">
                      {pipe.links.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-[var(--accent-blue)] transition-colors flex items-center justify-center"
                          title={link.label}
                        >
                          {link.icon === 'github' ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.181-1.304.473-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                          ) : (
                            <img 
                              src={`${BASE}/logos/Google_Colab_pic.png`} 
                              alt="Google Colab" 
                              className="w-5 h-5 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                            />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 leading-snug">
                    {pipe.title}
                  </h3>
                  
                  <p className="text-[var(--text-muted)] mb-8 text-sm leading-relaxed">
                    {pipe.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Key Tools</span>
                      <div className="flex flex-wrap gap-2">
                        {pipe.tools.map(tool => (
                          <span key={tool} className="text-xs font-semibold text-[var(--accent-blue)] bg-blue-50 px-2 py-1 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Input/Output</span>
                      <p className="text-[11px] text-slate-500 leading-relaxed italic">
                        <strong>In:</strong> {pipe.input}<br />
                        <strong>Out:</strong> {pipe.output}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-4 bg-slate-50 border-t border-[var(--border)] flex justify-between items-center">
                  <span className="text-[10px] font-medium text-slate-400">Reusable Research Asset</span>
                  <div className="flex gap-4">
                    {pipe.links.map((link, idx) => (
                      <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-colors flex items-center gap-1"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const pipelines = [
  {
    title: "End-to-end bulk RNA-seq Quantification Pipeline using Salmon",
    description: "A complete pipeline for pseudo-alignment and quantification of bulk RNA-seq data using Salmon — from raw sequencing reads to transcript-level abundance estimates ready for downstream differential expression analysis.",
    category: "RNA-Seq",
    tools: ["Python", "Salmon", "tximeta", "DESeq2"],
    input: "Raw FASTQ files, reference transcriptome",
    output: "Transcript/gene-level count matrix, quantification summary",
    links: [
      { label: "GitHub", url: "https://github.com/hossainlab/salmon-rnaseq", icon: "github" }
    ]
  },
  {
    title: "nf-core/rnaseqmeta: A Nextflow Pipeline for Meta-Analysis of RNA-seq Datasets",
    description: "A Nextflow-based pipeline for reproducible meta-analysis of multiple RNA-seq datasets — automating sample retrieval, quality control, quantification, batch correction, and integrated differential expression analysis across studies.",
    category: "RNA-Seq",
    tools: ["Nextflow", "nf-core", "Salmon", "DESeq2"],
    input: "Multiple RNA-seq datasets (FASTQ or SRA accessions), sample sheets",
    output: "Integrated count matrix, cross-study DE results, batch-corrected expression profiles",
    links: [
      { label: "GitHub", url: "https://github.com/hossainlab/nf-core-rnaseqmeta", icon: "github" }
    ]
  },
  {
    title: "Fast and efficient preprocessing of scRNA-seq with kallisto | bustools | kb-python",
    description: "End-to-end pipeline for scRNA-seq preprocessing using kallisto, bustools, and kb-python — from raw FASTQ files to filtered count matrices ready for downstream analysis with scanpy.",
    category: "Single-Cell",
    tools: ["Python", "kallisto", "bustools", "kb-python", "scanpy"],
    input: "Raw FASTQ files (10x Chromium or similar)",
    output: "Filtered cell × gene count matrix, QC metrics",
    links: [
      { label: "Google Colab", url: "https://colab.research.google.com/drive/1i9WxmUjSq3mNoPostbJLSu6eeNi8vqgE?usp=sharing", icon: "colab" }
    ]
  },
  {
    title: "A Practical Guide for Single-Cell Data Analysis with scverse Ecosystem",
    description: "Comprehensive walkthrough of the scverse single-cell analysis workflow — covering quality control, normalization, dimensionality reduction, clustering, marker gene identification, and cell type annotation using scanpy and related tools.",
    category: "Single-Cell",
    tools: ["Python", "scanpy", "scvi-tools", "AnnData"],
    input: "Count matrix (AnnData .h5ad or 10x format)",
    output: "Annotated cell clusters, UMAP embeddings, marker genes, cell type labels",
    links: [
      { label: "Google Colab", url: "https://colab.research.google.com/drive/1MyBbAQvTKGLFOpPAP-w3hedyXs-l0Vff?usp=sharing", icon: "colab" }
    ]
  },
  {
    title: "Predicting Protein Structures with ColabFold and AlphaFold2 in Google Colab",
    description: "Predict 3D protein structures from amino acid sequences using ColabFold's accelerated AlphaFold2 pipeline — with MSA generation via MMseqs2 and interactive structure visualization directly in the browser.",
    category: "Protein Prediction",
    tools: ["Python", "ColabFold", "AlphaFold2", "MMseqs2", "py3Dmol"],
    input: "Amino acid sequence (FASTA format)",
    output: "Predicted 3D structures (PDB), confidence scores (pLDDT), PAE plots",
    links: [
      { label: "Google Colab", url: "https://colab.research.google.com/drive/1PQS5EWpGP5aWJ4KtrGlKetCidA44RySx?usp=sharing", icon: "colab" }
    ]
  },
  {
    title: "Boltz2-Notebook: Diffusion-Based Protein–Ligand Structure Prediction & Affinity Analysis",
    description: "Predict protein–ligand complex structures and binding affinities using the Boltz2 diffusion model — enabling rapid in silico docking and interaction analysis without traditional molecular dynamics simulations.",
    category: "Protein Prediction",
    tools: ["Python", "Boltz2", "RDKit", "py3Dmol"],
    input: "Protein sequence and ligand SMILES/SDF",
    output: "Predicted complex structures (PDB), binding affinity scores, interaction maps",
    links: [
      { label: "Google Colab", url: "https://colab.research.google.com/drive/1MzmcvZTvpvGEyTQdJIt5DCVn9mJOZS1J?usp=sharing", icon: "colab" }
    ]
  },
  {
    title: "AI in Drug Discovery: Molecular Property Prediction and Virtual Screening",
    description: "End-to-end pipeline for AI-driven drug discovery — covering molecular featurization, toxicity prediction, ADMET property modeling, and virtual screening of compound libraries using machine learning and cheminformatics tools.",
    category: "Drug Discovery",
    tools: ["Python", "RDKit", "DeepChem", "scikit-learn"],
    input: "Compound libraries (SMILES), molecular descriptors",
    output: "Toxicity predictions, ADMET profiles, ranked hit compounds",
    links: [
      { label: "Google Colab", url: "https://colab.research.google.com/drive/124b2zhlFujYBk2cGoT64DWPTwr0SB-Ph?usp=sharing", icon: "colab" }
    ]
  },
  {
    title: "AI in Drug Discovery: In Silico Toxicology Modeling",
    description: "Build machine learning models to predict compound toxicity from molecular structure — covering molecular fingerprint generation, toxicity endpoint classification, structure–activity relationship analysis, and model interpretation for safety assessment in early-stage drug discovery.",
    category: "Drug Discovery",
    tools: ["Python", "RDKit", "scikit-learn", "Mordred"],
    input: "Chemical compounds (SMILES), toxicity endpoint labels",
    output: "Toxicity classification models, SAR insights, safety predictions",
    links: [
      { label: "Google Colab", url: "https://colab.research.google.com/drive/1ths5Mb1sHos6y5qcnodcWOnw-XR-Mw8w?usp=sharing", icon: "colab" }
    ]
  }
];

const videoPlaylists = [
  {
    course: "R for Research",
    description: "Video lectures covering R programming fundamentals, data manipulation, statistical testing, and visualization for researchers.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUa05wsFn5OWHEapIiSEYp7T",
    categories: ["Statistics", "R"]
  },
  {
    course: "Machine Learning for Bioinformatics",
    description: "Hands-on video tutorials applying machine learning techniques to biological and genomic datasets.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUCZuWpLiM5bV5--gjuY5ZI",
    categories: ["ML", "Bioinformatics"]
  },
  {
    course: "RNA-Seq Analysis with R",
    description: "Step-by-step video tutorials on bulk RNA-seq analysis using R and Bioconductor, from raw counts to biological interpretation.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUZUHltq6DJ5KGrncv0gn_Zj",
    categories: ["Genomics", "R"]
  },
  {
    course: "AI for Drug Discovery",
    description: "Video series introducing AI-powered approaches to drug discovery, including toxicology modeling and structure-activity analysis.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUYu0_nHZ4m9JcSHtLbJ_HUM",
    categories: ["AI", "Drug Discovery"]
  },
  {
    course: "Cancer Bioinformatics",
    description: "Video tutorials on cancer genomics analysis, covering TCGA data access, mutation analysis, survival modeling, and multi-omics integration.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUazUbCqCGNrsziV2heHcR2V",
    categories: ["Cancer", "Bioinfo"]
  },
  {
    course: "Academic Writing",
    description: "Video lectures on scientific writing, manuscript preparation, and publishing in peer-reviewed journals.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUba95QvQBoaKEALyRO-VBoS",
    categories: ["Writing"]
  },
  {
    course: "Python for Health Data Analytics",
    description: "Video tutorials on using Python for health data analysis, covering data wrangling, visualization, and statistical methods.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUYqRQa6Lev4NFg5MJ4fuKsw",
    categories: ["Python", "Health Data"]
  },
  {
    course: "Bioinformatics Workflow Bootcamp",
    description: "Intensive video series on building automated, reproducible bioinformatics workflows and data processing pipelines.",
    playlist: "https://www.youtube.com/playlist?list=PLQtDkvtE4BUZtvFhArTgkenAHFZL7xcpB",
    categories: ["Workflows", "Automation"]
  },
  {
    course: "Single Cell Analysis with R",
    description: "Comprehensive step-by-step video guide on scRNA-seq analysis using R and Seurat, from QC to cluster annotation.",
    playlist: "https://youtu.be/nhwtzU4zNQo?si=cCey731oy4rKVQaE",
    categories: ["Single-Cell", "R"]
  }
];
