'use client'
import ProjectDetails from '@/components/project-details';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiFirebase,
  SiTailwindcss
} from "react-icons/si";

const MyProjectPage = () => {
    const projectData = {
        name: "PantryPal",
        description: "The Pantry Management System is a modern web application designed to simplify food inventory management for households. Built with Next.js, React, and Firebase, it offers a user-friendly experience for tracking, updating, and managing pantry items. The interface, designed with Shadcn UI components and Tailwind CSS, is intuitive and works seamlessly across devices. Key features include real-time data synchronization, recipe suggestions based on current inventory, customizable settings for default units, and instant inventory reports. With Firebase, all changes are reflected immediately, ensuring your pantry data is always up-to-date.",
        technologies: [
            { name: "NextJS", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "React", icon: SiReact },
            { name: "Firebase", icon: SiFirebase },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
        projectUrl: "https://github.com/DanTiw/pantry_tracker",
        liveUrl: "https://pantry-tracker-ochre.vercel.app/"
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