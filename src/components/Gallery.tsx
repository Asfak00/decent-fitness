import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { gallery, galleryCategories, type GalleryCategory } from '../data/gallery'
import { SectionHeading } from './SectionHeading'
import { ImageLightbox } from './ImageLightbox'
import { Picture } from './ui/Picture'

type Filter = 'All' | GalleryCategory

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('All')
  const [open, setOpen] = useState<number | null>(null)
  const items = useMemo(() => (filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)), [filter])

  return (
    <section id="gallery" className="relative bg-ink py-24 lg:py-36">
      <div className="container-x">
        <SectionHeading
          index="12"
          label="Gallery"
          title={['Inside', 'Decent.']}
          aside="Moments from the floor and beyond, all shared by the gym."
        />

        <div
          role="tablist"
          aria-label="Filter gallery"
          className="mt-12 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] lg:mt-16"
        >
          {(['All', ...galleryCategories] as Filter[]).map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`min-h-10 shrink-0 border px-4 text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-colors ${
                filter === c ? 'border-bone bg-bone text-ink' : 'border-bone/20 text-bone/70 hover:border-bone/60 hover:text-bone'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.ul className="mt-8 columns-2 gap-3 sm:gap-4 lg:columns-3 xl:columns-4">
          <AnimatePresence initial={false}>
            {items.map((g, i) => (
              <motion.li
                key={g.img.base}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="mb-3 break-inside-avoid sm:mb-4"
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group relative block w-full overflow-hidden"
                  aria-label={`Open image: ${g.caption}`}
                >
                  <Picture
                    img={g.img}
                    sizes="(min-width:1280px) 22vw, (min-width:1024px) 30vw, 48vw"
                    reserve
                    imgClassName="grade h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]"
                  />
                  <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/90 to-transparent p-3 text-left text-xs text-bone opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    {g.caption}
                  </span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <ImageLightbox
        items={items.map((g) => ({ img: g.img, caption: g.caption }))}
        index={open}
        onClose={() => setOpen(null)}
        onIndex={setOpen}
      />
    </section>
  )
}
