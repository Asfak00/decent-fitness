import type { Img } from '../utils/image'

/**
 * Member results published by Decent Fitness on its Facebook page.
 * Numbers are exactly as printed on the gym's own posts. Member names were
 * not published, so none are shown.
 */
export interface Transformation {
  id: string
  /** Display mode: an interactive before/after slider, or the original composite post */
  kind: 'slider' | 'composite'
  duration: string
  before: string
  after: string
  change: string
  headline: string
  story: string
  image?: Img
  beforeImg?: Img
  afterImg?: Img
  source: string
  postedOn: string
}

export const transformations: Transformation[] = [
  {
    id: 'six-month-143-111',
    kind: 'slider',
    duration: '6 months',
    before: '143 kg',
    after: '111 kg',
    change: '−32 kg',
    headline: 'Same person. Stronger today.',
    story:
      'A six-month weight-loss journey shared by the gym. The post sums it up: better health, more energy, higher confidence.',
    beforeImg: {
      base: '/assets/transformations/143kg-before',
      widths: [520],
      ratio: 520 / 900,
      alt: 'Member before the six-month journey, at 143 kg',
    },
    afterImg: {
      base: '/assets/transformations/111kg-after',
      widths: [520],
      ratio: 520 / 900,
      alt: 'The same member after six months, at 111 kg',
    },
    source: 'https://www.facebook.com/photo/?fbid=1069020956202803',
    postedOn: '6 Nov 2026',
  },
  {
    id: 'three-month-98-78',
    kind: 'composite',
    duration: '3 months',
    before: '98 kg',
    after: '78 kg',
    change: '−20 kg',
    headline: 'Three months on the floor.',
    story: 'The “after” was taken right here, at the cable station on the green turf of Decent Fitness.',
    image: {
      base: '/assets/transformations/98-to-78kg-3-months',
      widths: [640, 1280],
      ratio: 1,
      alt: 'Before and after: 98 kg to 78 kg in a three-month transformation, the after photo taken inside Decent Fitness',
    },
    source: 'https://www.facebook.com/photo/?fbid=1069021066202792',
    postedOn: '6 Nov 2026',
  },
]
