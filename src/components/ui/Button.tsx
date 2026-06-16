import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { LinkProps as RouterLinkProps } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-navy-400 dark:focus-visible:ring-offset-slate-950'

const variants: Record<Variant, string> = {
  primary: 'bg-navy-600 text-white hover:bg-navy-700 active:bg-navy-800',
  secondary:
    'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800',
  ghost: 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
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
