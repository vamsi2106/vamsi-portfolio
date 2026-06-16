import { Link } from 'react-router-dom'
import { ArrowUpRight, Github } from 'lucide-react'
import { Card } from './ui/Card'
import { TechTag } from './TechTag'
import type { Project } from '@/content/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative flex h-full flex-col rounded-xl p-6 transition-colors duration-200 hover:border-ink/25 hover:bg-paper-100/60 dark:hover:border-paper/25 dark:hover:bg-ink-800/60">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug">
          <Link
            to={`/projects/${project.slug}`}
            className="before:absolute before:inset-0 before:content-[''] group-hover:text-brand-600 dark:group-hover:text-brand-400"
          >
            {project.title}
          </Link>
        </h3>
        <ArrowUpRight
          size={20}
          aria-hidden="true"
          className="shrink-0 text-ink-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600 dark:group-hover:text-brand-400"
        />
      </div>

      {project.context && (
        <span className="mt-2 w-fit rounded border border-ink/10 px-2 py-0.5 text-xs font-medium text-ink-500 dark:border-paper/15 dark:text-ink-400">
          {project.context}
        </span>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
        {project.summary}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((t) => (
          <li key={t}>
            <TechTag>{t}</TechTag>
          </li>
        ))}
        {project.tech.length > 4 && (
          <li>
            <TechTag>{`+${project.tech.length - 4}`}</TechTag>
          </li>
        )}
      </ul>

      {project.links.github && (
        <div className="mt-5 border-t border-ink/10 pt-4 dark:border-paper/10">
          {/* relative z-10 so this link sits above the card's overlay link */}
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-400"
          >
            <Github size={15} aria-hidden="true" />
            View code
          </a>
        </div>
      )}
    </Card>
  )
}
