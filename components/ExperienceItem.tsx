'use client'

import { MotionWrapper } from '@/components/ui/MotionWrapper'

export function ExperienceItem({
  company,
  duration,
  details
}: {
  company: string
  duration: string
  details: string[]
}) {
  return (
    <MotionWrapper>
      <div className="relative pl-8 border-l-2 border-primary/10 hover:border-primary transition-colors duration-300">
        <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white" />

        <div className="mb-6">
          <h3 className="text-3xl sm:text-4xl font-black text-primary mb-2 tracking-tight">{company}</h3>
          <p className="text-accent font-bold text-lg mb-6 bg-accent/5 inline-block px-4 py-1.5 rounded-full border border-accent/10">{duration}</p>

          <ul className="space-y-4">
            {details.map((item, i) => (
              <li key={i} className="text-xl font-medium text-foreground leading-snug flex items-center gap-4 group">
                <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MotionWrapper>
  )
}
