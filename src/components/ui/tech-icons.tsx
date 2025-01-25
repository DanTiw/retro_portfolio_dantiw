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
} from "react-icons/si"
import { motion } from "framer-motion"

interface TechIconProps {
  Icon: React.ElementType
  tooltip?: string
}

const TechIcon = ({ Icon, tooltip }: TechIconProps) => {
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

const TechIcons = () => {
  const technologies = [
    { Icon: SiNextdotjs, tooltip: "Next.js" },
    { Icon: SiReact, tooltip: "React" },
    { Icon: SiTypescript, tooltip: "TypeScript" },
    { Icon: SiJavascript, tooltip: "JavaScript" },
    { Icon: SiNodedotjs, tooltip: "Node.js" },
    { Icon: SiExpress, tooltip: "Express.js" },
    { Icon: SiHtml5, tooltip: "HTML5" },
    { Icon: SiCss3, tooltip: "CSS3" },
    { Icon: SiPostgresql, tooltip: "PostgreSQL" },
    { Icon: SiPython, tooltip: "Python" },
    { Icon: SiCplusplus, tooltip: "C++" },
    { Icon: SiC, tooltip: "C" },
    { Icon: SiTailwindcss, tooltip: "Tailwind CSS" },
    { Icon: SiGit, tooltip: "Git" },
    { Icon: SiFirebase, tooltip: "Firebase" },
    { Icon: SiVisualstudio, tooltip: "Visual Studio" },
    { Icon: SiJetbrains, tooltip: "JetBrains" },
    { Icon: SiVercel, tooltip: "Vercel" },
  ]

  return (
    <motion.div
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
      variants={{
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: { opacity: 1, scale: 1 },
          }}
          whileHover={{ scale: 1.1 }}
        >
          <TechIcon Icon={tech.Icon} tooltip={tech.tooltip} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TechIcons