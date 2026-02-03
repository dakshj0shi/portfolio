"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function SectionTransition() {
    const [activeSection, setActiveSection] = useState('')
    const [showTransition, setShowTransition] = useState(false)

    useEffect(() => {
        let lastSection = ''

        const handleScroll = () => {
            const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'community', 'contact']

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId === 'hero' ? '' : sectionId)
                if (!element && sectionId !== 'hero') continue

                const rect = element ? element.getBoundingClientRect() : { top: 0, bottom: window.innerHeight }

                // Check if section is in view
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    if (lastSection !== sectionId) {
                        setActiveSection(sectionId)
                        setShowTransition(true)
                        lastSection = sectionId

                        setTimeout(() => {
                            setShowTransition(false)
                        }, 800)
                    }
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initial check

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <AnimatePresence mode="wait">
            {showTransition && (
                <motion.div
                    key="progress-bar"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#7C3AED] z-[9999] origin-left"
                />
            )}
            {showTransition && (
                <motion.div
                    key="section-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-8 left-1/2 -translate-x-1/2 z-[9999] px-6 py-3 rounded-full bg-[#0F0F14]/90 backdrop-blur-xl border border-[#7C3AED]/50 shadow-lg shadow-[#7C3AED]/20"
                >
                    <span className="text-sm font-medium text-white capitalize">
                        {activeSection === 'hero' ? 'Home' : activeSection.replace('-', ' ')}
                    </span>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
