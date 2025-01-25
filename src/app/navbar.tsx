'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-bg p-4 shadow-[0_4px_0_0_#000]">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="hidden md:flex space-x-4 items-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <NavLink label={link.label} href={link.href} />
            </motion.div>
          ))}
        </div>
        <motion.button
          className="md:hidden p-2 bg-[#ffc800] border-4 border-black rounded-none shadow-[5px_4px_0px_0px_#000] hover:translate-x-[5px] hover:translate-y-[4px] hover:shadow-none transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <NavLink label={link.label} href={link.href} isMobile />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

interface NavLinkProps {
  label: string
  href: string
  isMobile?: boolean
}

function NavLink({ label, href, isMobile = false }: NavLinkProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className={`
          px-4 py-2 text-sm font-bold bg-[#ffc800] border-4 border-black rounded-none 
          hover:rotate-0 transition-all duration-300 shadow-[5px_4px_0px_0px_#000] 
          hover:translate-x-[5px] hover:translate-y-[4px] hover:shadow-none
          sm:px-6 sm:py-3 sm:text-base
          ${isMobile ? 'block w-full text-center' : 'inline-block'}
        `}
      >
        {label.toUpperCase()}
      </Link>
    </motion.div>
  )
}