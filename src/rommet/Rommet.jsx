import { useCallback, useEffect, useRef, useState } from 'react'
import { rekkefolge, ting } from './rommet-innhold'
import { Innhold } from './Innhold'
import * as romStor from './tegning/RomStor'
import * as romLiten from './tegning/RomLiten'

const fokuserbare = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

// Knappen til en ting som faktisk vises. Begge rommene ligger i siden,
// men bare ett av dem vises, avhengig av skjermbredden.
function synligKnapp(id) {
  return [...document.querySelectorAll(`[data-ting="${id}"]`)].find((el) => el.offsetParent !== null)
}

function Pil({ venstre }) {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
      <path
        d={venstre ? 'M16 7 H2 M7 2 L2 7 L7 12' : 'M2 7 H16 M11 2 L16 7 L11 12'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Listeikon() {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" aria-hidden="true">
      <path d="M6 3 H16 M6 8 H16 M6 13 H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="2" cy="3" r="1.6" fill="currentColor" />
      <circle cx="2" cy="8" r="1.6" fill="currentColor" />
      <circle cx="2" cy="13" r="1.6" fill="currentColor" />
    </svg>
  )
}

function Scene({ rom, variant, onApne }) {
  const [bredde, hoyde] = rom.storrelse
  const prosent = (verdi, av) => `${(verdi / av) * 100}%`

  return (
    <div className={`rom-scene rom-scene-${variant}`}>
      <div className="rom-flate">
        <svg className="rom-bakgrunn" viewBox={`0 0 ${bredde} ${hoyde}`} aria-hidden="true" focusable="false">
          {rom.bakgrunn}
        </svg>
        {Object.entries(rom.ting).map(([id, { boks, tegning, lappTilHoyre }]) => (
          <button
            key={id}
            type="button"
            className="rom-ting"
            data-ting={id}
            aria-haspopup="dialog"
            style={{
              left: prosent(boks[0], bredde),
              top: prosent(boks[1], hoyde),
              width: prosent(boks[2], bredde),
              height: prosent(boks[3], hoyde),
            }}
            onClick={() => onApne(id)}
          >
            <svg viewBox={boks.join(' ')} aria-hidden="true" focusable="false">
              {tegning}
            </svg>
            <span className={lappTilHoyre ? 'rom-lapp rom-lapp-hoyre' : 'rom-lapp'}>
              <span className="rom-ping" />
              {ting[id].merkelapp}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

function Panel({ id, onLukk, onGaTil }) {
  const t = ting[id]
  const plass = rekkefolge.indexOf(id)
  const forrige = rekkefolge[(plass + rekkefolge.length - 1) % rekkefolge.length]
  const neste = rekkefolge[(plass + 1) % rekkefolge.length]
  const erPc = id === 'prosjekter'
  const panelRef = useRef(null)
  const rullRef = useRef(null)

  // Fokus inn i panelet når det åpnes, og hver gang det bytter til en ny ting.
  useEffect(() => {
    panelRef.current.focus()
    rullRef.current.scrollTop = 0
  }, [id])

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      onLukk()
      return
    }
    if (e.key !== 'Tab') return
    // Hold fokus inne i panelet.
    const alle = [...panelRef.current.querySelectorAll(fokuserbare)].filter((el) => el.offsetParent !== null)
    const forste = alle[0]
    const siste = alle[alle.length - 1]
    if (e.shiftKey && (document.activeElement === forste || document.activeElement === panelRef.current)) {
      e.preventDefault()
      siste.focus()
    } else if (!e.shiftKey && document.activeElement === siste) {
      e.preventDefault()
      forste.focus()
    }
  }

  return (
    <div
      className="rom-lag"
      onClick={(e) => {
        if (e.target === e.currentTarget) onLukk()
      }}
    >
      <section
        ref={panelRef}
        key={id}
        className={erPc ? 'rom-panel er-pc' : 'rom-panel'}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rom-panel-tittel"
        tabIndex={-1}
        onKeyDown={onKeyDown}
      >
        <div className="rom-ramme">
          <div className="rom-skjerm">
            <div className="rom-handtak" aria-hidden="true" />
            <div className="rom-vindu">
              <div className="rom-prikker" aria-hidden="true">
                <span />
                <span />
                <span />
                <span className="rom-sti">sara/{id}</span>
              </div>
              <button type="button" className="rom-lukk" aria-label="Lukk" onClick={onLukk}>
                <span className="rom-lukk-tekst" aria-hidden="true">
                  Lukk
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M2 2 L12 12 M12 2 L2 12" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="rom-rull" ref={rullRef}>
              <div className="rom-hode">
                <div>
                  <h2 id="rom-panel-tittel">
                    {t.tittel}
                    {erPc && (
                      <span className="blink" aria-hidden="true">
                        _
                      </span>
                    )}
                  </h2>
                  {t.undertittel && <p className="rom-undertittel">{t.undertittel}</p>}
                </div>
                {erPc && <p className="rom-antall">{t.prosjekter.length} PROSJEKTER</p>}
              </div>

              <Innhold t={t} />

              <div className="rom-fot-stor">
                <button type="button" className="rom-tilbake" onClick={onLukk}>
                  ← Tilbake til rommet
                </button>
                <button type="button" className="rom-neste" onClick={() => onGaTil(neste)}>
                  Neste ting i rommet: {ting[neste].merkelapp} →
                </button>
              </div>
            </div>

            <nav className="rom-fot-liten" aria-label="Bla mellom tingene i rommet">
              <button type="button" className="rom-forrige" onClick={() => onGaTil(forrige)}>
                ← {ting[forrige].merkelapp}
              </button>
              <button type="button" className="rom-neste" onClick={() => onGaTil(neste)}>
                {ting[neste].merkelapp} →
              </button>
            </nav>
          </div>
        </div>
        {erPc && (
          <>
            <div className="rom-fot-hals" aria-hidden="true" />
            <div className="rom-fot-plate" aria-hidden="true" />
          </>
        )}
      </section>
    </div>
  )
}

function Liste({ onTilbake }) {
  const tittelRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    tittelRef.current.focus()
  }, [])

  return (
    <main className="rom-liste">
      <nav className="rom-liste-topp" aria-label="Snarveier">
        <a className="rom-pille" href="/">
          <Pil venstre />
          Forsiden
        </a>
        <button type="button" className="rom-pille" onClick={onTilbake}>
          Tilbake til rommet
        </button>
        <a className="rom-pille rom-pille-mork" href="/portefolje/">
          Seriøs portefølje
        </a>
      </nav>

      <h1 ref={tittelRef} tabIndex={-1}>
        Sara Khudadad
      </h1>
      <p className="rom-liste-ingress">Sykepleier · Anvendt datateknologi, OsloMet</p>

      {rekkefolge.map((id) => (
        <section key={id} className="rom-liste-del" aria-labelledby={`liste-${id}`}>
          <h2 id={`liste-${id}`}>{ting[id].tittel}</h2>
          {ting[id].undertittel && <p className="rom-undertittel">{ting[id].undertittel}</p>}
          <Innhold t={ting[id]} />
        </section>
      ))}
    </main>
  )
}

export default function Rommet() {
  const [apen, setApen] = useState(null)
  const [liste, setListe] = useState(false)
  const sistApen = useRef(null)
  const fraListe = useRef(false)

  // Adressen viser hva som er åpent, så /rommet/#prosjekter åpner PC-en direkte.
  const settAdresse = (hash) => {
    history.replaceState(null, '', hash ? `#${hash}` : location.pathname + location.search)
  }

  const lesAdresse = useCallback(() => {
    const hash = decodeURIComponent(location.hash.slice(1))
    if (hash === 'liste') {
      setListe(true)
      setApen(null)
    } else if (ting[hash]) {
      setListe(false)
      setApen(hash)
    } else {
      setApen(null)
    }
  }, [])

  useEffect(() => {
    lesAdresse()
    window.addEventListener('hashchange', lesAdresse)
    return () => window.removeEventListener('hashchange', lesAdresse)
  }, [lesAdresse])

  // Når panelet lukkes, går fokus tilbake til tingen som sist var åpen.
  useEffect(() => {
    if (apen) {
      sistApen.current = apen
    } else if (sistApen.current) {
      synligKnapp(sistApen.current)?.focus()
      sistApen.current = null
    }
  }, [apen])

  // Tilbake fra listen: fokus på knappen som åpnet den.
  useEffect(() => {
    if (!liste && fraListe.current) {
      fraListe.current = false
      ;[...document.querySelectorAll('.rom-vis-liste')].find((el) => el.offsetParent !== null)?.focus()
    }
  }, [liste])

  const apne = (id) => {
    setApen(id)
    settAdresse(id)
  }

  const lukk = () => {
    setApen(null)
    settAdresse(null)
  }

  const visListe = () => {
    setListe(true)
    settAdresse('liste')
  }

  const skjulListe = () => {
    fraListe.current = true
    setListe(false)
    settAdresse(null)
  }

  if (liste) return <Liste onTilbake={skjulListe} />

  return (
    <main className="rom">
      <div className="rom-alt" inert={apen !== null}>
        <h1 className="lek-skjult">Rommet til Sara Khudadad</h1>

        <header className="rom-topp">
          <nav className="rom-topp-del" aria-label="Snarveier">
            <a className="rom-pille" href="/">
              <Pil venstre />
              Forsiden
            </a>
            <a className="rom-pille rom-pille-mork rom-bare-stor" href="/portefolje/">
              Seriøs portefølje
            </a>
          </nav>
          <button type="button" className="rom-pille rom-vis-liste rom-bare-stor" onClick={visListe}>
            <Listeikon />
            Vis alt som liste
          </button>
        </header>

        <Scene rom={romStor} variant="stor" onApne={apne} />
        <Scene rom={romLiten} variant="liten" onApne={apne} />

        <nav className="rom-bunn" aria-label="Snarveier nederst">
          <button type="button" className="rom-vis-liste" onClick={visListe}>
            <Listeikon />
            Vis som liste
          </button>
          <a className="rom-bunn-mork" href="/portefolje/">
            Seriøs portefølje
          </a>
        </nav>
      </div>

      {apen && <Panel id={apen} onLukk={lukk} onGaTil={apne} />}
    </main>
  )
}
