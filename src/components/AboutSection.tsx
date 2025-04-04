import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Mail, Github, Linkedin, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          {/* about section */}
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
            <div className="title flex gap-4 mt-6">
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

          {/* skills section */}

          <div>
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SkillCard
                title="Frontend Development"
                skills={[{name :'JavaScript' , logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"}, {name : "TypeScript", logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"}, {name :"React", logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},{name : "Vue.js", logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"}, { name :"HTML5", logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"}, {name :"Tailwind CSS",logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"}]}
                icon={<Code className="h-6 w-6" />}
              />
              <SkillCard
                title="Backend Development"
                skills={[{name : "PHP", logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg"},{name:"Laravel", logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"}]}
                icon={<Code className="h-6 w-6" />}
              />
              <SkillCard
                title="Database"
                skills={[{name :"PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"}, {name :"MySQL", logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"}]}
                icon={<Code className="h-6 w-6" />}
              />
              <SkillCard
                title="Tools & Others"
                skills={[{name :"Git", logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg"},{ name :"Docker", logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"}, {name :"Github", logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"}, {name :"Vercel", logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"}, {name :"Netlify", logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original-wordmark.svg"}, {name :"Postman", logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg"},{name : "Swagger" , logo : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg"}]}
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
  skills: Array<{name : string , logo : string}>;
  icon?: React.ReactNode;
}

const SkillCard = ({ title, skills, icon }: SkillCardProps) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h4 className="font-bold">{title}</h4>
      </div>
      <ul className="space-y-2 flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <li key={i}>
            <img 
              src={skill.logo} 
              alt={`${skill.name} logo`} 
              className="h-16 w-16 inline-block mr-2" 
            />
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default AboutSection;
