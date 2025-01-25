'use client';
import ProjectDetails from '@/components/project-details'; // Corrected import
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";

const FlashcardProjectPage = () => {
  const projectData = {
    name: "Flashcard Generator",
    description: "The Flashcard Generator is a dynamic web application designed to streamline the creation and management of study materials. Built with React and Next.js, it offers an intuitive interface for generating, editing, and reviewing flashcards. The application leverages modern web technologies to provide a smooth, interactive user experience. Key features include AI-powered flashcard generation, real-time editing capabilities, a flip card interface for study sessions, and the ability to save and manage multiple flashcard sets. The clean, responsive design, implemented with Tailwind CSS, ensures a consistent experience across various devices.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "NextJS", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Supabase", icon: SiSupabase },
    
    ],
    projectUrl: "https://github.com/rajeshchoudharyt/ai-flashcard",
    liveUrl: "https://ai-flashcard-one.vercel.app/"
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

export default FlashcardProjectPage;