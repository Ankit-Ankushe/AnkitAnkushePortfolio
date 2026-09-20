import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Fast Facts",
    type: "Product-based",
    location: "Chennai, India",
    role: "Software Developer",
    period: "Jun 2024 – Present",
    achievements: [
      "Sole React Developer on Fixed Asset Management System (FAMS), a large-scale enterprise product built from scratch",
      "Built key modules: Physical Verification (QR scanning, GPS, OTP), Insurance (policy creation, asset claims), Asset Transfer (workflow-based, QR packaging), Asset Sale (depreciation logic, approvals), AMC Module (contracts, renewals)",
      "Worked with CI/CD pipelines for automated build & deployment"
    ],
    skills: ["ReactJs", "Redux", "Kotlin Jetpack Compose", "REST APIs", "eCharts", "JavaScript", "Material Design", "Android Studio", "SSO", "Keycloak", "CI/CD"],
    softSkills: ["Leadership", "Collaboration", "Problem Solving"]
  },
  {
    company: "Newgen Digital Works",
    type: "Service-based",
    location: "Chennai, India",
    role: "Software Developer",
    period: "Oct 2022 – Jun 2024",
    achievements: [
      "Introduced Android development in the company, leading to 30% growth in mobile projects",
      "Led a team of 3 for Technician Mobile App (Kotlin + Jetpack Compose), delivered 2 weeks early, enabling 20% faster time-to-market",
      "Eliminated outsourcing costs by leveraging internal resources (20% cost savings)",
      "Spearheaded proprietary Service Desk Web Application (React frontend) with 25% higher user satisfaction",
      "Published Parryware Mobile App on Play Store"
    ],
    skills: ["ReactJs", "Kotlin", "Jetpack Compose", "JavaScript", "Java", "Antd", "Material Design", "PostgreSQL", "GraphQL", "Mobx", "REST APIs"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.tech.parrywareapp"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building innovative solutions across mobile and web platforms with measurable impact
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl md:text-2xl text-primary group-hover:text-accent transition-colors">
                      {exp.role}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-foreground font-semibold">
                      <Building2 className="w-4 h-4 text-accent" />
                      {exp.company} <Badge variant="secondary" className="text-xs">{exp.type}</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Play Store Link */}
                {exp.playStoreLink && (
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <a 
                      href={exp.playStoreLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 font-semibold flex items-center gap-2 transition-colors"
                    >
                      📱 View Parryware App on Play Store
                    </a>
                  </div>
                )}

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                {exp.softSkills && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.softSkills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="border-accent/30 text-accent">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;