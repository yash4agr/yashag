import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
                <CardTitle className="text-xl">Indian Institute of Technology, Madras</CardTitle>
                <p className="text-muted-foreground">B.S. Data Science and Application</p>
                <p className="text-sm text-muted-foreground mt-1">2022 – 2026 | GPA: 8.89/10.0</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium mb-3 text-foreground">Relevant Coursework:</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI, Deep Learning, Machine Learning Techniques, Tools in Data Science, Programming, 
              Data Structures & Algorithms, System Commands, Linear Algebra, Probability & Statistics
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
