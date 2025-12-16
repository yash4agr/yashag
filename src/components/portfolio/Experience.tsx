import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Development Intern",
    company: "UniteCare Software Solutions",
    period: "Sep – Oct 2025",
    points: [
      "Accelerated physician review by delivering AI-generated clinical summaries from unstructured patient visit notes.",
      "Scaled an asynchronous system on Azure Container Apps to process over 10,000 PDFs daily.",
      "Achieved over 95% test name accuracy for lab trend plotting by architecting a hybrid normalization service."
    ]
  },
  {
    title: "Freelance Developer",
    company: "EVD Technology",
    period: "July 2024",
    points: [
      "Enhanced FBRef web scraping, boosting data reliability by 80% for player/team stats.",
      "Streamlined data ingestion using ChatGPT and PostgreSQL to enable natural language–driven session planning.",
      "Integrated Dockerized frontend, API, and action servers on AWS EC2, reducing deployment time by 50%."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="w-fit">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
