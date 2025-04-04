
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  
  return (
    <footer className="py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-center md:text-left text-muted-foreground">
              © 2025 EL-BARRY ANOUAR. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/anwar-elbarry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anouar-el-barry-39475a254/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:elbarry.anouar.contact@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
