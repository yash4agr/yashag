import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/portfolio";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="space-y-8">
          {skillCategories.map((cat, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-start gap-4">
              <span className="text-sm font-medium text-muted-foreground w-32 shrink-0">
                {cat.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
