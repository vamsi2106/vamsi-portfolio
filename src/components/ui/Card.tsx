import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

/** Surface card used for projects, skill groups, etc. */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900',
        className,
      )}
      {...props}
    />
  )
}
