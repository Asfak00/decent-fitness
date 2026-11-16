import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useMemo } from 'react'
import { useKeys, useScrollLock } from '../hooks'
import { src, srcSet, type Img } from '../utils/image'

export interface LightboxItem {
  img: Img
  caption: string
}

interface Props {
  items: LightboxItem[]
  index: number | null
  onClose: () => void
  onIndex: (i: number) => void
}

/** Full-screen image viewer: keyboard (← → Esc), buttons and swipe. */
export function ImageLightbox({ items, index, onClose, onIndex }: Props) {
  const open = index !== null
  useScrollLock(open)
  const go = (d: number) => index !== null && onIndex((index + d + items.length) % items.length)
  const keys = useMemo(
    () => ({ Escape: onClose, ArrowRight: () => go(1), ArrowLeft: () => go(-1) }),
    [index, items.length], // go() derives from these
  )
  useKeys(open, keys)

  const item = index !== null ? items[index] : null

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-ink/96 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
        >
          <div className="flex h-16 shrink-0 items-center justify-between px-4 sm:px-8">
            <span className="eyebrow text-smoke">
              {String(index! + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex size-11 items-center justify-center text-bone"
              aria-label="Close image viewer"
              autoFocus
            >
              <X className="size-6" strokeWidth={1.6} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={item.img.base}
                src={src(item.img)}
                srcSet={srcSet(item.img)}
                sizes="100vw"
                alt={item.img.alt}
                className="max-h-full max-w-full object-contain select-none"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) go(1)
                  else if (info.offset.x > 70) go(-1)
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    go(-1)
                  }}
                  className="absolute left-2 hidden size-12 items-center justify-center border border-bone/20 text-bone transition-colors hover:bg-bone hover:text-ink sm:inline-flex sm:left-6"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    go(1)
                  }}
                  className="absolute right-2 hidden size-12 items-center justify-center border border-bone/20 text-bone transition-colors hover:bg-bone hover:text-ink sm:inline-flex sm:right-6"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}
          </div>

          <p className="shrink-0 px-4 py-5 text-center text-sm text-bone/75 sm:px-8" onClick={(e) => e.stopPropagation()}>
            {item.caption}
            {items.length > 1 && <span className="mt-1 block text-xs text-smoke sm:hidden">Swipe to browse</span>}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
