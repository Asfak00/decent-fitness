import { Check } from 'lucide-react'
import { admission, packages } from '../data/packages'
import { Reveal, SplitLine } from './ui/Reveal'
import { WaButton } from './ui/WaButton'

const bdt = (n: number) => `৳${n.toLocaleString('en-IN')}`

export function Membership() {
  const visible = packages.filter((p) => p.visible)

  return (
    <section id="membership" className="relative bg-bone text-ink">
      <div className="container-x py-24 lg:py-36">
        <div className="flex items-center gap-4 text-ink/55">
          <span className="eyebrow text-bronze-deep">09</span>
          <span className="h-px flex-1 bg-ink/15" />
          <span className="eyebrow">Membership</span>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="display text-[clamp(3.2rem,10vw,9.5rem)] lg:col-span-8">
            <SplitLine text="Simple" className="block" />
            <SplitLine text="pricing." className="block text-bronze-deep" delay={0.08} />
          </h2>
          <p className="max-w-md text-[0.98rem] leading-relaxed text-ink/65 lg:col-span-4 lg:pb-3">
            The prices Decent Fitness publishes, with no hidden tiers. Offers change, so the trainer confirms everything on
            WhatsApp before you pay.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-ink/15 lg:mt-24 lg:grid-cols-12">
          {/* Admission */}
          <Reveal className="bg-bone p-7 sm:p-10 lg:col-span-4">
            <p className="eyebrow text-ink/55">Step 1 · Admission</p>
            <p className="mt-6 flex items-baseline gap-4">
              <span className="display text-7xl leading-none sm:text-8xl">{bdt(admission.offer)}</span>
              <span className="text-xl text-ink/40 line-through decoration-signal decoration-2">{bdt(admission.regular)}</span>
            </p>
            <p className="mt-2 text-sm font-semibold tracking-wide text-signal uppercase">Current discounted offer</p>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-ink/70">{admission.note}</p>
            <div className="mt-8 border-t border-ink/15 pt-6">
              <p className="eyebrow text-ink/55">First month total</p>
              <p className="display mt-2 text-5xl">{bdt(admission.firstMonthTotal)}</p>
              <p className="mt-1 text-sm text-ink/60">Admission {bdt(admission.offer)} + one month {bdt(1000)}</p>
            </div>
          </Reveal>

          {/* Packages */}
          {visible.map((p, i) => (
            <Reveal
              key={p.id}
              delay={0.08 * (i + 1)}
              className={`relative flex flex-col p-7 sm:p-10 lg:col-span-4 ${p.highlight ? 'bg-ink text-bone' : 'bg-bone'}`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className={`eyebrow ${p.highlight ? 'text-bronze' : 'text-ink/55'}`}>
                  Step 2 · {p.duration}
                </p>
                {p.badge && (
                  <span className="bg-signal px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-bone uppercase">
                    {p.badge}
                  </span>
                )}
              </div>
              <h3 className="display mt-6 text-5xl sm:text-6xl">{p.name}</h3>

              <p className="mt-6">
                {p.price !== null ? (
                  <>
                    <span className="display text-6xl">{bdt(p.price)}</span>
                    <span className={`ml-2 text-sm ${p.highlight ? 'text-bone/60' : 'text-ink/55'}`}>{p.priceUnit}</span>
                  </>
                ) : (
                  <span className="display text-4xl text-bronze">Contact for pricing</span>
                )}
              </p>
              <p className={`mt-4 text-[0.95rem] leading-relaxed ${p.highlight ? 'text-bone/70' : 'text-ink/70'}`}>
                {p.summary}
              </p>

              <ul className={`mt-8 space-y-3 border-t pt-6 ${p.highlight ? 'border-bone/15' : 'border-ink/15'}`}>
                {p.includes.map((inc) => (
                  <li key={inc} className="flex gap-3 text-[0.92rem]">
                    <Check className={`mt-0.5 size-4 shrink-0 ${p.highlight ? 'text-bronze' : 'text-signal'}`} />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
              <p className={`mt-6 text-xs tracking-wide uppercase ${p.highlight ? 'text-bone/50' : 'text-ink/50'}`}>
                Available: {p.availability}
              </p>

              <div className="mt-auto pt-8">
                <WaButton intent={p.intent} variant={p.highlight ? 'solid' : 'ghost'} className={`w-full ${p.highlight ? '' : 'border-ink/30! text-ink! hover:bg-ink/5!'}`}>
                  {p.cta}
                </WaButton>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-ink/60">
            Looking for 6-month, yearly or personal training rates? They aren’t published yet, so ask directly.
          </p>
          <WaButton intent="membership" variant="line" className="text-ink! decoration-ink/30!">
            Ask for all package prices
          </WaButton>
        </div>
      </div>
    </section>
  )
}
