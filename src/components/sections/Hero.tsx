import { ArrowRight, ArrowDown } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '../Container'
import { SocialLinks } from '../SocialLinks'
import { ButtonLink, RouterButton } from '../ui/Button'
import { profile } from '@/content/profile'

export function Hero() {
  const reduce = useReducedMotion()

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  }
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
  }

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="bg-hairline absolute inset-0 -z-10" aria-hidden="true" />

      <Container className="flex min-h-[92vh] flex-col justify-center py-28">
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? false : 'hidden'}
          animate={reduce ? undefined : 'show'}
          className="max-w-4xl"
        >
          <motion.div variants={item} className="mb-8 flex items-center gap-3">
            <span className="flex items-center gap-2 eyebrow text-brand-600 dark:text-brand-400">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              {profile.title}
            </span>
            <span className="h-px flex-1 max-w-[6rem] bg-ink/15 dark:bg-paper/15" aria-hidden="true" />
            <span className="eyebrow text-ink-400">{profile.location}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-[2.75rem] font-bold leading-[1.02] tracking-tight sm:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl dark:text-ink-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <RouterButton to="/#projects" size="lg">
              View Projects
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover/btn:translate-x-1"
              />
            </RouterButton>
            <ButtonLink href={profile.resumeUrl} download variant="secondary" size="lg">
              Download Résumé
            </ButtonLink>
            <SocialLinks className="ml-1" />
          </motion.div>
        </motion.div>

        <motion.a
          href="/#about"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 inline-flex w-fit items-center gap-2 text-sm text-ink-500 transition-colors hover:text-ink dark:text-ink-400 dark:hover:text-paper"
        >
          <ArrowDown size={16} aria-hidden="true" className="animate-bounce" />
          Scroll to explore
        </motion.a>
      </Container>
    </section>
  )
}
