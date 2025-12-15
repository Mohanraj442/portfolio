'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

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

  function onMove(e: React.MouseEvent | React.TouchEvent) {
    const rect = containerRef.current?.getBoundingClientRect()
    let x = 0
    if ('touches' in e && e.touches[0]) {
      x = e.touches[0].clientX
    } else if ('clientX' in e) {
      x = e.clientX
    }
    if (rect) {
      const p = Math.min(100, Math.max(0, ((x - rect.left) / rect.width) * 100))
      setPercent(p)
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black"
      onMouseMove={onMove}
      onTouchMove={onMove}
    >
      <Image
        src={beforeSrc}
        alt={alt ?? ''}
        width={1200}
        height={800}
        sizes="100vw"
        className="pointer-events-none select-none w-full h-auto object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        <Image
          src={afterSrc}
          alt={alt ?? ''}
          fill
          sizes="100vw"
          className="pointer-events-none select-none object-cover"
        />
      </div>
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${percent}%` }}
      >
        <div className="h-full w-[2px] bg-accent shadow-glow" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 bg-accent text-black px-3 py-1 rounded-full text-xs">
          Slide
        </div>
      </div>
    </div>
  )
}
