'use client'

import { motion } from 'framer-motion'
import {
  Navbar,
  Footer,
  Section,
  SkillCard,
  BeforeAfterSlider,
  ExperienceItem,
  ContactForm,
  VideoPreview,
  CTAButtons,
  ProfilePhoto
} from '@/components'
import { siteConfig } from '@/lib/siteConfig'


export default function HomePage() {
  return (
    <div>
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none bg-grid bg-[length:24px_24px]" />
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-7xl font-extrabold neon">
                Mohanraj R
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/80">
                Video & Photo Editor
              </p>
              <div className="mt-6 text-white/70 max-w-2xl">
                Cinematic editing with premium color grading, smooth transitions, and creative storytelling.
              </div>
              <CTAButtons />
            </motion.div>
            <ProfilePhoto />
          </div>
          <motion.div
            className="mt-10 card p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <video className="w-full rounded-lg" autoPlay muted loop playsInline>
              <source src="https://cdn.coverr.co/videos/coverr-colorful-lights-1110/1080p.mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="About">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card p-6">
            <p className="text-white/80">
              Passionate editor crafting cinematic visuals. 6 months experience at a House Editing Company.
              Specialized in color grading, creative transitions, and photo transformations with a premium aesthetic.
            </p>
          </div>
          <div className="card p-6">
            <ul className="grid gap-2">
              {siteConfig.tools.map((t) => (
                <li key={t} className="flex items-center gap-2 text-white/80">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard name="Adobe Photoshop" level={85} />
          <SkillCard name="Adobe Premiere Pro" level={80} />
          <SkillCard name="Adobe After Effects" level={70} />
        </div>
      </Section>

      <Section id="work" title="Portfolio">
        <div className="grid lg:grid-cols-2 gap-6">
          <VideoPreview
            title="Reel Preview"
            src="https://cdn.coverr.co/videos/coverr-led-tunnel-4538/1080p.mp4"
            poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
          />
          <BeforeAfterSlider
            beforeSrc="https://images.unsplash.com/photo-1520974735194-73cb0f89ed05?q=80&w=1200&auto=format&fit=crop"
            afterSrc="https://images.unsplash.com/photo-1516035069371-29cf4c4b8a73?q=80&w=1200&auto=format&fit=crop"
            alt="Before and After"
          />
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="grid md:grid-cols-2 gap-6">
          <ExperienceItem
            company="House Editing Company"
            duration="6 Months"
            details={siteConfig.experience.work}
          />
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold">Sample Edit — Montage</h3>
            <p className="mt-2 text-sm text-white/70">Dynamic cuts, beatsync, cinematic grading.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Transformation — Before/After</h3>
            <p className="mt-2 text-sm text-white/70">Retouching and stylized color tones.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Reel — Fast Pace</h3>
            <p className="mt-2 text-sm text-white/70">Smooth transitions and speed ramping.</p>
          </div>
        </div>
        <div className="mt-6">
          <a href={siteConfig.socials.github} className="inline-flex items-center gap-2 text-accent hover:underline">
            GitHub — view more projects
          </a>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid lg:grid-cols-2 gap-6">
          <ContactForm />
          <div className="card p-6">
            <h3 className="font-semibold">Connect</h3>
            <div className="mt-4 grid gap-2 text-sm text-white/80">
              <a href={siteConfig.socials.email} className="hover:text-accent">Email</a>
              <a href={siteConfig.socials.instagram} className="hover:text-accent">Instagram</a>
              <a href={siteConfig.socials.youtube} className="hover:text-accent">YouTube</a>
              <a href={siteConfig.socials.behance} className="hover:text-accent">Behance</a>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
