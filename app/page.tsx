import HeroSection from "./components/HeroSection";
import WorkExperience from "./components/WorkExperience";
import SkillsSection from "./components/SkillsSection";
import FeaturedProjects from "./components/FeaturedProjects";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <HeroSection />
      <WorkExperience />
      <SkillsSection />
      <FeaturedProjects />
      <ContactSection />
    </main>
  );
}

