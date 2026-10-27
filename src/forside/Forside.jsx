import { Bevegelsesbryter } from '../lek/Bevegelsesbryter'

const hjerte =
  'M48 82 C20 62 4 46 4 26 C4 13 14 4 26 4 C36 4 44 10 48 18 C52 10 60 4 70 4 C82 4 92 13 92 26 C92 46 76 62 48 82Z'
const stjerne = 'M28 3 C31 20 36 25 53 28 C36 31 31 36 28 53 C25 36 20 31 3 28 C20 25 25 20 28 3Z'

// Formene som svever på den lekne halvdelen. «liten» skjules på små skjermer.
function Former() {
  return (
    <>
      <div className="fs-form fs-merke liten" aria-hidden="true">
        <svg className="spin" width="150" height="150" viewBox="0 0 150 150">
          <defs>
            <path id="fs-ring" d="M75,75 m-55,0 a55,55 0 1,1 110,0 a55,55 0 1,1 -110,0" />
          </defs>
          <circle cx="75" cy="75" r="72" fill="#33253f" />
          <text fontFamily="Bricolage Grotesque, system-ui, sans-serif" fontWeight="700" fontSize="13" letterSpacing="2.4" fill="#ffc145">
            <textPath href="#fs-ring">DEN KREATIVE SIDEN · LEK OG LÆR · </textPath>
          </text>
          <path d="M75 50 C77 66 84 73 100 75 C84 77 77 84 75 100 C73 84 66 77 50 75 C66 73 73 66 75 50Z" fill="#ef6a4c" />
        </svg>
      </div>

      <div className="fs-form fs-hjerte" aria-hidden="true">
        <svg className="bob" viewBox="0 0 96 86">
          <path d={hjerte} fill="#7c2439" stroke="#33253f" strokeWidth="3" />
          <path d="M20 24 q4 -9 13 -9" stroke="#f3e7e4" strokeWidth="5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="fs-form fs-bolge liten" aria-hidden="true">
        <svg className="wig" width="160" height="40" viewBox="0 0 160 40">
          <path d="M6 20 q16 -18 32 0 t32 0 t32 0 t32 0 t20 0" fill="none" stroke="#33253f" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="fs-form fs-stjerne" aria-hidden="true">
        <svg className="pop" viewBox="0 0 56 56">
          <path d={stjerne} fill="#ffffff" stroke="#33253f" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="fs-form fs-pc liten" aria-hidden="true">
        <svg className="bob2" width="150" height="130" viewBox="0 0 150 130">
          <rect x="6" y="6" width="138" height="92" rx="10" fill="#1f8a80" stroke="#33253f" strokeWidth="3" />
          <rect x="18" y="18" width="114" height="68" rx="4" fill="#f3e7e4" />
          <path d="M30 36 h40 M30 50 h62 M30 66 h26" stroke="#33253f" strokeWidth="5" strokeLinecap="round" />
          <rect className="blink" x="62" y="59" width="10" height="14" fill="#7c2439" />
          <path d="M62 98 L56 120 H94 L88 98Z" fill="#33253f" />
        </svg>
      </div>

      <div className="fs-form fs-papir liten" aria-hidden="true">
        <svg className="sway" width="130" height="130" viewBox="0 0 130 130">
          <g transform="rotate(-11 65 65)">
            <rect x="25" y="20" width="80" height="100" rx="4" fill="#ffffff" stroke="#33253f" strokeWidth="3" />
          </g>
          <g transform="rotate(7 65 65)">
            <rect x="25" y="14" width="80" height="100" rx="4" fill="#f3e7e4" stroke="#33253f" strokeWidth="3" />
            <path d="M40 40 h50 M40 56 h50 M40 72 h32" stroke="#33253f" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      <div className="fs-form fs-prikk1" aria-hidden="true">
        <svg className="drift" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="12" fill="#ef6a4c" stroke="#33253f" strokeWidth="3" />
        </svg>
      </div>
      <div className="fs-form fs-prikk2" aria-hidden="true">
        <svg className="drift2" viewBox="0 0 26 26">
          <circle cx="13" cy="13" r="10" fill="#1f8a80" stroke="#33253f" strokeWidth="3" />
        </svg>
      </div>
      <div className="fs-form fs-ring liten" aria-hidden="true">
        <svg className="drift" width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="15" fill="none" stroke="#7c2439" strokeWidth="5" />
        </svg>
      </div>
    </>
  )
}

export default function Forside() {
  return (
    <main className="fs">
      <section className="fs-rolig" aria-label="Den seriøse porteføljen">
        <a className="fs-se" href="/portefolje/">
          Se porteføljen
        </a>
        <p className="fs-linje">Sykepleier · Anvendt datateknologi, OsloMet</p>
        <p className="fs-navn-v">SARA</p>
      </section>

      <section className="fs-leken" aria-label="Den kreative siden">
        <p className="fs-navn-h">Khudadad</p>
        <Former />
        <div className="fs-midt">
          <p className="fs-etikett">Den kreative siden</p>
          <h1 className="fs-tittel">Kom inn i rommet mitt</h1>
          <p className="fs-under">Klikk på tingene i rommet og bli kjent med meg.</p>
          <a className="fs-inn" href="/rommet/">
            Gå inn i rommet
            <svg className="nudge" width="26" height="20" viewBox="0 0 26 20" aria-hidden="true">
              <path d="M2 10 H22 M14 2 L22 10 L14 18" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <Bevegelsesbryter className="fs-bryter" />
      </section>

      <div className="fs-strek" aria-hidden="true" />
    </main>
  )
}
