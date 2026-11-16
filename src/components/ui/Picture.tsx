import type { CSSProperties } from 'react'
import { src, srcSet, type Img } from '../../utils/image'

interface Props {
  img: Img
  sizes?: string
  className?: string
  imgClassName?: string
  priority?: boolean
  style?: CSSProperties
  /** override alt (e.g. empty for decorative duplicates) */
  alt?: string
  /** reserve layout space using the image ratio */
  reserve?: boolean
}

/** Responsive WebP image with lazy loading and reserved aspect ratio. */
export function Picture({ img, sizes = '100vw', className, imgClassName, priority, style, alt, reserve = false }: Props) {
  return (
    <div className={className} style={{ ...(reserve ? { aspectRatio: String(img.ratio) } : null), ...style }}>
      <img
        src={src(img)}
        srcSet={srcSet(img)}
        sizes={sizes}
        alt={alt ?? img.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        width={img.widths[img.widths.length - 1]}
        height={Math.round(img.widths[img.widths.length - 1] / img.ratio)}
        className={imgClassName ?? 'h-full w-full object-cover'}
      />
    </div>
  )
}
