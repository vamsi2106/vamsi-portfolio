import { Link } from 'react-router-dom'
import { ArrowUp, Mail, Phone } from 'lucide-react'
import { Container } from './Container'
import { SocialLinks } from './SocialLinks'
import { profile } from '@/content/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-paper-100 dark:border-paper/10 dark:bg-ink-900/40">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link to="/" className="text-lg font-bold text-ink dark:text-paper">
              {profile.shortName}
              <span className="text-brand-600 dark:text-brand-300">.</span>
            </Link>
            <p className="mt-2 max-w-xs text-sm text-ink-600 dark:text-ink-400">
              {profile.title} · {profile.location}
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-ink-600 hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-300"
              >
                <Mail size={15} aria-hidden="true" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-ink-600 hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-300"
              >
                <Phone size={15} aria-hidden="true" />
                {profile.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <SocialLinks includeEmail />
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-300"
            >
              <ArrowUp size={15} aria-hidden="true" />
              Back to top
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between dark:border-paper/10 dark:text-ink-500">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with React, Vite &amp; Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  )
}
