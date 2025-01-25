"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Youtube } from "lucide-react"
import { motion } from "framer-motion"

const Contact: React.FC = () => {
  const socialLinks = [
    { 
      icon: <Twitter size={24} />, 
      label: "Twitter", 
      url: "https://twitter.com/DanTiw22", 
      color: "bg-sky-400", 
      hoverColor: "hover:bg-sky-500" 
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/danishtiwari",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600"
    },
    { 
      icon: <Github size={24} />, 
      label: "GitHub", 
      url: "https://github.com/DanTiw", 
      color: "bg-gray-800",
      hoverColor: "hover:bg-gray-900" 
    },
    { 
      icon: <Youtube size={24} />, 
      label: "YouTube", 
      url: "https://www.youtube.com/@DanTiw", 
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600" 
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      rotate: [-2, 2, -2],
      transition: { duration: 0.2 }
    }
  }

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-bg flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white border-8 border-black p-6 sm:p-8 shadow-[12px_12px_0_0_#000]">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 uppercase tracking-tight"
        >
          Connect With Me!
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((link) => (
            <motion.div 
              key={link.label} 
              variants={itemVariants}
              whileHover="hover"
              className="w-full"
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer" passHref>
                <Button
                  className={`
                    w-full ${link.color} ${link.hoverColor} 
                    text-white border-4 border-black 
                    text-base sm:text-xl font-bold uppercase 
                    p-3 sm:p-4 transition-all 
                    flex items-center justify-center gap-2 sm:gap-3
                    hover:shadow-[6px_6px_0_0_#000]
                  `}
                >
                  {link.icon}
                  {link.label}
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Contact