import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Blog from "@/components/portfolio/Blog";
import Contact from "@/components/portfolio/Contact";
import { personalInfo } from "@/data/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Blog />
      <Contact />
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
