import React from 'react';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

const projects = [
  { id: 1, title: 'Zenith', description: 'An activity tracker made for small scale businesses to assign tasks to Employees', github: '/portfolio/zenith' },
  { id: 2, title: 'PantryPal', description: 'A Pantry Management System, using llama 3.1', github: 'portfolio/pantrypal' },
  { id: 3, title: 'Collaborative Text Editor', description: 'A Real-time Rich text editor', github: 'portfolio/editor' },
  { id: 4, title: 'The QR Code Generator', description: 'Simple QR code Generator', github: 'portfolio/qrcode' },
  { id: 5, title: 'Notes App', description: 'Simple Notes App with CRUD operations', github: 'portfolio/notes' },
  { id: 6, title: 'Source Code', description: 'Feel free to use the website design!', github: 'https://github.com/DanTiw/retro_portfolio_dantiw' },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
        {projects.map((project) => (
          <CardContainer key={project.id} className="inter-var">
            <CardBody className="bg-gradient-to-b from-yellow-500 to-pink-500 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-4 sm:p-6 border">
              <CardItem
                translateZ="50"
                className="text-lg sm:text-xl font-bold text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-sm sm:text-base mt-2 line-clamp-3"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Badge className="px-2 py-1 sm:px-4 sm:py-2 text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-full dark:text-emerald-300 dark:bg-emerald-900/30 capitalize">
                  {project.title.toLowerCase()}
                </Badge>
              </CardItem>
              <CardItem translateZ="120" className="w-full mt-4">
                <Link href={project.github} passHref>
                  <Button className="w-full text-xs sm:text-sm">
                    <GithubIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    View on GitHub
                  </Button>
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;