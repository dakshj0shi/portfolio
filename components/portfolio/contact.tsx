"use client"

import React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Copy, Check, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const socials = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/dakshj0shi",
    username: "@dakshj0shi",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/dakshj0shi",
    username: "dakshj0shi",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/dakshj0shi",
    username: "@dakshj0shi",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    href: "https://discord.com/users/dakshj0shi",
    username: "dakshj0shi",
  },
]

const email = "dakshonchain@gmail.com"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formState)
    // Reset form
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
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
            Get In <span className="text-[#7C3AED]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] mx-auto rounded-full" />
          <p className="mt-6 text-[#A1A1AA] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let&apos;s connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative p-6 md:p-8 rounded-2xl bg-[#0F0F14]/80 backdrop-blur-xl border border-white/10">
              <h3 className="text-xl font-semibold text-[#F5F5F7] mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="bg-[#15151C] border-white/10 text-[#F5F5F7] placeholder:text-[#A1A1AA]/50 focus:border-[#7C3AED] focus:ring-[#7C3AED]/20"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="bg-[#15151C] border-white/10 text-[#F5F5F7] placeholder:text-[#A1A1AA]/50 focus:border-[#7C3AED] focus:ring-[#7C3AED]/20"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="bg-[#15151C] border-white/10 text-[#F5F5F7] placeholder:text-[#A1A1AA]/50 focus:border-[#7C3AED] focus:ring-[#7C3AED]/20 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#7C3AED] hover:bg-[#5B21B6] text-white"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Social Links & Email */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Email Card */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-[#0F0F14]/80 backdrop-blur-xl border border-white/10">
              <h3 className="text-xl font-semibold text-[#F5F5F7] mb-4">
                Email me directly
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex-1 flex items-center gap-3 p-4 rounded-xl bg-[#15151C] border border-white/10">
                  <Mail className="w-5 h-5 text-[#7C3AED]" />
                  <span className="text-[#F5F5F7] font-mono text-sm md:text-base truncate">
                    {email}
                  </span>
                </div>
                <Button
                  onClick={copyEmail}
                  variant="outline"
                  size="icon"
                  className="border-white/20 bg-transparent text-[#F5F5F7] hover:bg-white/5 hover:border-[#7C3AED] shrink-0"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-[#0F0F14]/80 backdrop-blur-xl border border-white/10">
              <h3 className="text-xl font-semibold text-[#F5F5F7] mb-6">
                Connect with me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="group flex items-center gap-3 p-4 rounded-xl bg-[#15151C] border border-white/10 hover:border-[#7C3AED]/50 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-[#7C3AED]/10 text-[#7C3AED] group-hover:bg-[#7C3AED]/20 transition-colors">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-[#F5F5F7]">
                        {social.name}
                      </div>
                      <div className="text-xs text-[#A1A1AA] truncate">
                        {social.username}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="text-center text-[#A1A1AA]">
              <p className="text-sm">Based in India, available worldwide</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
