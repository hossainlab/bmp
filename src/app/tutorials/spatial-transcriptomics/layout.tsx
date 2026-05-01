import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TutorialSidebar from "../../../components/TutorialSidebar";

const SECTIONS = [
  { id: "introduction", title: "1. Intro to Spatial Omics" },
  { id: "technologies", title: "2. Key Technologies" },
  { id: "quality-control", title: "3. Quality Control" },
  { id: "spatial-domains", title: "4. Spatial Domains" },
  { id: "deconvolution", title: "5. Cell Type Deconvolution" },
  { id: "neighborhood", title: "6. Neighborhood Analysis" },
  { id: "next-steps", title: "7. Next Steps" }
];

export default function SpatialTutorialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="bg-slate-950 min-h-screen pt-24 font-dm-sans">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
          <TutorialSidebar sections={SECTIONS} />
          <div className="lg:pl-[19.5rem]">
            <main className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
              {children}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
