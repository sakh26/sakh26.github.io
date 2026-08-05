# Portefølje — Sara Khudadad

Min personlige porteføljeside. Den presenterer bakgrunnen min som utviklerstudent
og tidligere sykepleier, prosjektene jeg bygger og hvordan jeg kan kontaktes.

**Live:** https://sakh26.github.io

## Funksjonalitet

- **Tospråklig** — hele innholdet finnes på norsk og engelsk, og byttes med NO/EN
  i menyen. Sidetittel og `lang`-attributt følger valget.
- **Lyst og mørkt tema** — valget lagres i nettleseren og gjelder ved neste besøk.
- **Responsivt** — utfoldbar meny på mobil, og seksjoner som legger seg om på
  smale skjermer.
- **Demovideo på prosjektkort** — videoen lastes først når man trykker play, slik at
  mobilbrukere ikke betaler for den uoppfordret.
- **Aktiv seksjon i menyen** — menypunktet markeres etter hvor på siden man er.
- **Universell utforming** — tastaturvennlig meny, tekstalternativer på bilder og
  respekt for `prefers-reduced-motion` for de som har slått av animasjoner.

## Teknologi

React 19 · Vite · CSS uten rammeverk · oxlint · GitHub Actions · GitHub Pages

## Struktur

```
src/
├── App.jsx                  Setter sammen seksjonene
├── App.css                  All styling
├── components/              En komponent per seksjon
├── hooks/
│   ├── useActiveSection.js  Markerer menypunktet man er på
│   └── useTheme.js          Lyst/mørkt tema
└── i18n/
    ├── translations.js      Alt tekstinnhold, norsk og engelsk
    └── LanguageContext.jsx  Språkvalget deles med hele siden
```

Alt tekstinnhold ligger samlet i `src/i18n/translations.js`, med ett objekt for `no`
og ett for `en`. Ingen tekst er skrevet direkte inn i komponentene.

## Kjøre lokalt

```bash
npm install
npm run dev
```

## Publisering

`.github/workflows/pages.yml` kjører ved hver push til `main`: lint, produksjonsbygg
og publisering til GitHub Pages. Ingen manuell deploy.
