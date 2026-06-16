import { Briefcase } from 'lucide-react'
import { Container } from '../Container'
import { AnimatedSection } from '../AnimatedSection'
import { SectionHeading } from '../SectionHeading'
import { experience } from '@/content/experience'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <AnimatedSection>
          <SectionHeading eyebrow="Experience" title="Where I've worked" />
        </AnimatedSection>

        <ol className="mt-12 space-y-10 border-l border-slate-200 pl-8 dark:border-slate-800">
          {experience.map((job, i) => (
            <AnimatedSection as="li" key={`${job.company}-${job.period}`} delay={i * 0.08} className="relative">
              {/* Timeline node */}
              <span
                className="absolute -left-[2.55rem] flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-navy-600 dark:border-slate-700 dark:bg-slate-900 dark:text-navy-300"
                aria-hidden="true"
              >
                <Briefcase size={13} />
              </span>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {job.role}
                  {job.current && (
                    <span className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-medium text-navy-700 dark:bg-navy-900/40 dark:text-navy-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-navy-500" />
                      Current
                    </span>
                  )}
                </h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-navy-600 dark:text-navy-300">
                {job.company} · {job.location}
              </p>
              <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{job.summary}</p>
            </AnimatedSection>
          ))}
        </ol>
      </Container>
    </section>
  )
}
