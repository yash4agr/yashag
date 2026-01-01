import { Github, Linkedin, Mail, Download, Link2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/data/portfolio";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  peerlist: Link2,
  substack: BookOpen,
  twitter: Link2,
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-muted-foreground mb-2 tracking-widest uppercase text-sm">
          {personalInfo.title}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hello, I'm <span className="text-primary">{personalInfo.name}</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {personalInfo.tagline}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button variant="default" size="lg" asChild>
            <a href={personalInfo.resumeUrl} download>
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
        <div className="flex items-center justify-center gap-6 mt-8">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.platform}
                href={link.icon === "mail" ? `mailto:${link.url}` : link.url}
                target={link.icon === "mail" ? undefined : "_blank"}
                rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.platform}
              >
                <Icon size={24} />
              </a>
            );
          })}
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
