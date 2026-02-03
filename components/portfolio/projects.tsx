"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, FileText, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Web3", "AI", "Web"]

const projects = [
  {
    title: "ArcadeFi",
    description: "A Web3 pay-per-play gaming arcade using AI wallet agents and streaming crypto payments. Players only pay for actual playtime while developers receive instant revenue splits. Built as a working product and won a hackathon.",
    image: "/projects/arcadefi.jpg",
    category: "Web3",
    tags: ["Solidity", "AI Agents", "Streaming Payments"],
    features: [
      "Pay-per-15-second charging",
      "Streaming payments",
      "AI wallet agent auto-payments",
      "Spend limits",
      "Zero-click UX",
      "Instant dev payouts",
      "97/3 revenue split",
      "Multiplayer planned",
      "Gasless UX planned",
      "Developer upload portal planned"
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/dakshj0shi",
    caseStudyUrl: null,
    featured: true,
  },
  {
    title: "Mapify",
    description: "A scalable full-stack AI learning path platform with gamification features (XP, badges, streaks) for 200+ early users. Built with Vercel, AWS (RDS, Cognito, S3) and OpenAI GPT integration.",
    image: "/projects/mapify.jpg",
    category: "AI",
    tags: ["Next.js", "AWS", "OpenAI", "Gamification"],
    features: ["AI Learning Paths", "Gamification System", "AWS Infrastructure"],
    liveUrl: "#",
    githubUrl: "https://github.com/dakshj0shi",
    caseStudyUrl: null,
    featured: true,
  },
  {
    title: "Hack-It-Sapiens Platform",
    description: "Event management platform with registration, scheduling, and live updates for 500+ hackathon attendees. Delivered 1 week early with streamlined frontend-backend integration.",
    image: "/projects/hackathon.jpg",
    category: "Web",
    tags: ["React", "Node.js", "Event Management", "Web3"],
    features: ["Live Updates", "Registration System", "Real-time Scheduling"],
    liveUrl: "#",
    githubUrl: "https://github.com/dakshj0shi",
    caseStudyUrl: null,
    featured: false,
  },
  {
    title: "F1 Data Analysis",
    description: "Interactive Streamlit dashboard processing 50k+ rows of F1 data with Pandas/PyArrow. Features comparative team/driver analytics with custom HTML/CSS visualizations.",
    image: "/projects/f1-analysis.jpg",
    category: "Data",
    tags: ["Python", "Streamlit", "Pandas", "PyArrow"],
    features: ["50k+ Rows Processing", "Custom Visualizations", "Comparative Analytics"],
    liveUrl: "#",
    githubUrl: "https://github.com/dakshj0shi",
    caseStudyUrl: null,
    featured: false,
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 md:py-32 relative">
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
            Web3 / Onchain <span className="text-[#7C3AED]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] mx-auto rounded-full" />
          <p className="mt-6 text-[#A1A1AA] max-w-2xl mx-auto">
            A selection of projects that showcase my skills in blockchain, crypto, and AI agents
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-[#7C3AED] text-white"
                : "bg-[#0F0F14] text-[#A1A1AA] hover:bg-[#15151C] hover:text-[#F5F5F7] border border-white/10"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative h-[450px]"
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl bg-[#0F0F14] border border-white/10 overflow-hidden hover:border-[#7C3AED]/50 transition-all duration-300 shadow-xl">

                {/* Default View: Image + Title Overlay */}
                <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
                  {/* Image Background */}
                  <div className="relative h-full w-full bg-[#15151C]">
                    {/* Placeholder Pattern to simulate image if src fails or use actual image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#15151C] to-[#0F0F14]">
                      {/* Decorative pattern */}
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '24px 24px'
                      }} />
                    </div>

                    {/* Letter Avatar if no image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-9xl font-bold text-white/5">{project.title.charAt(0)}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-[#A78BFA] border border-white/10">
                      {project.category}
                    </div>

                    {/* Title Overlay at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <h3 className="text-2xl font-bold text-[#F5F5F7]">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-[#7C3AED] text-sm font-medium">
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover View: Details Overlay */}
                <div className="absolute inset-0 bg-[#0F0F14]/95 backdrop-blur-sm p-6 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto custom-scrollbar">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F5F5F7] mb-2">{project.title}</h3>
                    <p className="text-[#A1A1AA] text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features List */}
                    {project.features && (
                      <div className="mb-4 space-y-2">
                        <h4 className="text-xs font-semibold text-[#7C3AED] uppercase tracking-wider">Key Features</h4>
                        <ul className="text-xs text-[#A1A1AA] space-y-1 list-disc list-inside">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10 shrink-0">
                    <Button
                      size="sm"
                      className="bg-[#7C3AED] hover:bg-[#5B21B6] text-white flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 bg-transparent text-[#F5F5F7] hover:bg-white/5"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    {project.caseStudyUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 bg-transparent text-[#F5F5F7] hover:bg-white/5"
                        asChild
                      >
                        <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 bg-transparent text-[#F5F5F7] hover:bg-white/5 hover:border-[#7C3AED] group"
          >
            View All Projects
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
