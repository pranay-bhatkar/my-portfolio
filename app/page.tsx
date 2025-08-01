import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillSection from "@/components/SkillSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import MotivationSection from "@/components/MotivationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-primary text-primary dark:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <MotivationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
