import { useEffect, useState } from 'react'
import { gym, shifts, type Shift } from '../data/gym'

/** true once the page has scrolled past `offset` px. */
export function useScrolled(offset = 40) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > offset)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [offset])
  return scrolled
}

/** Id of the section currently crossing the middle of the viewport. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return active
}

/** Locks page scroll while `locked` is true. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = prev
    }
  }, [locked])
}

/** Calls handler for the given keys while `active`. */
export function useKeys(active: boolean, map: Record<string, () => void>) {
  useEffect(() => {
    if (!active) return
    const on = (e: KeyboardEvent) => {
      const fn = map[e.key]
      if (fn) {
        e.preventDefault()
        fn()
      }
    }
    window.addEventListener('keydown', on)
    return () => window.removeEventListener('keydown', on)
  }, [active, map])
}

export interface ShiftNow {
  /** current Dhaka time in hours (fractional) */
  hour: number
  timeLabel: string
  current: Shift | null
  next: Shift
}

/** Which training shift is running right now in Dhaka. Updates every minute. */
export function useShiftNow(): ShiftNow {
  const compute = (): ShiftNow => {
    const now = new Date()
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: gym.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(now)
    const h = Number(parts.find((p) => p.type === 'hour')?.value ?? 0)
    const m = Number(parts.find((p) => p.type === 'minute')?.value ?? 0)
    const hour = h + m / 60
    const current = shifts.find((s) => hour >= s.start && hour < s.end) ?? null
    const next = shifts.find((s) => s.start > hour) ?? shifts[0]
    const timeLabel = new Intl.DateTimeFormat('en-US', {
      timeZone: gym.timezone,
      hour: 'numeric',
      minute: '2-digit',
    }).format(now)
    return { hour, timeLabel, current, next }
  }
  const [state, setState] = useState(compute)
  useEffect(() => {
    const t = setInterval(() => setState(compute()), 60_000)
    return () => clearInterval(t)
  }, [])
  return state
}
