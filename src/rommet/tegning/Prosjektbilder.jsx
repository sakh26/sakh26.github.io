// Illustrasjonene på prosjektkortene, fra skissen A-PC. id brukes til mønstre, så de ikke kolliderer.
export const prosjektbilder = {
  quiz: {
    alt: 'Illustrasjon av et quizbrett med poengruter',
    tegning: () => (
      <>
        <rect width="300" height="160" fill="#33253f" />
        <path d="M13 12 h50 v24 h-50Z M69 12 h50 v24 h-50Z M125 12 h50 v24 h-50Z M181 12 h50 v24 h-50Z M237 12 h50 v24 h-50Z" fill="#1f8a80" />
        <path d="M13 44 h50 v30 h-50Z M69 44 h50 v30 h-50Z M125 44 h50 v30 h-50Z M181 44 h50 v30 h-50Z M237 44 h50 v30 h-50Z M13 80 h50 v30 h-50Z M69 80 h50 v30 h-50Z M181 80 h50 v30 h-50Z M237 80 h50 v30 h-50Z M13 116 h50 v30 h-50Z M69 116 h50 v30 h-50Z M125 116 h50 v30 h-50Z M237 116 h50 v30 h-50Z" fill="#7c2439" />
        <path d="M125 80 h50 v30 h-50Z M181 116 h50 v30 h-50Z" fill="#4b3a5e" />
        <g fontFamily="Bricolage Grotesque, system-ui, sans-serif" fontWeight="800" fontSize="15" fill="#ffc145" textAnchor="middle">
        <text x="38" y="65">100</text><text x="94" y="65">100</text><text x="150" y="65">100</text><text x="206" y="65">100</text><text x="262" y="65">100</text>
        <text x="38" y="101">200</text><text x="94" y="101">200</text><text x="206" y="101">200</text><text x="262" y="101">200</text>
        <text x="38" y="137">300</text><text x="94" y="137">300</text><text x="150" y="137">300</text><text x="262" y="137">300</text>
        </g>
      </>
    ),
  },
  laering: {
    alt: 'Illustrasjon av en læringsplattform med leksjoner og fremdriftslinje',
    tegning: () => (
      <>
        <rect width="300" height="160" fill="#ece6f2" />
        <rect x="22" y="16" width="256" height="130" rx="10" fill="#ffffff" stroke="#33253f" strokeWidth="3" />
        <path d="M22 26 a10 10 0 0 1 10 -10 h46 v130 h-46 a10 10 0 0 1 -10 -10Z" fill="#1f8a80" stroke="#33253f" strokeWidth="3" />
        <path d="M36 40 h28 M36 56 h22 M36 72 h26" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
        <rect x="94" y="30" width="80" height="44" rx="6" fill="#ffc145" stroke="#33253f" strokeWidth="2.5" />
        <rect x="184" y="30" width="80" height="44" rx="6" fill="#f3e7e4" stroke="#33253f" strokeWidth="2.5" />
        <path d="M120 58 L134 48 L148 58 L134 64Z" fill="#33253f" />
        <path d="M206 44 h36 M206 56 h26" stroke="#33253f" strokeWidth="4" strokeLinecap="round" />
        <rect x="94" y="88" width="170" height="12" rx="6" fill="#f3e7e4" stroke="#33253f" strokeWidth="2.5" />
        <rect x="94" y="88" width="104" height="12" rx="6" fill="#1f8a80" stroke="#33253f" strokeWidth="2.5" />
        <path d="M94 118 h120 M94 130 h86" stroke="#33253f" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      </>
    ),
  },
  bryllup: {
    alt: 'Illustrasjon av to giftringer og sperrebånd for under arbeid',
    tegning: (id) => (
      <>
        <defs><pattern id={id} width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="11" height="22" fill="#33253f" /></pattern></defs>
        <rect width="300" height="160" fill="#f3e7e4" />
        <circle cx="132" cy="72" r="34" fill="none" stroke="#ffc145" strokeWidth="10" />
        <circle cx="132" cy="72" r="34" fill="none" stroke="#33253f" strokeWidth="2.5" strokeDasharray="0" />
        <circle cx="170" cy="72" r="34" fill="none" stroke="#7c2439" strokeWidth="10" />
        <path d="M60 40 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4Z M236 34 l3 -8 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3Z" fill="#ef6a4c" />
        <g transform="rotate(-12 150 132)">
        <rect x="-20" y="118" width="340" height="30" fill="#ffc145" stroke="#33253f" strokeWidth="3" />
        <rect x="-20" y="118" width="340" height="30" fill={`url(#${id})`} opacity="0.9" />
        </g>
      </>
    ),
  },
}
