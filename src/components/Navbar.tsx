import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { media } from '../data/media'
import { gym } from '../data/gym'
import { useActiveSection, useScrolled } from '../hooks'
import { Picture } from './ui/Picture'
import { WaButton } from './ui/WaButton'
import { MobileMenu } from './MobileMenu'

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'transformations', label: 'Transformations' },
  { id: 'membership', label: 'Membership' },
  { id: 'videos', label: 'Videos' },
  { id: 'contact', label: 'Contact' },
]

const ids = navItems.map((n) => n.id)

export function Navbar() {
  const scrolled = useScrolled(60)
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled ? 'border-b border-bone/10 bg-ink/85 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container-x flex h-[68px] items-center justify-between gap-6 lg:h-[76px]" aria-label="Primary">
          <a href="#home" className="flex items-center gap-3" aria-label={`${gym.name}, back to top`}>
            <Picture img={media.logo} sizes="44px" className="size-10 overflow-hidden rounded-full lg:size-11" priority />
            <span className="display text-[1.2rem] leading-none tracking-wide whitespace-nowrap sm:text-[1.35rem]">
              Decent<span className="text-bronze"> Fitness</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 xl:flex">
            {navItems.slice(1).map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`relative px-3 py-2 text-[0.78rem] font-medium tracking-[0.12em] uppercase transition-colors ${
                    active === item.id ? 'text-bone' : 'text-bone/60 hover:text-bone'
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-bronze"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <WaButton intent="general" className="min-h-11!">
                Join now
              </WaButton>
            </span>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex size-11 items-center justify-center text-bone xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="size-6" strokeWidth={1.6} />
            </button>
          </div>
        </nav>
      </motion.header>
      <MobileMenu open={open} onClose={() => setOpen(false)} active={active} />
    </>
  )
}
