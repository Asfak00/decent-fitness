import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { trainingGoals } from '../data/training'
import { SectionHeading } from './SectionHeading'
import { Picture } from './ui/Picture'
import { Reveal } from './ui/Reveal'
import { WaButton } from './ui/WaButton'

/**
 * Index-style list of goals. On desktop, a sticky frame on the right swaps to
 * the photo of whichever goal is hovered or focused.
 */
export function TrainingExperience() {
  const [active, setActive] = useState(0)
  const goal = trainingGoals[active]

  return (
    <section id="training" className="relative border-t border-bone/10 bg-ink-2 py-24 lg:py-36">
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Training experience"
          title={['Pick your', 'reason.']}
          aside="Everyone walks in for something different. These are the goals the gym trains for, in its own words, in Bangla and English."
        />

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12">
          <ol className="lg:col-span-7">
            {trainingGoals.map((g, i) => (
              <Reveal as="li" key={g.no} delay={i * 0.05}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  tabIndex={0}
                  className={`group grid cursor-default grid-cols-[3rem_1fr] gap-x-4 border-t border-bone/12 py-7 outline-none transition-colors duration-500 last:border-b sm:grid-cols-[4.5rem_1fr] lg:py-9 ${
                    active === i ? 'text-bone' : 'text-bone/45 hover:text-bone/80'
                  } max-lg:text-bone`}
                >
                  <span className={`eyebrow pt-2 ${active === i ? 'text-bronze' : ''}`}>{g.no}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                      <h3 className="display text-[clamp(2.4rem,6vw,4.6rem)]">{g.title}</h3>
                      <span lang="bn" className="font-bangla text-lg text-bronze/80">
                        {g.bn}
                      </span>
                    </div>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                        active === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 lg:grid-rows-[0fr]'
                      } max-lg:grid-rows-[1fr] max-lg:opacity-100`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-bone/70">{g.body}</p>
                        <p className="eyebrow mt-3 text-[0.62rem]! text-smoke">Source · {g.evidence}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
            ))}
          </ol>

          <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[3/4] overflow-hidden bg-ink-3">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={goal.no}
                    className="absolute inset-0"
                    initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                    animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Picture img={goal.img} sizes="30vw" className="h-full" imgClassName="grade h-full w-full object-cover" />
                  </motion.div>
                </AnimatePresence>
                <span className="display absolute right-4 bottom-2 text-[7rem] leading-none text-bone/90 mix-blend-difference">
                  {goal.no}
                </span>
              </div>
              <WaButton intent="personalTraining" variant="line" className="mt-6">
                Ask about personal training
              </WaButton>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:hidden">
          <WaButton intent="personalTraining" variant="ghost" className="w-full sm:w-auto">
            Ask about personal training
          </WaButton>
        </div>
      </div>
    </section>
  )
}
