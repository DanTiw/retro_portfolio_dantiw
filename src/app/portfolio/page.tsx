import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { GithubIcon, CodeIcon } from "lucide-react";

const projects = [
  { id: 1, title: 'PantryPal', description: 'A Pantry Management System, using llama 3.1', github: 'portfolio/pantrypal', technologies: ['AI', 'React', 'Next.js'] },
  { id: 2, title: 'Chatify', description: 'A variety of chatbots for your personalized needs!', github: 'portfolio/chatify', technologies: ['Chatbots', 'ML'] },
  { id: 3, title: 'Flashcard.AI', description: 'AI-Driven flashcard generator', github: 'portfolio/flashcard', technologies: ['AI', 'EdTech'] },
  { id: 4, title: 'Zenith', description: 'An activity tracker for small scale businesses to assign tasks to Employees', github: '/portfolio/zenith', technologies: ['Management', 'Productivity'] },
  { id: 5, title: 'Collaborative Text Editor', description: 'A Real-time Rich text editor', github: 'portfolio/editor', technologies: ['Real-time', 'Collab'] },
  { id: 6, title: 'QR Code Generator', description: 'Simple QR code Generator', github: 'portfolio/qrcode', technologies: ['Utility', 'Web Tool'] },
  { id: 7, title: 'Notes App', description: 'Simple Notes App with CRUD operations', github: 'portfolio/notes', technologies: ['CRUD', 'Web App'] },
  { id: 8, title: 'Source Code', description: 'Feel free to use the website design!', github: 'https://github.com/DanTiw/retro_portfolio_dantiw', technologies: ['Portfolio', 'Design'] },
];

const Portfolio = () => {
  return (
    <div className="container  px-4 py-8 mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-8">My Projects</h2>
      <div className="space-y-4 max-w mx-auto">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="
              lg:w-full
              bg-gradient-to-r from-yellow-500 to-pink-500 
              rounded-xl 
              p-4 
              md:p-6 
              flex 
              flex-col 
              md:flex-row 
              items-start 
              md:items-center 
              space-y-4
              md:space-y-0 
              md:space-x-4 
              transition-all 
              duration-300 
              hover:scale-[1.02] 
              hover:shadow-xl
            "
          >
            <div className="flex-grow w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="
                        bg-white/20 
                        text-white 
                        px-2 
                        py-1 
                        rounded-full 
                        text-xs 
                        uppercase
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-white text-opacity-80 mt-2 line-clamp-2 text-sm md:text-base">
                {project.description}
              </p>
            </div>
            <div className="w-full md:w-auto flex justify-start md:justify-end mt-3 md:mt-0">
              <Link href={project.github} passHref>
                <Button 
                  variant="outline" 
                  className="
                    flex 
                    items-center 
                    gap-2 
                    w-full 
                    md:w-auto 
                    justify-center
                  "
                >
                  <CodeIcon className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;