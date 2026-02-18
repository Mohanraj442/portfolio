'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/siteConfig'

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-8 mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-base text-secondary">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-6 text-base">
          <Link href={siteConfig.socials.linkedin} className="text-secondary hover:text-accent font-medium transition-colors">LinkedIn</Link>
        </div>
      </motion.div>
    </footer>
  )
}
