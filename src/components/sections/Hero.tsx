import { ArrowRight, Download, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '../Container'
import { SocialLinks } from '../SocialLinks'
import { ButtonLink, RouterButton } from '../ui/Button'
import { profile } from '@/content/profile'

export function Hero() {
  const reduce = useReducedMotion()

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  }

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/* Background: dotted grid + soft navy glow */}
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 -z-10 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full bg-navy-500/10 blur-3xl dark:bg-navy-500/15"
        aria-hidden="true"
      />

      <Container className="flex min-h-[92vh] flex-col justify-center py-28">
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? false : 'hidden'}
          animate={reduce ? undefined : 'show'}
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm font-medium text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400"
          >
            <MapPin size={14} aria-hidden="true" className="text-navy-600 dark:text-navy-300" />
            {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl font-semibold text-navy-600 sm:text-2xl dark:text-navy-300"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <RouterButton to="/#projects" size="lg">
              View Projects
              <ArrowRight size={18} aria-hidden="true" />
            </RouterButton>
            <ButtonLink href={profile.resumeUrl} download variant="secondary" size="lg">
              <Download size={18} aria-hidden="true" />
              Download Résumé
            </ButtonLink>
            <SocialLinks className="ml-1" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
