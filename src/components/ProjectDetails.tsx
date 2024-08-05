import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

interface Technology {
  name: string;
  icon?: string;
}

interface ProjectDetailsProps {
  name: string;
  description: string;
  technologies: Technology[];
  projectUrl: string;
  liveUrl?: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  name,
  description,
  technologies,
  projectUrl,
  liveUrl
}) => {
  return (
    <Card className="max-w-4xl mx-auto bg-transparent border-none bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6">{description}</p>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="destructive" className="flex items-center   border-none bg-gradient-to-r from-yellow-500 to-pink-500  ">
                {tech.icon && (
                  <img src={tech.icon} alt={tech.name} className="w-4 h-4 mr-1" />
                )}
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={projectUrl} passHref target="_blank">
          <Button className="w-full sm:w-auto bg-transparent border-none hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 focus:bg-gradient-to-r focus:from-yellow-500 focus:to-pink-500 hover:text-black focus:text-black transition-all duration-300
          text-yellow-500">
            <GithubIcon className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
        </Link>
        {liveUrl && (
          <Link href={liveUrl} passHref target="_blank">
            <Button variant="default" className="w-full sm:w-auto bg-transparent border-none hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 focus:bg-gradient-to-r focus:from-yellow-500 focus:to-pink-500 hover:text-black focus:text-black transition-all duration-300 text-pink-500  ">
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectDetails;