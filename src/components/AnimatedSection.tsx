import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  /** Stagger delay in seconds. */
  delay?: number
  /** Render as a <section>, <div>, etc. */
  id?: string
  as?: 'section' | 'div' | 'li' | 'article'
}

/**
 * Fades + slides its children up when scrolled into view.
 * Respects prefers-reduced-motion (renders statically).
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
  as = 'div',
}: AnimatedSectionProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      id={id}
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
