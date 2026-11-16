import type { Img } from '../utils/image'

/**
 * Gym trainers. No trainer names, photos or qualifications were published on
 * the Facebook page, so this list is empty and the trainer grid stays hidden.
 * Add entries once the gym confirms them.
 */
export interface Trainer {
  name: string
  role: string
  bio: string
  photo?: Img
  shift?: 'women' | 'men' | 'both'
}

export const trainers: Trainer[] = []

/**
 * Fitness inspiration: globally known athletes. They are NOT affiliated with,
 * sponsors of, or endorsers of Decent Fitness. Typography-only cards are used
 * because no licensed portraits are available.
 */
export interface Inspiration {
  name: string
  discipline: string
  fact: string
  idea: string
  link: { label: string; href: string }
}

export const inspirations: Inspiration[] = [
  {
    name: 'Arnold Schwarzenegger',
    discipline: 'Bodybuilding',
    fact: 'Seven-time Mr. Olympia (1970–75, 1980).',
    idea: 'Visualise the result, then put in the reps.',
    link: { label: 'arnoldschwarzenegger.com', href: 'https://www.arnoldschwarzenegger.com/' },
  },
  {
    name: 'Ronnie Coleman',
    discipline: 'Bodybuilding',
    fact: 'Eight-time Mr. Olympia (1998–2005).',
    idea: 'Heavy basics, done with relentless consistency.',
    link: { label: 'ronniecoleman.net', href: 'https://ronniecoleman.net/' },
  },
  {
    name: 'Chris Bumstead',
    discipline: 'Classic Physique',
    fact: 'Six-time Classic Physique Olympia champion (2019–2024).',
    idea: 'Proportion and patience over shortcuts.',
    link: { label: '@cbum on Instagram', href: 'https://www.instagram.com/cbum/' },
  },
  {
    name: 'Kayla Itsines',
    discipline: 'Women’s fitness',
    fact: 'Personal trainer and co-founder of the Sweat training app.',
    idea: 'Short, structured sessions that fit a real schedule.',
    link: { label: 'kaylaitsines.com', href: 'https://www.kaylaitsines.com/' },
  },
]
