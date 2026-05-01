import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function TutorialsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fafc] pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl mb-6 font-dm-sans">
              Bioinformatics Tutorials
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed font-dm-sans">
              Master computational biology with our comprehensive guides. From raw data to publication-ready figures, learn the best practices used by leading research labs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              href="/tutorials/single-cell-analysis" 
              className="group flex flex-col bg-slate-950 rounded-2xl shadow-sm border border-slate-700 overflow-hidden hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 font-dm-sans"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-950 to-slate-900 relative border-b border-slate-800 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="w-16 h-16 bg-slate-950 rounded-xl shadow-sm flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="12" cy="12" r="5" fill="#3b82f6" />
                    <circle cx="6" cy="12" r="2" fill="#8b5cf6" />
                    <circle cx="18" cy="12" r="2" fill="#8b5cf6" />
                    <circle cx="12" cy="6" r="2" fill="#8b5cf6" />
                    <circle cx="12" cy="18" r="2" fill="#8b5cf6" />
                  </svg>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider">Flagship</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-semibold rounded-full uppercase tracking-wider">End-to-End</span>
                </div>
                <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-cyan-400 transition-colors">Single-Cell Analysis Best Practices</h3>
                <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
                  A complete, end-to-end guide on scRNA-seq analysis. Learn QC, normalization, clustering, trajectory inference, and spatial omics using the latest community standards.
                </p>
                <div className="flex items-center text-cyan-400 font-semibold text-sm">
                  Start Tutorial
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Bulk RNA-Seq Tutorial */}
            <Link 
              href="/tutorials/bulk-rnaseq" 
              className="group flex flex-col bg-slate-950 rounded-2xl shadow-sm border border-slate-700 overflow-hidden hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 font-dm-sans"
            >
              <div className="h-48 bg-gradient-to-br from-emerald-50 to-teal-50 relative border-b border-slate-800 flex items-center justify-center">
                 <div className="w-16 h-16 bg-slate-950 rounded-xl shadow-sm flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                 </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full uppercase tracking-wider">Foundation</span>
                </div>
                <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-emerald-600 transition-colors">Bulk RNA-Seq Pipeline</h3>
                <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
                  Learn the standard pipeline: QC, alignment, DESeq2 differential expression, and pathway enrichment.
                </p>
                <div className="flex items-center text-emerald-600 font-semibold text-sm">
                  Start Tutorial
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
            
            {/* Spatial Transcriptomics Tutorial */}
            <Link 
              href="/tutorials/spatial-transcriptomics" 
              className="group flex flex-col bg-slate-950 rounded-2xl shadow-sm border border-slate-700 overflow-hidden hover:shadow-xl hover:border-purple-500/30 transition-all duration-300 font-dm-sans"
            >
              <div className="h-48 bg-gradient-to-br from-purple-50 to-fuchsia-50 relative border-b border-slate-800 flex items-center justify-center">
                 <div className="w-16 h-16 bg-slate-950 rounded-xl shadow-sm flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>
                 </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full uppercase tracking-wider">Advanced</span>
                </div>
                <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-purple-600 transition-colors">Spatial Transcriptomics</h3>
                <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
                  Map gene expression to tissue architecture. Neighborhood analysis, spatial domains, and deconvolution.
                </p>
                <div className="flex items-center text-purple-600 font-semibold text-sm">
                  Start Tutorial
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
