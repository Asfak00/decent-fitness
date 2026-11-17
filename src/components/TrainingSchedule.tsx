import { motion } from 'framer-motion'
import { Info } from 'lucide-react'
import { groupInfo, sessions, sessionsFor, type Session, type ShiftGroup } from '../data/gym'
import { useShiftNow } from '../hooks'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './ui/Reveal'
import { WaButton } from './ui/WaButton'

const DAY_START = 6
const DAY_END = 24
const pct = (h: number) => ((h - DAY_START) / (DAY_END - DAY_START)) * 100

/** Morning / Afternoon / Evening, from a session's start hour */
const partOfDay = (s: Session) => (s.start < 12 ? 'Morning' : s.start < 16 ? 'Afternoon' : 'Evening')

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
          aside="The day runs in three sessions: men in the morning, women in the afternoon, and men again in the evening."
        />

        {/* Day timeline */}
        <Reveal className="mt-16 lg:mt-24">
          <div className="relative">
            <div className="relative h-14 overflow-hidden bg-ink-3 sm:h-16">
              {sessions.map((s, i) => (
                <motion.div
                  key={s.id}
                  className={`absolute inset-y-0 flex items-center justify-center px-1 sm:justify-start sm:px-3 ${
                    s.group === 'women' ? 'bg-bronze text-ink' : 'bg-bone text-ink'
                  } ${i > 0 ? 'border-l-2 border-ink' : ''}`}
                  style={{ left: `${pct(s.start)}%`, width: `${pct(s.end) - pct(s.start)}%`, originX: 0 }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: i * 0.2 }}
                >
                  <span className="display overflow-hidden text-[0.8rem] whitespace-nowrap min-[400px]:text-base sm:text-2xl">{s.label}</span>
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

        {/* Panels, one per group */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20 lg:gap-6">
          {(['women', 'men'] as ShiftGroup[]).map((g, i) => (
            <GroupPanel key={g} group={g} live={now.current?.group === g} delay={i * 0.1} />
          ))}
        </div>

        <p className="mt-6 flex items-start gap-2 text-sm text-smoke">
          <Info className="mt-0.5 size-4 shrink-0" />
          Times follow Bangladesh time (GMT+6).
        </p>
      </div>
    </section>
  )
}

function GroupPanel({ group, live, delay }: { group: ShiftGroup; live: boolean; delay: number }) {
  const women = group === 'women'
  const info = groupInfo[group]
  const list = sessionsFor(group)

  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={`relative flex h-full flex-col overflow-hidden p-7 sm:p-10 ${women ? 'bg-ink-2' : 'bg-ink-3'}`}
        aria-label={`${info.label}’s training: ${list.map((s) => `${s.startLabel} to ${s.endLabel}`).join(' and ')}`}
      >
        <span className={`absolute inset-x-0 top-0 h-1 ${women ? 'bg-bronze' : 'bg-bone'}`} />
        <div className="flex items-center justify-between gap-4">
          <p className={`eyebrow ${women ? 'text-bronze' : 'text-bone'}`}>{women ? 'Women only' : 'Men only'}</p>
          {live ? (
            <span className="eyebrow flex items-center gap-2 text-[0.62rem]! text-[#7fd08a]">
              <span className="size-1.5 rounded-full bg-turf" /> Training now
            </span>
          ) : (
            <span className="eyebrow text-[0.62rem]! text-smoke">
              {list.length} {list.length === 1 ? 'session' : 'sessions'} a day
            </span>
          )}
        </div>

        <h3 className="display mt-6 text-[clamp(4rem,12vw,8rem)]">{info.label}</h3>

        <ul className="mt-6">
          {list.map((s) => (
            <li key={s.id} className="border-t border-bone/12 py-4 first:border-t-0 first:pt-2">
              <p className="eyebrow text-[0.6rem]! text-smoke">{partOfDay(s)}</p>
              <div className="mt-2 flex items-end gap-3 sm:gap-5">
                <p className="display text-[clamp(2rem,5vw,3.2rem)] leading-none whitespace-nowrap">{s.startLabel}</p>
                <span className="mb-2.5 h-px flex-1 bg-bone/20" />
                <p className="display text-[clamp(2rem,5vw,3.2rem)] leading-none whitespace-nowrap">{s.endLabel}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-[0.95rem] text-bone/65">{info.note}</p>

        <div className="mt-auto pt-8">
          <WaButton intent={women ? 'female' : 'male'} variant={women ? 'solid' : 'bone'} className="w-full sm:w-auto">
            Join the {info.label.toLowerCase()}’s shift
          </WaButton>
        </div>
      </article>
    </Reveal>
  )
}
