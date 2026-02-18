'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import BlurText from './BlurText'

export function WelcomeIntro() {
    const [isVisible, setIsVisible] = useState(true)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(timer)
                    setTimeout(() => setIsVisible(false), 500)
                    return 100
                }
                return prev + 1
            })
        }, 20)
        return () => clearInterval(timer)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center p-6"
                >
                    <div className="relative overflow-hidden mb-4">
                        <BlurText
                            text="MR Media Works"
                            delay={100}
                            animateBy="letters"
                            direction="top"
                            className="text-white text-xl sm:text-3xl font-black tracking-[0.8em] uppercase text-center pl-[0.8em]"
                        />
                    </div>

                    <BlurText
                        text="Welcome to our creative space! We turn your ideas into powerful visuals that speak louder than words."
                        delay={50}
                        animateBy="words"
                        direction="bottom"
                        className="text-white/60 text-sm sm:text-base font-medium max-w-sm text-center mb-4 leading-relaxed tracking-wide"
                    />

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
