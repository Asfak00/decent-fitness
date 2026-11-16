import type { Img } from '../utils/image'

/**
 * Reels published by Decent Fitness. Videos play through Facebook's official
 * embedded video player (no files are re-hosted). Posters are frames from the
 * reels themselves. To self-host a video, put the MP4 in /public/assets/videos
 * and set `file`.
 */
export interface Video {
  id: string
  title: string
  category: 'Women’s shift' | 'Men’s shift' | 'Member story' | 'Offer' | 'Training'
  description: string
  facebookUrl: string
  poster: Img
  /** optional self-hosted MP4 (e.g. /assets/videos/walkthrough.mp4) */
  file?: string
  featured?: boolean
}

const poster = (id: string, alt: string): Img => ({
  base: `/assets/videos/reel-${id}`,
  widths: [360, 540],
  ratio: 9 / 16,
  alt,
})

const fb = (id: string) => `https://www.facebook.com/reel/${id}/`

export const videos: Video[] = [
  {
    id: '2233386347210423',
    title: 'Soha Apu’s fitness journey',
    category: 'Member story',
    description: 'A Decent Fitness member talks about her own fitness journey, shared by the gym.',
    facebookUrl: fb('2233386347210423'),
    // Cropped above the reel's caption overlay
    poster: {
      base: '/assets/testimonials/soha-journey-poster',
      widths: [360, 540],
      ratio: 540 / 450,
      alt: 'Member training on the leg press in the fitness journey reel',
    },
    featured: true,
  },
  {
    id: '1398871512053020',
    title: 'Pulling from the floor',
    category: 'Women’s shift',
    description: 'Barbell work during the women’s shift.',
    facebookUrl: fb('1398871512053020'),
    poster: poster('1398871512053020', 'Woman lifting a barbell from the floor'),
  },
  {
    id: '977763391613973',
    title: 'Squat day in the rack',
    category: 'Training',
    description: 'Barbell back squats in the power rack.',
    facebookUrl: fb('977763391613973'),
    poster: poster('977763391613973', 'Member squatting in the power rack'),
  },
  {
    id: '4184452465025082',
    title: 'Admission free on 3 months',
    category: 'Offer',
    description: 'The gym’s offer: admission fully free on the 3-month package.',
    facebookUrl: fb('4184452465025082'),
    poster: poster('4184452465025082', 'Hanging leg raise with the 3-month offer text'),
  },
  {
    id: '1774055903671591',
    title: 'Leg press session',
    category: 'Women’s shift',
    description: 'Lower-body training on the plate-loaded leg press.',
    facebookUrl: fb('1774055903671591'),
    poster: poster('1774055903671591', 'Woman on the leg press machine'),
  },
  {
    id: '2406973093442496',
    title: 'Chest on the pec deck',
    category: 'Men’s shift',
    description: 'Machine chest work at Chandrima Model Town.',
    facebookUrl: fb('2406973093442496'),
    poster: poster('2406973093442496', 'Member on the pec deck machine'),
  },
  {
    id: '4733725933578110',
    title: 'Back & arms',
    category: 'Training',
    description: 'Pulldowns and dumbbells on a busy evening.',
    facebookUrl: fb('4733725933578110'),
    poster: poster('4733725933578110', 'Members at the lat pulldown and dumbbell rack'),
  },
]
