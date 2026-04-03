import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyThisMatters from "@/components/WhyThisMatters";
import InstructorStory from "@/components/InstructorStory";
import WhyBeginnersGetStuck from "@/components/WhyBeginnersGetStuck";
import Solutions from "@/components/Solutions";
import Curriculum from "@/components/Curriculum";
import WhatsIncluded from "@/components/WhatsIncluded";
import InstructorBio from "@/components/InstructorBio";
import EnrollCTA from "@/components/EnrollCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyThisMatters />
        <InstructorStory />
        <WhyBeginnersGetStuck />
        <Solutions />
        <Curriculum />
        <WhatsIncluded />
        <InstructorBio />
        <EnrollCTA />
      </main>
      <Footer />
    </>
  );
}
