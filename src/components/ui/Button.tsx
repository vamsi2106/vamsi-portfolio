import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { LinkProps as RouterLinkProps } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'group/btn inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-ink-950'

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-paper hover:bg-ink-700 dark:bg-paper dark:text-ink dark:hover:bg-paper-200',
  secondary:
    'border border-ink/15 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/[0.03] dark:border-paper/20 dark:text-paper dark:hover:border-paper/50 dark:hover:bg-paper/[0.06]',
  ghost: 'text-ink-600 hover:bg-ink/[0.04] dark:text-paper/80 dark:hover:bg-paper/[0.06]',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
}

/** Compose the button class string — shared by buttons, anchors, and router links. */
export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(base, variants[variant], sizes[size], className)
}

interface StyleProps {
  variant?: Variant
  size?: Size
}

type ButtonProps = StyleProps & { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, children, ...props }, ref) => (
    <button ref={ref} className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  ),
)
Button.displayName = 'Button'

type ButtonLinkProps = StyleProps & { children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>

/** Anchor styled as a button — for external links and downloads. */
export function ButtonLink({ variant, size, className, children, ...props }: ButtonLinkProps) {
  return (
    <a className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </a>
  )
}

type RouterButtonProps = StyleProps & { children: ReactNode } & RouterLinkProps

/** React Router <Link> styled as a button — for internal navigation. */
export function RouterButton({ variant, size, className, children, ...props }: RouterButtonProps) {
  return (
    <Link className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </Link>
  )
}
