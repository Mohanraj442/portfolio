'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

  const navItems = ['About', 'Skills', 'Packages', 'Benefits', 'Experience', 'Projects']

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 py-4' : 'bg-transparent py-8'
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="w-10 h-10 rounded-full flex items-center justify-center text-primary hover:text-accent hover:bg-accent/5 transition-all duration-300 group"
          aria-label="Home"
        >
          <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-[0.2em] text-secondary hover:text-accent transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="#contact"
              className="px-8 py-3 rounded-full bg-primary text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-accent transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/10"
            >
              MR Media Works
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button (Placeholder for simplicity) */}
        <button className="md:hidden p-2 text-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  )
}
