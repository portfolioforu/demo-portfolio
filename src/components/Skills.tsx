import { skills } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Compétences" title="Compétences techniques" index="01" />

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-line border-l-3 border-l-violet bg-surface p-7">
                <span className="font-mono text-xs text-violet">{group.category}</span>
                <ul className="mt-3 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="relative pl-5 text-base text-muted">
                      <span className="absolute left-0 top-0 font-mono font-bold text-violet">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
