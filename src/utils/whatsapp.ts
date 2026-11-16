import { gym, whatsappMessages, type WhatsAppIntent } from '../data/gym'

/** Builds a wa.me link with a URL-encoded, prefilled message. */
export function whatsappLink(intent: WhatsAppIntent = 'general', custom?: string): string {
  const text = custom ?? whatsappMessages[intent]
  return `https://wa.me/${gym.whatsappNumber}?text=${encodeURIComponent(text)}`
}
