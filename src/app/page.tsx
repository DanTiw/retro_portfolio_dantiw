"use client"

import { motion } from "framer-motion"
import TechIcons from "@/components/ui/tech-icons"

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FFF3E4] text-black px-4 sm:px-8 md:px-12 lg:px-16 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-3xl"
      >
        {/* Animated Name with Typewriter Effect */}
        <motion.div className="mb-8 relative">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center font-mono">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="overflow-hidden whitespace-nowrap mx-auto w-fit"
            >
              Danish Tiwari
            </motion.div>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "220px" }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="h-1 bg-black mx-auto mt-3"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-center mt-3 text-lg font-mono"
          >
            Full Stack Developer | Problem Solver | Code Enthusiast
          </motion.p>
        </motion.div>

        {/* Main Content Card with Paper Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full border-4 border-black p-6 sm:p-8 bg-white shadow-[12px_12px_0px_0px_#000] relative"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0,0,0,0.05) 20px, rgba(0,0,0,0.05) 21px)"
          }}
        >
   

          <div className="space-y-8">
            {/* About Section with Animated Highlight */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center font-mono">
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="inline-block mr-2"
                >
                  ✨
                </motion.span>
                About Me
              </h2>
              <div className="leading-relaxed space-y-4">
                <p>
                  Hello! I&apos;m Danish Tiwari, a Full Stack Developer with a passion for
                  building innovative web solutions. I love working with new technologies
                  and bringing creative ideas to life through code.
                </p>
                <p>
                  My journey in web development has been driven by a relentless curiosity
                  and a desire to create impactful, efficient, and user-friendly
                  applications. Growing and learning everyday, I am always looking for new
                  opportunities to collaborate and create something amazing.
                </p>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="pl-4 py-3 border-l-4 border-[#FFD700] bg-black/5 font-medium italic"
                >
                  "Find something that makes you wakeup everyday and comeback to it."
                </motion.div>
              </div>
            </section>

            {/* Achievements Section */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center font-mono">
                <span className="inline-block mr-2">
                  🏆
                </span>
                Achievements
              </h2>

              <div className="space-y-4">
                {[
                  { title: "Google Hackathon APAC", desc: "Ranked in Top 98 among participants across Asia Pacific", proof: "https://certificate.hack2skill.com/user/aiforimpacttop98/2024H2S10AFI-A0034" },
                  { title: "JIA Seed Hackathon", desc: "Participated and showcased innovative solutions", proof: "https://devpost.com/software/tateism" }
                ].map((achievement, i) => (
                  <motion.div
                    key={achievement.title + "-wrapper"}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className="px-4 py-2 text-sm font-bold bg-white border-4 border-black rounded-none 
                      hover:rotate-0 transition-all duration-300 shadow-[5px_4px_0px_0px_#000] 
                      hover:translate-x-[5px] hover:translate-y-[4px] hover:shadow-none
                      sm:px-6 sm:py-3 sm:text-base"
                    >
                      <h3 className="font-bold font-mono">{achievement.title}</h3>
                      <p className="text-sm mt-1">{achievement.desc}</p>
                      <a href={achievement.proof} className="text-blue-500 hover:text-blue-600 mt-2 inline-block">View Certificate</a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Tech Stack Section with Paper Fold Effect */}
            <section className="relative">
              <div className="absolute -left-2 -top-2 w-5 h-5 border-t-2 border-l-2 border-black" />
              <div className="absolute -right-2 -top-2 w-5 h-5 border-t-2 border-r-2 border-black" />
              <div className="absolute -left-2 -bottom-2 w-5 h-5 border-b-2 border-l-2 border-black" />
              <div className="absolute -right-2 -bottom-2 w-5 h-5 border-b-2 border-r-2 border-black" />

              <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center font-mono">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 10, -10, 5, -5, 0] }}
                  transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, repeatDelay: 10 }}
                  className="inline-block mr-2"
                >
                  🛠️
                </motion.span>
                Tech Stack
              </h2>
              <TechIcons />
            </section>
          </div>
        </motion.div>

        {/* Quirky Animated Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-center relative"
        >
          <motion.div
            animate={{
              rotate: [0, 1, -1, 1, 0],
              y: [0, -2, 0, -2, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-block text-lg font-medium font-mono border-b-2 border-dashed border-black px-4 py-2 relative"
          >
            <span>Always coding something new...</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute -right-4 top-0"
            >
              _
            </motion.span>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: [0, 10, 0, -10, 0] }}
            transition={{ delay: 1.5, duration: 3, repeat: Infinity }}
            className="absolute -right-4 top-1/2 text-2xl"
          >
            ⚡
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: [0, -10, 0, 10, 0] }}
            transition={{ delay: 1.7, duration: 3, repeat: Infinity }}
            className="absolute -left-4 top-1/2 text-2xl"
          >
            💻
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  )
}