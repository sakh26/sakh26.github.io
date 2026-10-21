import { useEffect, useRef, useState } from 'react'

// Bare på store skjermer med mus. Ellers åpnes kortene ved trykk (se CSS).
const MOUSE_LAYOUT = '(hover: hover) and (min-width: 901px)'
const OPEN_DELAY = 60

/**
 * Finner ut hvilket prosjektkort som skal være åpent ut fra hvor musen står.
 *
 * Kortene vokser og flytter kantene sine mens de åpnes. Lar man kortet selv
 * svare på om musen er over det, kan det åpne og lukke seg i en løkke når musen
 * står i kanten. Her regnes alt ut fra plassene i rutenettet, som aldri flytter
 * seg, og fra hvor stort det åpne kortet blir når det er ferdig åpnet.
 */
export function useOpenCard(slotRefs) {
  const [open, setOpen] = useState(null)
  const openRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia(MOUSE_LAYOUT)
    let pointer = null
    let timer = null
    let pending = null

    const set = (value) => {
      clearTimeout(timer)
      timer = null
      pending = null
      openRef.current = value
      setOpen(value)
    }

    const pick = () => {
      if (!pointer || !mq.matches) return
      const slots = slotRefs.current.filter(Boolean)
      if (slots.length === 0) return

      const { x, y } = pointer
      const inside = (r) => x >= r.left && x <= r.right && y >= r.top && y <= r.bottom
      const rects = slots.map((slot) => slot.getBoundingClientRect())
      const step = rects.length > 1 ? rects[1].left - rects[0].left : 0

      let next = rects.findIndex(inside)
      const current = openRef.current

      // Står musen fortsatt innenfor det åpne kortet slik det ser ut ferdig
      // åpnet, skal det holde seg åpent.
      if (current !== null && slots[current]) {
        const r = rects[current]
        const column = current % 3
        const [growLeft, growRight] = column === 0 ? [0, step] : column === 1 ? [step / 2, step / 2] : [step, 0]
        const card = slots[current].firstElementChild
        const front = card.querySelector('.proj-front')
        const body = card.querySelector('.proj-more-body')
        const height = (front?.offsetHeight ?? 0) + (body?.offsetHeight ?? 0)
        const openRect = {
          left: r.left - growLeft,
          right: r.right + growRight,
          top: r.top,
          bottom: r.top + Math.max(height, r.height),
        }
        if (inside(openRect)) next = current
      }

      if (next === -1) next = null
      if (next === current) {
        clearTimeout(timer)
        timer = null
        pending = null
        return
      }
      if (next === null) {
        set(null)
        return
      }
      // Liten pause før åpning, så kort man bare drar musen forbi ikke spretter opp.
      // Pausen startes ikke på nytt mens musen beveger seg over samme kort.
      if (next === pending) return
      clearTimeout(timer)
      pending = next
      timer = setTimeout(() => set(next), OPEN_DELAY)
    }

    const onMove = (e) => {
      if (e.pointerType === 'touch') return
      pointer = { x: e.clientX, y: e.clientY }
      pick()
    }
    const onLeave = () => {
      pointer = null
      set(null)
    }
    const onMedia = () => set(null)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', pick, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    mq.addEventListener('change', onMedia)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', pick)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      mq.removeEventListener('change', onMedia)
    }
  }, [slotRefs])

  return open
}
