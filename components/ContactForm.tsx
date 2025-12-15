'use client'

import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: { 'Content-Type': 'application/json' }
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="name" placeholder="Your Name" required className="rounded-lg bg-white/5 px-4 py-3 outline-none focus:ring-2 ring-accent" />
        <input name="email" placeholder="Email" type="email" required className="rounded-lg bg-white/5 px-4 py-3 outline-none focus:ring-2 ring-accent" />
      </div>
      <input name="subject" placeholder="Subject" required className="rounded-lg bg-white/5 px-4 py-3 outline-none focus:ring-2 ring-accent" />
      <textarea name="message" placeholder="Message" rows={5} required className="rounded-lg bg-white/5 px-4 py-3 outline-none focus:ring-2 ring-accent" />
      <div className="flex items-center gap-3">
        <button type="submit" className="px-5 py-2 rounded-lg bg-accent text-black font-semibold shadow-glow disabled:opacity-60" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
        {status === 'sent' && <span className="text-sm text-green-400">Message sent!</span>}
        {status === 'error' && <span className="text-sm text-red-400">Something went wrong.</span>}
      </div>
    </form>
  )
}
