import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'
import { gym, sessionsFor } from '../data/gym'
import { media } from '../data/media'
import { useShiftNow } from '../hooks'
import { Picture } from './ui/Picture'
import { LinkButton, WaButton } from './ui/WaButton'

const ease = [0.16, 1, 0.3, 1] as const
const lines = ['Stronger,', 'every', 'shift.']

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yA = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-14%'])
  const yB = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-30%'])
  const { current, next } = useShiftNow()

  const times = (g: 'women' | 'men') => sessionsFor(g).map((x) => `${x.startLabel} – ${x.endLabel}`)

  return (
    <section
      id="home"
      ref={ref}
      className="grain relative isolate flex min-h-svh flex-col overflow-hidden bg-ink pt-[92px] lg:pt-[110px]"
    >
      {/* Faint giant outline word behind everything */}
      <div aria-hidden className="pointer-events-none absolute -right-[4vw] bottom-[-4vw] -z-10 select-none">
        <span className="display text-outline block text-[38vw] leading-none opacity-40 lg:text-[26vw]">DF</span>
      </div>

      <div className="container-x grid flex-1 gap-10 pb-10 lg:grid-cols-12 lg:gap-6 lg:pb-14">
        {/* Copy */}
        <div className="flex flex-col justify-center lg:col-span-7 lg:pr-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-smoke"
          >
            <MapPin className="size-3.5 text-bronze" />
            <span>{gym.address.short}</span>
            <span className="text-bone/25">/</span>
            <span>Dhaka</span>
          </motion.p>

          <h1 className="display mt-6 text-[clamp(4.4rem,15vw,8rem)] lg:mt-8 lg:text-[clamp(6rem,10.4vw,11.5rem)]">
            {lines.map((line, i) => (
              <span key={line} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
                <motion.span
                  className={`block ${i === 2 ? 'text-bronze' : ''}`}
                  initial={{ y: '102%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.1, ease, delay: 0.35 + i * 0.1 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.85 }}
          >
            <p className="mt-7 max-w-[34rem] text-[1.02rem] leading-relaxed text-bone/75 lg:text-lg">
              A neighbourhood strength club in Mohammadpur with its own hours for women and for men, so everyone trains
              at full focus, with a trainer on the floor.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WaButton intent="general">Start membership</WaButton>
              <LinkButton href="#facilities">Explore the gym</LinkButton>
            </div>
          </motion.div>
        </div>

        {/* Two shifts, two frames */}
        <div className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5 lg:self-center">
          <motion.figure style={{ y: yA }} className="relative">
            <motion.div
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.3, ease, delay: 0.5 }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ scale: 1.25 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease, delay: 0.5 }}
              >
                <Picture
                  img={media.womenDeadlift}
                  sizes="(min-width:1024px) 20vw, 46vw"
                  priority
                  className="aspect-[3/4.6] lg:aspect-[3/4.4]"
                  imgClassName="grade h-full w-full object-cover object-[30%_50%]"
                />
              </motion.div>
            </motion.div>
            <ShiftTag label="Women" times={times('women')} live={current?.group === 'women'} />
          </motion.figure>

          <motion.figure style={{ y: yB }} className="relative mt-14 lg:mt-24">
            <motion.div
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.3, ease, delay: 0.68 }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ scale: 1.25 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease, delay: 0.68 }}
              >
                <Picture
                  img={media.pecDeck}
                  sizes="(min-width:1024px) 20vw, 46vw"
                  priority
                  className="aspect-[3/4.6] lg:aspect-[3/4.4]"
                  imgClassName="grade h-full w-full object-cover object-[50%_60%]"
                />
              </motion.div>
            </motion.div>
            <ShiftTag label="Men" times={times('men')} live={current?.group === 'men'} />
          </motion.figure>
        </div>
      </div>

      {/* Bottom bar: live status + scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="container-x relative flex items-center justify-between gap-4 border-t border-bone/10 py-4 text-[0.78rem] text-smoke md:pr-28!"
      >
        <p className="flex items-center gap-2.5" aria-live="polite">
          <span className="relative flex size-2">
            {current && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-turf opacity-60" />}
            <span className={`relative inline-flex size-2 rounded-full ${current ? 'bg-turf' : 'bg-smoke'}`} />
          </span>
          {current ? (
            <span>
              Now training: <span className="text-bone">{current.label}’s session</span> · until {current.endLabel}
            </span>
          ) : (
            <span>
              Closed now · <span className="text-bone">{next.label}’s session</span> opens {next.startLabel}
            </span>
          )}
        </p>
        <a href="#about" className="hidden items-center gap-3 sm:flex" aria-label="Scroll to About">
          <span className="eyebrow">Scroll</span>
          <span className="relative h-8 w-px overflow-hidden bg-bone/15">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-bronze"
              animate={reduce ? undefined : { y: ['-100%', '200%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </a>
      </motion.div>
    </section>
  )
}

function ShiftTag({ label, times, live }: { label: string; times: string[]; live: boolean }) {
  return (
    <figcaption className="mt-3 flex items-start justify-between gap-2 border-t border-bone/15 pt-2.5">
      <span>
        <span className="display block text-xl leading-none sm:text-2xl">{label}</span>
        {times.map((t) => (
          <span key={t} className="mt-1 block text-[0.7rem] tracking-[0.08em] whitespace-nowrap text-smoke uppercase sm:text-xs">
            {t}
          </span>
        ))}
      </span>
      {live && (
        <span className="eyebrow mt-0.5 shrink-0 bg-turf/15 px-1.5 py-0.5 text-[0.6rem]! tracking-[0.18em]! text-[#7fd08a]">
          Live
        </span>
      )}
    </figcaption>
  )
}
