import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RegisterForm from "@/components/sections/RegisterForm";

export const metadata = {
  title: "Apply — Bioinformatics Mentorship Program",
  description: "Register for the 12-week intensive bioinformatics research mentorship program.",
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main className="apply-page">
        <section className="apply-hero">
          <div className="apply-hero-inner">
            <h1 className="apply-title">Start Your Research Journey</h1>
            <p className="apply-subtitle">
              Apply for Cohort 02 (July–September 2026). <br />
              Join a selective group of researchers mastering production-grade bioinformatics.
            </p>
          </div>
        </section>

        <section className="apply-form-section">
          <div className="apply-container">
            <div className="apply-card">
              <div className="apply-card-header">
                <h2>Mentorship Registration</h2>
                <p>Please provide accurate details about your academic and research background.</p>
              </div>
              <RegisterForm />
            </div>
            
            <div className="apply-sidebar">
              <div className="apply-info-box">
                <h3>Selection Process</h3>
                <div className="apply-deadline-sidebar">
                  Applications close on <strong>June 25</strong>
                </div>
                <ol>
                  <li>
                    <strong>Application Review:</strong> 
                    <span className="block text-xs mt-1 text-slate-500">No payment is required at this stage. We evaluate your research alignment and academic background.</span>
                  </li>
                  <li>
                    <strong>Info Session:</strong> 
                    <span className="block text-xs mt-1 text-slate-500">Shortlisted candidates join a 30-min fit check. This is a two-way evaluation of your technical competency and readiness.</span>
                  </li>
                  <li>
                    <strong>Enrollment:</strong> 
                    <span className="block text-xs mt-1 text-slate-500">If selected and you agree to all mentorship policies, you will receive the enrollment link.</span>
                  </li>
                </ol>
              </div>

              <div className="apply-info-box accent">
                <div className="apply-accent-label">Investment</div>
                <h3>Financial Transparency</h3>
                
                <div className="apply-price-display mb-2">
                  <div className="flex flex-col">
                    <span className="apply-price-value text-indigo-600">5,100 BDT <span className="text-sm font-medium text-slate-500">/ month</span></span>
                    <span className="text-xs text-slate-400 line-through">Previously 10,200 BDT</span>
                  </div>
                </div>
                
                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 mb-4">
                  <p className="text-xs text-indigo-700 font-medium">
                    ✨ <strong>June Flash Offer:</strong> Join by <strong>June 25</strong> to lock in a 50% discount for the entire cohort.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-md p-2 mb-4">
                  <p className="text-[10px] text-slate-600 font-bold uppercase tracking-tight flex items-center gap-1.5">
                    📅 Payment Deadline: 5th of each month
                  </p>
                </div>

                <ul className="apply-price-list">
                  <li>
                    <span className="apply-dot"></span>
                    No application fee or upfront cost
                  </li>
                  <li>
                    <span className="apply-dot"></span>
                    Early-bird discount applied
                  </li>
                  <li>
                    <span className="apply-dot"></span>
                    100% free fit-check session
                  </li>
                </ul>
                
                <p className="apply-price-note">
                  Fit check and info session are 100% free of charge.
                </p>
              </div>

              <div className="apply-info-box warning">
                <h3>12-Week Commitment</h3>
                <p>This program requires 10-12 hours of independent work per week. Ensure you can commit before applying.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
