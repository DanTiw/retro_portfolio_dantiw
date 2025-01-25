'use client';
import ProjectDetails from '@/components/project-details'; // Corrected import
import { motion } from 'framer-motion';
import { SiPython } from "react-icons/si";

const MyProjectPage = () => {
  const projectData = {
    name: "QR Code Generator",
    description: "One of my First projects when I started learning programming! I developed a QR code generator application using Python and the Tkinter library. This desktop application allows users to input text or URLs and instantly generate corresponding QR codes. The user-friendly interface, built with Tkinter, provides an input field, a 'Generate' button, and an area to display the generated QR code. The app utilizes the qrcode library to create the QR codes, which can be saved as image files.",
    technologies: [
      { name: "Python", icon: SiPython }, // Using react-icons for Python
    ],
    projectUrl: "https://github.com/DanTiw/QR-code-generator-with-Tkinter-GUI",
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