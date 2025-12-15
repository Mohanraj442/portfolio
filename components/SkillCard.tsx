'use client'

import { motion } from 'framer-motion'

export function SkillCard({
  name,
  level,
  icon
}: {
  name: string
  level: number
  icon?: React.ReactNode
}) {
  return (
    <motion.div
      className="card p-6"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <span className="text-sm text-white/60">{level}%</span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full shadow-glow"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}
