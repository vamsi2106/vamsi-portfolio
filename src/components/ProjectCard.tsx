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
    <Card className="group relative flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:border-navy-300 hover:shadow-md dark:hover:border-navy-700">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug">
          <Link
            to={`/projects/${project.slug}`}
            className="before:absolute before:inset-0 before:content-[''] hover:text-navy-600 dark:hover:text-navy-300"
          >
            {project.title}
          </Link>
        </h3>
        <ArrowUpRight
          size={20}
          aria-hidden="true"
          className="shrink-0 text-slate-400 transition-colors group-hover:text-navy-600 dark:group-hover:text-navy-300"
        />
      </div>

      {project.context && (
        <span className="mt-2 w-fit rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          {project.context}
        </span>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
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
        <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
          {/* relative z-10 so this link sits above the card's overlay link */}
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-navy-600 dark:text-slate-400 dark:hover:text-navy-300"
          >
            <Github size={15} aria-hidden="true" />
            View code
          </a>
        </div>
      )}
    </Card>
  )
}
