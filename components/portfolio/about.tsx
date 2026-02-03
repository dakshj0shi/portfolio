"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Code2, Users, Sparkles } from "lucide-react"
import Image from "next/image"
import { NowPlaying } from "./now-playing"


const stats = [
  { icon: Trophy, label: "Hackathon Won", value: "1", color: "#7C3AED" },
  { icon: Code2, label: "Projects Built", value: "10+", color: "#A78BFA" },
  { icon: Users, label: "Communities Led", value: "2+", color: "#7C3AED" },
  { icon: Sparkles, label: "Users Impacted", value: "1K+", color: "#A78BFA" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0F0F14]/50 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F5F7] mb-4">
            About <span className="text-[#7C3AED]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* CRT Screen Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-2xl blur-2xl opacity-40 scale-105" />

              {/* CRT Monitor Frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 max-w-[90vw] mx-auto bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-3 shadow-2xl shadow-black/50">
                {/* Monitor bezel */}
                <div className="relative w-full h-full bg-[#0c0c0c] rounded-xl overflow-hidden border-4 border-[#1f1f1f]">
                  {/* Screen inner frame */}
                  <div className="absolute inset-2 rounded-lg overflow-hidden bg-black">
                    <div className="relative w-full h-full">
                      <Image
                        src="/avatar.jpg"
                        alt="Daksh Joshi"
                        fill
                        className="object-cover"
                      />

                      {/* CRT scanline effect */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-[0.15]"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)',
                          backgroundSize: '100% 2px'
                        }}
                      />

                      {/* Screen vignette */}
                      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
                    </div>
                  </div>

                  {/* Screen edge shadow */}
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] rounded-lg" />
                </div>

                {/* Power LED */}
                <motion.div
                  className="absolute bottom-1 right-3 w-1.5 h-1.5 rounded-full bg-[#7C3AED]"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#F5F5F7] mb-6 break-words">
              Shipping onchain products that <span className="text-[#7C3AED]">people actually use</span>.
            </h3>

            <div className="space-y-4 text-[#A1A1AA] text-base md:text-lg leading-relaxed w-full overflow-hidden">
              <p className="break-words w-full">
                I&apos;m Daksh — a Web3 engineer building decentralized products, on-chain systems, and agent-driven applications. I focus on turning ideas into working software, from smart contracts and crypto-native tools to automated systems that handle real users and real value.
              </p>
              <p className="break-words w-full">
                My work sits at the intersection of blockchains, AI agents, and product design — creating practical, reliable products built for real-world use rather than demos. I’ve developed AI bots and automation solutions for crypto projects and regularly ship through hackathons and fast-paced builds.
              </p>
              <p className="break-words w-full">
                Outside of tech, I follow F1, play football, spend time with cats, and enjoy art and design — interests that shape how I think about creativity and product experiences.
              </p>
              <p className="break-words w-full">
                Web3 is where I build, experiment, and create.
              </p>
            </div>

            {/* Now Playing Badge */}
            <div className="mt-6">
              <NowPlaying />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              {/* Glass card */}
              <div className="relative p-6 md:p-8 rounded-2xl bg-[#0F0F14]/80 backdrop-blur-xl border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-300">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7C3AED]/0 to-[#5B21B6]/0 group-hover:from-[#7C3AED]/10 group-hover:to-[#5B21B6]/5 transition-all duration-300" />

                <div className="relative">
                  <stat.icon
                    className="w-8 h-8 md:w-10 md:h-10 mb-4 transition-colors duration-300"
                    style={{ color: stat.color }}
                  />
                  <div className="text-3xl md:text-4xl font-bold text-[#F5F5F7] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-[#A1A1AA]">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
