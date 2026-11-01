import { useId } from 'react'
import { Portrett } from './tegning/Portrett'
import { prosjektbilder } from './tegning/Prosjektbilder'

// Tekst i [hakeparentes] er plassholdere. De markeres, så de er lette å se.
function Tekst({ children }) {
  return children.split(/(\[[^\]]+\])/).map((del, i) =>
    del.startsWith('[') ? (
      <span key={i} className="rom-plass">
        {del}
      </span>
    ) : (
      del
    ),
  )
}

function Prosjektkort({ p }) {
  const bilde = prosjektbilder[p.bilde]
  const monster = 'm' + useId().replace(/[^a-zA-Z0-9]/g, '')

  return (
    <article className="rom-kort">
      <svg className="rom-kort-bilde" viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice" role="img" aria-label={bilde.alt}>
        {bilde.tegning(monster)}
      </svg>
      <div className="rom-kort-tekst">
        <div className="rom-kort-topp">
          <p className="rom-kort-lapp">{p.merkelapp}</p>
          {p.merke && <span className="rom-kort-merke">{p.merke}</span>}
        </div>
        <h3>{p.tittel}</h3>
        <p>
          <Tekst>{p.tekst}</Tekst>
        </p>
        <ul className="rom-tagger" aria-label="Teknologi">
          {p.teknologi.map((navn) => (
            <li key={navn}>
              <Tekst>{navn}</Tekst>
            </li>
          ))}
        </ul>
        {p.lenke && (
          <a className="rom-kort-lenke" href={p.lenke.href}>
            {p.lenke.tekst} →
          </a>
        )}
      </div>
    </article>
  )
}

// Innholdet til én ting. Brukes både i panelet og i listevisningen.
export function Innhold({ t }) {
  return (
    <div className="rom-innhold">
      {(t.portrett || t.avsnitt) && (
        <div className="rom-om">
          {t.portrett && (
            <svg className="rom-portrett" viewBox="0 0 102 152" role="img" aria-label="Tegning av Sara">
              <Portrett />
            </svg>
          )}
          {t.avsnitt && (
            <div className="rom-avsnitt">
              {t.avsnitt.map((a) => (
                <p key={a}>
                  <Tekst>{a}</Tekst>
                </p>
              ))}
            </div>
          )}
        </div>
      )}

      {t.punkter && (
        <ul className="rom-punkter">
          {t.punkter.map((p) => (
            <li key={p.tittel + p.tid}>
              <p className="rom-tid">{p.tid}</p>
              <h3>{p.tittel}</h3>
              <p className="rom-sted">{p.sted}</p>
              {p.tekst && (
                <p>
                  <Tekst>{p.tekst}</Tekst>
                </p>
              )}
            </li>
          ))}
        </ul>
      )}

      {t.prosjekter && (
        <div className="rom-kortene">
          {t.prosjekter.map((p) => (
            <Prosjektkort key={p.tittel} p={p} />
          ))}
        </div>
      )}

      {t.grupper &&
        t.grupper.map((g) => (
          <div key={g.tittel} className="rom-gruppe">
            <h3>{g.tittel}</h3>
            <ul className="rom-tagger">
              {g.ting.map((navn) => (
                <li key={navn}>{navn}</li>
              ))}
            </ul>
          </div>
        ))}

      {t.lenker && (
        <ul className="rom-lenker">
          {t.lenker.map((l) => (
            <li key={l.navn}>
              <a href={l.href}>
                <span className="rom-lenke-navn">{l.navn}</span>
                {l.tekst}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
