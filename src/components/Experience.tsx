import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { experience, experienceIntro } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Parcours" title="Formations & expériences" />

        <Reveal delay={0.04} className="mt-6">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{experienceIntro}</p>
        </Reveal>

        <div className="relative mt-12 space-y-10 border-l border-line pl-8">
          {experience.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06} className="relative">
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-violet bg-bg" />
              <span className="font-mono text-sm text-violet">{e.period}</span>
              <h3 className="font-display mt-1.5 text-xl font-semibold text-title">{e.title}</h3>
              <p className="mt-0.5 text-sm text-dim">{e.org}</p>
              <p className="mt-3 text-base leading-relaxed text-muted">{e.description}</p>

              <ul className="mt-4 space-y-2.5">
                {e.list.map((item, li) => (
                  <li key={li} className="relative pl-5 text-sm leading-relaxed text-muted">
                    <span className="absolute left-0 top-0 font-mono font-bold text-violet">›</span>
                    {item.bold && <strong className="text-title">{item.bold} : </strong>}
                    {item.text}
                  </li>
                ))}
              </ul>

              {e.skillsGained && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.skillsGained.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-line bg-violet-dim px-2.5 py-1 font-mono text-xs text-violet"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.1}
          className="mt-16 flex flex-col items-start gap-4 rounded-xl border border-line border-l-3 border-l-violet bg-surface p-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h3 className="font-display text-xl font-semibold text-title">
              Envie d'en savoir plus sur ce parcours ?
            </h3>
            <p className="mt-1.5 text-base text-muted">
              Discutons de comment ces expériences peuvent servir ton infrastructure.
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
