"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Droplet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffects } from "@/components/effects-context"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Community", href: "#community" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const { splashCursorEnabled, toggleSplashCursor } = useEffects()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)

      // Background blur on scroll
      setIsScrolled(currentScrollY > 50)

      // Active section detection
      const sections = navItems.map((item) => item.href.substring(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 md:h-20">

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-[#0F0F14]/80 backdrop-blur-sm border border-white/10">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${activeSection === item.href.substring(1)
                    ? "text-white bg-[#7C3AED]"
                    : "text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/5"
                    }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="w-px h-6 bg-white/10 mx-1" />
              <button
                onClick={toggleSplashCursor}
                className={`p-2 rounded-full transition-all duration-200 ${splashCursorEnabled
                  ? "text-white bg-[#7C3AED]"
                  : "text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/5"
                  }`}
                title={splashCursorEnabled ? "Disable Splash Cursor" : "Enable Splash Cursor"}
              >
                <Droplet size={18} />
              </button>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="ml-1 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] text-white rounded-full"
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#F5F5F7] hover:text-[#7C3AED] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative pt-24 px-6"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`p-4 text-left text-lg font-medium rounded-xl transition-all ${activeSection === item.href.substring(1)
                      ? "text-[#7C3AED] bg-[#7C3AED]/10"
                      : "text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/5"
                      }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full mt-4 bg-[#7C3AED] hover:bg-[#5B21B6] text-white py-6 text-lg"
                  >
                    Let&apos;s Talk
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
