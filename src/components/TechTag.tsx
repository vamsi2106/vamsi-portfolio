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
        'inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300',
        className,
      )}
    >
      {children}
    </span>
  )
}
