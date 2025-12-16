import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Psych-LLM",
    description: "RAG pipeline using ChromaDB and meta-llama for psychology research assistance",
    tech: ["Python", "ChromaDB", "meta-llama", "pdfplumber"],
    date: "Feb 2025",
    highlights: [
      "90% relevant document retrieval accuracy",
      "25% reduction in processing time",
      "LLM-based answer generation with source attribution"
    ]
  },
  {
    title: "Home Service Platform",
    description: "Full-stack service marketplace with role-based access and real-time dashboards",
    tech: ["Vue.js", "Flask", "Redis", "Celery", "Docker"],
    date: "Oct – Nov 2024",
    highlights: [
      "25% API response time improvement via Redis caching",
      "Automated service monitoring with Celery",
      "Containerized deployment with Docker Compose"
    ]
  },
  {
    title: "TuneIn - Music Streaming",
    description: "Web application for streaming music with secure authentication",
    tech: ["Python", "Flask", "SQLAlchemy", "HTML/CSS"],
    date: "Oct – Dec 2023",
    highlights: [
      "Secure user authentication system",
      "20% reduction in login issues",
      "Full frontend-backend integration"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-border/50 hover:border-border transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-xs mt-1">{project.date}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Github size={18} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                    <ExternalLink size={18} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex gap-2">
                      <span className="text-primary">→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="outline" className="text-xs font-normal">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
