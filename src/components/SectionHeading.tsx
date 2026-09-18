import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  index,
}: {
  eyebrow: string
  title: string
  index?: string
}) {
  return (
    <Reveal>
      <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-violet">
            {eyebrow}
          </span>
          <h2 className="font-display mt-1.5 text-2xl font-bold tracking-tight text-title md:text-3xl">
            {title}
          </h2>
        </div>
        {index && <span className="font-mono text-xs text-dim">{index}</span>}
      </div>
    </Reveal>
  )
}
