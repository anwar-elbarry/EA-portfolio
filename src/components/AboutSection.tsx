
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Mail, Github, Linkedin, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">About Me</h2>
            <p className="text-lg mb-6">
              I'm a Full Stack Developer with a passion for building innovative web applications. I enjoy solving complex problems and turning ideas into reality through elegant and efficient code.
            </p>
            <p className="text-lg mb-6">
              With expertise in both frontend and backend technologies, I create seamless, responsive, and user-friendly digital experiences. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="bg-primary text-primary-foreground" asChild>
                <a href="/resume.pdf" download="YourName_Resume.pdf">
                  <FileText className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:your.email@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>
            <div className="flex gap-4 mt-6">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SkillCard 
                title="Frontend Development" 
                skills={["JavaScript", "TypeScript", "React", "Vue.js", "HTML5/CSS3", "Tailwind CSS"]} 
                icon={<Code className="h-6 w-6" />}
              />
              <SkillCard 
                title="Backend Development" 
                skills={["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"]} 
                icon={<Code className="h-6 w-6" />}
              />
              <SkillCard 
                title="Database" 
                skills={["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]} 
                icon={<Code className="h-6 w-6" />}
              />
              <SkillCard 
                title="Tools & Others" 
                skills={["Git", "Docker", "AWS", "CI/CD", "Testing", "Agile"]} 
                icon={<Code className="h-6 w-6" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  title: string;
  skills: string[];
  icon?: React.ReactNode;
}

const SkillCard = ({ title, skills, icon }: SkillCardProps) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h4 className="font-bold">{title}</h4>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, i) => (
          <li key={i} className="flex items-center">
            <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
            {skill}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default AboutSection;
