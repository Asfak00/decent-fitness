import type { WhatsAppIntent } from './gym'

export interface FaqItem {
  q: string
  a: string
  /** When set, the answer ends with a WhatsApp button for this intent */
  ask?: { intent: WhatsAppIntent; label: string }
}

export const faq: FaqItem[] = [
  {
    q: 'What are the gym opening hours?',
    a: 'Training runs from 8:00 AM to 11:00 PM, split into a women’s shift and a men’s shift.',
  },
  {
    q: 'What is the female workout schedule?',
    a: 'Women train from 8:00 AM to 4:00 PM. These are dedicated, women-only hours.',
    ask: { intent: 'female', label: 'Ask about the women’s shift' },
  },
  {
    q: 'What is the male workout schedule?',
    a: 'Men train from 4:00 PM to 11:00 PM. The closing time may be slightly earlier, so please confirm on WhatsApp before a late visit.',
    ask: { intent: 'male', label: 'Ask about the men’s shift' },
  },
  {
    q: 'What membership packages are available?',
    a: 'The monthly fee is ৳1,000. Admission is normally ৳2,000 and currently discounted to ৳1,500, so your first month is ৳2,500. Take the 3-month package and admission is fully free (current offer).',
    ask: { intent: 'membership', label: 'Confirm current prices' },
  },
  {
    q: 'How can I join?',
    a: 'Message the trainer on WhatsApp, pick your shift and package, then visit the gym in Chandrima Model Town to complete admission.',
    ask: { intent: 'general', label: 'Start on WhatsApp' },
  },
  {
    q: 'Can I consult with a trainer before joining?',
    a: 'Yes. Send your goals on WhatsApp and the trainer will suggest the right package and shift.',
    ask: { intent: 'personalTraining', label: 'Talk to the trainer' },
  },
  {
    q: 'What facilities are available?',
    a: 'A power rack with barbells and plates, a full dumbbell rack and benches, pec deck, plate-loaded leg press, cable and pulldown stations, a treadmill, mirrors and a turf/rubber functional floor.',
  },
  {
    q: 'Where is the gym located?',
    a: 'House 18, Block B, Avenue 1, Chandrima Model Town, Mohammadpur, Dhaka 1207.',
  },
  {
    q: 'Is personal training available?',
    a: 'Personal training details haven’t been published yet, so please ask the trainer directly for options and pricing.',
    ask: { intent: 'personalTraining', label: 'Ask about personal training' },
  },
]
