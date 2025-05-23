import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-16 pb-8"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-2xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm <br /> <span className="text-primary">EL barry Anouar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            I build exceptional digital experiences with modern technologies. Specializing in both frontend and backend development to create seamless, responsive applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button  
                asChild
              >
                <a href="/resume.pdf" download="Anouar_ElBarry_Resume.pdf">
                  <FileText className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="/profile.png"
            alt="Anouar El barry"
            className="w-120 h-120 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
      <div className="flex justify-center pb-8 animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <a href="#projects">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
