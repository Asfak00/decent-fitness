import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { gym, shifts } from '../data/gym'
import { media } from '../data/media'
import { whatsappLink } from '../utils/whatsapp'
import { FacebookIcon, WhatsAppIcon } from './ui/Icons'
import { Picture } from './ui/Picture'
import { navItems } from './Navbar'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="relative border-t border-bone/10 bg-ink pb-28 text-bone lg:pb-10">
      <div className="container-x grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4">
            <Picture img={media.logo} sizes="64px" className="size-16 overflow-hidden rounded-full" />
            <div>
              <p className="display text-3xl leading-none">{gym.name}</p>
              <p className="mt-1 text-sm text-smoke">{gym.category}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm leading-relaxed text-bone/65">
            A strength and fitness club in Chandrima Model Town, Mohammadpur, with dedicated training hours for women
            and for men.
          </p>
          <div className="mt-6 flex gap-2">
            <a
              href={gym.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Decent Fitness on Facebook"
              className="flex size-11 items-center justify-center border border-bone/20 transition-colors hover:bg-bone hover:text-ink"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={whatsappLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Decent Fitness on WhatsApp"
              className="flex size-11 items-center justify-center border border-bone/20 transition-colors hover:bg-bone hover:text-ink"
            >
              <WhatsAppIcon className="size-4" />
            </a>
            {gym.social.instagram && (
              <a
                href={gym.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center border border-bone/20 px-4 text-xs tracking-widest uppercase hover:bg-bone hover:text-ink"
              >
                Instagram
              </a>
            )}
          </div>
        </div>

        <nav className="lg:col-span-2" aria-label="Footer">
          <p className="eyebrow text-smoke">Explore</p>
          <ul className="mt-5 space-y-2.5">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-bone/75 hover:text-bone">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#schedule" className="text-bone/75 hover:text-bone">
                Schedule
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="eyebrow text-smoke">Visit &amp; contact</p>
          <ul className="mt-5 space-y-4 text-bone/80">
            <li>
              <a href={gym.maps.url} target="_blank" rel="noopener noreferrer" className="group flex gap-3 hover:text-bone">
                <MapPin className="mt-0.5 size-4 shrink-0 text-bronze" />
                <span>
                  {gym.address.line1}
                  <br />
                  {gym.address.line2}
                  <br />
                  {gym.address.city}
                  <span className="mt-1 flex items-center gap-1 text-xs text-smoke group-hover:text-bone">
                    Open in Maps <ArrowUpRight className="size-3" />
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${gym.phone.tel}`} className="flex gap-3 hover:text-bone">
                <Phone className="mt-0.5 size-4 shrink-0 text-bronze" />
                {gym.phone.international}
              </a>
            </li>
            <li>
              <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-bone">
                <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-bronze" />
                WhatsApp {gym.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${gym.email}`} className="flex gap-3 break-all hover:text-bone">
                <Mail className="mt-0.5 size-4 shrink-0 text-bronze" />
                {gym.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="eyebrow text-smoke">Training hours</p>
          <ul className="mt-5 divide-y divide-bone/10 border-y border-bone/10">
            {shifts.map((s) => (
              <li key={s.id} className="flex items-baseline justify-between gap-4 py-4">
                <span className="display text-2xl">{s.label}</span>
                <span className="text-sm text-bone/75 tabular-nums">
                  {s.startLabel} – {s.endLabel}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-smoke">Bangladesh time (GMT+6)</p>
        </div>
      </div>

      <div className="container-x flex flex-col gap-2 border-t border-bone/10 pt-6 text-xs text-smoke sm:flex-row sm:justify-between">
        <p>© {year} {gym.name}. All rights reserved.</p>
        <p>
          Developed by{' '}
          <a
            href="https://www.facebook.com/helloasfak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bone underline decoration-bronze/60 underline-offset-4 transition-colors hover:text-bronze"
          >
            Asfak
          </a>
        </p>
      </div>
    </footer>
  )
}
