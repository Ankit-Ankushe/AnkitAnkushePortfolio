import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <div className="container max-w-6xl mx-auto">
        <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/80 border-accent/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 animate-pulse"></div>
                <img
                  src="/lovable-uploads/09ca4187-fc54-46e3-be95-e7ec59f0db1f.png"
                  alt="Ankit Ankushe - Software Developer"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-2xl"
                />
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center md:text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Ankit <span className="text-primary">Ankushe</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-accent">
                  Software Developer – Android & Full Stack
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  3+ years of experience crafting mobile and web solutions with modern technologies. 
                  Specialized in React, Kotlin, and building scalable enterprise applications.
                </p>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button
                  variant="default"
                  size="lg"
                  className="group cursor-pointer"
                  onClick={() => setContactOpen(true)}
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Contact Me
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <a href="https://linkedin.com/in/ankit-ankushe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <a href="https://github.com/ankit-ankushe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    GitHub
                  </a>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Live Apps</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <ContactModal
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Contact Ankit Ankushe"
        subject="Portfolio Inquiry - Let's Connect"
      />
    </section>
  );
};

export default Hero;