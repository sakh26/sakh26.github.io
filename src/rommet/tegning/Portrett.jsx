import { useId } from 'react'

// Tegnet versjon av Sara i samme flate stil som rommet. Tegnes i en boks på 102 × 152,
// og flyttes og skaleres inn i rammen der den brukes.
export function Portrett({ x = 0, y = 0, skala = 1 }) {
  const klipp = 'portrett' + useId().replace(/[^a-zA-Z0-9]/g, '')
  const har = '#4a2e28'
  const hud = '#e9b693'
  const strek = '#33253f'

  return (
    <g transform={`translate(${x} ${y}) scale(${skala})`}>
      <defs>
        <clipPath id={klipp}>
          <rect width="102" height="152" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${klipp})`}>
        <rect width="102" height="152" fill="#ece6f2" />
        {/* Skuldrene, så det lange håret, så blusen foran mellom håret */}
        <path d="M6 152 C8 120 24 107 51 105 C78 107 94 120 96 152Z" fill={strek} />
        <path
          d="M51 34 C33 34 25 48 26 66 C27 84 22 100 18 120 C15 134 16 146 18 152 H84 C86 146 87 134 84 120 C80 100 75 84 76 66 C77 48 69 34 51 34Z"
          fill={har}
          stroke={strek}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M37 152 C38 122 43 109 51 107 C59 109 64 122 65 152Z" fill={strek} stroke={strek} strokeWidth="2" />
        <path d="M29 102 q-2.5 16 0 32 M73 102 q2.5 16 0 32" fill="none" stroke="#6b443a" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="45.5" y="78" width="11" height="30" rx="5" fill="#d9a07c" />
        {/* Øret med ringen */}
        <ellipse cx="68.5" cy="66" rx="3.6" ry="5.6" fill={hud} stroke={strek} strokeWidth="1.6" />
        <circle cx="69" cy="73" r="2.6" fill="none" stroke="#ffc145" strokeWidth="1.7" />
        {/* Ansiktet */}
        <ellipse cx="51" cy="64" rx="17" ry="21" fill={hud} stroke={strek} strokeWidth="2" />
        <circle cx="41.5" cy="70" r="3" fill="#f2998a" opacity="0.55" />
        <circle cx="60.5" cy="70" r="3" fill="#f2998a" opacity="0.55" />
        <path d="M40 57 q4.5 -3 9 -1 M53 56 q4.5 -2 9 1" fill="none" stroke="#2a1a18" strokeWidth="2.2" strokeLinecap="round" />
        <ellipse cx="45" cy="62" rx="2" ry="2.4" fill="#2a1a18" />
        <ellipse cx="57" cy="62" rx="2" ry="2.4" fill="#2a1a18" />
        <circle cx="45.7" cy="61.2" r="0.7" fill="#ffffff" />
        <circle cx="57.7" cy="61.2" r="0.7" fill="#ffffff" />
        <path d="M51 64 q-2 4 0.8 5" fill="none" stroke="#c98466" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M45 72.5 Q51 79 57 72.5Z" fill="#ffffff" stroke="#b5485f" strokeWidth="1.8" strokeLinejoin="round" />
        {/* Håret foran, med midtskill */}
        <path d="M32 68 C31 50 39 39 51 39 C63 39 71 50 70 68 C67 55 60 48 51 47 C42 48 35 55 32 68Z" fill={har} />
        <path d="M32 68 C35 55 42 48 51 47 C60 48 67 55 70 68" fill="none" stroke={strek} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M51 47 V40" stroke="#6b443a" strokeWidth="1.4" strokeLinecap="round" />
        {/* Knytebåndet i halsen */}
        <path d="M51 108 l-6 -4 v8Z M51 108 l6 -4 v8Z" fill={strek} stroke="#857a92" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M50 110 l-3 20 M52 110 l4 18" stroke="#857a92" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </g>
  )
}
