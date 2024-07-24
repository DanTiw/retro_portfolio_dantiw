import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
interface Technology {
  name: string;
  icon?: string; // URL or import path for the tech icon
}

interface ProjectDetailsProps {
  name: string;
  description: string;

  technologies: Technology[];
  projectUrl: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  name,
  description,

  technologies,
  projectUrl
}) => {
  return (
    <div className="mx-auto p-6 bg-clip-text bg-gradient-to-l from-yellow-500 to-pink-500 text-transparent">
      <h1 className="text-3xl font-bold mb-4 text-left ">{name}</h1>
      
      <p className="text-left mb-6">{description}</p>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-left ">Technologies Used</h2>
        <ul className="list-disc list-inside text-left text-white">
          {technologies.map((tech, index) => (
            <li key={index} className="flex items-center mb-1 ml-8">
              {tech.icon && <img src={tech.icon} alt={tech.name} className="w-5 h-5 mr-2" />}
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
      
      <div className=" mt-5 flex items-center">
        <Link href={projectUrl} passHref   target="_blank" className="flex items-center px-6 py-3 text-sm mt-4 sm:text-base rounded-md  text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-yellow-500 to-pink-500">
            Github 
           
            </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;