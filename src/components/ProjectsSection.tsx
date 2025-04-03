
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
    title: "ESPADA",
    description: "Event management platforms like Eventbrite allow Organizers to create,manage and promote events online or in person.",
    tags: ["php", "html", "css", "javascript", "Twig","tailwind","AJAX","postgresql"],
    demoLink: "#",
    repoLink: "https://github.com/anwar-elbarry/Espada.git",
  },
  {
    title: "EDUPRO",
    description: "The platform aims to revolutionize learning by offering an interactive andpersonalized system for students and teachers.",
    tags: ["php", "html", "css", "mysql", "AJAX","tailwind","javascript"],
    demoLink: "#",
    repoLink: "https://github.com/anwar-elbarry/EDUPRO.git",
  },
  {
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media accounts with data visualization, automated reporting, and content scheduling tools.",
    tags: ["Vue.js", "Firebase", "Chart.js", "Tailwind CSS", "REST APIs"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "PROTASK",
    description: "The platform aims to facilitate team management and collaboration Providing users with a space to create, track and manage theirProjects and tasks",
    tags: ["php", "html", "css", "tailwind","javascript","Mysql"],
    demoLink: "#",
    repoLink: "https://github.com/anwar-elbarry/Protask.git",
  },
  {
    title: "SAVE SMART",
    description: "SaveSmart is a Laravel-based application designed to help users manage their finances by tracking income, expenses, and financial goals. It offers an intuitive interface for creating, updating, and deleting financial records, as well as managing user profiles.",
    tags: ["laravel", "html", "blade", "tailwind","javascript","posrgresql"],
    demoLink: "#",
    repoLink: "https://github.com/anwar-elbarry/Save_Smart.git",
  },
  {
    title: "CUSTOMER CARE API",
    description: "Modern businesses must offer responsive and structured customer service to ensure user satisfaction. This project proposes to design an advanced and documented API allowing companies to centralize and manage their customer requests efficiently.",
    tags: ["laravel", "vue.js", "tailwind", "REST API","javascript","posrgresql"],
    demoLink: "#",
    repoLink: "https://github.com/anwar-elbarry/CustomerCareAPI.git",
  },
  {
    title: "CAR RENTAL API",
    description: "In the mobility industry, vehicle rental services are experiencing significant growth. Many companies are looking to automate and simplify their management through digital solutions. This project aims to design a robust and secure REST API that can be integrated into a mobile or web application to facilitate rental management.",
    tags: ["laravel", "REST API","posrgresql","swagger"],
    demoLink: "#",
    repoLink: "https://github.com/anwar-elbarry/Car_Rental_Api.git",
  },
  {
    title: "STOK WISE",
    description: "STOK WISE is a comprehensive inventory management system designed to help businesses effectively track stock levels and manage reorder processes to meet customer demand without overstocking. This system ensures operational efficiency through robust features for managing roles, users, products, categories, suppliers, orders, and customers.",
    tags: ["php", "html","mysql","javascript","tailwind"],
    demoLink: "#",
    repoLink: "https://github.com/anwar-elbarry/StockWise.git",
  },
  {
    title: "MC FOOTBALL",
    description: "This project is an interactive application that allows you to manage a football team. It provides an intuitive user interface to organize players according to specific tactical formations, such as 4-3-3. The application also supports managing a file of player data for easy import and export of player information in JSON format, with new player data being stored in local storage. ",
    tags: [ "html","javascript","tailwind","css"],
    demoLink: "https://anwar-elbarry.github.io/anouar_elbarry-fut/",
    repoLink: "https://github.com/anwar-elbarry/anouar_elbarry-fut.git",
  },
  {
    title: "Kanban Task Management Application",
    description: "This is a simple Kanban task management application built with JavaScript, HTML, and tailwind css. The application allows users to manage tasks efficiently by categorizing them into three different columns: Todo, In Progress, and Done. It features functionality for adding, editing, deleting, and viewing task details. ",
    tags: [ "html","javascript","tailwind","css"],
    demoLink: "https://anouarkanbanproject4.vercel.app/",
    repoLink: "https://github.com/anwar-elbarry/anouar_kanban_project4.git",
  },
  {
    title: "FUTURE CODERS",
    description: "Ce projet est un site e-commerce frontend pour la vente de produits technologiques tels que des ordinateurs portables, souris, claviers et casques. Le site permet aux utilisateurs de naviguer facilement entre les différentes catégories de produits ou de consulter les détails des produits. ",
    tags: [ "html","javascript","tailwind","css"],
    demoLink: "https://futurecodersstartup.vercel.app/",
    repoLink: "https://github.com/anwar-elbarry/futurecoders_startup.git",
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
