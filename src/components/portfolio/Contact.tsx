import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

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
            <a href="mailto:your@email.com">
              <Mail size={18} className="mr-2" />
              Send Email
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
