import { useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import type { Img } from '../utils/image'
import { Picture } from './ui/Picture'

interface Props {
  before: Img
  after: Img
  beforeLabel: string
  afterLabel: string
}

/**
 * Before/after comparison. A transparent native range input covers the frame,
 * giving mouse drag, touch drag and keyboard (← →) control for free.
 */
export function BeforeAfterSlider({ before, after, beforeLabel, afterLabel }: Props) {
  const [pos, setPos] = useState(50)

  return (
    <div className="relative select-none overflow-hidden bg-ink-3" style={{ aspectRatio: String(after.ratio) }}>
      <Picture img={after} sizes="(min-width:1024px) 40vw, 100vw" className="absolute inset-0" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Picture img={before} sizes="(min-width:1024px) 40vw, 100vw" className="absolute inset-0" />
      </div>

      {/* Labels */}
      <span className="eyebrow absolute top-4 left-4 bg-ink/80 px-2.5 py-1.5 text-bone">Before · {beforeLabel}</span>
      <span className="eyebrow absolute top-4 right-4 bg-bone px-2.5 py-1.5 text-ink">After · {afterLabel}</span>

      {/* Handle */}
      <div className="pointer-events-none absolute inset-y-0 w-px bg-bone" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bone text-ink shadow-[0_0_0_6px_rgba(20,19,17,0.25)]">
          <MoveHorizontal className="size-5" />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  )
}
