"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Project {
  id: number
  title: string
  description: string
  github: string
  project_details?: string
}

const projects: Project[] = [
  {
    id: 0,
    title: "T.E.M.P.L.A.T.E",
    description: "Generating codebases in seconds",
    github: "portfolio/template",
    project_details:
      "Transforming Engine for Modular Programming, Logic, and Automated Template Execution",
  },
  {

    id: 1,
    title: "PantryPal",
    description: "A Pantry Management System, using llama 3.1",
    github: "portfolio/pantrypal",
    project_details:
      "AI-powered pantry management app that helps users track ingredients, suggest recipes based on available items, and minimize food waste through intelligent inventory tracking and meal planning.",
  },
  {
    id: 2,
    title: "Chatify ",
    description: "A variety of chatbots for your personalized needs!",
    github: "portfolio/chatify",
    project_details:
      "Multi-purpose chatbot platform featuring diverse AI conversational agents tailored for different contexts, including personal assistance, language learning, productivity, and entertainment.",
  },
  {
    id: 3,
    title: "Flashcard.AI",
    description: "AI-Driven flashcard generator",
    github: "portfolio/flashcard",
    project_details:
      "Intelligent learning tool that automatically generates personalized flashcards using AI, supporting multiple subjects and adaptive learning techniques to enhance study efficiency.",
  },
  {
    id: 4,
    title: "Zenith",
    description: "An activity tracker made for small scale businesses to assign tasks to Employees",
    github: "/portfolio/zenith",
    project_details:
      "Comprehensive task management and productivity platform designed for small businesses, enabling efficient employee task allocation, progress tracking, and performance monitoring.",
  },
  {
    id: 5,
    title: "Collaborative Text Editor",
    description: "A Real-time Rich text editor",
    github: "portfolio/editor",
    project_details:
      "Real-time collaborative text editing platform with advanced features like simultaneous multi-user editing, version control, and rich text formatting capabilities.",
  },
  {
    id: 6,
    title: "The QR Code Generator",
    description: "Simple QR code Generator",
    github: "portfolio/qrcode",
    project_details:
      "User-friendly QR code generation tool supporting multiple content types, including URLs, text, contact information, and custom styling options.",
  },
  {
    id: 7,
    title: "Notes App",
    description: "Simple Notes App with CRUD operations",
    github: "portfolio/notes",
    project_details:
      "Intuitive note-taking application with full Create, Read, Update, and Delete (CRUD) functionality, supporting rich text, tags, and basic organization features.",
  },
  {
    id: 8,
    title: "Source Code",
    description: "Feel free to use the website design!",
    github: "https://github.com/DanTiw/retro_portfolio_dantiw",
    project_details:
      "Open-source portfolio website template with a retro design, responsive layout, and easily customizable components for developers looking to showcase their projects.",
  },
]

const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4 last:mb-0"
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="bg-main border-4 border-black p-4 transform hover:rotate-1 transition-all duration-50 hover:shadow-[4px_4px_0_0_#000] cursor-pointer relative">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <h3 className="text-2xl font-bold text-black uppercase mb-1 md:mb-0">{project.title}</h3>
                <div className="bg-black text-white text-xs font-bold uppercase py-1 px-2 inline-block">
                  {project.title.toLowerCase()}
                </div>
              </div>
              <p className="text-black mb-3 text-sm">{project.description}</p>
              <Link href={project.github} passHref>
                <Button className="w-full md:w-auto bg-bg text-black border-2 border-black font-bold text-sm uppercase hover:bg-mainAccent transition-colors hover:shadow-[2px_2px_0_0_#000]">
                  <GithubIcon className="mr-2 h-4 w-4" /> Details
                </Button>
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent
            side={index % 2 === 0 ? "right" : "left"}
            align="center"
            className="bg-black text-white p-2 text-xs max-w-xs"
          >
            {project.project_details}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  )
}

const Portfolio: React.FC = () => {
  return (
    <div className="bg-bg min-h-screen p-4 sm:p-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-black text-center mb-8 uppercase pb-4">My Projects</h2>
      <div className="max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio

