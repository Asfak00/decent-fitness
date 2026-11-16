import type { Img } from '../utils/image'
import { media } from './media'

export type GalleryCategory = 'Training' | 'Equipment' | 'Women’s shift' | 'Community'

export interface GalleryItem {
  img: Img
  category: GalleryCategory
  caption: string
}

export const galleryCategories: GalleryCategory[] = ['Training', 'Equipment', 'Women’s shift', 'Community']

export const gallery: GalleryItem[] = [
  { img: media.squat, category: 'Training', caption: 'Back squats in the power rack' },
  { img: media.womenDeadlift, category: 'Women’s shift', caption: 'Barbell work, women’s shift' },
  { img: media.pecDeck, category: 'Equipment', caption: 'Pec deck station' },
  { img: media.womenFloor, category: 'Women’s shift', caption: 'Women of Decent Fitness on the floor' },
  { img: media.latPulldown, category: 'Training', caption: 'Lat pulldown & the dumbbell rack' },
  { img: media.legPress, category: 'Equipment', caption: 'Plate-loaded leg press' },
  { img: media.legRaise, category: 'Training', caption: 'Hanging leg raises' },
  { img: media.communityGroup, category: 'Community', caption: 'Community day out' },
  { img: media.communityGarden, category: 'Community', caption: 'Together outside the gym' },
  { img: media.communityOuting, category: 'Community', caption: 'Shared by Decent Fitness, Oct 2026' },
  { img: media.outingPool, category: 'Community', caption: 'Outing venue' },
]
