import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { WhatsAppIntent } from '../../data/gym'
import { whatsappLink } from '../../utils/whatsapp'
import { WhatsAppIcon } from './Icons'

type Variant = 'solid' | 'bone' | 'ghost' | 'line'

const styles: Record<Variant, string> = {
  solid: 'bg-signal text-bone hover:bg-[#b82a22]',
  bone: 'bg-bone text-ink hover:bg-white',
  ghost: 'border border-bone/30 text-bone hover:border-bone hover:bg-bone/5',
  line: 'text-bone underline-offset-[6px] decoration-bronze/60 hover:decoration-bronze px-0! underline',
}

interface Props {
  intent: WhatsAppIntent
  children: ReactNode
  variant?: Variant
  className?: string
  icon?: boolean
}

/** Primary conversion button. It always opens the gym's WhatsApp with a prefilled message. */
export function WaButton({ intent, children, variant = 'solid', className = '', icon = true }: Props) {
  return (
    <a
      href={whatsappLink(intent)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 px-6 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {icon && <WhatsAppIcon className="size-4 shrink-0" />}
      <span>{children}</span>
      <ArrowUpRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}

/** Plain in-page anchor styled like a button. */
export function LinkButton({
  href,
  children,
  variant = 'ghost',
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 px-6 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="size-4 shrink-0 rotate-90 transition-transform duration-300 group-hover:translate-y-0.5" />
    </a>
  )
}
