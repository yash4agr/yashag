import { Github, Linkedin, Mail, Download, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-muted-foreground mb-2 tracking-widest uppercase text-sm">
          AI/ML Engineer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hello, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          B.S. Data Science student at IIT Madras, passionate about building 
          intelligent systems with ML/DL, RAG pipelines, and scalable backend architectures.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button variant="default" size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        <div className="flex items-center justify-center gap-5 mt-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:your@email.com"
             className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://peerlist.io/yash4agr" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground hover:text-foreground transition-colors">
            <Link2 size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
