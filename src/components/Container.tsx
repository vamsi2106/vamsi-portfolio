import type { ReactNode, ElementType } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

/** Max-width, horizontally-padded content wrapper used across the site. */
export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-content px-5 sm:px-8', className)}>{children}</Tag>
  )
}
