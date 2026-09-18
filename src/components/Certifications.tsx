import { Radar } from 'lucide-react'
import { certifications, veille } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Certifications & veille" title="Certifications & veille" index="01" />
        <Reveal delay={0.04} className="mt-6">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Ce que j'ai validé formellement, et ce que je suis en train d'apprendre.
          </p>
        </Reveal>

        <div className="mt-9">
          <h2 className="font-display text-lg font-semibold text-title">Certifications</h2>
          <div className="mt-4 space-y-3">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05}>
                <div className="flex flex-col items-start gap-3 rounded-xl border border-line border-l-3 border-l-violet bg-surface p-5 sm:flex-row sm:items-center">
                  <span
                    className={`shrink-0 rounded-md border px-2.5 py-1 font-mono text-xs ${
                      c.status === 'obtenue'
                        ? 'border-green/35 bg-green-dim text-green'
                        : 'border-amber/35 bg-amber-dim text-amber'
                    }`}
                  >
                    {c.status === 'obtenue' ? 'Obtenue' : 'En préparation'}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-title">{c.name}</h3>
                    <p className="mt-0.5 text-sm text-dim">{c.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="Veille" title="Veille technologique" index="02" />
          <Reveal delay={0.06} className="mt-7">
            <div className="divide-y divide-line rounded-xl border border-line bg-surface">
              {veille.map((v) => (
                <div key={v.title} className="flex gap-3 p-6">
                  <Radar className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                  <div>
                    <span className="font-mono text-xs text-dim">Suivi régulier</span>
                    <h3 className="mt-1 text-base font-semibold text-title">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
