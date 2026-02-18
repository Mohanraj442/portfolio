'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import TextType from './TextType'

export function WelcomeIntro() {
    const [isVisible, setIsVisible] = useState(true)
    const [count, setCount] = useState(0)

    useEffect(() => {
        // Prevent scrolling while intro is visible
        if (isVisible) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isVisible])

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(timer)
                    return 100
                }
                return prev + 1
            })
        }, 50) // 100 * 50ms = 5000ms (5 seconds)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (count >= 100) {
            const timeout = setTimeout(() => setIsVisible(false), 1000) // 1 second pause
            return () => clearTimeout(timeout)
        }
    }, [count])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: '-100%',
                        transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] } // 1 second exit
                    }}
                    className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center p-6"
                >
                    <div className="relative overflow-hidden mb-4">
                        <TextType
                            text="MR Media Works"
                            typingSpeed={80}
                            loop={false}
                            showCursor={true}
                            cursorCharacter="_"
                            className="text-white text-xl sm:text-3xl font-black uppercase text-center tracking-[0.4em]"
                        />
                    </div>

                    <div className="h-16 flex items-center justify-center">
                        <TextType
                            text="Welcome to our creative space! We turn your ideas into powerful visuals that speak louder than words."
                            typingSpeed={40}
                            loop={false}
                            showCursor={true}
                            cursorCharacter="_"
                            className="text-white/60 text-sm sm:text-base font-medium max-w-sm text-center mb-4 leading-relaxed tracking-wide"
                        />
                    </div>

                    <div className="w-full max-w-[200px] h-px bg-white/10 relative mt-8">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${count}%` }}
                            className="absolute inset-y-0 left-0 bg-accent shadow-[0_0_10px_#2563eb]"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 text-white/40 text-sm font-black tracking-[0.4em] uppercase"
                    >
                        {count}% Loading Visuals
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
