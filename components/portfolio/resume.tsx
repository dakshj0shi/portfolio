"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Download, Eye, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="resume" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F5F7] mb-4">
            My <span className="text-[#7C3AED]">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="group relative"
        >
          {/* Glass card */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-[#0F0F14]/80 backdrop-blur-xl border border-white/10 hover:border-[#7C3AED]/50 transition-all duration-300">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7C3AED]/0 to-[#5B21B6]/0 group-hover:from-[#7C3AED]/10 group-hover:to-[#5B21B6]/5 transition-all duration-300" />

            <div className="relative flex flex-col md:flex-row items-center gap-8">
              {/* Resume preview placeholder */}
              <div className="relative w-full md:w-64 aspect-[8.5/11] rounded-2xl bg-[#15151C] border border-white/10 overflow-hidden flex-shrink-0">
                {/* Decorative lines simulating resume content */}
                <div className="absolute inset-0 p-6 space-y-4">
                  <div className="h-8 w-3/4 bg-[#7C3AED]/20 rounded" />
                  <div className="h-3 w-1/2 bg-white/10 rounded" />
                  <div className="h-3 w-2/3 bg-white/5 rounded" />
                  <div className="mt-6 h-4 w-1/3 bg-[#7C3AED]/10 rounded" />
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-white/5 rounded" />
                    <div className="h-2 w-5/6 bg-white/5 rounded" />
                    <div className="h-2 w-4/6 bg-white/5 rounded" />
                  </div>
                  <div className="mt-4 h-4 w-1/3 bg-[#7C3AED]/10 rounded" />
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-white/5 rounded" />
                    <div className="h-2 w-3/4 bg-white/5 rounded" />
                  </div>
                </div>

                {/* Overlay icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FileText className="w-16 h-16 text-[#7C3AED]" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#F5F5F7] mb-4">
                  Get my full resume
                </h3>
                <p className="text-[#A1A1AA] mb-6 leading-relaxed">
                  Download my complete resume to learn more about my education,
                  detailed work experience, certifications, and achievements in
                  blockchain development and beyond.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8">
                  <div>
                    <div className="text-2xl font-bold text-[#7C3AED]">2+</div>
                    <div className="text-sm text-[#A1A1AA]">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#7C3AED]">3</div>
                    <div className="text-sm text-[#A1A1AA]">Internships</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#7C3AED]">10+</div>
                    <div className="text-sm text-[#A1A1AA]">Projects</div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    size="lg"
                    className="bg-[#7C3AED] hover:bg-[#5B21B6] text-white"
                    asChild
                  >
                    <a href="/resume.pdf" download>
                      <Download className="w-5 h-5 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-transparent text-[#F5F5F7] hover:bg-white/5 hover:border-[#7C3AED]"
                    asChild
                  >
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Eye className="w-5 h-5 mr-2" />
                      View Online
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
