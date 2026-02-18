'use client'

import { motion } from 'framer-motion'

export function SkillCard({
  name,
  level,
  icon
}: {
  name: string
  level?: number
  icon?: React.ReactNode
}) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group relative"
      whileHover={{ y: -8 }}
    >
      <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-center gap-4 relative z-10">
        {icon && (
          <motion.div
            className="text-primary group-hover:text-accent transition-colors duration-500"
            whileHover={{ rotate: 12, scale: 1.1 }}
          >
            {icon}
          </motion.div>
        )}
        <motion.h3
          className="font-bold text-xl text-foreground tracking-tight group-hover:tracking-wide transition-all duration-500"
        >
          {name}
        </motion.h3>
      </div>
    </motion.div>
  )
}
