'use client';
import ProjectDetails from '@/components/project-details';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSocketdotio
} from "react-icons/si";

const MyProjectPage = () => {
  const projectData = {
    name: "Collaborative Text Editor",
    description: "I developed a real-time collaborative text editor using the MERN (MongoDB, Express.js, React, Node.js) stack and Socket.IO. This web application enables multiple users to simultaneously edit shared documents, with changes instantly reflected across all connected clients. Each document is assigned a unique identifier for easy access and collaboration. The application utilizes MongoDB to persistently store document content, ensuring that work is saved and can be retrieved later. Key features include real-time synchronization of text edits, unique document IDs for sharing, and persistent storage in the database.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "WebSocket", icon: SiSocketdotio },
    ],
    projectUrl: "https://github.com/DanTiw/collaborative-text-editor",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-bg py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <ProjectDetails {...projectData} />
      </div>
    </motion.div>
  );
};

export default MyProjectPage;