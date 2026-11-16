import { useState } from 'react'
import { Maximize2 } from 'lucide-react'
import { facilities } from '../data/training'
import { SectionHeading } from './SectionHeading'
import { Picture } from './ui/Picture'
import { ImageReveal } from './ui/Reveal'
import { ImageLightbox } from './ImageLightbox'

/**
 * Asymmetric editorial grid on desktop; a swipeable strip of tall frames on
 * mobile. Every tile opens the full-screen viewer.
 */
const layout = [
  'lg:col-span-5 lg:row-span-2',
  'lg:col-span-4',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-4',
]

export function Facilities() {
  const [open, setOpen] = useState<number | null>(null)
  const items = facilities.map((f) => ({ img: f.img, caption: `${f.title}: ${f.detail}` }))

  return (
    <section id="facilities" className="relative overflow-hidden bg-ink py-24 lg:py-36">
      <div className="container-x">
        <SectionHeading
          index="04"
          label="The training environment"
          title={['Step onto', 'the floor.']}
          aside={
            <>
              Everything here is photographed inside Decent Fitness: the racks, the machines and the turf. No stock
              photos. <span className="text-bone">Tap any frame to look closer.</span>
            </>
          }
        />
      </div>

      <div className="mt-14 lg:container-x lg:mt-20">
        <ul className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:px-10 lg:grid lg:auto-rows-[clamp(18rem,26vw,24rem)] lg:grid-cols-12 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
          {facilities.map((f, i) => (
            <li
              key={f.title}
              className={`w-[72vw] shrink-0 snap-start sm:w-[44vw] lg:w-auto ${layout[i] ?? 'lg:col-span-4'}`}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group block h-full w-full text-left"
                aria-label={`View ${f.title}`}
              >
                <ImageReveal delay={i * 0.06} className="lg:h-full">
                  <div className="relative aspect-[3/4] overflow-hidden lg:aspect-auto lg:h-full">
                    <Picture
                      img={f.img}
                      sizes="(min-width:1024px) 40vw, 72vw"
                      className="absolute inset-0"
                      imgClassName="grade h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                    <span className="absolute top-4 left-4 eyebrow text-bone/70">0{i + 1}</span>
                    <Maximize2 className="absolute top-4 right-4 size-4 text-bone/0 transition-colors duration-300 group-hover:text-bone/90" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="display text-3xl lg:text-4xl">{f.title}</h3>
                      <p className="mt-2 max-w-xs text-sm leading-snug text-bone/70">{f.detail}</p>
                    </div>
                  </div>
                </ImageReveal>
              </button>
            </li>
          ))}
        </ul>
        <p className="container-x mt-2 text-xs text-smoke lg:hidden">Swipe →</p>
      </div>

      <ImageLightbox items={items} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </section>
  )
}
