import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-[#0D0D14]/80 backdrop-blur px-4 py-2">
          <Link href="#" className="text-sm font-medium text-white/90 hover:text-white">
            {siteConfig.name}
          </Link>
          <nav className="flex gap-4 text-sm text-white/70">
            <Link href="#work" className="hover:text-accent">Work</Link>
            <Link href="#about" className="hover:text-accent">About</Link>
            <Link href="#skills" className="hover:text-accent">Skills</Link>
            <Link href="#projects" className="hover:text-accent">Projects</Link>
            <Link href="#contact" className="hover:text-accent">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
