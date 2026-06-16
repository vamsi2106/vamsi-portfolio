import { cn } from '@/lib/utils'

interface TechTagProps {
  children: string
  className?: string
}

/** Small pill used for tech-stack tags and skill chips. */
export function TechTag({ children, className }: TechTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-ink/10 bg-transparent px-2.5 py-1 text-xs font-medium text-ink-600 transition-colors hover:border-brand-500/50 hover:text-brand-700 dark:border-paper/15 dark:text-ink-400 dark:hover:border-brand-400/60 dark:hover:text-brand-300',
        className,
      )}
    >
      {children}
    </span>
  )
}
