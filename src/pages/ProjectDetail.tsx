import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Container } from '@/components/Container'
import { AnimatedSection } from '@/components/AnimatedSection'
import { TechTag } from '@/components/TechTag'
import { ButtonLink, RouterButton } from '@/components/ui/Button'
import { getProjectBySlug, projects } from '@/content/projects'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <NotFound />
  }

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <Seo
        title={project.title}
        description={project.summary}
        path={`/projects/${project.slug}`}
      />

      <article className="py-28">
        <Container className="max-w-3xl">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-300"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to projects
          </Link>

          <AnimatedSection className="mt-8">
            {project.context && (
              <span className="mb-3 inline-block rounded bg-ink/10 px-2.5 py-1 text-xs font-medium text-ink-500 dark:bg-ink-800 dark:text-ink-400">
                {project.context}
              </span>
            )}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-600 dark:text-ink-400">
              {project.summary}
            </p>

            {(project.links.github || project.links.live) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.live && (
                  <ButtonLink href={project.links.live} target="_blank" rel="noopener noreferrer" size="sm">
                    <ExternalLink size={16} aria-hidden="true" />
                    Live site
                  </ButtonLink>
                )}
                {project.links.github && (
                  <ButtonLink
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                  >
                    <Github size={16} aria-hidden="true" />
                    View code
                  </ButtonLink>
                )}
              </div>
            )}
          </AnimatedSection>

          <AnimatedSection className="mt-12" delay={0.05}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
              The problem
            </h2>
            <p className="mt-3 leading-relaxed text-ink-600 dark:text-ink-400">
              {project.problem}
            </p>
          </AnimatedSection>

          <AnimatedSection className="mt-10" delay={0.1}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
              What I built
            </h2>
            <ul className="mt-4 space-y-3">
              {project.build.map((point) => (
                <li key={point} className="flex gap-3 text-ink-600 dark:text-ink-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {project.highlights && project.highlights.length > 0 && (
            <AnimatedSection className="mt-10" delay={0.12}>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
                Highlights
              </h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-ink-600 dark:text-ink-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          )}

          <AnimatedSection className="mt-10" delay={0.15}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
              Tech stack
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t}>
                  <TechTag>{t}</TechTag>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <div className="mt-16 flex flex-col gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-paper/10">
            <p className="text-sm text-ink-500 dark:text-ink-400">
              Next project: <span className="font-medium text-ink-600 dark:text-ink-400">{next.title}</span>
            </p>
            <RouterButton to={`/projects/${next.slug}`} variant="secondary" size="sm">
              Next case study
              <ArrowLeft size={16} aria-hidden="true" className="rotate-180" />
            </RouterButton>
          </div>
        </Container>
      </article>
    </>
  )
}
