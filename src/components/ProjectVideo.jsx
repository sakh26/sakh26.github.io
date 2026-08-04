import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

/**
 * Klikk-for-å-spille demovideo. Før klikk lastes ingenting annet enn
 * plakatbildet, så mobilbrukere ikke betaler for en video de ikke ba om.
 */
export default function ProjectVideo({ src, poster, name }) {
  const { t } = useLanguage()
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <video
        className="proj-video"
        src={src}
        poster={poster ?? undefined}
        controls
        autoPlay
        muted
        playsInline
        preload="none"
      />
    )
  }

  return (
    <button
      type="button"
      className="proj-video-trigger"
      onClick={() => setPlaying(true)}
      aria-label={`${t.projects.videoPlay} — ${name}`}
      style={poster ? { backgroundImage: `url(${poster})` } : undefined}
    >
      <span className="proj-video-play" aria-hidden="true">
        ▶
      </span>
      <span className="proj-video-label">{t.projects.videoLabel}</span>
    </button>
  )
}
