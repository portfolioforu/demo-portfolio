import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section className="px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Projets" title="Projets réalisés" index="02" />

        <div className="mt-7 space-y-5">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to={`/projets/${p.slug}`}
                className="group block rounded-xl border border-line border-l-3 border-l-violet bg-surface p-7 transition-colors hover:border-line-active"
              >
                <span className="font-mono text-xs text-violet">{p.eyebrow}</span>
                <h3 className="font-display mt-2 text-xl font-semibold text-title">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line bg-surface2 px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-dim transition-colors group-hover:text-violet">
                  Voir les détails du projet
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
