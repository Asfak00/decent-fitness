import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { useMemo } from 'react'
import type { Video } from '../data/videos'
import { useKeys, useScrollLock } from '../hooks'
import { src } from '../utils/image'

/**
 * Plays a reel via Facebook's official embedded video player, or a
 * self-hosted MP4 when `video.file` is set. Never autoplays sound.
 */
export function VideoModal({ video, onClose }: { video: Video | null; onClose: () => void }) {
  useScrollLock(!!video)
  const keys = useMemo(() => ({ Escape: onClose }), [onClose])
  useKeys(!!video, keys)

  const embed = video
    ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.facebookUrl)}&show_text=false&width=360`
    : ''

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex max-h-full w-full max-w-[400px] flex-col"
            initial={{ y: 40, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-bronze">{video.category}</p>
                <h3 className="display mt-1 text-2xl">{video.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="-mr-2 inline-flex size-11 shrink-0 items-center justify-center"
                aria-label="Close video"
                autoFocus
              >
                <X className="size-6" strokeWidth={1.6} />
              </button>
            </div>

            <div
              className="relative mx-auto aspect-[9/16] max-h-[72svh] w-full overflow-hidden bg-ink-3"
              style={{ backgroundImage: `url(${src(video.poster, 360)})`, backgroundSize: 'cover' }}
            >
              {video.file ? (
                <video
                  className="absolute inset-0 h-full w-full bg-ink object-contain"
                  src={video.file}
                  poster={src(video.poster)}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <iframe
                  title={video.title}
                  src={embed}
                  className="absolute inset-0 h-full w-full border-0 bg-ink"
                  allow="clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
                />
              )}
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 text-sm">
              <p className="text-bone/70">{video.description}</p>
              <a
                href={video.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 text-smoke underline-offset-4 hover:text-bone hover:underline"
              >
                Facebook <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
