"use client"

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiPython,
  SiCplusplus,
  SiC,
  SiTailwindcss,
  SiGit,
  SiFirebase,
  SiVisualstudio,
  SiJetbrains,
  SiVercel,
  SiAuth0,
  SiOpenjdk,
  SiGooglecloud,
  SiDocker,
} from "react-icons/si"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface TechIconProps {
  Icon: React.ElementType
  tooltip: string
  category: string
}

const TechIcon = ({ Icon, tooltip }: Omit<TechIconProps, "category">) => {
  return (
    <div 
      className="relative flex items-center justify-center p-4 border-4 border-black bg-white 
      transform transition-all duration-300 hover:-rotate-6 hover:translate-y-[-4px] 
      hover:shadow-[4px_4px_0_0_#000] group"
    >
      <Icon className="text-4xl" />
      {tooltip && (
        <span 
          className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 
          bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 mb-2"
        >
          {tooltip}
        </span>
      )}
    </div>
  )
}

const TechListItem = ({ Icon, tooltip }: Omit<TechIconProps, "category">) => {
  return (
    <div className="flex items-center gap-3 p-3 border-4 border-black bg-white mb-2">
      <Icon className="text-2xl" />
      <span className="font-medium">{tooltip}</span>
    </div>
  )
}

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])
  
  const technologies: TechIconProps[] = [
    { Icon: SiNextdotjs, tooltip: "Next.js", category: "Frontend" },
    { Icon: SiReact, tooltip: "React", category: "Frontend" },
    { Icon: SiTypescript, tooltip: "TypeScript", category: "Languages" },
    { Icon: SiJavascript, tooltip: "JavaScript", category: "Languages" },
    { Icon: SiNodedotjs, tooltip: "Node.js", category: "Backend" },
    { Icon: SiExpress, tooltip: "Express.js", category: "Backend" },
    { Icon: SiHtml5, tooltip: "HTML5", category: "Frontend" },
    { Icon: SiCss3, tooltip: "CSS3", category: "Frontend" },
    { Icon: SiPostgresql, tooltip: "PostgreSQL", category: "Database" },
    { Icon: SiPython, tooltip: "Python", category: "Languages" },
    { Icon: SiCplusplus, tooltip: "C++", category: "Languages" },
    { Icon: SiC, tooltip: "C", category: "Languages" },
    { Icon: SiTailwindcss, tooltip: "Tailwind CSS", category: "Frontend" },
    { Icon: SiGit, tooltip: "Git", category: "Tools" },
    { Icon: SiFirebase, tooltip: "Firebase", category: "Database" },
    { Icon: SiVisualstudio, tooltip: "Visual Studio", category: "Tools" },
    { Icon: SiJetbrains, tooltip: "JetBrains", category: "Tools" },
    { Icon: SiVercel, tooltip: "Vercel", category: "Tools" },
    { Icon: SiAuth0, tooltip: "NextAuth.js", category: "Tools" },
    { Icon: SiOpenjdk, tooltip: "Java", category: "Languages" },
    
    { Icon: SiGooglecloud, tooltip: "Google Cloud", category: "Tools" },
    { Icon: SiDocker, tooltip: "Docker", category: "Tools" },
  ]

  const categories = [...new Set(technologies.map(tech => tech.category))]
  
  const filteredTech = selectedCategory 
    ? technologies.filter(tech => tech.category === selectedCategory)
    : []

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
            className={`px-4 py-2 text-sm font-bold transition-all border-4 border-black
              ${selectedCategory === category 
                ? "bg-black text-white" 
                : "bg-white text-black hover:bg-gray-100"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {isMobile ? (
        // Mobile view - List layout
        <div className="w-full px-4">
          {selectedCategory ? (
            <>
              <h3 className="text-xl font-bold mb-4">{selectedCategory}</h3>
              <motion.div 
                initial="hidden"
                animate="show"
                variants={{
                  show: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {filteredTech.map((tech, index) => (
                  <motion.div
                    key={`${tech.tooltip}-${index}`}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <TechListItem Icon={tech.Icon} tooltip={tech.tooltip} />
                  </motion.div>
                ))}
              </motion.div>
            </>
          ) : (
            <p className="text-center text-gray-600">Select a category to explore</p>
          )}
        </div>
      ) : (
        // Desktop view - Circle layout
        <motion.div
          className="relative w-full max-w-3xl h-[500px]"
          initial="hidden"
          animate="show"
        >
          {/* Selected category indicator - top left */}
          <motion.div 
            className="absolute top-0 left-0 p-4 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {selectedCategory ? (
              <>
                <h3 className="text-2xl font-bold">{selectedCategory}</h3>
                <p className="text-gray-600">{filteredTech.length} technologies</p>
              </>
            ) : (
              <p className="text-gray-600">Select a category to explore</p>
            )}
          </motion.div>

          {filteredTech.map((tech, index) => {
            // Calculate position in circle or wheel
            const total = filteredTech.length
            const angle = (index / total) * 2 * Math.PI
            const radius = 180 // Fixed radius when showing a category
            
            // Calculate x and y coordinates on the circle
            const x = Math.cos(angle) * radius + 280 // Increased x offset from 220 to 280
            const y = Math.sin(angle) * radius + 220 // Center y + offset
            
            return (
              <motion.div
                key={`${tech.tooltip}-${index}`}
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x,
                  y,
                  transition: { delay: index * 0.05 }
                }}
                exit={{ opacity: 0, scale: 0 }}
                whileHover={{ scale: 1.15, zIndex: 10 }}
              >
                <TechIcon Icon={tech.Icon} tooltip={tech.tooltip} />
              </motion.div>
            )
          })}
        </motion.div>
      )}
    </div>
  )
}

export default TechStack