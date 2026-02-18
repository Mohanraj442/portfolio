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
    <section id={id} className="py-24 sm:py-32 relative z-10">
      <div className="container">
        <div className="overflow-hidden mb-16">
          <div className="flex items-center gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-primary uppercase flex flex-wrap gap-x-4 cursor-default">
              {title.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", skewY: 5 }}
                  whileInView={{ y: 0, skewY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.1
                  }}
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px flex-1 bg-primary/10"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
