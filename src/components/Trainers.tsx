import { trainers } from '../data/trainers'
import { media } from '../data/media'
import { Picture } from './ui/Picture'
import { Reveal } from './ui/Reveal'
import { WaButton } from './ui/WaButton'

/**
 * The people behind the training. Trainer profiles render only when
 * `data/trainers.ts` has entries; until then a direct line to the trainer is shown.
 */
export function Trainers() {
  return (
    <div className="container-x">
      <div className="flex items-center gap-4 text-smoke">
        <span className="eyebrow text-bronze">07</span>
        <span className="h-px flex-1 bg-bone/15" />
        <span className="eyebrow">Coaching</span>
      </div>

      {trainers.length > 0 ? (
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((t) => (
            <li key={t.name}>
              {t.photo && <Picture img={t.photo} sizes="33vw" className="aspect-[3/4] overflow-hidden" />}
              <h3 className="display mt-5 text-4xl">{t.name}</h3>
              <p className="eyebrow mt-2 text-bronze">{t.role}</p>
              <p className="mt-3 text-bone/70">{t.bio}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5">
            <Picture
              img={media.latPulldown}
              sizes="(min-width:1024px) 35vw, 100vw"
              className="aspect-[4/3] overflow-hidden lg:aspect-[4/4.2]"
              imgClassName="grade h-full w-full object-cover"
            />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <h2 className="display text-[clamp(3rem,7.5vw,6.5rem)]">
              A trainer on
              <br />
              <span className="text-bronze">the floor.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-bone/70">
              Form checks, a plan that matches your goal, and someone who notices when you’re ready for more weight.
              Message the trainer before your first visit and tell them what you want to change.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WaButton intent="personalTraining">Talk to our trainer</WaButton>
            </div>
          </Reveal>
        </div>
      )}
    </div>
  )
}
