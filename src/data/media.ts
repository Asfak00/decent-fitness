import type { Img } from '../utils/image'

/**
 * All imagery comes from the public Decent Fitness Facebook page:
 * photo posts and frames from the gym's own reels. See GYM_BRAND_RESEARCH.md.
 */
export const media = {
  logo: {
    base: '/assets/brand/logo',
    widths: [160, 320, 500],
    ratio: 1,
    alt: 'Decent Fitness logo with a flexed arm emblem',
  },
  squat: {
    base: '/assets/workouts/barbell-squat',
    widths: [360, 540],
    ratio: 540 / 700,
    alt: 'A member performs a barbell back squat in the power rack on the green training turf',
  },
  womenDeadlift: {
    base: '/assets/workouts/women-deadlift',
    widths: [360, 540],
    ratio: 540 / 790,
    alt: 'A woman lifts a loaded barbell during the women’s shift, coached in front of the mirror wall',
  },
  latPulldown: {
    base: '/assets/workouts/lat-pulldown-dumbbells',
    widths: [360, 540],
    ratio: 540 / 700,
    alt: 'Members training at the lat pulldown and bench beside the dumbbell rack',
  },
  legRaise: {
    base: '/assets/workouts/hanging-leg-raise',
    widths: [360, 540],
    ratio: 540 / 760,
    alt: 'A member performs hanging leg raises on the cable station',
  },
  pecDeck: {
    base: '/assets/equipment/pec-deck',
    widths: [360, 540],
    ratio: 540 / 960,
    alt: 'A member trains chest on the pec deck machine',
  },
  legPress: {
    base: '/assets/equipment/leg-press',
    widths: [360, 540],
    ratio: 540 / 960,
    alt: 'A woman trains on the plate-loaded leg press machine',
  },
  motionBlur: {
    base: '/assets/hero/motion-blur',
    widths: [360, 540],
    ratio: 540 / 960,
    alt: '',
  },
  womenFloor: {
    base: '/assets/gym-interior/women-members-floor',
    widths: [800, 1600],
    ratio: 1600 / 1200,
    alt: 'Women of the Decent Fitness community on the training floor, with the treadmill and plate-loaded machines behind',
  },
  communityGarden: {
    base: '/assets/gallery/community-garden',
    widths: [640, 1280],
    ratio: 1280 / 960,
    alt: 'Decent Fitness women’s community on a day out',
  },
  communityOuting: {
    base: '/assets/gallery/community-outing',
    widths: [640, 960],
    ratio: 960 / 1280,
    alt: 'Decent Fitness women’s community selfie on an outing',
  },
  communityGroup: {
    base: '/assets/gallery/community-group',
    widths: [640, 1236],
    ratio: 1236 / 1200,
    alt: 'Decent Fitness women’s community group photo',
  },
  outingPool: {
    base: '/assets/gallery/outing-pool',
    widths: [800, 1600],
    ratio: 1600 / 1200,
    alt: 'Resort pool visited on the community outing',
  },
} satisfies Record<string, Img>
