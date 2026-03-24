import HeroSection      from "@/components/sections/HeroSection";
import AboutSection     from "@/components/sections/AboutSection";
import SkillsSection    from "@/components/sections/SkillsSection";
import MarqueeSection   from "@/components/sections/MarqueeSection";
import ProjectsSection  from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection   from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MarqueeSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
