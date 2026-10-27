// Tegnet av designverktøyet (A-Rom). Koordinatene er i scenens eget system, 1440×900.

import { Portrett } from './Portrett'

export const storrelse = [1440, 900]

export const bakgrunn = (
  <>
    <defs>
    <pattern id="dotsA" width="48" height="48" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r="3" fill="#ffc6ae" /><circle cx="36" cy="36" r="3" fill="#ffc6ae" /></pattern>
    <clipPath id="glassA"><rect x="1126" y="166" width="218" height="218" /></clipPath>
    </defs>
    <rect x="0" y="0" width="1440" height="700" fill="#ffd9c7" />
    <rect x="0" y="0" width="1440" height="700" fill="url(#dotsA)" />
    <rect x="0" y="704" width="1440" height="196" fill="#7c2439" />
    <path d="M0 768 H1440 M0 842 H1440" stroke="#6a1d30" strokeWidth="3" />
    <rect x="-4" y="688" width="1448" height="16" fill="#f3e7e4" stroke="#33253f" strokeWidth="3" />
    <ellipse cx="820" cy="805" rx="400" ry="62" fill="#ffc145" stroke="#33253f" strokeWidth="3" />
    <ellipse cx="820" cy="805" rx="330" ry="40" fill="none" stroke="#33253f" strokeWidth="3" strokeDasharray="14 12" />
    <g className="flags fbt">
    <path d="M600 108 Q840 150 1080 108" fill="none" stroke="#33253f" strokeWidth="3" />
    <path d="M618 114 L658 114 L638 156Z" fill="#7c2439" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
    <path d="M686 122 L726 122 L706 164Z" fill="#ffc145" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
    <path d="M753 127 L793 127 L773 169Z" fill="#1f8a80" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
    <path d="M820 129 L860 129 L840 171Z" fill="#f3e7e4" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
    <path d="M887 127 L927 127 L907 169Z" fill="#ef6a4c" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
    <path d="M954 122 L994 122 L974 164Z" fill="#ece6f2" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
    <path d="M1022 114 L1062 114 L1042 156Z" fill="#7c2439" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
    </g>
    <rect x="1110" y="150" width="250" height="250" rx="6" fill="#ffffff" stroke="#33253f" strokeWidth="3" />
    <rect x="1126" y="166" width="218" height="218" fill="#a9dfe6" stroke="#33253f" strokeWidth="3" />
    <g clipPath="url(#glassA)">
    <circle cx="1290" cy="226" r="30" fill="#ffc145" stroke="#33253f" strokeWidth="3" />
    <g className="cloud"><path d="M1130 300 a22 22 0 0 1 36 -18 a28 28 0 0 1 50 6 a18 18 0 0 1 6 34 h-86 a16 16 0 0 1 -6 -22Z" fill="#ffffff" stroke="#33253f" strokeWidth="3" /></g>
    </g>
    <path d="M1235 166 V384 M1126 275 H1344" stroke="#ffffff" strokeWidth="10" />
    <rect x="1096" y="398" width="278" height="16" rx="3" fill="#f3e7e4" stroke="#33253f" strokeWidth="3" />
    <rect x="1152" y="370" width="30" height="28" rx="3" fill="#ef6a4c" stroke="#33253f" strokeWidth="3" />
    <path d="M1167 370 V338 M1167 352 h-10 v-10 M1167 346 h10 v-12" fill="none" stroke="#1f8a80" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1076 140 H1394" stroke="#33253f" strokeWidth="5" strokeLinecap="round" />
    <path d="M1082 142 H1126 V420 Q1104 432 1082 420Z" fill="#ef6a4c" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
    <path d="M1344 142 H1388 V420 Q1366 432 1344 420Z" fill="#ef6a4c" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
    <path d="M1100 150 V416 M1366 150 V416" stroke="#c94f35" strokeWidth="3" />
    <rect x="90" y="260" width="240" height="512" rx="6" fill="#33253f" />
    <rect x="104" y="274" width="212" height="484" fill="#4b3a5e" />
    <rect x="104" y="356" width="212" height="12" fill="#33253f" />
    <rect x="104" y="456" width="212" height="12" fill="#33253f" />
    <rect x="104" y="576" width="212" height="12" fill="#33253f" />
    <rect x="122" y="540" width="44" height="36" rx="3" fill="#ef6a4c" stroke="#33253f" strokeWidth="3" />
    <path d="M144 540 C128 516 118 504 122 490 C136 496 144 512 144 540 C150 512 160 496 172 492 C174 508 162 524 144 540" fill="#1f8a80" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
    <rect x="196" y="526" width="62" height="50" rx="4" fill="#ffc145" stroke="#33253f" strokeWidth="3" />
    <path d="M196 542 H258" stroke="#33253f" strokeWidth="3" />
    <rect x="272" y="520" width="30" height="56" rx="3" fill="#f3e7e4" stroke="#33253f" strokeWidth="3" />
    <rect x="114" y="618" width="30" height="140" rx="3" fill="#f3e7e4" stroke="#33253f" strokeWidth="3" />
    <rect x="148" y="606" width="30" height="152" rx="3" fill="#ece6f2" stroke="#33253f" strokeWidth="3" />
    <rect x="182" y="624" width="30" height="134" rx="3" fill="#ffffff" stroke="#33253f" strokeWidth="3" />
    <path d="M120 650 h18 M154 640 h18 M188 656 h18" stroke="#33253f" strokeWidth="3" />
    <rect x="226" y="686" width="82" height="72" rx="10" fill="#ffc145" stroke="#33253f" strokeWidth="3" />
    <path d="M226 708 H308 M226 732 H308" stroke="#33253f" strokeWidth="3" />
    <rect x="568" y="578" width="140" height="202" fill="#f3e7e4" stroke="#33253f" strokeWidth="3" />
    <path d="M568 646 H708 M568 714 H708" stroke="#33253f" strokeWidth="3" />
    <rect x="622" y="606" width="32" height="10" rx="5" fill="#33253f" />
    <rect x="622" y="674" width="32" height="10" rx="5" fill="#33253f" />
    <rect x="622" y="742" width="32" height="10" rx="5" fill="#33253f" />
    <rect x="1026" y="578" width="22" height="212" fill="#33253f" />
    <rect x="548" y="556" width="524" height="22" rx="6" fill="#ffffff" stroke="#33253f" strokeWidth="3" />
    <rect x="886" y="522" width="34" height="34" rx="6" fill="#ffffff" stroke="#33253f" strokeWidth="3" />
    <path d="M920 530 q13 0 13 10 q0 10 -13 10" fill="none" stroke="#33253f" strokeWidth="3" />
    <path d="M903 546 c-6 -4 -9 -7 -9 -10 a4 4 0 0 1 9 -2 a4 4 0 0 1 9 2 c0 3 -3 6 -9 10Z" fill="#7c2439" />
    <rect x="1100" y="600" width="60" height="150" rx="26" fill="#1f8a80" stroke="#33253f" strokeWidth="3" />
    <rect x="1340" y="600" width="60" height="150" rx="26" fill="#1f8a80" stroke="#33253f" strokeWidth="3" />
    <rect x="1140" y="500" width="220" height="200" rx="40" fill="#1f8a80" stroke="#33253f" strokeWidth="3" />
    <rect x="1130" y="656" width="240" height="64" rx="22" fill="#2aa596" stroke="#33253f" strokeWidth="3" />
    <rect x="1120" y="716" width="260" height="34" rx="12" fill="#187168" stroke="#33253f" strokeWidth="3" />
    <rect x="1142" y="750" width="16" height="34" rx="3" fill="#33253f" />
    <rect x="1342" y="750" width="16" height="34" rx="3" fill="#33253f" />
</>
)

export const ting = {
  'utdanning': {
    boks: [90, 186, 240, 274],
    tegning: (
      <>
        <rect x="160" y="244" width="110" height="16" rx="3" fill="#ffc145" stroke="#33253f" strokeWidth="3" />
        <rect x="166" y="230" width="100" height="14" rx="3" fill="#1f8a80" stroke="#33253f" strokeWidth="3" />
        <path d="M186 214 L244 214 L241 232 Q215 238 189 232Z" fill="#2b1f38" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
        <path d="M155 206 L215 192 L275 206 L215 220Z" fill="#2b1f38" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
        <g className="tassel fbt"><path d="M215 206 L262 212 V236" fill="none" stroke="#ffc145" strokeWidth="4" strokeLinecap="round" /><rect x="256" y="234" width="12" height="16" rx="3" fill="#ffc145" stroke="#33253f" strokeWidth="2" /></g>
        <rect x="112" y="284" width="24" height="72" rx="2" fill="#7c2439" stroke="#33253f" strokeWidth="3" />
        <rect x="138" y="292" width="20" height="64" rx="2" fill="#ffc145" stroke="#33253f" strokeWidth="3" />
        <rect x="160" y="280" width="28" height="76" rx="2" fill="#1f8a80" stroke="#33253f" strokeWidth="3" />
        <rect x="190" y="296" width="22" height="60" rx="2" fill="#f3e7e4" stroke="#33253f" strokeWidth="3" />
        <rect x="222" y="286" width="22" height="70" rx="2" fill="#ef6a4c" stroke="#33253f" strokeWidth="3" transform="rotate(12 222 356)" />
        <rect x="262" y="288" width="24" height="68" rx="2" fill="#ece6f2" stroke="#33253f" strokeWidth="3" />
        <rect x="288" y="282" width="22" height="74" rx="2" fill="#7c2439" stroke="#33253f" strokeWidth="3" />
        <path d="M118 300 h12 M166 296 h16 M268 304 h12" stroke="#ffffff" strokeWidth="3" />
        <rect x="116" y="440" width="84" height="16" rx="2" fill="#ffc145" stroke="#33253f" strokeWidth="3" />
        <rect x="120" y="424" width="76" height="16" rx="2" fill="#1f8a80" stroke="#33253f" strokeWidth="3" />
        <rect x="118" y="408" width="80" height="16" rx="2" fill="#7c2439" stroke="#33253f" strokeWidth="3" />
        <rect x="214" y="378" width="24" height="78" rx="2" fill="#ef6a4c" stroke="#33253f" strokeWidth="3" />
        <rect x="240" y="386" width="20" height="70" rx="2" fill="#ffffff" stroke="#33253f" strokeWidth="3" />
        <rect x="262" y="376" width="26" height="80" rx="2" fill="#1f8a80" stroke="#33253f" strokeWidth="3" />
        <rect x="290" y="392" width="20" height="64" rx="2" fill="#f3e7e4" stroke="#33253f" strokeWidth="3" />
      </>
    ),
  },
  'om-meg': {
    boks: [395, 150, 170, 240],
    tegning: (
      <>
        <g className="tilt fbt">
        <path d="M420 180 L480 158 L540 180" fill="none" stroke="#33253f" strokeWidth="3" />
        <circle cx="480" cy="158" r="5" fill="#33253f" />
        <rect x="405" y="176" width="150" height="200" rx="4" fill="#ffc145" stroke="#33253f" strokeWidth="3" />
        <rect x="419" y="190" width="122" height="172" fill="#ffffff" stroke="#33253f" strokeWidth="2" />
        <rect x="429" y="200" width="102" height="152" fill="#ece6f2" />
        <Portrett x={429} y={200} />
        </g>
      </>
    ),
  },
  'prosjekter': {
    boks: [670, 330, 280, 232],
    tegning: (
      <>
        <rect className="glow" x="676" y="332" width="268" height="192" rx="20" fill="#ffffff" opacity="0" />
        <rect x="690" y="344" width="240" height="166" rx="12" fill="#33253f" />
        <rect x="704" y="358" width="212" height="136" rx="4" fill="#f3e7e4" />
        <rect x="704" y="358" width="212" height="18" rx="4" fill="#ece6f2" />
        <circle cx="716" cy="367" r="3.5" fill="#ef6a4c" />
        <circle cx="728" cy="367" r="3.5" fill="#ffc145" />
        <circle cx="740" cy="367" r="3.5" fill="#1f8a80" />
        <rect x="716" y="388" width="58" height="44" rx="5" fill="#ffc145" stroke="#33253f" strokeWidth="2" />
        <path d="M726 398 h10 v8 h-10Z M740 398 h10 v8 h-10Z M754 398 h10 v8 h-10Z M726 412 h10 v8 h-10Z M740 412 h10 v8 h-10Z M754 412 h10 v8 h-10Z" fill="#33253f" />
        <rect x="781" y="388" width="58" height="44" rx="5" fill="#ef6a4c" stroke="#33253f" strokeWidth="2" />
        <path d="M796 420 V400 L810 396 L824 400 V420 L810 416Z" fill="#ffffff" stroke="#33253f" strokeWidth="2" strokeLinejoin="round" />
        <rect x="846" y="388" width="58" height="44" rx="5" fill="#1f8a80" stroke="#33253f" strokeWidth="2" />
        <circle cx="868" cy="410" r="9" fill="none" stroke="#ffffff" strokeWidth="3" />
        <circle cx="882" cy="410" r="9" fill="none" stroke="#ffffff" strokeWidth="3" />
        <rect x="716" y="444" width="120" height="8" rx="4" fill="#33253f" />
        <rect x="716" y="460" width="78" height="8" rx="4" fill="#7c2439" />
        <rect className="blink" x="800" y="458" width="6" height="13" fill="#33253f" />
        <circle cx="912" cy="502" r="3" fill="#ffc145" />
        <rect x="796" y="510" width="28" height="32" fill="#33253f" />
        <rect x="764" y="540" width="92" height="16" rx="6" fill="#33253f" />
      </>
    ),
  },
  'erfaring': {
    boks: [572, 470, 110, 92],
    tegning: (
      <>
        <g className="flut fbb">
        <g transform="rotate(-9 625 540)"><rect x="590" y="480" width="70" height="64" rx="3" fill="#ffffff" stroke="#33253f" strokeWidth="3" /><path d="M600 494 h44 M600 506 h50 M600 518 h36" stroke="#33253f" strokeWidth="3" strokeLinecap="round" /></g>
        <g transform="rotate(7 632 540)"><rect x="600" y="484" width="70" height="60" rx="3" fill="#f3e7e4" stroke="#33253f" strokeWidth="3" /><path d="M610 498 h46 M610 510 h38 M610 522 h48" stroke="#33253f" strokeWidth="3" strokeLinecap="round" /></g>
        </g>
        <rect x="580" y="528" width="100" height="30" rx="4" fill="#ef6a4c" stroke="#33253f" strokeWidth="3" />
        <rect x="612" y="538" width="36" height="10" rx="2" fill="#ffffff" stroke="#33253f" strokeWidth="2" />
      </>
    ),
  },
  'kontakt': {
    boks: [950, 480, 110, 82],
    tegning: (
      <>
        <path d="M966 556 L978 522 H1032 L1044 556Z" fill="#ef6a4c" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="1005" cy="540" r="10" fill="#ffffff" stroke="#33253f" strokeWidth="3" />
        <circle cx="1005" cy="540" r="3" fill="#33253f" />
        <g className="ring fbb">
        <rect x="962" y="500" width="86" height="14" rx="7" fill="#ef6a4c" stroke="#33253f" strokeWidth="3" />
        <rect x="956" y="506" width="26" height="18" rx="7" fill="#ef6a4c" stroke="#33253f" strokeWidth="3" />
        <rect x="1028" y="506" width="26" height="18" rx="7" fill="#ef6a4c" stroke="#33253f" strokeWidth="3" />
        </g>
      </>
    ),
  },
  'ferdigheter': {
    boks: [370, 640, 170, 140],
    tegning: (
      <>
        <g className="tools">
        <rect x="404" y="652" width="18" height="72" rx="2" fill="#ffc145" stroke="#33253f" strokeWidth="3" transform="rotate(-12 413 720)" />
        <path d="M408 668 h8 M408 682 h6 M408 696 h8" stroke="#33253f" strokeWidth="2" transform="rotate(-12 413 720)" />
        <rect x="446" y="654" width="16" height="34" rx="6" fill="#7c2439" stroke="#33253f" strokeWidth="3" />
        <rect x="452" y="688" width="5" height="22" fill="#33253f" />
        <rect x="486" y="664" width="10" height="50" rx="3" fill="#f3e7e4" stroke="#33253f" strokeWidth="3" transform="rotate(10 491 714)" />
        <rect x="472" y="652" width="40" height="16" rx="3" fill="#33253f" transform="rotate(10 491 714)" />
        </g>
        <rect x="385" y="700" width="140" height="70" rx="6" fill="#1f8a80" stroke="#33253f" strokeWidth="3" />
        <rect x="385" y="700" width="140" height="18" rx="4" fill="#187168" stroke="#33253f" strokeWidth="3" />
        <rect x="447" y="712" width="16" height="16" rx="3" fill="#ffc145" stroke="#33253f" strokeWidth="3" />
      </>
    ),
  },
  'sykepleie': {
    boks: [1170, 525, 150, 140],
    tegning: (
      <>
        <g className="beat fb">
        <g transform="translate(1188 548) scale(1.2)">
        <path d="M48 82 C20 62 4 46 4 26 C4 13 14 4 26 4 C36 4 44 10 48 18 C52 10 60 4 70 4 C82 4 92 13 92 26 C92 46 76 62 48 82Z" fill="#7c2439" stroke="#33253f" strokeWidth="2.5" />
        <path d="M14 38 H32 L38 26 L46 52 L52 32 L57 38 H82" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        </g>
      </>
    ),
  },
}
