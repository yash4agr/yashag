import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/data/portfolio";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
        <Card className="border-border/50">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl">{education.institution}</CardTitle>
                <p className="text-muted-foreground">{education.degree}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {education.period}
                  {education.gpa && ` | GPA: ${education.gpa}`}
                </p>
              </div>
            </div>
          </CardHeader>
          {education.coursework && education.coursework.length > 0 && (
            <CardContent>
              <p className="text-sm font-medium mb-3 text-foreground">Relevant Coursework:</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {education.coursework.join(", ")}
              </p>
            </CardContent>
          )}
        </Card>
      </div>
    </section>
  );
};

export default Education;
