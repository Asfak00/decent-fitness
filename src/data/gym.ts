/**
 * Central gym information. Every value here was verified on the public
 * Decent Fitness Facebook page (see GYM_BRAND_RESEARCH.md) unless marked
 * otherwise. Edit this file to update the website.
 */

export type ShiftGroup = 'women' | 'men'

/** One continuous block of training time for one group. */
export interface Session {
  id: string
  group: ShiftGroup
  label: string
  /** 24h clock, Asia/Dhaka (fractions allowed: 16.5 = 4:30 PM) */
  start: number
  end: number
  startLabel: string
  endLabel: string
}

export const gym = {
  name: 'Decent Fitness',
  shortName: 'Decent',
  category: 'Gym & physical fitness centre',
  /** Page intro text, as published by the gym */
  intro: 'Exercise is the major source of develop the immunity system.',
  address: {
    line1: 'House 18, Block B, Avenue 1',
    line2: 'Chandrima Model Town, Mohammadpur',
    city: 'Dhaka 1207, Bangladesh',
    short: 'Chandrima Model Town, Mohammadpur',
  },
  phone: {
    display: '01781-539998',
    international: '+880 1781-539998',
    tel: '+8801781539998',
  },
  /** Verified as the WhatsApp number on the Facebook “About” page. */
  whatsappNumber: '8801781539998',
  email: 'rafiarishasweety@gmail.com',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100092847256862',
    facebookReels: 'https://www.facebook.com/profile.php?id=100092847256862&sk=reels_tab',
    /** Not verified. Leave empty to hide. */
    instagram: '',
  },
  maps: {
    /** Search link built from the published address (no coordinates were published). */
    url: 'https://www.google.com/maps/search/?api=1&query=House+18+Block+B+Avenue+1+Chandrima+Model+Town+Mohammadpur+Dhaka',
  },
  timezone: 'Asia/Dhaka',
} as const

/**
 * Daily training sessions, in order. Men train morning and evening; women
 * train in the afternoon. Edit here and every section updates.
 */
export const sessions: Session[] = [
  { id: 'men-morning', group: 'men', label: 'Men', start: 8, end: 13, startLabel: '8:00 AM', endLabel: '1:00 PM' },
  { id: 'women', group: 'women', label: 'Women', start: 13, end: 16.5, startLabel: '1:00 PM', endLabel: '4:30 PM' },
  { id: 'men-evening', group: 'men', label: 'Men', start: 16.5, end: 23, startLabel: '4:30 PM', endLabel: '11:00 PM' },
]

export const groupInfo: Record<ShiftGroup, { label: string; note: string }> = {
  women: { label: 'Women', note: 'Dedicated women-only training hours every afternoon.' },
  men: { label: 'Men', note: 'Two sessions a day: train before work or after it.' },
}

export const sessionsFor = (group: ShiftGroup) => sessions.filter((s) => s.group === group)

/** e.g. "8:00 AM – 1:00 PM & 4:30 PM – 11:00 PM" */
export const hoursFor = (group: ShiftGroup, joiner = ' & ') =>
  sessionsFor(group)
    .map((s) => `${s.startLabel} – ${s.endLabel}`)
    .join(joiner)

/** Prefilled WhatsApp messages per call-to-action. */
export const whatsappMessages = {
  general:
    'Hello! I am interested in joining your gym. Could you please share more information about your membership packages?',
  membership: 'Hello! I would like to know more about your gym membership packages and pricing.',
  female:
    'Hello! I am interested in joining the female training shift. Could you please share the available membership details?',
  male: 'Hello! I am interested in joining the male training shift. Could you please share the available membership details?',
  personalTraining: 'Hello! I would like to know more about your available personal training options.',
  transformation:
    "Hello! I saw your gym's transformation stories and would like to discuss my fitness goals with a trainer.",
  videos: 'Hello! I watched your gym videos and would like to visit Decent Fitness. When can I come?',
  offer3Month:
    'Hello! I saw the offer of free admission with the 3-month package. Could you please share the details?',
  monthly: 'Hello! I would like to join with the monthly membership. Could you please share the details?',
} as const

export type WhatsAppIntent = keyof typeof whatsappMessages

/** Optional verified stats. Empty by default; counters render only when filled. */
export const stats: { value: number; suffix?: string; label: string }[] = []
