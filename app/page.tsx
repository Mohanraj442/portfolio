'use client'

import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Navbar,
  Footer,
  Section,
  SkillCard,
  ExperienceItem,
  ContactForm,
  VideoPreview,
  CTAButtons,
  WelcomeIntro
} from '@/components'
import { siteConfig } from '@/lib/siteConfig'
import { useRef, useEffect } from 'react'

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  }

  const float = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const slowDrift = {
    animate: {
      x: [0, 5, 0],
      y: [0, 3, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150])

  // Mouse Spotlight Effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/10 selection:text-primary relative overflow-hidden">
      <WelcomeIntro />
      {/* Interactive Background Spotlight */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.08), transparent)`
          )
        }}
      />

      {/* Background Ambience / Immersive Parallax */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          style={{ y: y1 }}
          animate={{
            x: [0, 100, 0],
            rotate: [0, 360],
          }}
          transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, x: { duration: 25, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-accent/5 rounded-full"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{
            x: [0, -80, 0],
            rotate: [360, 0],
          }}
          transition={{ rotate: { duration: 35, repeat: Infinity, ease: "linear" }, x: { duration: 30, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute top-[20%] -right-[5%] w-[45%] h-[45%] bg-primary/5 rounded-full"
        />
        <motion.div
          style={{ y: y3 }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] bg-accent/5 rounded-full"
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden noise-bg">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="relative"
            >

              {/* Title with Mask Reveal */}
              <div className="overflow-hidden mb-6">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-primary leading-[0.9] cursor-default"
                >
                  MOHAN
                </motion.h1>
              </div>

              {/* Subtitle / Description */}
              <div className="flex flex-wrap gap-x-[0.3em] gap-y-[0.1em] mb-10 overflow-hidden max-w-xl">
                {"Video  Editor  &  Visual  Architect.  Crafting  high-impact  cinematic  experiences  for  brands  that  demand  excellence.".split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30, skewX: -10 }}
                    animate={{ opacity: 1, y: 0, skewX: 0 }}
                    whileHover={{ scale: 1.15, color: "var(--accent)", transition: { duration: 0.2 } }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6 + i * 0.04,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="text-xl sm:text-2xl text-secondary inline-block cursor-default font-medium transition-colors duration-300"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* Buttons with Magnetic-style spacing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-5"
              >
                <Link
                  href="#projects"
                  className="group relative px-8 py-4 rounded-full bg-primary text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
                >
                  View Showreel
                  <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                </Link>
                <Link
                  href="#contact"
                  className="px-8 py-4 rounded-full border-2 border-primary/10 font-bold hover:bg-primary/5 transition-colors"
                >
                  MR Media Works
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image - Optimized for Headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative aspect-[4/5] lg:aspect-square group"
            >
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-accent/5 rounded-[2rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
              <div className="absolute -inset-4 border border-accent/10 rounded-[2rem] rotate-3 transition-transform group-hover:rotate-0 duration-700" />

              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 bg-black">
                <Image
                  src="/mohanraj.png"
                  alt="Mohan Raj - Professional Video Editor"
                  fill
                  className="object-cover object-[center_25%] scale-[1.0] group-hover:scale-[1.05] transition-all duration-700"
                  priority
                />

                {/* Floating Stats or Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-white/20"
                >
                  <p className="text-sm font-bold uppercase tracking-widest text-accent mb-1">Experience</p>
                  <p className="text-2xl font-black text-primary leading-none">2+ YEARS</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/20 to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="prose prose-lg text-secondary"
          >
            <div className="flex flex-wrap gap-x-[0.3em] font-medium text-foreground text-xl leading-relaxed mb-6">
              {"I don't just edit videos; I craft visual experiences. With over 2 years of professional expertise, I specialize in transforming raw footage into compelling, cinematic narratives that captivate audiences.".split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, skewY: 5 }}
                  whileInView={{ opacity: 1, y: 0, skewY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.03,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <motion.p variants={fadeInUp} className="mt-4">
              My workflow is built on a mastery of the Adobe Creative Cloud ecosystem, blending technical precision with artistic intuition. From intricate color grading that sets the perfect mood to dynamic pacing that drives the story forward, I bring a dedicated focus to every frame. Whether it's a high-energy commercial, a heartfelt documentary, or engaging social content, I deliver polished, broadcast-quality results that elevate your brand's vision.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
          >
            <h3 className="font-semibold text-primary mb-4">Core Competencies</h3>
            <ul className="space-y-2">
              {siteConfig.tools.map((tool, index) => (
                <motion.li
                  key={tool}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3 text-secondary"
                >
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {tool}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Proficiency">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            name="Adobe Photoshop"
            icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0v24h24V0H0zm6.65 15.34V8.66h3.1c1.37 0 2.22.84 2.22 2.14 0 1.25-.85 2.13-2.22 2.13H8.13v2.41H6.65zm1.48-3.66h1.28c.61 0 1.05-.3 1.05-.88 0-.54-.44-.86-1.05-.86H8.13v1.74zm5.07 1.55l1.32-.42c.16.54.67.89 1.48.89.7 0 1.35-.32 1.35-.91 0-.61-.39-.81-1.46-.98-1.74-.29-2.61-1.01-2.61-2.22 0-1.42 1.2-2.31 2.84-2.31 1.52 0 2.62.77 2.76 2.13l-1.35.39c-.14-.54-.64-.86-1.39-.86-.71 0-1.28.29-1.28.84 0 .54.4.74 1.52.92 1.83.31 2.58.98 2.58 2.3 0 1.42-1.07 2.37-3 2.37-1.71 0-2.88-.86-2.95-2.14z" /></svg>}
          />
          <SkillCard
            name="Adobe Premiere Pro"
            icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0v24h24V0H0zm6.65 15.34V8.66h3.1c1.37 0 2.22.84 2.22 2.14 0 1.25-.85 2.13-2.22 2.13H8.13v2.41H6.65zm1.48-3.66h1.28c.61 0 1.05-.3 1.05-.88 0-.54-.44-.86-1.05-.86H8.13v1.74zm5.13 3.66V8.66h1.48v2.41h1.59v-2.41h1.48v6.68h-1.48v-2.88h-1.59v2.88h-1.48z" /></svg>}
          />
          <SkillCard
            name="Adobe After Effects"
            icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0v24h24V0H0zm10.74 13.93l-.33 1.41H8.81l2.58-6.68h1.46l2.53 6.68h-1.57l-.33-1.41h-2.74zm.37-1.32h1.99l-.99-3.95-.5.2-.5.3.5 3.45zm5.75 2.73l-.42-1.32c-.54.16-.89.67-.89 1.48 0 .7.32 1.35.91 1.35.61 0 .81-.39.98-1.46.29-1.74 1.01-2.61 2.22-2.61 1.42 0 2.31 1.2 2.31 2.84 0 1.52-.77 2.62-2.13 2.76l-.39-1.35c.54-.14.86-.64.86-1.39 0-.71-.29-1.28-.84-1.28-.54 0-.74.4-.92 1.52-.31 1.83-.98 2.58-2.3 2.58-1.42 0-2.37-1.07-2.37-3 0-1.71.86-2.88 2.14-2.95z" /></svg>}
          />
          <SkillCard
            name="Sound Design"
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>}
          />
          <SkillCard
            name="Color Grading"
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>}
          />
        </div>
      </Section>

      {/* Services & Packages Section */}
      <Section id="packages" title="Services & Packages">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tier 1: 500 - 1000 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col"
          >
            <div className="aspect-video bg-gray-100 relative">
              <VideoPreview
                title="Social Media Edit"
                src="https://cdn.coverr.co/videos/coverr-street-food-cooking-6590/1080p.mp4"
                poster="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg font-bold text-primary tracking-tight"
                >
                  Essential Cut
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-2xl font-bold text-accent mt-1"
                >
                  500 - 1000
                </motion.div>
              </div>
              <p className="text-secondary text-sm mb-6 flex-1">
                Optimized for fast-paced social engagement. Perfect for Reels, TikToks, and Shorts that grab attention in the first 3 seconds.
              </p>
              <ul className="space-y-2 text-sm text-secondary mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  IG Reels / TikTok / Shorts
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Trendy Transitions & Sync
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Tier 2: 1000 - 2000 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col relative scale-[1.02] border-t-4 border-t-accent"
          >
            <div className="absolute top-0 right-0 bg-accent text-white text-sm font-bold px-3 py-1 rounded-bl-lg z-10">POPULAR</div>
            <div className="aspect-video bg-gray-100 relative">
              <VideoPreview
                title="Corporate & YouTube"
                src="https://cdn.coverr.co/videos/coverr-man-working-at-his-desk-in-the-office-3486/1080p.mp4"
                poster="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg font-bold text-primary tracking-tight"
                >
                  Professional Edit
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-2xl font-bold text-accent mt-1"
                >
                  1000 - 2000
                </motion.div>
              </div>
              <p className="text-secondary text-sm mb-6 flex-1">
                Polished content for long-form creators and businesses. Balanced pacing, clean audio, and professional brand integration.
              </p>
              <ul className="space-y-2 text-sm text-secondary mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  YouTube / Corporate Vlogs
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Clean Motion Graphics
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Tier 3: 2000 - 5000 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col"
          >
            <div className="aspect-video bg-gray-100 relative">
              <VideoPreview
                title="Cinematic Storytelling"
                src="https://cdn.coverr.co/videos/coverr-beautiful-landscape-of-the-mountains-in-iceland-4416/1080p.mp4"
                poster="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg font-bold text-primary tracking-tight"
                >
                  Cinematic Production
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-2xl font-bold text-accent mt-1"
                >
                  2000 - 5000
                </motion.div>
              </div>
              <p className="text-secondary text-sm mb-6 flex-1">
                High-end visual storytelling with advanced color grading and moody soundscapes. Built for commercials that leave a lasting impact.
              </p>
              <ul className="space-y-2 text-sm text-secondary mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Premium Commercials / VFX
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Advanced Narrative Grading
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Client Benefits Section */}
      <Section id="benefits" title="Client Benefits">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Professional Quality Editing",
              desc: "High-quality, cinematic look with clean cuts and professional color grading.",
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            },
            {
              title: "Fast & On-Time Delivery",
              desc: "Your project will be delivered on time without delay. Efficiency without compromising quality.",
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            },
            {
              title: "Your Style, Your Story",
              desc: "Editing based on the client's vision and specific requirements. Your unique voice, elevated.",
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            },
            {
              title: "Modern Effects & Transitions",
              desc: "Trendy effects and smooth transitions that make videos engaging and professional.",
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            }
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 group hover:bg-white transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2 glass-card p-8 flex flex-col md:flex-row items-center gap-8 group hover:bg-white transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center shrink-0 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary mb-2">Easy Communication & Revisions</h3>
              <p className="text-secondary text-lg leading-relaxed">
                Friendly communication and quick revisions until the client is fully satisfied.
                <span className="text-accent font-semibold ml-1">Your satisfaction is our priority.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience">
        <div className="max-w-3xl">
          <ExperienceItem
            company="House Editing Company"
            duration={siteConfig.experience.duration}
            details={siteConfig.experience.work}
          />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Recent Projects">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-bold text-primary mb-2">Corporate Brand Identity</h3>
            <p className="text-secondary mb-4">Complete video branding package including intros, outs, and lower thirds.</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-100 text-sm font-medium text-secondary rounded">After Effects</span>
              <span className="px-2 py-1 bg-gray-100 text-sm font-medium text-secondary rounded">Illustrator</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-bold text-primary mb-2">Event Highlights</h3>
            <p className="text-secondary mb-4">Cinematic recap of a 3-day corporate conference with fast-turnaround delivery.</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-100 text-sm font-medium text-secondary rounded">Premiere Pro</span>
              <span className="px-2 py-1 bg-gray-100 text-sm font-medium text-secondary rounded">Color Grading</span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get in Touch">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-primary mb-4">Let's Collaborate</motion.h3>
            <motion.p variants={fadeInUp} className="text-secondary text-xl mb-8">
              I am currently available for freelance projects and full-time opportunities.
              If you have a project in mind or would like to discuss my work, please feel free to reach out.
            </motion.p>

            <div className="space-y-4">
              {siteConfig.socials.email !== 'mailto:' && (
                <motion.div variants={fadeInUp} className="flex items-center gap-4 text-secondary">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span>{siteConfig.socials.email.replace('mailto:', '')}</span>
                </motion.div>
              )}
              <motion.div variants={fadeInUp} className="flex items-center gap-4 text-secondary">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span>Tamilnadu, salem-636017</span>
              </motion.div>
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </Section>

      <Footer />
    </div>
  )
}
