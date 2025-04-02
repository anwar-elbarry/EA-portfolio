
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  repoLink?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with customer accounts, product catalog, shopping cart, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality, team collaboration features, and real-time updates.",
    tags: ["TypeScript", "React", "Express", "PostgreSQL", "Socket.io"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media accounts with data visualization, automated reporting, and content scheduling tools.",
    tags: ["Vue.js", "Firebase", "Chart.js", "Tailwind CSS", "REST APIs"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "Weather Application",
    description: "A weather forecast application providing current and future weather conditions for any location.",
    tags: ["React", "OpenWeather API", "Geolocation", "Progressive Web App"],
    demoLink: "#",
    repoLink: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle max-w-3xl">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full project-card">
              {project.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.repoLink && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demoLink && (
                  <Button size="sm" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
