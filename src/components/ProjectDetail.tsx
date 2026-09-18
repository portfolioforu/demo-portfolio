import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/content'
import Reveal from './Reveal'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/projets" replace />

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Link
            to="/projets"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-violet"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour aux projets
          </Link>
        </Reveal>

        <Reveal delay={0.04} className="mt-5">
          <span className="font-mono text-xs text-violet">{project.eyebrow}</span>
          <h1 className="font-display mt-2 text-3xl font-bold tracking-tight text-title md:text-4xl">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={0.08} className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-b border-line pb-6 font-mono text-sm text-dim">
          <div>
            <strong className="text-muted">Technologies :</strong> {project.meta.technologies}
          </div>
          <div>
            <strong className="text-muted">Durée :</strong> {project.meta.duration}
          </div>
          <div>
            <strong className="text-muted">Contexte :</strong> {project.meta.contexte}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {project.results.map((r) => (
            <div key={r.label} className="rounded-xl border border-line bg-surface p-5 text-center">
              <div className="font-display text-2xl font-bold text-violet">{r.value}</div>
              <div className="mt-1 text-sm text-dim">{r.label}</div>
            </div>
          ))}
        </Reveal>

        <div className="mt-4">
          {project.sections.map((s, i) => (
            <Reveal key={s.heading} delay={0.04 * i} className="mt-8">
              <h2 className="font-display text-lg font-semibold text-title">{s.heading}</h2>
              {s.paragraphs?.map((p, pi) => (
                <p key={pi} className="mt-2.5 text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-3 space-y-2.5">
                  {s.list.map((item, li) => (
                    <li key={li} className="relative pl-5 text-base leading-relaxed text-muted">
                      <span className="absolute left-0 top-0 font-mono font-bold text-violet">›</span>
                      {item.bold && <strong className="text-title">{item.bold} : </strong>}
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.1}
          className="mt-14 flex flex-col items-start gap-4 rounded-xl border border-line border-l-3 border-l-violet bg-surface p-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h3 className="font-display text-lg font-semibold text-title">
              Un projet similaire à discuter ?
            </h3>
            <p className="mt-1.5 text-base text-muted">
              Parlons de ton infrastructure et de ce qui peut être mis en place.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gradient-to-r from-violet to-blue px-6 py-3 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Me contacter
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
