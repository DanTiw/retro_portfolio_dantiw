'use client';
import ProjectDetails from '@/components/project-details';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFirebase
} from "react-icons/si";

const MyProjectPage = () => {
  const projectData = {
    name: "Zenith!",
    description: "For our final year project, my two peers and I developed our first React application: a comprehensive team collaboration platform named Zenith. The app integrates three key features: a real-time chat system, task tracking functionality, and admin access controls, all powered by Firebase. Zenith allows team members to communicate instantly, manage and prioritize tasks efficiently, and gives administrators oversight and management capabilities. This project showcased our newly acquired React skills while also demonstrating our ability to integrate cloud services and implement real-time features in a web application.",
    technologies: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Firebase", icon: SiFirebase },
    ],
    projectUrl: "https://github.com/rheetham/zenith",
    liveUrl: "https://zenith-f8eab.web.app/"
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