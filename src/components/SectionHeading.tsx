import type { ReactNode } from 'react'
import { SplitLine } from './ui/Reveal'

interface Props {
  index: string
  label: string
  title: string[]
  aside?: ReactNode
  className?: string
  tone?: 'dark' | 'light'
}

/**
 * Editorial section header: numbered label on a hairline, then a massive
 * condensed title (one entry per line) with an optional right-hand aside.
 */
export function SectionHeading({ index, label, title, aside, className = '', tone = 'dark' }: Props) {
  const muted = tone === 'dark' ? 'text-smoke' : 'text-ink/60'
  const rule = tone === 'dark' ? 'bg-bone/15' : 'bg-ink/15'
  return (
    <header className={className}>
      <div className={`flex items-center gap-4 ${muted}`}>
        <span className="eyebrow text-bronze">{index}</span>
        <span className={`h-px flex-1 ${rule}`} />
        <span className="eyebrow">{label}</span>
      </div>
      <div className="mt-8 grid gap-8 md:mt-10 lg:grid-cols-12 lg:items-end">
        <h2 className="display text-[clamp(3rem,9vw,8.5rem)] lg:col-span-8">
          {title.map((line, i) => (
            <SplitLine key={line} text={line} className="block" delay={i * 0.08} />
          ))}
        </h2>
        {aside && <div className={`max-w-md text-[0.98rem] leading-relaxed lg:col-span-4 lg:pb-3 ${muted}`}>{aside}</div>}
      </div>
    </header>
  )
}
