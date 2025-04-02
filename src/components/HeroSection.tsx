
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-16 pb-8"
    >
      <div className="container mx-auto px-4 flex flex-col justify-center flex-1">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            I build exceptional digital experiences with modern technologies. Specializing in both frontend and backend development to create seamless, responsive applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary text-primary-foreground" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
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
