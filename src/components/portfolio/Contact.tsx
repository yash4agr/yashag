import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Link2, BookOpen, LucideIcon } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  peerlist: Link2,
  substack: BookOpen,
  twitter: Link2,
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-muted-foreground mb-8">
          I'm always open to discussing new opportunities, interesting projects, 
          or collaborations in AI/ML.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button asChild>
            <a href={`mailto:${personalInfo.email}`}>
              <Mail size={18} className="mr-2" />
              Send Email
            </a>
          </Button>
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            if (!Icon || link.icon === "mail") return null;
            return (
              <Button key={link.platform} variant="outline" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <Icon size={18} className="mr-2" />
                  {link.platform}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
