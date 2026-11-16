import { motion } from 'framer-motion'
import { Info } from 'lucide-react'
import { shifts, type Shift } from '../data/gym'
import { useShiftNow } from '../hooks'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './ui/Reveal'
import { WaButton } from './ui/WaButton'

const DAY_START = 6
const DAY_END = 24
const pct = (h: number) => ((h - DAY_START) / (DAY_END - DAY_START)) * 100

export function TrainingSchedule() {
  const now = useShiftNow()
  const showMarker = now.hour >= DAY_START && now.hour <= DAY_END

  return (
    <section id="schedule" className="relative bg-ink py-24 lg:py-36">
      <div className="container-x">
        <SectionHeading
          index="10"
          label="Training schedule"
          title={['Your hours.', 'Your space.']}
          aside="The day is split in two: women train in the morning and afternoon, men in the evening."
        />

        {/* Day timeline */}
        <Reveal className="mt-16 lg:mt-24">
          <div className="relative">
            <div className="relative h-14 overflow-hidden bg-ink-3 sm:h-16">
              {shifts.map((s) => (
                <motion.div
                  key={s.id}
                  className={`absolute inset-y-0 flex items-center px-3 ${s.id === 'women' ? 'bg-bronze text-ink' : 'bg-bone text-ink'}`}
                  style={{ left: `${pct(s.start)}%`, width: `${pct(s.end) - pct(s.start)}%`, originX: 0 }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: s.id === 'men' ? 0.25 : 0 }}
                >
                  <span className="display truncate text-lg sm:text-2xl">{s.label}</span>
                </motion.div>
              ))}
              {showMarker && (
                <div className="absolute inset-y-0 w-0.5 bg-signal" style={{ left: `${pct(now.hour)}%` }} aria-hidden />
              )}
            </div>
            {showMarker && (
              <p
                className="eyebrow absolute -top-6 -translate-x-1/2 text-[0.6rem]! whitespace-nowrap text-signal"
                style={{ left: `clamp(2.5rem, ${pct(now.hour)}%, calc(100% - 2.5rem))` }}
              >
                Now · {now.timeLabel}
              </p>
            )}
            <div className="mt-2 flex justify-between text-[0.68rem] text-smoke tabular-nums">
              {['6 AM', '8', '10', '12 PM', '2', '4', '6', '8', '10', '12 AM'].map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Panels */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20 lg:gap-6">
          {shifts.map((s, i) => (
            <ShiftPanel key={s.id} shift={s} live={now.current?.id === s.id} delay={i * 0.1} />
          ))}
        </div>

        <p className="mt-6 flex items-start gap-2 text-sm text-smoke">
          <Info className="mt-0.5 size-4 shrink-0" />
          Times follow Bangladesh time (GMT+6). The men’s shift may close slightly before 11 PM, so check on WhatsApp
          before a late visit.
        </p>
      </div>
    </section>
  )
}

function ShiftPanel({ shift, live, delay }: { shift: Shift; live: boolean; delay: number }) {
  const women = shift.id === 'women'
  return (
    <Reveal delay={delay}>
      <article
        className={`relative flex h-full flex-col overflow-hidden p-7 sm:p-10 ${women ? 'bg-ink-2' : 'bg-ink-3'}`}
        aria-label={`${shift.label}’s shift, ${shift.startLabel} to ${shift.endLabel}`}
      >
        <span className={`absolute inset-x-0 top-0 h-1 ${women ? 'bg-bronze' : 'bg-bone'}`} />
        <div className="flex items-center justify-between gap-4">
          <p className={`eyebrow ${women ? 'text-bronze' : 'text-bone'}`}>{women ? 'Women only' : 'Men only'}</p>
          {live ? (
            <span className="eyebrow flex items-center gap-2 text-[0.62rem]! text-[#7fd08a]">
              <span className="size-1.5 rounded-full bg-turf" /> Training now
            </span>
          ) : (
            <span className="eyebrow text-[0.62rem]! text-smoke">Shift 0{shift.id === 'women' ? 1 : 2}</span>
          )}
        </div>

        <h3 className="display mt-6 text-[clamp(4rem,12vw,8rem)]">{shift.label}</h3>

        <div className="mt-8 flex items-end gap-3 sm:gap-5">
          <div>
            <p className="eyebrow text-[0.6rem]! text-smoke">From</p>
            <p className="display mt-1 text-[clamp(2.4rem,6vw,3.8rem)] leading-none">{shift.startLabel}</p>
          </div>
          <span className="mb-3 h-px flex-1 bg-bone/20" />
          <div className="text-right">
            <p className="eyebrow text-[0.6rem]! text-smoke">To{shift.provisional ? ' *' : ''}</p>
            <p className="display mt-1 text-[clamp(2.4rem,6vw,3.8rem)] leading-none">{shift.endLabel}</p>
          </div>
        </div>

        <p className="mt-6 text-[0.95rem] text-bone/65">{shift.note}</p>

        <div className="mt-auto pt-8">
          <WaButton intent={women ? 'female' : 'male'} variant={women ? 'solid' : 'bone'} className="w-full sm:w-auto">
            Join the {shift.label.toLowerCase()}’s shift
          </WaButton>
        </div>
      </article>
    </Reveal>
  )
}
