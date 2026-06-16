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
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {profile.about}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/50"
                >
                  <dt className="text-2xl font-bold text-navy-600 dark:text-navy-300">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.label}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  )
}
