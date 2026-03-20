'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    setStatus('sending')
    setErrorMessage('')

    const payload = {
      name:    formData.get('name')    as string,
      email:   formData.get('email')   as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.')
      }

      setStatus('sent')
      form.reset()
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.'
      setErrorMessage(message)
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 bg-white text-foreground placeholder:text-gray-400'

  return (
    <motion.form
      onSubmit={onSubmit}
      className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm grid gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Name</label>
            <input
              name="name"
              placeholder="Your Name"
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Email</label>
            <input
              name="email"
              placeholder="Email Address"
              type="email"
              required
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary mb-2">Subject</label>
          <input
            name="subject"
            placeholder="Subject"
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className={`${inputClasses} resize-none`}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'sending' ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>

        {status === 'sent' && (
          <div className="p-4 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-medium flex items-center gap-2">
            ✅ Your message was sent successfully! I&apos;ll get back to you soon.
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 rounded-lg bg-red-50 text-red-600 text-sm font-medium flex items-start gap-2">
            <span>⚠️</span>
            <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
          </div>
        )}
      </div>
    </motion.form>
  )
}

