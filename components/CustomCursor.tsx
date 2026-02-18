'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 250 }
    const x = useSpring(cursorX, springConfig)
    const y = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const isInteractive = target.closest('button, a, .interactive')
            setIsHovered(!!isInteractive)
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleHover)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleHover)
        }
    }, [cursorX, cursorY])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/20 pointer-events-none z-[9999] hidden md:block"
                style={{
                    x,
                    y,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? 'rgba(var(--accent-rgb), 0.1)' : 'transparent',
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 bg-accent rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    )
}
