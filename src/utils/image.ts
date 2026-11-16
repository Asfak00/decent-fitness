/** Responsive image descriptor for assets generated as `<base>-<width>.webp`. */
export interface Img {
  /** Path without width suffix, e.g. /assets/workouts/barbell-squat */
  base: string
  widths: number[]
  /** intrinsic aspect ratio (w / h) of the image, used to reserve space */
  ratio: number
  alt: string
}

export const src = (img: Img, w?: number) => `${img.base}-${w ?? img.widths[img.widths.length - 1]}.webp`

export const srcSet = (img: Img) => img.widths.map((w) => `${img.base}-${w}.webp ${w}w`).join(', ')
