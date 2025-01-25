'use client';
import ProjectDetails from '@/components/project-details'; // Corrected import
import { motion } from 'framer-motion';
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const MyProjectPage = () => {
  const projectData = {
    name: "Note Taking App",
    description: "I developed a Google Keep clone using React, which served as an excellent learning experience for mastering React fundamentals and CRUD operations. This web application allows users to create, read, update, and delete notes, mimicking the core functionality of Google Keep. Through building this project, I gained hands-on experience with React components, state management, and props. I learned to implement a responsive user interface using React's component-based architecture, managing application state with hooks like useState and useEffect. The CRUD functionality taught me how to handle user interactions, update the UI dynamically, and maintain data consistency.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
    ],
    projectUrl: "https://github.com/DanTiw/Google-Keeper-App-Clone",
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