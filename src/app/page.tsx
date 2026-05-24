import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhoIsThisFor from "@/components/sections/WhoIsThisFor";
import WhyThisMatters from "@/components/sections/WhyThisMatters";
import WhyBeginnersGetStuck from "@/components/sections/WhyBeginnersGetStuck";
import Solutions from "@/components/sections/Solutions";
import Curriculum from "@/components/sections/Curriculum";
import ToolsCovered from "@/components/sections/ToolsCovered";
import WhatsIncluded from "@/components/sections/WhatsIncluded";
import InstructorBio from "@/components/sections/InstructorBio";
import Publications from "@/components/sections/Publications";
import CurrentMentees from "@/components/sections/CurrentMentees";
import MenteesFeedback from "@/components/sections/MenteesFeedback";
import EnrollCTA from "@/components/sections/EnrollCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoIsThisFor />
        <WhyThisMatters />
        <WhyBeginnersGetStuck />
        <Solutions />
        <Curriculum />
        <ToolsCovered />
        <WhatsIncluded />
        <InstructorBio />
        <Publications />
        <CurrentMentees />
        <MenteesFeedback />
        <EnrollCTA />
      </main>
      <Footer />
    </>
  );
}
