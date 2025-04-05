'use client';
import ProjectDetails from '@/components/project-details';
import { motion } from 'framer-motion';
import {


  SiReact,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";

const MyProjectPage = () => {
  const projectData = {
    name: "T.E.M.P.L.A.T.E",
    description: `Transforming Engine for Modular Programming, Logic, and Automated Template Execution

T.E.M.P.L.A.T.E. is my passion project that I've poured my heart into. Imagine telling our intuitive interface what you want to build, and watching as powerful AI analyzes your needs and instantly generates a complete, production-ready codebase tailored just for you. No more wasting precious hours on repetitive setup work!

I created this because I believe developers should spend their time on what truly matters - the creative and challenging aspects of building something amazing. With each template you download, you're starting your project on a rock-solid foundation.

I'm currently obsessed with making it even better by optimizing the AI engine (powered by Qwen 3.2 or DeepSeek R1) to create increasingly modular and scalable code templates. My dream is to help fellow developers break free from tedious boilerplate and immediately dive into bringing their visions to life!`,
    technologies: [
      { name: "Typescript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Firebase", icon: SiFirebase },
      { name: "AI", icon: FaRobot },
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