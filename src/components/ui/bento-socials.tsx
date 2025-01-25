import React from 'react'
import { Github, Linkedin, Twitter, Youtube } from 'lucide-react'

const BentoSocials: React.FC = () => {
  return (
    <div className="bg-bg p-8 max-w-lg mx-auto">
      <div className="bg-white border-8 border-black p-6  shadow-[12px_12px_0_0_#000]">
        <h2 className="text-4xl font-bold mb-6 uppercase text-center ">Connect With Me</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[300px]">
          <SocialButton 
            icon={<Youtube size={32} />} 
            label="YouTube" 
            link="https://youtube.com/yourusername"
            className="col-span-2 row-span-2 bg-red-500"
          />
          <SocialButton 
            icon={<Linkedin size={32} />} 
            label="LinkedIn" 
            link="https://linkedin.com/in/yourusername"
            className="col-span-2 bg-blue-500"
          />
          <SocialButton 
            icon={<Twitter size={32} />} 
            label="Twitter" 
            link="https://twitter.com/yourusername"
            className="bg-sky-400"
          />
          <SocialButton 
            icon={<Github size={32} />} 
            label="GitHub" 
            link="https://github.com/yourusername"
            className="bg-gray-800"
          />
        </div>
      </div>
    </div>
  )
}

interface SocialButtonProps {
  icon: React.ReactNode
  label: string
  link: string
  className?: string
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, label, link, className }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`border-4 border-black p-4 flex flex-col items-center justify-center text-white font-bold transform transition-all duration-300 hover:-rotate-2 hover:translate-y-[-4px] hover:shadow-[4px_4px_0_0_#000] ${className}`}
    >
      {icon}
    </a>
  )
}

export default BentoSocials