'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function ProfilePhoto({ src = '/mohanraj.png' }: { src?: string }) {
  return (
    <motion.div
      className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-2xl" />
      <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-glow">
        <Image
          src={src}
          alt="Profile photo"
          width={512}
          height={512}
          priority
          className="object-cover object-[center_15%] scale-[1.0] hover:scale-[1.05] transition-transform duration-500 w-full h-full"
        />
      </div>
    </motion.div>
  )
}
