import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/parcours', label: 'Parcours' },
  { to: '/projets', label: 'Compétences & Projets' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-line bg-bg/90 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-green shadow-[0_0_8px_rgba(52,211,153,0.55)]" />
          <span className="font-display text-lg font-bold tracking-tight text-title">
            Testeur Dupuis
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-title ${
                    isActive ? 'text-violet' : 'text-muted'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-lg bg-gradient-to-r from-violet to-blue px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          Me contacter
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Ouvrir le menu"
        >
          <span className={`h-0.5 w-6 bg-title transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-title transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-title transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col gap-1 border-t border-line bg-bg px-6 pb-4 md:hidden"
        >
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-base font-medium ${isActive ? 'text-violet' : 'text-muted'}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  )
}
