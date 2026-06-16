import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

/** Surface card used for projects, skill groups, etc. */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-xl border border-ink/10 bg-paper-100/40 dark:border-paper/10 dark:bg-ink-900',
        className,
      )}
      {...props}
    />
  )
}
