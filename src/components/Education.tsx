import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Minor in Artificial Intelligence",
    institution: "IIT Ropar",
    location: "Punjab, India",
    period: "Aug 2024 – Sep 2025",
    focus: "ML, DL, Data Analysis",
    skills: ["Machine Learning", "Deep Learning", "Python", "Pandas", "NumPy", "TensorFlow", "Scikit-learn"],
    description: "Advanced coursework in artificial intelligence, machine learning algorithms, deep learning frameworks, and data analysis techniques.",
    highlights: [
      "Neural networks and deep learning architectures",
      "Statistical analysis and data visualization",
      "Model optimization and performance tuning",
      "Real-world AI application development"
    ]
  },
  {
    degree: "Full Stack Web Development",
    institution: "Masai School",
    location: "Bengaluru, India",
    period: "Aug 2021 – Sep 2022",
    focus: "Modern Web Technologies",
    skills: ["React", "Node.js", "Express", "MongoDB", "Redux", "Git"],
    description: "Intensive full-stack development program with hands-on project experience and industry-relevant curriculum.",
    highlights: [
      "Built 4 major projects and multiple mini-projects",
      "Collaborative development and version control",
      "RESTful API design and database management",
      "Modern frontend frameworks and libraries"
    ]
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    institution: "St. Francis De Sales College",
    location: "Nagpur, India",
    period: "Jul 2019 – Aug 2022",
    focus: "Computer Science, Mathematics, Physics",
    skills: ["Programming", "Mathematics", "Physics", "Problem Solving", "Analytical Thinking"],
    description: "Specialized in Computer Science, Mathematics, and Physics. Built a strong foundation in programming, problem-solving, and analytical thinking.",
    highlights: [
      "Strong foundation in computer science principles",
      "Mathematical modeling and analysis",
      "Physics concepts and applications",
      "Analytical and logical thinking development"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & <span className="text-primary">Learning</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and skill development through formal education and specialized programs
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl text-primary group-hover:text-accent transition-colors">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-foreground font-semibold">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <BookOpen className="w-4 h-4" />
                      Focus: {edu.focus}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Achievement */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30 text-center p-8">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-accent/20 rounded-full">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Continuous Learning Philosophy
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Committed to staying current with emerging technologies and industry best practices. 
                Currently expanding expertise in AI/ML while maintaining proficiency in full-stack development.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;