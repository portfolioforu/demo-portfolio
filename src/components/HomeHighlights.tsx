import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { experience, skills } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const latest = experience[0]
const keySkills = skills[0].items

export default function HomeHighlights() {
  return (
    <section className="px-6 pb-24 md:pb-32">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:items-start">
        <div>
          <SectionHeading eyebrow="Expérience clé" title={latest.title} index="02" />
          <Reveal delay={0.08} className="mt-7">
            <div className="rounded-xl border border-line border-l-3 border-l-violet bg-surface p-7">
              <span className="font-mono text-xs text-violet">
                {latest.org} — {latest.period}
              </span>
              <p className="mt-3 text-base leading-relaxed text-muted">{latest.description}</p>
              <Link
                to="/parcours"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-violet"
              >
                Voir mes missions détaillées
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div>
          <SectionHeading eyebrow="Compétences clés" title="Ce que je maîtrise" index="03" />
          <Reveal delay={0.1} className="mt-7">
            <div className="rounded-xl border border-line border-l-3 border-l-violet bg-surface p-7">
              <ul className="space-y-3">
                {keySkills.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-base text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                to="/projets"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-violet"
              >
                Voir tous les projets & compétences
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
