import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

interface Technology {
  name: string;
  icon?: React.ElementType;
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto p-6 bg-bg border-4 border-black shadow-[8px_8px_0px_0px_#000]"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 border-b-4 border-black pb-2">
          {name}
        </h1>
        
        <p className="text-lg leading-relaxed mb-6 bg-bg p-4 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
          {description}
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="flex items-center px-3 py-1 bg-[#ffc800] border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-300"
              >
                {tech.icon && (
                  <tech.icon className="w-4 h-4 mr-2" />
                )}
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href={projectUrl} 
          target="_blank" 
          className="w-full"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-3 bg-[#ffc800] border-4 border-black font-bold 
            shadow-[6px_6px_0px_0px_#000] hover:translate-x-[6px] hover:translate-y-[6px] 
            hover:shadow-none transition-all duration-300 flex items-center justify-center"
          >
            <GithubIcon className="mr-2 h-5 w-5" />
            View on GitHub
          </motion.button>
        </Link>
        
        {liveUrl && (
          <Link 
            href={liveUrl} 
            target="_blank" 
            className="w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-black text-white border-4 border-black 
              shadow-[6px_6px_0px_0px_#ffc800] hover:translate-x-[6px] hover:translate-y-[6px] 
              hover:shadow-none transition-all duration-300 flex items-center justify-center"
            >
              <ExternalLinkIcon className="mr-2 h-5 w-5" />
              Live Demo
            </motion.button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetails;