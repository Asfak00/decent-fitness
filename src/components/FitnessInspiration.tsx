import { ArrowUpRight } from 'lucide-react'
import { inspirations } from '../data/trainers'
import { Reveal } from './ui/Reveal'

const initials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('')

/**
 * Typographic “posters” for globally known athletes. Clearly labelled as
 * inspiration only, with no affiliation or endorsement.
 */
export function FitnessInspiration() {
  return (
    <div className="container-x mt-28 lg:mt-40">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow text-bronze">Wall of inspiration</p>
          <h2 className="display mt-5 text-[clamp(2.8rem,7vw,6rem)]">Borrowed fire.</h2>
        </div>
        <p className="text-sm leading-relaxed text-smoke lg:col-span-5 lg:pb-2">
          Legends our members look up to. <span className="text-bone">They are not affiliated with, sponsoring or
          endorsing Decent Fitness.</span> They are simply proof of what years of consistent training can build.
        </p>
      </div>

      <ul className="mt-12 grid border-t border-l border-bone/12 sm:grid-cols-2 lg:grid-cols-4">
        {inspirations.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 0.06} className="border-r border-b border-bone/12 group relative isolate flex h-full min-h-[23rem] flex-col overflow-hidden p-6 lg:p-7">
              <span
                aria-hidden
                className="display text-outline pointer-events-none absolute -z-10 -top-3 -right-2 text-[6.5rem] leading-none opacity-50 transition-transform duration-700 group-hover:translate-y-1"
              >
                {initials(p.name)}
              </span>
              <p className="eyebrow text-smoke">{p.discipline}</p>
              <h3 className="display mt-4 text-[2.4rem]">{p.name}</h3>
              <p className="mt-4 text-sm text-bone/75">{p.fact}</p>
              <p className="relative mt-auto pt-10 text-lg leading-snug font-medium text-bronze">
                <span className="eyebrow mb-2 block text-[0.6rem]! text-smoke">The takeaway</span>
                {p.idea}
              </p>
              <a
                href={p.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-4 inline-flex items-center gap-1 self-start text-xs text-smoke underline-offset-4 hover:text-bone hover:underline"
              >
                {p.link.label}
                <ArrowUpRight className="size-3" />
              </a>
            </Reveal>
        ))}
      </ul>
    </div>
  )
}
