import { ExternalLink, Mail, MapPin } from 'lucide-react'
import { contact, profile } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Contact" title={contact.heading} index="01" />
        <Reveal delay={0.04} className="mt-6">
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{contact.body}</p>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Reveal delay={0.06}>
            <div className="h-full rounded-xl border border-line border-l-3 border-l-violet bg-surface p-6">
              <span className="font-mono text-xs text-violet">Email</span>
              <h3 className="mt-2 text-base font-semibold text-title">Adresse mail</h3>
              <p className="mt-2 font-mono text-sm text-title">{profile.email}</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-title transition-colors hover:border-violet hover:bg-violet-dim"
              >
                <Mail className="h-4 w-4" />
                Envoyer un mail
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-xl border border-line border-l-3 border-l-violet bg-surface p-6">
              <span className="font-mono text-xs text-violet">LinkedIn</span>
              <h3 className="mt-2 text-base font-semibold text-title">Profil professionnel</h3>
              <p className="mt-2 font-mono text-sm text-title">Profil de démonstration</p>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-title transition-colors hover:border-violet hover:bg-violet-dim"
              >
                <ExternalLink className="h-4 w-4" />
                Voir mon profil
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="Disponibilité" title="Zone & disponibilité" index="02" />
          <Reveal delay={0.06} className="mt-7">
            <div className="rounded-xl border border-line border-l-3 border-l-violet bg-surface p-6">
              <div className="flex items-start gap-2.5 text-base text-muted">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-violet" />
                {contact.availabilityNote}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Alternance', 'Rentrée 2026', 'Mobilité régionale'].map((t) => (
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

        <div className="mt-14">
          <SectionHeading eyebrow="Recherche" title="Ce que je recherche" index="03" />
          <Reveal delay={0.06} className="mt-7">
            <div className="rounded-xl border border-line border-l-3 border-l-violet bg-surface p-6">
              <p className="text-base leading-relaxed text-muted">{contact.looking}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="FAQ" title="Questions fréquentes" index="04" />
          <Reveal delay={0.08} className="mt-7">
            <div className="divide-y divide-line rounded-xl border border-line bg-surface">
              {contact.faq.map((item) => (
                <details key={item.question} className="group px-6 py-5">
                  <summary className="cursor-pointer list-none text-base font-medium text-title marker:content-none">
                    <span className="flex items-center justify-between gap-3">
                      {item.question}
                      <span className="font-mono text-violet transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-2.5 text-base leading-relaxed text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
