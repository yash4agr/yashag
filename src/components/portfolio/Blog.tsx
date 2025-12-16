import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
        <Badge variant="secondary" className="mb-6">Coming Soon</Badge>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'll be sharing insights on AI/ML, data science, and my journey in tech. 
          Stay tuned for articles on RAG pipelines, ML engineering, and more.
        </p>
        <Button variant="outline" size="lg" asChild>
          <a 
            href="https://substack.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Subscribe on Substack
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Blog;
