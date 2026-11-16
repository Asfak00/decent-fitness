import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { media } from '../data/media'
import { Picture } from './ui/Picture'
import { SplitLine } from './ui/Reveal'
import { LinkButton, WaButton } from './ui/WaButton'

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', reduce ? '-8%' : '8%'])

  return (
    <section ref={ref} className="grain relative isolate overflow-hidden bg-ink">
      {/* Triptych background of real floor frames */}
      <motion.div style={{ y }} className="absolute inset-[-10%_0] -z-10 grid grid-cols-3 gap-1 opacity-60">
        {[media.squat, media.motionBlur, media.legRaise].map((img) => (
          <Picture key={img.base} img={img} sizes="34vw" alt="" className="h-full" imgClassName="grade h-full w-full object-cover" />
        ))}
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(20,19,17,0.55)_0%,rgba(20,19,17,0.92)_70%)]" />

      <div className="container-x flex min-h-[88svh] flex-col items-center justify-center py-28 text-center">
        <p className="eyebrow text-bronze">14 · Your move</p>
        <h2 className="display mt-8 text-[clamp(3.6rem,12vw,11rem)]">
          <SplitLine text="Your stronger" className="block" />
          <SplitLine text="chapter starts" className="block" delay={0.08} />
          <SplitLine text="here." className="block text-bronze" delay={0.16} />
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/75">
          Take the first step. Talk to our trainer and find the right training plan for your goals.
        </p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <WaButton intent="general">Talk to our trainer</WaButton>
          <LinkButton href="#membership">Explore membership</LinkButton>
        </div>
      </div>
    </section>
  )
}
