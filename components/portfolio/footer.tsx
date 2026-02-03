"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Twitter, Heart, Coffee } from "lucide-react"

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/dakshj0shi" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/dakshj0shi" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/dakshj0shi" },
]

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [showPaw, setShowPaw] = useState(false)

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative py-12 md:py-16 border-t border-white/10">
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#")
              }}
              className="inline-block text-2xl font-bold text-[#F5F5F7] hover:text-[#7C3AED] transition-colors mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Daksh Joshi<span className="text-[#7C3AED]">.</span>
            </motion.a>
            <p className="text-[#A1A1AA] text-sm max-w-xs mx-auto md:mx-0">
              Blockchain Developer & Builder crafting decentralized solutions for the future of web.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-[#F5F5F7] font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#A1A1AA] hover:text-[#7C3AED] text-sm transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="text-[#F5F5F7] font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-xl bg-[#0F0F14] text-[#A1A1AA] hover:text-[#7C3AED] hover:bg-[#7C3AED]/10 border border-white/10 hover:border-[#7C3AED]/30 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <div 
            className="relative"
            onMouseEnter={() => setShowPaw(true)}
            onMouseLeave={() => setShowPaw(false)}
          >
            <p className="text-[#A1A1AA] text-sm">
              &copy; {currentYear} Daksh Joshi. All rights reserved.
            </p>
            
            {/* Cat paw easter egg */}
            <AnimatePresence>
              {showPaw && (
                <motion.span
                  initial={{ opacity: 0, scale: 0, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 10 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 text-lg"
                >
                  =^..^=
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-[#A1A1AA] text-sm flex items-center gap-1">
              Built with{" "}
              <Heart className="w-4 h-4 text-[#7C3AED] inline" fill="#7C3AED" /> and{" "}
              <Coffee className="w-4 h-4 text-[#7C3AED]" />
            </p>
            <p className="text-[#A1A1AA]/50 text-xs font-mono">
              probably at 2am
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
