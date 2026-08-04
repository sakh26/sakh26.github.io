# Portefølje — React + GitHub Pages

## Mappestruktur

```
portfolio/
├── src/
│   ├── App.jsx              ← Setter sammen alle seksjonene
│   ├── App.css              ← All styling
│   ├── i18n/
│   │   ├── translations.js  ← Alt tekstinnhold, norsk og engelsk
│   │   └── LanguageContext.jsx
│   └── components/
│       ├── Nav.jsx          ← Meny + NO/EN-bytte
│       ├── Hero.jsx         ← Forside med portrettbilde
│       ├── Projects.jsx
│       ├── Skills.jsx
│       ├── Experience.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── public/
│   ├── portrait.jpg         ← Legg ditt eget bilde her (se steg 1)
│   └── portrait-placeholder.svg
└── README.md
```

---

## Steg 1 — Legg inn bildet ditt

Legg en fil ved navn **`portrait.jpg`** i `public/`-mappen. Forsiden viser den automatisk —
inntil den finnes, vises en plassholder-grafikk i stedet.

---

## Steg 2 — Rediger innholdet (norsk og engelsk)

Alt tekstinnhold ligger i `src/i18n/translations.js`, ett objekt for `no` og ett for `en`.
Rediger navn, prosjekter, e-post, GitHub-brukernavn osv. der — samme sted for begge språk.

Besøkende bytter språk med **NO / EN**-knappen øverst til høyre i menyen.

Søk også i filene under `src/components/` etter:

| Plasseholder | Bytt ut med |
|---|---|
| `ditt-brukernavn` | GitHub-brukernavnet ditt |
| `ditt-navn` (LinkedIn) | LinkedIn-brukernavnet ditt |

### Demovideo på et prosjektkort

Hvert prosjekt i `translations.js` kan ha to valgfrie felter:

```js
video: '/media/jeoparty-demo.mp4',
videoPoster: '/media/jeoparty-poster.jpg',
```

Legg filene i `public/media/`. Når `video` er satt, viser kortet et klikkbart
plakatbilde — selve videoen lastes først når noen trykker play, så mobilbrukere
ikke betaler for den uoppfordret. Uten `videoPoster` vises en nøytral flate med
play-knapp. Husk å sette feltene i **både** `no` og `en`.

Anbefalt format: MP4 (H.264), 1280×720, 30–45 sekunder, uten lyd, under ~8 MB.

---

## Steg 3 — Kjør prosjektet lokalt

```bash
npm install
npm run dev
```

Åpne lenken terminalen viser (som regel `http://localhost:5173`). Siden oppdateres automatisk når du lagrer endringer.

---

## Steg 4 — Opprett GitHub-repo og koble til

```bash
git init
git add .
git commit -m "første versjon av portefølje"
```

Gå til github.com og opprett et nytt repo med navnet:
**`ditt-brukernavn.github.io`**

```bash
git remote add origin https://github.com/ditt-brukernavn/ditt-brukernavn.github.io.git
git push -u origin main
```

---

## Steg 5 — Publiser med GitHub Pages

Siden dette er et React-prosjekt (Vite), må siden **bygges** før den kan hostes —
GitHub Pages kan ikke kjøre React direkte. Det gjøres automatisk av
`.github/workflows/pages.yml`, som ved hver push til `main` kjører lint, bygger
prosjektet og publiserer `dist/`.

To engangsinnstillinger på GitHub:

1. **Settings → General → Change repository visibility → Public**
   Pages fra private repo krever GitHub Pro; på gratisplanen må repoet være offentlig.
2. **Settings → Pages → Source → GitHub Actions**

Etter 1–2 minutter er siden live på **`https://ditt-brukernavn.github.io`**.

---

## Steg 6 — Oppdater siden fremover

```bash
# Rediger innhold i src/i18n/translations.js eller komponenter
git add .
git commit -m "oppdatering: ..."
git push
```

Pushen trigger workflowen — ingen egen deploy-kommando. Følg med under **Actions**-fanen.

---

## Anbefalt VS Code-utvidelse

For rask forhåndsvisning mens du redigerer kan du fortsatt bruke **Live Preview**,
men siden dette nå er en Vite-app, gir `npm run dev` (steg 3) live reload med raskere
oppdatering og riktig håndtering av React-komponentene.
