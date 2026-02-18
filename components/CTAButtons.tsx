'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-5">
      {/* Primary CTA */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="#packages"
          className="group relative px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.3em] overflow-hidden inline-flex items-center gap-3 bg-primary text-white shadow-2xl shadow-primary/20 hover:bg-accent transition-all duration-500"
        >
          <span>Explore Works</span>
          <svg
            className="w-3 h-3 transition-transform group-hover:translate-x-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </motion.div>

      {/* Secondary CTA */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="#about"
          className="group relative px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.3em] inline-flex items-center gap-2 bg-white border border-primary/10 text-secondary hover:text-primary hover:bg-primary/5 shadow-sm transition-all duration-500"
        >
          <span>The Story</span>
        </Link>
      </motion.div>
    </div>
  )
}
