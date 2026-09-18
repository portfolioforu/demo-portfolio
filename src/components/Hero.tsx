import { motion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import { profile, stats } from '../data/content'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="mb-5 inline-flex items-center gap-2 font-mono text-sm text-green"
          >
            <span className="h-2 w-2 rounded-full bg-green shadow-[0_0_6px_rgba(52,211,153,0.55)]" />
            {profile.availability}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-title sm:text-5xl md:text-6xl"
          >
            <span className="bg-gradient-to-r from-violet to-blue bg-clip-text text-transparent">
              2 ans
            </span>{' '}
            à sécuriser des infrastructures réseau
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/parcours"
              className="rounded-lg bg-gradient-to-r from-violet to-blue px-7 py-3 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Voir mon parcours
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-line px-7 py-3 text-base font-semibold text-title transition-colors hover:border-violet hover:bg-violet-dim"
            >
              Me contacter
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="overflow-hidden rounded-xl border border-line bg-surface"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-6 ${i !== stats.length - 1 ? 'border-b border-line' : ''}`}
            >
              <div
                className={`font-display text-3xl font-bold tracking-tight ${
                  i === 1 ? 'text-violet' : 'text-title'
                }`}
              >
                {s.value}
              </div>
              <div className="mt-1 font-mono text-sm text-dim">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
