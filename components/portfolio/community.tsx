"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Cloud, Presentation, Users } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "Won my first hackathon with an innovative solution. This is just the beginning - more wins are on the horizon as I continue to build and compete!",
    highlights: ["1 Win", "More Coming", "Building"],
  },
  {
    icon: Cloud,
    title: "AWS Cloud Club Co-Founder",
    description: "Co-founded the AWS Cloud Club at Poornima College, growing the community to 120+ members. Organized 5+ AWS workshops enabling peers to deploy 15+ projects.",
    highlights: ["120+ Members", "5+ Workshops", "15+ Projects"],
  },
  {
    icon: Presentation,
    title: "Hack-It-Sapiens Co-Organizer",
    description: "Organized 2 small-scale offline Web3 hackathons and 1 large-scale flagship hackathon. Led technical team to build event infrastructure.",
    highlights: ["3 Hackathons", "Web3 Events", "Infrastructure"],
  },
  {
    icon: Users,
    title: "Dev Advocate @ HackQuest",
    description: "Mentorship, developer support, and ecosystem contribution. Helping developers onboard into Web3.",
    highlights: ["Mentorship", "Developer Support", "Ecosystem"],
  },
]

export function Community() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="community" className="py-24 md:py-32 relative">
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
            Community & <span className="text-[#7C3AED]">Leadership</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] mx-auto rounded-full" />
          <p className="mt-6 text-[#A1A1AA] max-w-2xl mx-auto">
            Building communities and empowering developers
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Glass card */}
              <div className="relative h-full p-6 md:p-8 rounded-2xl bg-[#0F0F14]/80 backdrop-blur-xl border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-300">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7C3AED]/0 to-[#5B21B6]/0 group-hover:from-[#7C3AED]/10 group-hover:to-[#5B21B6]/5 transition-all duration-300" />

                <div className="relative">
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-2xl bg-[#7C3AED]/10 text-[#7C3AED] mb-6 group-hover:bg-[#7C3AED]/20 transition-colors">
                    <achievement.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-semibold text-[#F5F5F7] mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-[#A1A1AA] mb-6 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {achievement.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
