"use client"

import { motion } from "framer-motion"
import BentoSocials from "@/components/ui/bento-socials"
import TechIcons from "@/components/ui/tech-icons"

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-bg text-black px-4 sm:px-8 md:px-12 lg:px-16 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">Danish Tiwari</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full text-base md:text-lg border-4 border-black p-4 sm:p-6 bg-white shadow-[5px_4px_0px_0px_#000]"
        >
          <p className="leading-relaxed mb-6">
            Hello! I&apos;m Danish Tiwari, a passionate and dedicated Full Stack Developer specializing in MERN stack
            with expertise in Next.js and TypeScript. My journey in web development has been driven by a relentless
            curiosity and a desire to create impactful, efficient, and user-friendly applications. Growing and learning
            everyday, I am always looking for new opportunities to collaborate and create something amazing.
          </p>
          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4 sm:mb-6">Technologies I Work With:</h2>
            <TechIcons />
          </div>
          <div className="mt-8">
     
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}

