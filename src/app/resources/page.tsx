import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnrollCTA from "@/components/sections/EnrollCTA";

export const metadata = {
  title: "Resources — Bioinformatics Mentorship Program",
  description: "Curated library of bioinformatics data sources, analysis tools, and learning materials.",
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="res-lib-page">
        <section className="res-lib-hero">
          <div className="res-lib-hero-inner">
            <p className="res-eyebrow">Academic Library</p>
            <h1 className="res-lib-title">Curated Bioinformatics Resources</h1>
            <p className="res-lib-subtitle">
              A hand-picked selection of high-impact data sources, industry-standard tools, and verified tutorials used in professional research labs.
            </p>
          </div>
        </section>

        <section className="res-lib-content">
          <div className="res-lib-container">
            {/* Category: Data Sources */}
            <div className="res-lib-category">
              <h2 className="res-lib-cat-heading">
                <span className="res-lib-icon">📊</span> Data Sources
              </h2>
              <div className="res-lib-grid">
                {dataSources.map((item, i) => (
                  <ResourceCard key={i} item={item} />
                ))}
              </div>
            </div>

            {/* Category: Analysis Tools */}
            <div className="res-lib-category">
              <h2 className="res-lib-cat-heading">
                <span className="res-lib-icon">🛠️</span> Analysis Tools
              </h2>
              <div className="res-lib-grid">
                {tools.map((item, i) => (
                  <ResourceCard key={i} item={item} />
                ))}
              </div>
            </div>

            {/* Category: Tutorials */}
            <div className="res-lib-category">
              <h2 className="res-lib-cat-heading">
                <span className="res-lib-icon">📚</span> Learning Materials
              </h2>
              <div className="res-lib-grid">
                {tutorials.map((item, i) => (
                  <ResourceCard key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <EnrollCTA />
      </main>
      <Footer />
    </>
  );
}

interface ResourceItem {
  name: string;
  description: string;
  url: string;
  subcategory: string;
  tags: string[];
}

function ResourceCard({ item }: { item: ResourceItem }) {
  return (
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="res-lib-card"
    >
      <div className="res-lib-card-header">
        <h3 className="res-lib-card-title">{item.name}</h3>
        <span className={`res-lib-badge ${item.subcategory === 'single-cell' ? 'sc' : item.subcategory === 'bulk' ? 'bulk' : 'both'}`}>
          {item.subcategory}
        </span>
      </div>
      <p className="res-lib-card-desc">{item.description}</p>
      <div className="res-lib-card-tags">
        {item.tags.map((tag) => (
          <span key={tag} className="res-lib-tag">#{tag}</span>
        ))}
      </div>
      <div className="res-lib-card-footer">
        Access Resource →
      </div>
    </a>
  );
}

const dataSources = [
  {
    name: 'Gene Expression Omnibus (GEO)',
    description: 'NIH repository for functional genomics data with over 100,000 bulk RNA-seq studies.',
    url: 'https://www.ncbi.nlm.nih.gov/geo/',
    subcategory: 'both',
    tags: ['public', 'large-scale', 'metadata']
  },
  {
    name: 'Genotype-Tissue Expression (GTEx)',
    description: 'Comprehensive atlas of gene expression across 54 human tissues from healthy individuals.',
    url: 'https://gtexportal.org/home/',
    subcategory: 'bulk',
    tags: ['human', 'tissue-specific', 'eQTL']
  },
  {
    name: 'The Cancer Genome Atlas (TCGA)',
    description: 'Multi-omics data from 33 cancer types including RNA-seq from tumor and normal samples.',
    url: 'https://portal.gdc.cancer.gov/',
    subcategory: 'bulk',
    tags: ['cancer', 'clinical', 'multi-omics']
  },
  {
    name: 'Human Cell Atlas',
    description: 'Comprehensive reference of human cell types with high-quality annotated single-cell datasets.',
    url: 'https://data.humancellatlas.org/',
    subcategory: 'single-cell',
    tags: ['human', 'cell-atlas', 'annotated']
  },
  {
    name: 'Tabula Sapiens',
    description: 'Human single-cell transcriptomic atlas with 500,000+ cells across 24 tissues.',
    url: 'https://tabula-sapiens-portal.ds.czbiohub.org/',
    subcategory: 'single-cell',
    tags: ['human', 'multi-tissue', 'reference']
  }
];

const tools = [
  {
    name: 'DESeq2',
    description: 'Gold standard for differential gene expression analysis in bulk RNA-seq data.',
    url: 'https://bioconductor.org/packages/DESeq2/',
    subcategory: 'bulk',
    tags: ['R', 'Bioconductor', 'DE-analysis']
  },
  {
    name: 'STAR Aligner',
    description: 'Ultrafast universal RNA-seq aligner with splice-aware mapping capabilities.',
    url: 'https://github.com/alexdobin/STAR',
    subcategory: 'both',
    tags: ['alignment', 'CLI', 'fast']
  },
  {
    name: 'Seurat',
    description: 'Comprehensive toolkit for single-cell genomics analysis and visualization.',
    url: 'https://satijalab.org/seurat/',
    subcategory: 'single-cell',
    tags: ['R', 'clustering', 'integration']
  },
  {
    name: 'Scanpy',
    description: 'Scalable toolkit for analyzing single-cell gene expression data.',
    url: 'https://scanpy.readthedocs.io/',
    subcategory: 'single-cell',
    tags: ['Python', 'scalable', 'trajectory']
  }
];

const tutorials = [
  {
    name: 'Bioconductor Workflows',
    description: 'Step-by-step tutorials for RNA-seq analysis using R/Bioconductor packages.',
    url: 'https://www.bioconductor.org/help/workflows/',
    subcategory: 'both',
    tags: ['R', 'step-by-step', 'official']
  },
  {
    name: 'Single-cell Best Practices',
    description: 'Comprehensive tutorial on current best practices in single-cell RNA-seq analysis.',
    url: 'https://github.com/theislab/single-cell-tutorial',
    subcategory: 'single-cell',
    tags: ['Python', 'Scanpy', 'curated']
  },
  {
    name: 'Orchestrating Single-Cell Analysis',
    description: 'Online book covering single-cell RNA-seq analysis with R/Bioconductor.',
    url: 'http://bioconductor.org/books/release/OSCA/',
    subcategory: 'single-cell',
    tags: ['R', 'book', 'comprehensive']
  }
];
