import { AcademiaSection } from "../components/AcademiaSection";
import { Background } from "../components/Background";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { PassionsSection } from "../components/PassionsSection";
import { ProfessionalSection } from "../components/ProfessionalSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { Theme } from "../components/Theme";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Theme />
      <Background />
      <Navbar />

      <main>
        <HeroSection />
        <AcademiaSection />
        <ProfessionalSection />
        <SkillsSection />
        <ProjectsSection />
        <PassionsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
