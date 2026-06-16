import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  /** Small uppercase eyebrow above the title. */
  eyebrow?: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-4 flex items-center gap-2.5 eyebrow text-brand-600 dark:text-brand-400',
            align === 'center' && 'justify-center',
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-[2.5rem] sm:leading-[1.1]">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-400">
          {description}
        </p>
      )}
    </div>
  )
}
