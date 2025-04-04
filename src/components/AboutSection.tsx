import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-1 items-center">
          {/* skills section */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-center">My Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SkillCard
                title="Frontend Development"
                skills={[{name :'JavaScript' , logo : "devicon-javascript-plain colored"}, {name : "TypeScript", logo : "devicon-typescript-plain colored"},{name :"Css" , logo : "devicon-css3-plain-wordmark colored"} ,{name :"React", logo : "devicon-react-original-wordmark colored"},{name : "Vue.js", logo : "devicon-vuejs-plain-wordmark colored"}, { name :"HTML5", logo : "devicon-html5-plain-wordmark colored"}, {name :"Tailwind CSS",logo : "devicon-tailwindcss-plain-wordmark colored text-8xl"}]}
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
        <i className={`${icon} text-black dark:text-white text-3xl`}></i>
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
