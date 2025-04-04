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
                skills={[{name :'JavaScript' , logo : "devicon-javascript-plain colored"}, {name : "TypeScript", logo : "devicon-typescript-plain colored"}, {name :"React", logo : "devicon-react-original-wordmark colored"},{name : "Vue.js", logo : "devicon-vuejs-plain-wordmark colored"}, { name :"HTML5", logo : "devicon-html5-plain-wordmark colored"}, {name :"Tailwind CSS",logo : "devicon-tailwindcss-plain-wordmark colored text-8xl"}]}
                icon={"fa-solid fa-display"}
              />
              <SkillCard
                title="Backend Development"
                skills={[{name : "PHP", logo : "devicon-php-plain"},{name:"Laravel", logo : "devicon-laravel-plain colored"}]}
                icon={"fa-solid fa-gear"}
              />
              <SkillCard
                title="Database"
                skills={[{name :"PostgreSQL", logo: "devicon-postgresql-plain-wordmark colored"}, {name :"MySQL", logo : "devicon-mysql-plain-wordmark colored text-7xl"}]}
                icon={"fa-solid fa-database"}
              />
              <SkillCard
                title="Tools & Others"
                skills={[{name :"Git", logo : "devicon-git-plain colored"},{ name :"Docker", logo : "devicon-docker-plain-wordmark colored"}, {name :"Github", logo : "devicon-github-original"}, {name :"Vercel", logo : "devicon-vercel-original-wordmark text-7xl"}, {name :"Netlify", logo : "devicon-netlify-plain-wordmark colored text-7xl"}, {name :"Postman", logo : "devicon-postman-plain colored"},{name : "Swagger" , logo : "devicon-swagger-plain colored"}]}
                icon={"fa-solid fa-tools"}
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
  icon: string;
}

const SkillCard = ({ title, skills, icon }: SkillCardProps) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center gap-3 mb-4">
      <i className={`${icon} text-white text-3xl`}></i>
        <h4 className="font-bold">{title}</h4>
      </div>
      <ul className="space-y-2 flex flex-wrap justify-center items-center gap-6">
        {skills.map((skill, i) => (
          <li key={i}>
            <i 
              className={`${skill.logo} text-6xl tex0 opacity-50 transition-all duration-300 hover:opacity-100`}
            />
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default AboutSection;
