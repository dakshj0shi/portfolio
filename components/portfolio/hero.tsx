"use client"

import { useEffect, useState, useMemo } from "react"
import { motion } from "framer-motion"
import { FileText, FolderOpen, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import dynamic from "next/dynamic"

// Dynamic import to prevent SSR issues with Three.js
const PixelBlast = dynamic(() => import("@/components/PixelBlast"), {
  ssr: false,
})

const subtitles = [
  "Dev Advocate @ HackQuest",
  "Full-Stack Developer",
  "Open Source Contributor",
  "Web3 Builder",
]

// Client-side only floating particles to prevent hydration mismatch
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ left: number, top: number, duration: number, delay: number }>>([])

  useEffect(() => {
    // Generate particles only on client side
    const newParticles = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  if (particles.length === 0) return null

  return (
    <>
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#7C3AED]/50 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}

export function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = subtitles[currentSubtitle]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentSubtitle((prev) => (prev + 1) % subtitles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentSubtitle])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* PixelBlast Background */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={16}
          color="#7C3AED"
          patternScale={2}
          patternDensity={0.9}
          enableRipples={true}
          rippleSpeed={0.4}
          rippleIntensityScale={1.5}
          edgeFade={0.2}
          speed={0.3}
          transparent={true}
          className="w-full h-full"
          style={{ opacity: 0.7 }}
        />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/30 z-[1]">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/30 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#5B21B6]/30 rounded-full blur-[150px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[#A78BFA]/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />

        {/* Floating particles - client-side only to prevent hydration mismatch */}
        <FloatingParticles />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#7C3AED]" />
                <span className="text-sm text-[#A78BFA]">Available for opportunities</span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F5F7] mb-4 tracking-tight"
              >
                Hey, I&apos;m{" "}
                <span className="bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Daksh
                </span>
              </motion.h1>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl font-medium text-[#A1A1AA] mb-4"
              >
                Full-Stack Developer & Web3 Builder
              </motion.h2>

              {/* Typing animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="h-8 md:h-10 mb-8 flex items-center justify-center lg:justify-start"
              >
                <span className="text-lg md:text-xl text-[#7C3AED] font-mono">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#projects")}
                  className="bg-[#7C3AED] hover:bg-[#5B21B6] text-white px-8 py-6 text-lg rounded-xl group"
                >
                  <FolderOpen className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/20 bg-transparent text-[#F5F5F7] hover:bg-white/5 hover:border-[#7C3AED] px-8 py-6 text-lg rounded-xl group"
                >
                  <a href="/resume.pdf" download>
                    <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - CRT Screen Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            {/* Glow behind CRT */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-2xl blur-3xl opacity-50 scale-110" />

            {/* CRT Monitor Frame */}
            <div className="relative">
              {/* Monitor outer shell */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[380px] max-w-[90vw] mx-auto bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-3 md:p-4 shadow-2xl shadow-black/50">
                {/* Monitor bezel */}
                <div className="relative w-full h-full bg-[#0c0c0c] rounded-xl overflow-hidden border-4 border-[#1f1f1f]">
                  {/* Screen inner frame with slight curve illusion */}
                  <div className="absolute inset-2 md:inset-3 rounded-lg overflow-hidden bg-black">
                    {/* The actual screen content */}
                    <div className="relative w-full h-full">
                      <Image
                        src="/avatar.jpg"
                        alt="Daksh Joshi"
                        fill
                        className="object-cover"
                        priority
                      />

                      {/* CRT scanline effect */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-[0.15]"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)',
                          backgroundSize: '100% 2px'
                        }}
                      />

                      {/* CRT RGB pixel effect */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-[0.03]"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,0,0,0.5), rgba(0,255,0,0.5) 1px, rgba(0,0,255,0.5) 2px, transparent 3px)',
                          backgroundSize: '3px 100%'
                        }}
                      />

                      {/* Screen vignette/curve effect */}
                      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />

                      {/* Screen reflection/glare */}
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.02] via-transparent to-transparent" />

                      {/* Animated flicker */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none bg-white/[0.01]"
                        animate={{ opacity: [0.01, 0.02, 0.01, 0.015, 0.01] }}
                        transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </div>
                  </div>

                  {/* Screen edge shadow for depth */}
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] rounded-lg" />
                </div>

                {/* Monitor power LED */}
                <motion.div
                  className="absolute bottom-2 right-4 w-2 h-2 rounded-full bg-[#7C3AED]"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Monitor brand text */}

              </div>

              {/* Monitor stand */}
              <div className="relative mx-auto w-20 h-4 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-b-lg" />
              <div className="relative mx-auto w-32 h-2 bg-gradient-to-b from-[#151515] to-[#0a0a0a] rounded-full" />
            </div>

            {/* Floating badges around CRT */}



          </motion.div>
        </div>
      </div>
    </section>
  )
}
