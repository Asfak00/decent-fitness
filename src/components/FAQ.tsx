import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { faq } from '../data/faq'
import { Reveal, SplitLine } from './ui/Reveal'
import { WaButton } from './ui/WaButton'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" className="relative bg-bone text-ink">
      <div className="container-x grid gap-12 py-24 lg:grid-cols-12 lg:py-36">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4 text-ink/55">
            <span className="eyebrow text-bronze-deep">13</span>
            <span className="h-px flex-1 bg-ink/15" />
          </div>
          <h2 className="display mt-8 text-[clamp(3.2rem,8vw,7rem)]">
            <SplitLine text="Good" className="block" />
            <SplitLine text="questions." className="block text-bronze-deep" delay={0.08} />
          </h2>
          <p className="mt-6 max-w-xs text-ink/65">Anything else? The trainer answers on WhatsApp.</p>
          <WaButton intent="general" className="mt-6">
            Ask on WhatsApp
          </WaButton>
        </div>

        <Reveal className="lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-ink/15">
            {faq.map((item, i) => {
              const isOpen = open === i
              const panel = `${baseId}-p${i}`
              const btn = `${baseId}-b${i}`
              return (
                <li key={item.q} className="border-b border-ink/15">
                  <h3>
                    <button
                      id={btn}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panel}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold tracking-tight sm:text-xl"
                    >
                      <span>{item.q}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isOpen ? 'border-ink bg-ink text-bone' : 'border-ink/25'
                        }`}
                      >
                        <Plus className="size-4" />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panel}
                        role="region"
                        aria-labelledby={btn}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pr-12 pb-7">
                          <p className="max-w-2xl leading-relaxed text-ink/75">{item.a}</p>
                          {item.ask && (
                            <WaButton intent={item.ask.intent} variant="line" className="mt-4 min-h-0! text-ink! decoration-signal/50!">
                              {item.ask.label}
                            </WaButton>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
