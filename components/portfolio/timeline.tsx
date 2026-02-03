"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Building2, GraduationCap, Users, Megaphone, Globe } from "lucide-react"

const experiences = [
  {
    title: "Dev Advocate",
    company: "HackQuest",
    period: "2025 - Present",
    description: "Leading developer advocacy initiatives, creating educational content, and building community engagement for Web3 education platform. Helping developers onboard into blockchain development.",
    icon: Megaphone,
    tags: ["Web3", "Community", "Education", "Content"],
  },
  {
    title: "Volunteer",
    company: "CoinferenceX",
    period: "2025 - Present",
    description: "Volunteering at blockchain conference events, assisting with technical setup, speaker coordination, and attendee engagement. Contributing to the growth of Web3 community in India.",
    icon: Globe,
    tags: ["Blockchain", "Events", "Networking", "Community"],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Poornima College of Engineering",
    period: "Dec 2024 - Mar 2025",
    description: "Built the official college fest portal managing over 1,000 registrations with integrated SQL backend. Automated event data pipelines, reducing manual workload by 40%.",
    icon: GraduationCap,
    tags: ["React", "Node.js", "SQL", "Automation"],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Cynbit Technology",
    period: "Jun 2024 - Jul 2024",
    description: "Developed a full-stack website for a local business using Node.js and MySQL, reaching 200+ daily users. Implemented responsive UI with dynamic components and multiple theme options.",
    icon: Building2,
    tags: ["Node.js", "MySQL", "React", "Responsive"],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Hack-It-Sapiens",
    period: "Oct 2023 - Feb 2024",
    description: "Designed and launched an event management platform with registration, scheduling, and live updates for 500+ attendees. Delivered project 1 week early by streamlining frontend-backend integration.",
    icon: Briefcase,
    tags: ["Next.js", "Event Management", "Full-Stack", "Team Lead"],
  },
]

export function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32 relative">
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
            Work <span className="text-[#7C3AED]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] mx-auto rounded-full" />
          <p className="mt-6 text-[#A1A1AA] max-w-2xl mx-auto">
            My professional journey through the tech industry
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED] via-[#5B21B6] to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#7C3AED] rounded-full -translate-x-1/2 mt-8 ring-4 ring-[#7C3AED]/20" />

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative group"
                  >
                    {/* Glass card */}
                    <div className="relative p-6 md:p-8 rounded-2xl bg-[#0F0F14]/80 backdrop-blur-xl border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-300">
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7C3AED]/0 to-[#5B21B6]/0 group-hover:from-[#7C3AED]/10 group-hover:to-[#5B21B6]/5 transition-all duration-300" />

                      <div className="relative">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 rounded-xl bg-[#7C3AED]/10 text-[#7C3AED]">
                            <exp.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-[#F5F5F7]">
                              {exp.title}
                            </h3>
                            <p className="text-[#7C3AED] font-medium">{exp.company}</p>
                          </div>
                        </div>

                        {/* Period */}
                        <p className="text-sm text-[#A1A1AA] mb-4 font-mono">
                          {exp.period}
                        </p>

                        {/* Description */}
                        <p className="text-[#A1A1AA] mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
