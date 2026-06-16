import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react'
import { Button } from './ui/Button'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

/**
 * Set this to your Formspree form endpoint (e.g. "https://formspree.io/f/xxxxxxx")
 * to send messages without a backend. When empty, the form falls back to a
 * pre-filled mailto: link so it still works out of the box.
 */
const FORMSPREE_ENDPOINT = ''

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface Errors {
  name?: string
  email?: string
  message?: string
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const fieldClasses =
  'w-full rounded-lg border border-ink/15 bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40 dark:border-paper/20 dark:bg-ink-900 dark:text-paper dark:placeholder:text-ink-500'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})

  function validate(data: { name: string; email: string; message: string }): Errors {
    const next: Errors = {}
    if (!data.name.trim()) next.name = 'Please enter your name.'
    if (!data.email.trim()) next.email = 'Please enter your email.'
    else if (!emailRe.test(data.email)) next.email = 'Please enter a valid email address.'
    if (!data.message.trim()) next.message = 'Please enter a message.'
    else if (data.message.trim().length < 10) next.message = 'Message is a little short.'
    return next
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    // Honeypot: real users leave this empty; bots tend to fill it.
    if ((fd.get('company') as string)?.trim()) {
      setStatus('success') // silently pretend success
      form.reset()
      return
    }

    const data = {
      name: (fd.get('name') as string) ?? '',
      email: (fd.get('email') as string) ?? '',
      message: (fd.get('message') as string) ?? '',
    }

    const nextErrors = validate(data)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('submitting')

    // No Formspree endpoint configured → open a pre-filled email instead.
    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${data.name}`)
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name}\n${data.email}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('success')
      form.reset()
      return
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — visually hidden, not announced to screen readers */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company (leave blank)</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-600 dark:text-ink-400">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={cn(fieldClasses, errors.name && 'border-red-500 focus:ring-red-500/40')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-600 dark:text-ink-400">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={cn(fieldClasses, errors.email && 'border-red-500 focus:ring-red-500/40')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-600 dark:text-ink-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={cn(fieldClasses, 'resize-y', errors.message && 'border-red-500 focus:ring-red-500/40')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} aria-hidden="true" />
              Send message
            </>
          )}
        </Button>

        {/* Status messages (act as inline toasts) */}
        <div aria-live="polite" className="text-sm">
          {status === 'success' && (
            <p className="inline-flex items-center gap-1.5 font-medium text-green-600 dark:text-green-400">
              <CheckCircle2 size={16} aria-hidden="true" />
              Thanks — your message is on its way.
            </p>
          )}
          {status === 'error' && (
            <p className="inline-flex items-center gap-1.5 font-medium text-red-600 dark:text-red-400">
              <AlertCircle size={16} aria-hidden="true" />
              Something went wrong. Email me directly at {profile.email}.
            </p>
          )}
        </div>
      </div>
    </form>
  )
}
