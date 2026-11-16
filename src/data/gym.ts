/**
 * Central gym information. Every value here was verified on the public
 * Decent Fitness Facebook page (see GYM_BRAND_RESEARCH.md) unless marked
 * otherwise. Edit this file to update the website.
 */

export type ShiftId = 'women' | 'men'

export interface Shift {
  id: ShiftId
  label: string
  /** 24h clock, Asia/Dhaka */
  start: number
  end: number
  startLabel: string
  endLabel: string
  /** true when the time is still waiting on confirmation from the gym */
  provisional: boolean
  note: string
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

export const shifts: Shift[] = [
  {
    id: 'women',
    label: 'Women',
    start: 8,
    end: 16,
    startLabel: '8:00 AM',
    endLabel: '4:00 PM',
    provisional: false,
    note: 'Dedicated women-only training hours.',
  },
  {
    id: 'men',
    label: 'Men',
    start: 16,
    end: 23,
    startLabel: '4:00 PM',
    endLabel: '11:00 PM',
    // Gym stated the men's shift ends before 11 PM; start/end awaiting final confirmation.
    provisional: true,
    note: 'Men’s training hours. Closing time may be earlier, so please confirm on WhatsApp.',
  },
]

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
