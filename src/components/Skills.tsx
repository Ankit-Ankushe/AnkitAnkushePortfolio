import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Smartphone, Cloud, Lightbulb, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["ReactJs", "Redux", "Material UI", "Antd", "HTML", "CSS", "JavaScript", "Bootstrap"],
    color: "text-blue-500"
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
    color: "text-green-500"
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Kotlin", "Jetpack Compose", "MVVM", "Material Design", "Android Studio"],
    color: "text-purple-500"
  },
  {
    title: "Database & DevOps",
    icon: Cloud,
    skills: ["MongoDB", "PostgreSQL", "Git", "GitHub", "CI/CD", "Keycloak (SSO)"],
    color: "text-orange-500"
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "Kotlin", "Python", "Java", "HTML", "CSS"],
    color: "text-red-500"
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Leadership", "Teamwork", "Problem Solving", "Strategic Planning", "Communication"],
    color: "text-teal-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="border-primary/30 text-primary hover:bg-primary/10 transition-colors text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI/ML Special Section */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  Artificial Intelligence & Machine Learning
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-4">
                    Currently pursuing Minor in AI from IIT Ropar (Aug 2024 – Sep 2025)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Machine Learning", "Deep Learning", "Python", "Pandas", "NumPy", "TensorFlow", "Scikit-learn"].map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="border-accent/30 text-accent bg-accent/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Focus on ML, DL, and Data Analysis</p>
                  <p>• Advanced algorithms and model optimization</p>
                  <p>• Data visualization and statistical analysis</p>
                  <p>• Neural networks and deep learning frameworks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;