import { Container } from '../Container'
import { AnimatedSection } from '../AnimatedSection'
import { SectionHeading } from '../SectionHeading'
import { Card } from '../ui/Card'
import { TechTag } from '../TechTag'
import { skillGroups } from '@/content/skills'

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-slate-200 bg-slate-50/60 py-20 sm:py-28 dark:border-slate-800 dark:bg-slate-900/30"
    >
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Skills"
            title="A full-stack AI toolkit"
            description="From models and data to APIs, front-ends, and the cloud they run on."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.title} delay={Math.min(i * 0.05, 0.3)}>
              <Card className="h-full p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-600 dark:text-navy-300">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <TechTag>{skill}</TechTag>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
