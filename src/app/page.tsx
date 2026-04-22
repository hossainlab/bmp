import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyThisMatters from "@/components/sections/WhyThisMatters";
import InstructorStory from "@/components/sections/InstructorStory";
import WhyBeginnersGetStuck from "@/components/sections/WhyBeginnersGetStuck";
import Solutions from "@/components/sections/Solutions";
import Curriculum from "@/components/sections/Curriculum";
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
        <WhyThisMatters />
        <InstructorStory />
        <WhyBeginnersGetStuck />
        <Solutions />
        <Curriculum />
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
