'use client';
import ProjectDetails from '@/components/project-details'; // Corrected import
import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";

const ChatifyProjectPage = () => {
  const projectData = {
    name: "Chatify",
    description: "Chatify is a cutting-edge web application that brings personalized, intelligent conversations to your fingertips. Powered by Firebase for seamless real-time functionality, it offers a robust and responsive chatting experience. With multiple AI assistants, including specialized chatbots for coding, Q&A, fitness, nutrition, health & wellness, and emotion support, Chatify caters to a wide range of user needs. Key features include real-time data synchronization, secure authentication, cloud storage for conversation history, dark/light mode, and responsive design. Built with Next.js, React, Tailwind CSS, and Firebase, Chatify showcases the power of modern web technologies combined with advanced AI capabilities and real-time database functionality.",
    technologies: [
      { name: "NextJS", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Firebase", icon: SiFirebase },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    projectUrl: "https://github.com/DanTiw/ai-customer-support",
    liveUrl: "https://chatify-rouge-three.vercel.app/"
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

export default ChatifyProjectPage;