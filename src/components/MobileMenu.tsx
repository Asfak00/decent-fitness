import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { gym, shifts } from '../data/gym'
import { useKeys, useScrollLock } from '../hooks'
import { WaButton } from './ui/WaButton'
import { navItems } from './Navbar'

const ease = [0.16, 1, 0.3, 1] as const

export function MobileMenu({ open, onClose, active }: { open: boolean; onClose: () => void; active: string }) {
  useScrollLock(open)
  useKeys(open, { Escape: onClose })

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-ink xl:hidden"
          initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="container-x flex h-[68px] items-center justify-between">
            <span className="eyebrow text-smoke">Menu</span>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex size-11 items-center justify-center"
              aria-label="Close menu"
              autoFocus
            >
              <X className="size-6" strokeWidth={1.6} />
            </button>
          </div>

          <nav className="container-x flex-1 overflow-y-auto pt-4" aria-label="Mobile">
            <ul>
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.18 + i * 0.05 }}
                  className="border-b border-bone/10"
                >
                  <a
                    href={`#${item.id}`}
                    onClick={onClose}
                    className={`flex items-baseline justify-between py-3 ${active === item.id ? 'text-bronze' : 'text-bone'}`}
                  >
                    <span className="display text-[2.6rem] sm:text-6xl">{item.label}</span>
                    <span className="eyebrow text-smoke">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            className="container-x space-y-4 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex flex-col gap-1 text-sm text-smoke min-[400px]:flex-row min-[400px]:justify-between">
              {shifts.map((s) => (
                <span key={s.id}>
                  <span className="text-bone">{s.label}</span> {s.startLabel} – {s.endLabel}
                </span>
              ))}
            </div>
            <WaButton intent="general" className="w-full">
              Talk to our trainer
            </WaButton>
            <p className="text-center text-xs text-smoke">{gym.address.short}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
