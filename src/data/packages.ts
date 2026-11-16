import type { WhatsAppIntent } from './gym'

/**
 * Membership pricing as published by Decent Fitness on Facebook reels
 * (captions & on-video text). Prices in BDT.
 * Set `visible: false` to hide a package without deleting it.
 */
export interface MembershipPackage {
  id: string
  name: string
  duration: string
  /** null → shows “Contact for pricing” */
  price: number | null
  priceUnit?: string
  /** Optional struck-through regular price */
  regularPrice?: number
  badge?: string
  highlight?: boolean
  summary: string
  includes: string[]
  availability: string
  intent: WhatsAppIntent
  cta: string
  visible: boolean
}

export const admission = {
  regular: 2000,
  offer: 1500,
  /** Total for the first month as stated by the gym (offer admission + 1 month). */
  firstMonthTotal: 2500,
  note: 'One-time admission fee. Discounted admission currently running. Please confirm before visiting.',
}

const commonIncludes = [
  'Full access to free weights & machines',
  'Trainer guidance on the floor',
  'Your shift: women 8 AM – 4 PM · men 4 PM – 11 PM',
]

export const packages: MembershipPackage[] = [
  {
    id: 'monthly',
    name: 'Monthly',
    duration: '1 month',
    price: 1000,
    priceUnit: '/ month',
    summary: 'Start month by month. First month is ৳2,500 including the current admission offer.',
    includes: commonIncludes,
    availability: 'Women’s & men’s shifts',
    intent: 'monthly',
    cta: 'Join monthly',
    visible: true,
  },
  {
    id: 'three-month',
    name: '3-Month Package',
    duration: '3 months',
    price: null,
    badge: 'Admission free',
    highlight: true,
    summary: 'The gym’s current offer: admission is fully free when you take the 3-month package.',
    includes: [...commonIncludes, 'No admission fee (current offer)'],
    availability: 'Women’s & men’s shifts',
    intent: 'offer3Month',
    cta: 'Claim the offer',
    visible: true,
  },
  {
    id: 'six-month',
    name: 'Half-Yearly',
    duration: '6 months',
    price: null,
    summary: 'Not published by the gym yet.',
    includes: commonIncludes,
    availability: 'To be confirmed',
    intent: 'membership',
    cta: 'Ask for pricing',
    visible: false,
  },
  {
    id: 'yearly',
    name: 'Yearly',
    duration: '12 months',
    price: null,
    summary: 'Not published by the gym yet.',
    includes: commonIncludes,
    availability: 'To be confirmed',
    intent: 'membership',
    cta: 'Ask for pricing',
    visible: false,
  },
]
