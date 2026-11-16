import { media } from '../data/media'
import { shifts } from '../data/gym'
import { Picture } from './ui/Picture'
import { ImageReveal, Reveal } from './ui/Reveal'

const reasons = [
  {
    proof: '8–4',
    unit: 'women only',
    title: 'Hours that belong to you',
    body: `Women train ${shifts[0].startLabel} – ${shifts[0].endLabel}, men ${shifts[1].startLabel} – ${shifts[1].endLabel}. No awkward overlap, full focus for everyone.`,
  },
  {
    proof: '−32',
    unit: 'kg, 6 months',
    title: 'Results on the record',
    body: 'Two member journeys published by the gym: −32 kg in six months and −20 kg in three.',
  },
  {
    proof: 'Iron',
    unit: 'not gimmicks',
    title: 'Real equipment',
    body: 'Power rack, barbells, a full dumbbell rack, pec deck, plate-loaded leg press and cable stations.',
  },
  {
    proof: '৳1K',
    unit: 'per month',
    title: 'Honest pricing',
    body: 'A published monthly fee, discounted admission, and free admission on the 3-month package.',
  },
  {
    proof: '+',
    unit: 'health partner',
    title: 'Beyond the workout',
    body: 'A health-check agreement with Trust Care Diagnostic Center, because training starts with a healthy body.',
  },
  {
    proof: 'Us',
    unit: 'community',
    title: 'People you’ll want to see',
    body: 'Members who train together and head out together, too.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why" className="relative border-t border-bone/10 bg-ink-2 py-24 lg:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-4 text-smoke">
              <span className="eyebrow text-bronze">11</span>
              <span className="h-px flex-1 bg-bone/15" />
            </div>
            <h2 className="display mt-8 text-[clamp(3.4rem,9vw,8rem)]">
              Why
              <br />
              <span className="text-bronze">Decent.</span>
            </h2>
            <ImageReveal className="mt-10 hidden lg:block">
              <Picture
                img={media.communityGroup}
                sizes="35vw"
                className="aspect-[5/4] overflow-hidden"
                imgClassName="grade h-full w-full object-cover object-[50%_30%]"
              />
            </ImageReveal>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.title} delay={0.04 * i} className="grid gap-x-8 gap-y-3 border-t border-bone/12 py-8 sm:grid-cols-[11rem_1fr] lg:py-10">
                <div>
                  <p className="display text-6xl leading-none text-bronze lg:text-7xl">{r.proof}</p>
                  <p className="eyebrow mt-2 text-[0.62rem]! text-smoke">{r.unit}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{r.title}</h3>
                  <p className="mt-2 max-w-md leading-relaxed text-bone/65">{r.body}</p>
                </div>
              </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
