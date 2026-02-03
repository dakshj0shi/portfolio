"use client"

import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Timeline } from "@/components/portfolio/timeline"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"
import { Community } from "@/components/portfolio/community"
import { Resume } from "@/components/portfolio/resume"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { ScrollProgress } from "@/components/portfolio/scroll-progress"
import { EasterEggs } from "@/components/portfolio/easter-eggs"
import { GlobalClickSpark } from "@/components/global-click-spark"
import { GlobalSplashCursor } from "@/components/global-splash-cursor"
import { EffectsProvider } from "@/components/effects-context"
import { SectionTransition } from "@/components/section-transition"

export default function Portfolio() {
  return (
    <EffectsProvider>
      <GlobalSplashCursor>
        <GlobalClickSpark>
          <main className="min-h-screen bg-black overflow-x-hidden w-full">
            {/* Personality Elements */}
            <ScrollProgress />
            <SectionTransition />
            <EasterEggs />

            {/* Main Content */}
            <Navbar />
            <Hero />
            <About />
            <Timeline />
            <Projects />
            <Skills />
            <Community />
            <Resume />
            <Contact />
            <Footer />
          </main>
        </GlobalClickSpark>
      </GlobalSplashCursor>
    </EffectsProvider>
  )
}
