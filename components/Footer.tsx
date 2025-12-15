import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export function Footer() {
  return (
    <footer className="section border-t border-white/10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex items-center gap-4 text-sm">
          <Link href={siteConfig.socials.github} className="hover:text-accent">GitHub</Link>
          <Link href={siteConfig.socials.instagram} className="hover:text-accent">Instagram</Link>
          <Link href={siteConfig.socials.youtube} className="hover:text-accent">YouTube</Link>
          <Link href={siteConfig.socials.behance} className="hover:text-accent">Behance</Link>
        </div>
      </div>
    </footer>
  )
}
