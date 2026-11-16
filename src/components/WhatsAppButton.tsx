import { AnimatePresence, motion } from 'framer-motion'
import { useScrolled } from '../hooks'
import { whatsappLink } from '../utils/whatsapp'
import { WhatsAppIcon } from './ui/Icons'

/**
 * Persistent WhatsApp access:
 *  - desktop / tablet: floating round button (bottom-right)
 *  - mobile: sticky bottom bar after the hero
 */
export function WhatsAppButton() {
  const past = useScrolled(520)

  return (
    <>
      <a
        href={whatsappLink('general')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Decent Fitness on WhatsApp"
        className="group fixed right-6 bottom-6 z-30 hidden h-14 items-center rounded-full bg-[#25d366] text-white shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-colors duration-300 hover:bg-[#1ebe5b] md:flex"
      >
        <span className="max-w-0 overflow-hidden pl-0 text-sm font-semibold whitespace-nowrap transition-[max-width,padding] duration-300 group-hover:max-w-44 group-hover:pl-5">
          Chat with trainer
        </span>
        <span className="flex size-14 shrink-0 items-center justify-center">
          <WhatsAppIcon className="size-[30px]" />
        </span>
      </a>

      <AnimatePresence>
        {past && (
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            exit={{ y: '110%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 z-30 border-t border-bone/10 bg-ink/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden"
          >
            <a
              href={whatsappLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2.5 bg-[#25d366] text-[0.8rem] font-bold tracking-[0.12em] text-white uppercase active:bg-[#1ebe5b]"
            >
              <WhatsAppIcon className="size-5" />
              Talk to our trainer
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
