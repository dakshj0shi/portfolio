"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function EasterEggs() {
  const [showCat, setShowCat] = useState(false)
  const [showIdleCat, setShowIdleCat] = useState(false)
  const [konamiProgress, setKonamiProgress] = useState(0)

  // Konami code: up up down down left right left right b a
  const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA"
  ]

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.code === konamiCode[konamiProgress]) {
      const newProgress = konamiProgress + 1
      setKonamiProgress(newProgress)
      
      if (newProgress === konamiCode.length) {
        setShowCat(true)
        setKonamiProgress(0)
        setTimeout(() => setShowCat(false), 3000)
      }
    } else {
      setKonamiProgress(0)
    }
  }, [konamiProgress])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  // Idle cat appears after 60 seconds of no interaction
  useEffect(() => {
    let idleTimer: NodeJS.Timeout

    const resetIdleTimer = () => {
      setShowIdleCat(false)
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        setShowIdleCat(true)
      }, 60000) // 60 seconds
    }

    const events = ["mousemove", "keydown", "scroll", "click"]
    events.forEach((event) => window.addEventListener(event, resetIdleTimer))
    resetIdleTimer()

    return () => {
      clearTimeout(idleTimer)
      events.forEach((event) => window.removeEventListener(event, resetIdleTimer))
    }
  }, [])

  return (
    <>
      {/* Konami Code Cat */}
      <AnimatePresence>
        {showCat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            className="fixed inset-0 flex items-center justify-center z-[200] pointer-events-none"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="text-8xl mb-4"
              >
                =^..^=
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl text-[#7C3AED] font-mono"
              >
                meow! you found me~
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Idle Pixel Cat */}
      <AnimatePresence>
        {showIdleCat && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="fixed bottom-4 left-4 z-[50] text-2xl cursor-pointer"
            onClick={() => setShowIdleCat(false)}
            title="Click to dismiss"
          >
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              =^._.^=
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
