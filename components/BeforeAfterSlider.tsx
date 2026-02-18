'use client'

import { MotionWrapper } from '@/components/ui/MotionWrapper'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt
}: {
  beforeSrc: string
  afterSrc: string
  alt?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [percent, setPercent] = useState(50)

  // Mouse move handler
  function onMove(e: React.MouseEvent | React.TouchEvent) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    let clientX = 0
    if ('touches' in e && e.touches[0]) {
      clientX = e.touches[0].clientX
    } else if ('clientX' in e) {
      clientX = (e as React.MouseEvent).clientX
    }

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const p = (x / rect.width) * 100
    setPercent(p)
  }

  return (
    <MotionWrapper>
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black cursor-col-resize group shadow-2xl"
        onMouseMove={onMove}
        onTouchMove={onMove}
      >
        {/* Images */}
        <div className="absolute inset-0 select-none pointer-events-none">
          <Image
            src={beforeSrc}
            alt={alt || "Before"}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-white/80 border border-white/10">Before</div>
        </div>

        <div
          className="absolute inset-0 select-none pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        >
          <Image
            src={afterSrc}
            alt={alt || "After"}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 bg-accent/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-black border border-accent">After</div>
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-accent z-20 shadow-[0_0_20px_rgba(212,175,55,0.8)]"
          style={{ left: `${percent}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-lg">
            <div className="flex gap-1">
              <div className="w-0 h-0 border-t-[4px] border-t-transparent border-r-[6px] border-r-black border-b-[4px] border-b-transparent" />
              <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-black border-b-[4px] border-b-transparent" />
            </div>
          </div>
        </div>
      </div>
    </MotionWrapper>
  )
}
