import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

interface Props extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
  y?: number
  /** render as a list item (for use directly inside ul/ol) */
  as?: 'div' | 'li'
}

/** Fade + rise when scrolled into view (once). */
export function Reveal({ children, delay = 0, y = 28, as = 'div', ...rest }: Props) {
  const Tag = (as === 'li' ? motion.li : motion.div) as typeof motion.div
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Image that unveils with a clip-path wipe when it enters the viewport. */
export function ImageReveal({
  children,
  className,
  delay = 0,
  from = 'bottom',
}: {
  children: ReactNode
  className?: string
  delay?: number
  from?: 'bottom' | 'left' | 'right'
}) {
  const hidden = {
    bottom: 'inset(100% 0% 0% 0%)',
    left: 'inset(0% 100% 0% 0%)',
    right: 'inset(0% 0% 0% 100%)',
  }[from]
  return (
    <motion.div
      className={className}
      initial={{ clipPath: hidden }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1.1, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Splits a line into words that rise in sequence. */
export function SplitLine({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className} aria-label={text} role="text">
      {text.split(' ').map((w, i) => (
        <span key={i} className="-mb-[0.1em] inline-block overflow-hidden pb-[0.1em] align-top" aria-hidden>
          <motion.span
            className="inline-block"
            initial={{ y: '105%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: delay + i * 0.06 }}
          >
            {w}
            {i < text.split(' ').length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
