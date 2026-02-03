"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Globe, Blocks, Cloud, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Core Web3",
    icon: Blocks,
    skills: ["Solidity", "Smart Contracts", "Web3.js", "Ethers.js", "Hardhat", "Foundry"],
  },
  {
    title: "Blockchain Ecosystem",
    icon: Globe,
    skills: ["Ethereum", "DeFi", "OpenZeppelin", "Chainlink", "IPFS", "The Graph"],
  },
  {
    title: "AI & Data Agents",
    icon: Code2,
    skills: ["Python", "OpenAI API", "Pandas", "PyArrow", "Streamlit", "LangChain"],
  },
  {
    title: "Fullstack Engineering",
    icon: Wrench,
    skills: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "SQL", "Tailwind CSS"],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: ["AWS", "Docker", "Git", "Linux", "Figma", "CI/CD"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F5F7] mb-4">
            Skills & <span className="text-[#7C3AED]">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] mx-auto rounded-full" />
          <p className="mt-6 text-[#A1A1AA] max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Glass card */}
              <div className="relative h-full p-6 md:p-8 rounded-2xl bg-[#0F0F14]/80 backdrop-blur-xl border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-300">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7C3AED]/0 to-[#5B21B6]/0 group-hover:from-[#7C3AED]/10 group-hover:to-[#5B21B6]/5 transition-all duration-300" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] group-hover:bg-[#7C3AED]/20 transition-colors">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#F5F5F7]">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-[#15151C] text-[#A1A1AA] border border-white/5 hover:text-[#A78BFA] hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/5 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tech badges - floating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#A1A1AA] mb-4">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Vercel", "Prisma", "MongoDB", "PostgreSQL", "REST APIs", "C++", "Shell"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  className="px-4 py-2 text-sm rounded-full bg-[#0F0F14] text-[#A1A1AA] border border-white/10 hover:border-[#7C3AED]/30 hover:text-[#A78BFA] transition-all"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
