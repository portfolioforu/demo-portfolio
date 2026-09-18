import { about } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="À propos" title="Un peu plus sur moi" index="01" />

        <Reveal delay={0.08} className="mt-7">
          <div className="rounded-xl border border-line border-l-3 border-l-violet bg-surface p-7">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={`text-base leading-relaxed text-muted ${i > 0 ? 'mt-4' : ''}`}>
                {p}
              </p>
            ))}
            <div className="mt-5 flex flex-wrap gap-2">
              {about.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line bg-surface2 px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
