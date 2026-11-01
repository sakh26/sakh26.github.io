// Tegnet av designverktøyet (M-Rom). Koordinatene er i scenens eget system, 390×844.

import { Portrett } from './Portrett'

export const storrelse = [390, 844]

export const bakgrunn = (
  <>
    <defs><pattern id="dotsM" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="2.5" fill="#ffc6ae" /><circle cx="30" cy="30" r="2.5" fill="#ffc6ae" /></pattern></defs>
    <rect x="0" y="0" width="390" height="640" fill="#ffd9c7" />
    <rect x="0" y="0" width="390" height="640" fill="url(#dotsM)" />
    <rect x="0" y="642" width="390" height="202" fill="#7c2439" />
    <path d="M0 700 H390 M0 790 H390" stroke="#6a1d30" strokeWidth="3" />
    <rect x="-4" y="628" width="398" height="14" fill="#f3e7e4" stroke="#33253f" strokeWidth="2.5" />
    <ellipse cx="195" cy="748" rx="170" ry="34" fill="#ffc145" stroke="#33253f" strokeWidth="2.5" />
    <ellipse cx="195" cy="748" rx="136" ry="20" fill="none" stroke="#33253f" strokeWidth="2.5" strokeDasharray="10 9" />
    <path d="M0 80 Q195 124 390 80" fill="none" stroke="#33253f" strokeWidth="2.5" />
    <g stroke="#33253f" strokeWidth="2.5" strokeLinejoin="round">
    <path d="M16 86 L44 86 L30 116Z" fill="#7c2439" />
    <path d="M71 95 L99 95 L85 125Z" fill="#ffc145" />
    <path d="M126 100 L154 100 L140 130Z" fill="#1f8a80" />
    <path d="M181 102 L209 102 L195 132Z" fill="#f3e7e4" />
    <path d="M236 100 L264 100 L250 130Z" fill="#ef6a4c" />
    <path d="M291 95 L319 95 L305 125Z" fill="#ece6f2" />
    <path d="M346 86 L374 86 L360 116Z" fill="#7c2439" />
    </g>
    <rect x="272" y="150" width="100" height="112" rx="5" fill="#ffffff" stroke="#33253f" strokeWidth="2.5" />
    <rect x="264" y="260" width="116" height="12" rx="3" fill="#f3e7e4" stroke="#33253f" strokeWidth="2.5" />
    <path d="M250 142 H390" stroke="#33253f" strokeWidth="4" strokeLinecap="round" />
    <path d="M254 144 H274 V280 Q264 288 254 280Z" fill="#ef6a4c" stroke="#33253f" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M370 144 H390 V280 Q380 288 370 280Z" fill="#ef6a4c" stroke="#33253f" strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="18" y="170" width="112" height="270" rx="4" fill="#33253f" />
    <rect x="26" y="178" width="96" height="254" fill="#4b3a5e" />
    <rect x="26" y="250" width="96" height="8" fill="#33253f" />
    <rect x="26" y="330" width="96" height="8" fill="#33253f" />
    <rect x="34" y="396" width="34" height="36" rx="3" fill="#ef6a4c" stroke="#33253f" strokeWidth="2.5" />
    <path d="M51 396 C40 380 34 372 37 362 C46 366 51 378 51 396 C55 378 62 368 70 365 C72 376 64 386 51 396" fill="#1f8a80" stroke="#33253f" strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="78" y="388" width="38" height="44" rx="4" fill="#ffc145" stroke="#33253f" strokeWidth="2.5" />
    <rect x="110" y="504" width="90" height="136" fill="#f3e7e4" stroke="#33253f" strokeWidth="2.5" />
    <path d="M110 548 H200 M110 594 H200" stroke="#33253f" strokeWidth="2.5" />
    <rect x="142" y="522" width="26" height="8" rx="4" fill="#33253f" /><rect x="142" y="568" width="26" height="8" rx="4" fill="#33253f" /><rect x="142" y="612" width="26" height="8" rx="4" fill="#33253f" />
    <rect x="350" y="504" width="14" height="136" fill="#33253f" />
    <rect x="96" y="490" width="282" height="16" rx="5" fill="#ffffff" stroke="#33253f" strokeWidth="2.5" />
    <rect x="236" y="676" width="124" height="44" rx="20" fill="#1f8a80" stroke="#33253f" strokeWidth="2.5" />
    <path d="M246 692 H350" stroke="#187168" strokeWidth="3" />
</>
)

// Vinduet er en bryter mellom dag og natt, som i det store rommet.
export const vindu = {
  boks: [272, 150, 100, 112],
  tegning: (
    <>
      <rect className="rom-himmel" x="282" y="160" width="80" height="92" fill="#a9dfe6" stroke="#33253f" strokeWidth="2.5" />
      <g className="rom-dag">
        <circle cx="340" cy="186" r="15" fill="#ffc145" stroke="#33253f" strokeWidth="2.5" />
      </g>
      <g className="rom-natt">
        <path d="M340 172 A14 14 0 1 0 340 200 A17 17 0 0 1 340 172Z" fill="#fff3c4" stroke="#33253f" strokeWidth="2.5" strokeLinejoin="round" />
        <g className="rom-stjerner" fill="#fff3c4">
          <path d="M298 172 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3Z" />
          <circle cx="306" cy="228" r="2" />
          <circle cx="350" cy="230" r="2" />
          <circle cx="292" cy="242" r="1.6" />
        </g>
      </g>
      <path d="M322 160 V252 M282 206 H362" stroke="#ffffff" strokeWidth="7" />
    </>
  ),
}

// Måneskinn fra vinduet ned på gulvet. Vises bare om natten.
export const maaneskinn = (
  <>
    <defs>
      <radialGradient id="maaneGlodM" cx="322" cy="206" r="110" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#cfd8ff" stopOpacity="0.4" />
        <stop offset="1" stopColor="#cfd8ff" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="maaneStraleM" x1="322" y1="190" x2="180" y2="770" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#cfd8ff" stopOpacity="0.4" />
        <stop offset="1" stopColor="#cfd8ff" stopOpacity="0.1" />
      </linearGradient>
      <filter id="maaneMykM" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="7" /></filter>
      <filter id="maaneFlekkM" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="2" /></filter>
    </defs>
    <circle cx="322" cy="206" r="110" fill="url(#maaneGlodM)" />
    <path d="M282 160 H362 V252 L235 770 H115Z" fill="url(#maaneStraleM)" filter="url(#maaneMykM)" />
    <g filter="url(#maaneFlekkM)">
      <path d="M140 700 H255 L235 770 H115Z" fill="#dfe5ff" fillOpacity="0.35" />
      <path d="M197.5 700 L175 770 M127.5 735 H245" stroke="#000000" strokeWidth="5" />
    </g>
  </>
)

export const ting = {
  'utdanning': {
    boks: [18, 108, 112, 228],
    tegning: (
      <>
        <rect x="40" y="156" width="70" height="14" rx="3" fill="#ffc145" stroke="#33253f" strokeWidth="2.5" />
        <rect x="46" y="144" width="60" height="12" rx="3" fill="#1f8a80" stroke="#33253f" strokeWidth="2.5" />
        <path d="M56 130 L94 130 L92 144 Q75 148 58 144Z" fill="#2b1f38" stroke="#33253f" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M40 124 L75 114 L110 124 L75 134Z" fill="#2b1f38" stroke="#33253f" strokeWidth="2.5" strokeLinejoin="round" />
        <g className="tassel fbt"><path d="M75 124 L104 128 V144" fill="none" stroke="#ffc145" strokeWidth="3.5" strokeLinecap="round" /><rect x="99" y="142" width="10" height="12" rx="3" fill="#ffc145" stroke="#33253f" strokeWidth="2" /></g>
        <rect x="30" y="192" width="16" height="58" rx="2" fill="#7c2439" stroke="#33253f" strokeWidth="2.5" />
        <rect x="48" y="200" width="14" height="50" rx="2" fill="#ffc145" stroke="#33253f" strokeWidth="2.5" />
        <rect x="64" y="188" width="18" height="62" rx="2" fill="#1f8a80" stroke="#33253f" strokeWidth="2.5" />
        <rect x="84" y="202" width="14" height="48" rx="2" fill="#f3e7e4" stroke="#33253f" strokeWidth="2.5" />
        <rect x="100" y="196" width="16" height="54" rx="2" fill="#ef6a4c" stroke="#33253f" strokeWidth="2.5" transform="rotate(8 100 250)" />
        <rect x="32" y="314" width="56" height="16" rx="2" fill="#ffc145" stroke="#33253f" strokeWidth="2.5" />
        <rect x="36" y="298" width="50" height="16" rx="2" fill="#1f8a80" stroke="#33253f" strokeWidth="2.5" />
        <rect x="34" y="282" width="54" height="16" rx="2" fill="#7c2439" stroke="#33253f" strokeWidth="2.5" />
        <rect x="94" y="272" width="14" height="58" rx="2" fill="#ffffff" stroke="#33253f" strokeWidth="2.5" />
        <rect x="108" y="278" width="12" height="52" rx="2" fill="#f3e7e4" stroke="#33253f" strokeWidth="2.5" />
      </>
    ),
  },
  'om-meg': {
    boks: [150, 146, 110, 146],
    tegning: (
      <>
        <g className="tilt fbt">
        <path d="M170 172 L205 152 L240 172" fill="none" stroke="#33253f" strokeWidth="2.5" />
        <circle cx="205" cy="152" r="4" fill="#33253f" />
        <rect x="158" y="168" width="94" height="116" rx="4" fill="#ffc145" stroke="#33253f" strokeWidth="2.5" />
        <rect x="168" y="178" width="74" height="96" fill="#ffffff" stroke="#33253f" strokeWidth="2" />
        <rect x="174" y="184" width="62" height="84" fill="#ece6f2" />
        <Portrett x={176.8} y={184} skala={84 / 152} />
        </g>
      </>
    ),
  },
  'prosjekter': {
    boks: [162, 352, 164, 140],
    tegning: (
      <>
        <rect className="glow" x="164" y="354" width="160" height="122" rx="16" fill="#ffffff" opacity="0" />
        <rect x="170" y="360" width="148" height="110" rx="10" fill="#33253f" />
        <rect x="180" y="370" width="128" height="90" rx="3" fill="#f3e7e4" />
        <rect x="180" y="370" width="128" height="13" rx="3" fill="#ece6f2" />
        <circle cx="189" cy="376.5" r="2.5" fill="#ef6a4c" /><circle cx="197" cy="376.5" r="2.5" fill="#ffc145" /><circle cx="205" cy="376.5" r="2.5" fill="#1f8a80" />
        <rect x="188" y="391" width="34" height="28" rx="4" fill="#ffc145" stroke="#33253f" strokeWidth="1.5" />
        <rect x="227" y="391" width="34" height="28" rx="4" fill="#ef6a4c" stroke="#33253f" strokeWidth="1.5" />
        <rect x="266" y="391" width="34" height="28" rx="4" fill="#1f8a80" stroke="#33253f" strokeWidth="1.5" />
        <rect x="188" y="428" width="74" height="6" rx="3" fill="#33253f" />
        <rect x="188" y="440" width="48" height="6" rx="3" fill="#7c2439" />
        <rect className="blink" x="240" y="438" width="4" height="10" fill="#33253f" />
        <rect x="232" y="470" width="24" height="14" fill="#33253f" />
        <rect x="214" y="482" width="60" height="9" rx="4" fill="#33253f" />
      </>
    ),
  },
  'erfaring': {
    boks: [98, 428, 70, 64],
    tegning: (
      <>
        <g className="flut fbb">
        <g transform="rotate(-9 134 480)"><rect x="112" y="436" width="44" height="40" rx="2" fill="#ffffff" stroke="#33253f" strokeWidth="2.5" /><path d="M119 446 h28 M119 454 h32 M119 462 h22" stroke="#33253f" strokeWidth="2.5" strokeLinecap="round" /></g>
        <g transform="rotate(7 138 480)"><rect x="118" y="440" width="44" height="38" rx="2" fill="#f3e7e4" stroke="#33253f" strokeWidth="2.5" /><path d="M125 450 h30 M125 458 h24 M125 466 h30" stroke="#33253f" strokeWidth="2.5" strokeLinecap="round" /></g>
        </g>
        <rect x="104" y="468" width="60" height="22" rx="3" fill="#ef6a4c" stroke="#33253f" strokeWidth="2.5" />
      </>
    ),
  },
  'kontakt': {
    boks: [316, 444, 62, 48],
    lappTilHoyre: true,
    tegning: (
      <>
        <path d="M326 489 L334 466 H362 L370 489Z" fill="#ef6a4c" stroke="#33253f" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="348" cy="479" r="6" fill="#ffffff" stroke="#33253f" strokeWidth="2" />
        <g className="ring fbb">
        <rect x="324" y="452" width="48" height="10" rx="5" fill="#ef6a4c" stroke="#33253f" strokeWidth="2.5" />
        <rect x="320" y="456" width="16" height="12" rx="5" fill="#ef6a4c" stroke="#33253f" strokeWidth="2.5" />
        <rect x="360" y="456" width="16" height="12" rx="5" fill="#ef6a4c" stroke="#33253f" strokeWidth="2.5" />
        </g>
      </>
    ),
  },
  'ferdigheter': {
    boks: [16, 576, 112, 106],
    tegning: (
      <>
        <g className="tools">
        <rect x="36" y="588" width="13" height="50" rx="2" fill="#ffc145" stroke="#33253f" strokeWidth="2.5" transform="rotate(-12 42 636)" />
        <rect x="64" y="588" width="12" height="26" rx="5" fill="#7c2439" stroke="#33253f" strokeWidth="2.5" />
        <rect x="68" y="614" width="4" height="14" fill="#33253f" />
        <rect x="92" y="598" width="8" height="36" rx="3" fill="#f3e7e4" stroke="#33253f" strokeWidth="2.5" transform="rotate(10 96 634)" />
        <rect x="82" y="590" width="28" height="12" rx="3" fill="#33253f" transform="rotate(10 96 634)" />
        </g>
        <rect x="24" y="624" width="96" height="52" rx="5" fill="#1f8a80" stroke="#33253f" strokeWidth="2.5" />
        <rect x="24" y="624" width="96" height="14" rx="4" fill="#187168" stroke="#33253f" strokeWidth="2.5" />
        <rect x="66" y="632" width="12" height="12" rx="3" fill="#ffc145" stroke="#33253f" strokeWidth="2.5" />
      </>
    ),
  },
  'sykepleie': {
    boks: [244, 586, 104, 92],
    tegning: (
      <>
        <g className="beat fb">
        <g transform="translate(252 592) scale(0.92)">
        <path d="M48 82 C20 62 4 46 4 26 C4 13 14 4 26 4 C36 4 44 10 48 18 C52 10 60 4 70 4 C82 4 92 13 92 26 C92 46 76 62 48 82Z" fill="#7c2439" stroke="#33253f" strokeWidth="2.8" />
        <path d="M14 38 H32 L38 26 L46 52 L52 32 L57 38 H82" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        </g>
      </>
    ),
  },
}
