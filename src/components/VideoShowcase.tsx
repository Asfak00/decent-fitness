import { useCallback, useState } from 'react'
import { Play } from 'lucide-react'
import { gym } from '../data/gym'
import { videos, type Video } from '../data/videos'
import { SectionHeading } from './SectionHeading'
import { Picture } from './ui/Picture'
import { ImageReveal } from './ui/Reveal'
import { WaButton } from './ui/WaButton'
import { FacebookIcon } from './ui/Icons'
import { VideoModal } from './VideoModal'

export function VideoShowcase() {
  const [playing, setPlaying] = useState<Video | null>(null)
  const close = useCallback(() => setPlaying(null), [])
  const featured = videos.find((v) => v.featured) ?? videos[0]
  const rest = videos.filter((v) => v !== featured)

  return (
    <section id="videos" className="relative bg-ink py-24 lg:py-36">
      <div className="container-x">
        <SectionHeading
          index="08"
          label="Reels from the floor"
          title={['Watch it', 'happen.']}
          aside="Straight from the gym’s Facebook reels: real sessions and real members, filmed on the floor in Chandrima Model Town."
        />

        <div className="mt-16 grid grid-cols-[minmax(0,1fr)] gap-6 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          {/* Featured */}
          <ImageReveal className="lg:col-span-5 lg:h-full">
            <button
              type="button"
              onClick={() => setPlaying(featured)}
              className="group flex h-full w-full flex-col text-left"
              aria-label={`Play: ${featured.title}`}
            >
              <div className="relative overflow-hidden">
                <Picture
                  img={featured.poster}
                  sizes="(min-width:1024px) 38vw, 100vw"
                  className="aspect-[6/5]"
                  imgClassName="grade h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
                />
                <span className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bone text-ink transition-transform duration-500 group-hover:scale-110">
                  <Play className="ml-1 size-7 fill-ink" />
                </span>
                <span className="eyebrow absolute top-4 left-4 bg-signal px-2.5 py-1 text-[0.6rem]! text-bone">
                  Member story
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-end bg-bone p-6 text-ink lg:p-8">
                <p className="eyebrow text-bronze-deep">Featured reel</p>
                <h3 className="display mt-3 text-4xl lg:text-5xl">{featured.title}</h3>
                <p className="mt-3 max-w-sm text-sm text-ink/70">{featured.description}</p>
                <span className="eyebrow mt-6 inline-flex items-center gap-2 text-ink">
                  <Play className="size-3 fill-ink" /> Play reel
                </span>
              </div>
            </button>
          </ImageReveal>

          {/* Supporting reels */}
          <div className="lg:col-span-7">
            <ul className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:-mx-10 md:px-10 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:px-0">
              {rest.map((v, i) => (
                <li key={v.id} className="w-[44vw] shrink-0 snap-start sm:w-[30vw] lg:w-auto">
                  <ImageReveal delay={0.05 * i}>
                    <button
                      type="button"
                      onClick={() => setPlaying(v)}
                      className="group relative block w-full overflow-hidden text-left"
                      aria-label={`Play: ${v.title}`}
                    >
                      <Picture
                        img={v.poster}
                        sizes="(min-width:1024px) 18vw, 44vw"
                        className="aspect-[9/14]"
                        imgClassName="grade h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                      <span className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full border border-bone/50 text-bone transition-colors duration-300 group-hover:bg-bone group-hover:text-ink">
                        <Play className="ml-0.5 size-3.5 fill-current" />
                      </span>
                      <div className="absolute inset-x-0 bottom-0 p-3.5">
                        <p className="eyebrow text-[0.58rem]! text-bronze">{v.category}</p>
                        <p className="mt-1 text-[0.92rem] leading-tight font-semibold">{v.title}</p>
                      </div>
                    </button>
                  </ImageReveal>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 border-t border-bone/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={gym.social.facebookReels}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-smoke hover:text-bone"
              >
                <FacebookIcon className="size-4" /> More reels on Facebook
              </a>
              <WaButton intent="videos" variant="bone">
                Book a visit
              </WaButton>
            </div>
          </div>
        </div>
      </div>

      <VideoModal video={playing} onClose={close} />
    </section>
  )
}
