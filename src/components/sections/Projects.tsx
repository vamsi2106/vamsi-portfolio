import { Container } from '../Container'
import { AnimatedSection } from '../AnimatedSection'
import { SectionHeading } from '../SectionHeading'
import { ProjectCard } from '../ProjectCard'
import { projects } from '@/content/projects'

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-y border-slate-200 bg-slate-50/60 py-20 sm:py-28 dark:border-slate-800 dark:bg-slate-900/30"
    >
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Production AI products and end-to-end builds. Each card opens a short case study."
          />
        </AnimatedSection>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection
              as="li"
              key={project.slug}
              delay={Math.min(i * 0.05, 0.3)}
              className="h-full"
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </ul>
      </Container>
    </section>
  )
}
