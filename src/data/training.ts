import type { Img } from '../utils/image'
import { media } from './media'

/** Facilities verified from the gym's own photos and reels. */
export interface Facility {
  title: string
  detail: string
  img: Img
}

export const facilities: Facility[] = [
  {
    title: 'Power rack & barbells',
    detail: 'Squat rack, barbells and weight plates on a dedicated lifting area.',
    img: media.squat,
  },
  {
    title: 'Free weights',
    detail: 'A full dumbbell rack, benches and mirrors along the wall.',
    img: media.latPulldown,
  },
  {
    title: 'Machines',
    detail: 'Pec deck, plate-loaded leg press, cable and pulldown stations.',
    img: media.pecDeck,
  },
  {
    title: 'Turf & functional floor',
    detail: 'Green turf and rubber flooring for deadlifts, core and conditioning.',
    img: media.womenDeadlift,
  },
  {
    title: 'Cardio',
    detail: 'Treadmill on the main floor for warm-ups and fat-loss work.',
    img: media.womenFloor,
  },
]

/**
 * Training goals the gym itself talks about (Facebook post, 10 Nov 2026):
 * reducing body fat, gaining weight, better blood circulation, keeping blood
 * pressure in check and building immunity.
 */
export interface TrainingGoal {
  no: string
  title: string
  bn: string
  body: string
  evidence: string
  img: Img
}

export const trainingGoals: TrainingGoal[] = [
  {
    no: '01',
    title: 'Fat loss',
    bn: 'ফ্যাট কমানো',
    body: 'Structured training to bring weight down. The results on this page are fat-loss journeys of 3 and 6 months.',
    evidence: 'Member results, Nov 2026',
    img: media.legRaise,
  },
  {
    no: '02',
    title: 'Weight & muscle gain',
    bn: 'ওয়েট বাড়ানো',
    body: 'Barbells, dumbbells and machines to build size and strength with a trainer’s guidance.',
    evidence: 'Gym post, Nov 2026',
    img: media.latPulldown,
  },
  {
    no: '03',
    title: 'Strength training',
    bn: 'শক্তি',
    body: 'Squats, deadlifts and pulls: the fundamentals, coached on a proper lifting floor.',
    evidence: 'Gym reels',
    img: media.squat,
  },
  {
    no: '04',
    title: 'Health & immunity',
    bn: 'সুস্থ থাকা',
    body: 'Training for circulation, blood-pressure control and everyday health, backed by a health-check agreement with Trust Care Diagnostic Center.',
    evidence: 'Gym post, 10 Nov 2026',
    img: media.legPress,
  },
]
