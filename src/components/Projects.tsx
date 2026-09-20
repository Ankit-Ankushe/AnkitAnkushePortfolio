import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Trophy, Users, Calendar, MapPin } from "lucide-react";

const projects = [
  {
    title: "CSS Quest Pro — Interactive Playground",
    organization: "Personal Project",
    location: "Online / Self-Directed",
    duration: "Live Interactive Platform",
    description:
      "An interactive, gamified CSS learning platform featuring 50 hands-on coding quests across 5 modules: Box Placement, Flexbox Fundamentals, CSS Grid Mastery, Motion & Transformations, and Selector Sorcery.",
    achievement: "🚀 50 Gamified Quests with Real-Time AST Validation",
    technologies: [
      "React",
      "TypeScript",
      "TanStack Router",
      "Tailwind CSS",
      "CodeMirror",
      "CSS3",
      "Vite",
    ],
    liveDemo: "https://css-playground-pro.vercel.app/",
    github: "https://github.com/Ankit-Ankushe/css-playground-pro",
    features: [
      "50 interactive quests spanning Box Placement, Flexbox, Grid, Motion & Pseudo-Elements",
      "Real-time isolated iframe preview with automated CSS rule validation",
      "Resizable split-pane code editor with syntax detection and hint unlocks",
      "Gamified XP reward system, auto-fill solutions, and milestone celebrations",
      "Horizontally scrollable module navigation with responsive layout",
    ],
  },
  {
    title: "Medium Clone",
    organization: "Masai School, Team Project",
    location: "Bengaluru, India",
    duration: "10 days",
    description:
      "Built a Medium blogging platform clone with full-stack functionality including user authentication, article publishing, comments, likes, and categories.",
    achievement: "🏆 Team won 1st Prize for this project",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Material UI",
    ],
    liveDemo: "https://medium-clone-masai.netlify.app/",
    github: "https://github.com/theatulanand/medium-clone",
    features: [
      "User authentication and authorization",
      "Article publishing with rich text editor",
      "Comments and likes system",
      "Category-based article organization",
      "Responsive design with Material UI",
    ],
  },
  {
    title: "FitnessPal Clone",
    organization: "Masai School, Team Project",
    location: "Bengaluru, India",
    duration: "10 days",
    description:
      "Built a comprehensive fitness and lifestyle tracking application with calorie tracking, lifestyle plans, and user dashboard functionality.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Material UI"],
    liveDemo: "https://lifestylepalteam.netlify.app/",
    github: "https://github.com/Ankit-Ankushe/myFitnessPal-Clone",
    features: [
      "Calorie tracking and nutrition monitoring",
      "Customizable lifestyle and fitness plans",
      "Interactive user dashboard",
      "Progress tracking and analytics",
      "Responsive design for mobile and desktop",
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing full-stack applications built with modern technologies and best
            practices
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl md:text-2xl text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>

                    <div className="flex items-center gap-2 text-foreground font-semibold">
                      <Users className="w-4 h-4 text-accent" />
                      {project.organization}
                    </div>

                    {project.achievement && (
                      <div className="inline-flex items-center gap-2 p-2 bg-accent/10 rounded-lg border border-accent/20">
                        <Trophy className="w-4 h-4 text-accent" />
                        <span className="text-accent font-semibold text-sm">
                          {project.achievement}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col md:items-end gap-2.5">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>

                    <div className="flex gap-2.5 pt-1">
                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="group/btn"
                      >
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="group/btn"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
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