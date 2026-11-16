import { HeartPulse, Clock3, Users } from 'lucide-react'
import { media } from '../data/media'
import { shifts } from '../data/gym'
import { Picture } from './ui/Picture'
import { ImageReveal, Reveal, SplitLine } from './ui/Reveal'

export function About() {
  const facts = [
    {
      icon: Users,
      title: 'Separate shifts',
      body: `Women ${shifts[0].startLabel} – ${shifts[0].endLabel}. Men ${shifts[1].startLabel} – ${shifts[1].endLabel}.`,
    },
    { icon: Clock3, title: 'Trainer on the floor', body: 'Ask questions, get corrected and keep progressing in every session.' },
    {
      icon: HeartPulse,
      title: 'Health first',
      body: 'Health-check agreement with Trust Care Diagnostic Center for members.',
    },
  ]

  return (
    <section id="about" className="relative bg-bone text-ink">
      <div className="container-x py-24 lg:py-36">
        <div className="flex items-center gap-4 text-ink/55">
          <span className="eyebrow text-bronze-deep">03</span>
          <span className="h-px flex-1 bg-ink/15" />
          <span className="eyebrow">The club</span>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 className="display text-[clamp(3.2rem,9.5vw,9rem)]">
              <SplitLine text="Decent by name." className="block" />
              <SplitLine text="Serious by nature." className="block text-bronze-deep" delay={0.1} />
            </h2>

            <ImageReveal className="mt-12 lg:mt-16" from="left">
              <Picture
                img={media.womenFloor}
                sizes="(min-width:1024px) 55vw, 100vw"
                className="aspect-[4/3] overflow-hidden"
                imgClassName="grade h-full w-full object-cover"
              />
            </ImageReveal>
            <p className="mt-3 text-xs tracking-wide text-ink/55">
              The training floor: mirrors, a treadmill, plate-loaded machines and turf.
            </p>
          </div>

          <div className="flex flex-col justify-end lg:col-span-5 lg:pl-6">
            <Reveal>
              <blockquote className="border-l-2 border-signal pl-5">
                <p lang="bn" className="font-bangla text-[1.6rem] leading-snug font-semibold sm:text-3xl">
                  “জিম মানে সুস্থ থাকা, সুস্থ থাকার চেষ্টা করা।”
                </p>
                <footer className="mt-3 text-sm text-ink/60">
                  “A gym means staying healthy and making the effort to stay healthy.” (Decent Fitness)
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-10 text-lg leading-relaxed text-ink/80">
                Decent Fitness is a strength and fitness club in Chandrima Model Town, Mohammadpur. People come here to
                cut fat, gain weight, lift heavier and simply feel healthier. Here they get real equipment, a trainer
                on the floor, and training hours that respect who they are.
              </p>
            </Reveal>

            <ul className="mt-12 divide-y divide-ink/12 border-y border-ink/12">
              {facts.map((f, i) => (
                <Reveal as="li" key={f.title} delay={0.1 + i * 0.08} className="flex gap-5 py-5">
                    <f.icon className="mt-0.5 size-5 shrink-0 text-signal" strokeWidth={1.6} />
                    <div>
                      <p className="eyebrow text-ink">{f.title}</p>
                      <p className="mt-1.5 text-[0.95rem] text-ink/70">{f.body}</p>
                    </div>
                  </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
