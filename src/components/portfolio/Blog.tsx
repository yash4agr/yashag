import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogConfig } from "@/data/portfolio";

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
        {!blogConfig.enabled && (
          <Badge variant="secondary" className="mb-6">Coming Soon</Badge>
        )}
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          {blogConfig.description}
        </p>
        <Button variant="outline" size="lg" asChild>
          <a 
            href={blogConfig.substackUrl} 
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
