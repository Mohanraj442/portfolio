'use client'

import { MotionWrapper } from '@/components/ui/MotionWrapper'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function VideoPreview({
  title,
  src,
  poster
}: {
  title: string
  src: string
  poster: string
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <MotionWrapper>
      <motion.div
        className="group relative w-full h-full overflow-hidden bg-black"
        onMouseEnter={() => {
          setIsPlaying(true)
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsPlaying(false)
          setIsHovered(false)
        }}
      >
        <div className="aspect-video relative bg-black overflow-hidden">
          {/* Video Element */}
          <motion.video
            src={src}
            poster={poster}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            ref={(el) => {
              if (el) {
                isPlaying ? el.play() : el.pause()
              }
            }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Timeline-Inspired Mask Reveal */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black via-accent/20 to-black"
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '100%' : '-100%' }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ mixBlendMode: 'overlay' }}
          />

          {/* Dark Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            animate={{ opacity: isHovered ? 0.3 : 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Cinematic Glow Effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: 'radial-gradient(circle at center, rgba(212,175,55,0.15), transparent 70%)'
            }}
          />

          {/* Title with Slide-Up Animation */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-2"
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            {/* Animated Underline (Timeline Style) */}
            <motion.div
              className="h-1 bg-gradient-to-r from-accent via-accent-light to-accent rounded-full"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '100%' : '60px' }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Playhead Indicator */}
            <motion.div
              className="absolute bottom-6 right-6 text-accent text-sm font-mono flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              PLAYING
            </motion.div>
          </motion.div>

          {/* Play Button with Cinematic Animation */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Pulsing Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-accent/20"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />

              {/* Play Button */}
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
              </div>
            </motion.div>
          </motion.div>

          {/* Corner Accent */}
          <div className="absolute top-4 right-4">
            <motion.div
              className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(212,175,55,0.8)]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Bottom Glow */}
        <motion.div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-accent/20 blur-3xl"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </MotionWrapper >
  )
}
