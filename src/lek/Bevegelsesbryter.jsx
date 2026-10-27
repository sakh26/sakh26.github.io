import { useBevegelse } from './useBevegelse'

export function Bevegelsesbryter({ className = '' }) {
  const { pa, bytt } = useBevegelse()

  return (
    <button type="button" className={`lek-bryter ${className}`} aria-pressed={pa} aria-label="Bevegelse" onClick={bytt}>
      Bevegelse {pa ? 'på' : 'av'}
      <span className={pa ? 'lek-sw er-pa' : 'lek-sw'} aria-hidden="true">
        <span className="lek-knott" />
      </span>
    </button>
  )
}
