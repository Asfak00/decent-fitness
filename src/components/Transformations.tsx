import { useState } from 'react'
import { ArrowUpRight, Maximize2 } from 'lucide-react'
import { transformations, type Transformation } from '../data/transformations'
import { BeforeAfterSlider } from './BeforeAfterSlider'
import { ImageLightbox } from './ImageLightbox'
import { Picture } from './ui/Picture'
import { ImageReveal, Reveal, SplitLine } from './ui/Reveal'
import { WaButton } from './ui/WaButton'

export function Transformations() {
  const [open, setOpen] = useState<number | null>(null)
  const zoomable = transformations.filter((t) => t.image)
  const items = zoomable.map((t) => ({ img: t.image!, caption: `${t.duration}: ${t.before} → ${t.after}` }))

  return (
    <section id="transformations" className="relative bg-bone text-ink">
      <div className="container-x py-24 lg:py-36">
        <div className="flex items-center gap-4 text-ink/55">
          <span className="eyebrow text-bronze-deep">06</span>
          <span className="h-px flex-1 bg-ink/15" />
          <span className="eyebrow">Member transformations</span>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="display text-[clamp(3.2rem,10vw,9.5rem)] lg:col-span-8">
            <SplitLine text="Real members." className="block" />
            <SplitLine text="Real kilos." className="block text-signal" delay={0.1} />
          </h2>
          <p className="max-w-md text-[0.98rem] leading-relaxed text-ink/65 lg:col-span-4 lg:pb-3">
            Results published by Decent Fitness on its own page. Numbers are exactly as the gym posted them; member
            names weren’t shared, so they aren’t shown here.
          </p>
        </div>

        <div className="mt-20 space-y-24 lg:mt-28 lg:space-y-36">
          {transformations.map((t, i) => (
            <Story
              key={t.id}
              t={t}
              flip={i % 2 === 1}
              onZoom={() => setOpen(zoomable.findIndex((z) => z.id === t.id))}
            />
          ))}
        </div>

        <Reveal className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-ink/15 pt-10 lg:mt-32 lg:flex-row lg:items-center">
          <p className="display max-w-3xl text-[clamp(2rem,4.5vw,3.6rem)]">Your numbers could be next on this wall.</p>
          <WaButton intent="transformation">Discuss my goal</WaButton>
        </Reveal>
        <p className="mt-6 text-xs text-ink/50">
          Individual results vary with consistency, nutrition and health. Images shared publicly by Decent Fitness.
        </p>
      </div>

      <ImageLightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </section>
  )
}

function Story({ t, flip, onZoom }: { t: Transformation; flip: boolean; onZoom: () => void }) {
  const visual =
    t.kind === 'slider' && t.beforeImg && t.afterImg ? (
      <BeforeAfterSlider before={t.beforeImg} after={t.afterImg} beforeLabel={t.before} afterLabel={t.after} />
    ) : t.image ? (
      <button type="button" onClick={onZoom} className="group relative block w-full" aria-label="View full image">
        <Picture img={t.image} sizes="(min-width:1024px) 45vw, 100vw" reserve className="overflow-hidden" />
        <span className="absolute right-4 bottom-4 flex size-11 items-center justify-center bg-ink text-bone transition-transform duration-300 group-hover:scale-110">
          <Maximize2 className="size-4" />
        </span>
      </button>
    ) : null

  return (
    <article className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
      <ImageReveal className={`lg:col-span-6 ${flip ? 'lg:order-2 lg:col-start-7' : ''}`} from={flip ? 'right' : 'left'}>
        {visual}
      </ImageReveal>

      <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : 'lg:col-start-8'}`}>
        <Reveal>
          <p className="eyebrow text-bronze-deep">{t.duration} transformation</p>
          <div className="mt-5 flex items-end gap-3 leading-none sm:gap-5">
            <span className="display text-[clamp(4.2rem,11vw,8.5rem)] text-ink/30">{t.before.replace(' kg', '')}</span>
            <span className="display pb-[0.15em] text-[clamp(2rem,5vw,3.5rem)] text-signal">→</span>
            <span className="display text-[clamp(4.2rem,11vw,8.5rem)]">{t.after.replace(' kg', '')}</span>
            <span className="display pb-[0.2em] text-2xl text-ink/60">kg</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="bg-ink px-3 py-1.5 text-xs font-semibold tracking-[0.12em] text-bone uppercase">{t.change}</span>
            <span className="border border-ink/20 px-3 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase">
              {t.duration}
            </span>
          </div>
          <h3 className="mt-8 text-2xl font-semibold tracking-tight">{t.headline}</h3>
          <p className="mt-3 max-w-md leading-relaxed text-ink/70">{t.story}</p>
          <a
            href={t.source}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
          >
            Original post · {t.postedOn}
            <ArrowUpRight className="size-3.5" />
          </a>
        </Reveal>
      </div>
    </article>
  )
}
