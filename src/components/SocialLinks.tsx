import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

interface SocialLinksProps {
  className?: string
  /** Include an email link alongside GitHub/LinkedIn. */
  includeEmail?: boolean
  size?: number
}

const iconLink =
  'inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink-600 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-paper/20 dark:text-ink-400 dark:hover:border-brand-400 dark:hover:text-brand-300'

export function SocialLinks({ className, includeEmail = false, size = 18 }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <a
        href={profile.social.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className={iconLink}
      >
        <Github size={size} aria-hidden="true" />
      </a>
      <a
        href={profile.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className={iconLink}
      >
        <Linkedin size={size} aria-hidden="true" />
      </a>
      {includeEmail && (
        <a href={`mailto:${profile.email}`} aria-label="Email Vamsi" className={iconLink}>
          <Mail size={size} aria-hidden="true" />
        </a>
      )}
    </div>
  )
}
