import { Container } from '../Container'
import { AnimatedSection } from '../AnimatedSection'
import { SectionHeading } from '../SectionHeading'
import { profile } from '@/content/profile'

const stats = [
  { value: '2 yrs', label: 'Building production AI' },
  { value: '8+', label: 'Shipped projects' },
  { value: 'End to end', label: 'Requirements → deploy' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <AnimatedSection>
          <SectionHeading eyebrow="About" title="Owning AI products end to end" />
        </AnimatedSection>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-2" delay={0.05}>
            <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-400">
              {profile.about}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group rounded-xl border border-ink/10 bg-paper-100 p-5 transition-colors duration-200 hover:border-ink/25 dark:border-paper/10 dark:bg-ink-900/50 dark:hover:border-paper/25"
                >
                  <dt className="text-3xl font-bold text-ink dark:text-paper">{s.value}</dt>
                  <dd className="mt-1 eyebrow text-ink-400">{s.label}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
