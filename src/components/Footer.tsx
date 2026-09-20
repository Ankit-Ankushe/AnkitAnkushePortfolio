import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <footer className="bg-primary/5 border-t border-border py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Ankit Ankushe</h3>
            <p className="text-muted-foreground leading-relaxed">
              Software Developer specializing in Android and Full-Stack development. 
              Passionate about creating innovative solutions with modern technologies.
            </p>
            <div className="flex gap-3">
              <Button asChild variant="outline" size="icon" className="hover:bg-primary/10">
                <a href="https://github.com/ankit-ankushe" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="hover:bg-primary/10">
                <a href="https://linkedin.com/in/ankit-ankushe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="hover:bg-primary/10 cursor-pointer"
                onClick={() => setContactOpen(true)}
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <div>
                <a 
                  href="https://css-playground-pro.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  🎮 CSS Quest Pro Demo
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.tech.parrywareapp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  📱 Parryware Mobile App
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div>
                <a 
                  href="https://medium-clone-masai.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  Medium Clone Demo
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div>
                <a 
                  href="https://lifestylepalteam.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  FitnessPal Clone Demo
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="hover:text-foreground transition-colors cursor-pointer text-left"
                >
                  ankitankushe@gmail.com
                </button>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+917822832282" className="hover:text-foreground transition-colors">
                  +91 7822832282
                </a>
              </div>
            </div>
            <Button
              type="button"
              className="w-full cursor-pointer"
              onClick={() => setContactOpen(true)}
            >
              Let's Work Together
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2026 Ankit Ankushe. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>

      <ContactModal
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Let's Work Together"
        subject="Let's Work Together - Portfolio Inquiry"
      />
    </footer>
  );
};

export default Footer;