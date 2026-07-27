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
| `DIN_YOUTUBE_ID_1/2/3` (i `translations.js`) | YouTube-video-ID-ene dine |

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

Siden dette nå er et React-prosjekt (Vite), må siden **bygges** før den kan hostes —
GitHub Pages kan ikke kjøre React direkte. Enkleste måte er `gh-pages`-pakken:

```bash
npm install --save-dev gh-pages
```

Legg til i `package.json` under `"scripts"`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Deretter, hver gang du vil publisere:

```bash
npm run deploy
```

Gå til repoet → **Settings** → **Pages** → velg branch `gh-pages` → **Save**.
Etter 1–2 minutter er siden live på **`https://ditt-brukernavn.github.io`**.

---

## Steg 6 — Oppdater siden fremover

```bash
# Rediger innhold i src/i18n/translations.js eller komponenter
git add .
git commit -m "oppdatering: ..."
git push
npm run deploy
```

---

## Anbefalt VS Code-utvidelse

For rask forhåndsvisning mens du redigerer kan du fortsatt bruke **Live Preview**,
men siden dette nå er en Vite-app, gir `npm run dev` (steg 3) live reload med raskere
oppdatering og riktig håndtering av React-komponentene.
