'use client'

import { motion } from 'framer-motion'

export function Section({
  id,
  title,
  children
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.h2
          className="mb-10 text-3xl sm:text-4xl font-bold neon"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  )
}
