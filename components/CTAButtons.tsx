import Link from 'next/link'

export function CTAButtons() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <Link href="#work" className="px-6 py-3 rounded-xl bg-accent text-black font-semibold shadow-glow">
        View Work
      </Link>
      <Link href="#contact" className="px-6 py-3 rounded-xl border border-white/20 hover:border-accent">
        Contact Me
      </Link>
    </div>
  )
}
