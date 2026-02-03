"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, FileText, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Web", "AI", "Data"]

const projects = [
  {
    title: "Mapify",
    description: "A scalable full-stack AI learning path platform with gamification features (XP, badges, streaks) for 200+ early users. Built with Vercel, AWS (RDS, Cognito, S3) and OpenAI GPT integration.",
    image: "/projects/mapify.jpg",
    category: "AI",
    tags: ["Next.js", "AWS", "OpenAI", "Gamification"],
    liveUrl: "#",
    githubUrl: "https://github.com/dakshj0shi",
    caseStudyUrl: null,
    featured: true,
  },
  {
    title: "F1 Data Analysis App",
    description: "Interactive Streamlit dashboard processing 50k+ rows of F1 data with Pandas/PyArrow. Features comparative team/driver analytics with custom HTML/CSS visualizations and 40% optimized query execution.",
    image: "/projects/f1-analysis.jpg",
    category: "Data",
    tags: ["Python", "Streamlit", "Pandas", "PyArrow"],
    liveUrl: "#",
    githubUrl: "https://github.com/dakshj0shi",
    caseStudyUrl: null,
    featured: true,
  },
  {
    title: "College Fest Portal",
    description: "Official fest portal for Poornima College managing 1,000+ registrations with integrated SQL backend and automated event data pipelines, reducing manual workload by 40%.",
    image: "/projects/fest-portal.jpg",
    category: "Web",
    tags: ["React", "Node.js", "MySQL", "Full-Stack"],
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
    tags: ["React", "Node.js", "Event Management", "Full-Stack"],
    liveUrl: "#",
    githubUrl: "https://github.com/dakshj0shi",
    caseStudyUrl: null,
    featured: false,
  },
  {
    title: "Business Website",
    description: "Full-stack website for local business using Node.js and MySQL, achieving 200+ daily users. Features smooth responsive UI with dynamic components and multiple theme options.",
    image: "/projects/business.jpg",
    category: "Web",
    tags: ["Node.js", "MySQL", "React", "Responsive"],
    liveUrl: "#",
    githubUrl: "https://github.com/dakshj0shi",
    caseStudyUrl: null,
    featured: false,
  },
  {
    title: "Portfolio v3",
    description: "My personal portfolio website built with modern technologies, smooth animations, and AMOLED dark theme.",
    image: "/projects/portfolio.jpg",
    category: "Web",
    tags: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
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
            Featured <span className="text-[#7C3AED]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] mx-auto rounded-full" />
          <p className="mt-6 text-[#A1A1AA] max-w-2xl mx-auto">
            A selection of projects that showcase my skills in blockchain, web development, and AI
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
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
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
              className="group relative"
            >
              {/* Glass card */}
              <div className="relative h-full rounded-2xl bg-[#0F0F14]/80 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-[#7C3AED]/50 transition-all duration-300">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/0 to-[#5B21B6]/0 group-hover:from-[#7C3AED]/10 group-hover:to-[#5B21B6]/5 transition-all duration-500" />

                {/* Project thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-[#15151C] to-[#0F0F14] flex items-center justify-center overflow-hidden">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '24px 24px'
                    }} />
                  </div>
                  
                  {/* Project icon/placeholder */}
                  <div className="text-6xl font-bold bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    {project.title.charAt(0)}
                  </div>
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#7C3AED]/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      Featured
                    </div>
                  )}
                  
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-[#A1A1AA]">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-semibold text-[#F5F5F7] mb-2 group-hover:text-[#7C3AED] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#15151C] text-[#A78BFA] border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
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
