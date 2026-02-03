"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Music } from "lucide-react"

const tracks = [
  { title: "Building in Web3", artist: "Late Night Sessions" },
  { title: "Blockchain Beats", artist: "Hackathon Mode" },
  { title: "Coffee & Code", artist: "2AM Vibes" },
  { title: "Debugging Flow", artist: "Lo-Fi Coding" },
]

export function NowPlaying() {
  // Use state to store track, initialized with first track to prevent hydration mismatch
  const [track, setTrack] = useState(tracks[0])

  useEffect(() => {
    // Randomly select a track only on client-side after mount
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)]
    setTrack(randomTrack)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0F0F14]/80 backdrop-blur-sm border border-white/10"
    >
      {/* Animated equalizer bars */}
      <div className="flex items-end gap-0.5 h-4">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="w-0.5 bg-[#7C3AED] rounded-full"
            animate={{
              height: ["30%", "100%", "50%", "80%", "30%"],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="flex flex-col">
        <span className="text-xs text-[#A1A1AA]">Now vibing to</span>
        <span className="text-sm text-[#F5F5F7] font-medium">{track.title}</span>
      </div>

      <Music className="w-4 h-4 text-[#7C3AED]" />
    </motion.div>
  )
}
