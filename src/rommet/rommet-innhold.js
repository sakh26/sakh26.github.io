// All tekst i rommet og i listevisningen. Endre her, ikke i komponentene.
// Tekst i [hakeparentes] er plassholdere som må fylles inn.
// En lenke med href: null vises som plassholdertekst i stedet for en lenke.

// Rekkefølgen «Neste ting i rommet» går gjennom.
export const rekkefolge = ['om-meg', 'utdanning', 'prosjekter', 'sykepleie', 'erfaring', 'ferdigheter', 'kontakt']

export const ting = {
  'om-meg': {
    merkelapp: 'Om meg',
    tittel: 'Om meg',
    portrett: true,
    avsnitt: [
      'Etter flere år i helsevesenet oppdaget jeg at det var problemløsingen og systemene bak jeg likte best, så jeg tok steget over i utvikling. Bakgrunnen fra helse har gitt meg ryddige arbeidsvaner, ansvarsfølelse og erfaring med å samarbeide på tvers av fagfelt.',
      'Jeg er nysgjerrig av natur og liker å forstå hvordan ting henger sammen. Nå gleder jeg meg til å komme ut i arbeidslivet, lære av menneskene jeg jobber med og få erfaring fra prosjekter som folk faktisk bruker.',
    ],
  },

  utdanning: {
    merkelapp: 'Utdanning',
    tittel: 'Utdanning',
    punkter: [
      { tittel: 'Bachelor i Anvendt datateknologi', sted: 'OsloMet', tid: '2024 – 2027 · ferdig sommeren 2027' },
      { tittel: 'Sykepleierutdanning', sted: 'VID Vitenskapelige Høgskole', tid: '2021 – 2024' },
    ],
  },

  prosjekter: {
    merkelapp: 'Prosjekter',
    tittel: 'Prosjekter',
    undertittel: 'Tre ting jeg har bygget – fra bursdagsfest til bryllup.',
    prosjekter: [
      {
        bilde: 'quiz',
        merkelapp: 'Bursdagsprosjekt',
        tittel: 'Jeopardy-spill',
        tekst: 'Et quizspill jeg lagde til min egen bursdagsfeiring.',
        teknologi: ['React 19', 'TypeScript', 'Vite', 'Vitest', 'GitHub Actions'],
        lenke: { tekst: 'Prøv spillet', href: 'https://sarak.dev/Jeoparty/' },
      },
      {
        bilde: 'laering',
        merkelapp: 'Gruppeprosjekt · OsloMet',
        tittel: 'Læringsplattform',
        tekst: 'En læringsplattform vi bygde sammen i gruppe på studiet. [Min rolle]',
        teknologi: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'SQLite'],
        lenke: { tekst: 'Se prosjektet', href: null },
      },
      {
        bilde: 'bryllup',
        merkelapp: 'Pågående',
        merke: 'Under arbeid',
        tittel: 'Bryllupsnettside',
        tekst: 'En nettside til et bryllup. Den er ikke ferdig ennå – følg med!',
        teknologi: ['[Teknologi]'],
        lenke: { tekst: 'Se hvor langt jeg har kommet', href: null },
      },
    ],
  },

  sykepleie: {
    merkelapp: 'Sykepleie',
    tittel: 'Sykepleie',
    undertittel: 'Autorisert sykepleier',
    avsnitt: ['[Kort tekst om hva jeg tar med meg fra sykepleien inn i IT]'],
    punkter: [
      { tittel: 'Sykepleier, Hjemmetjenesten', sted: 'Kristiansand kommune', tid: '2024' },
      { tittel: 'Pleieassistent', sted: 'Kristiansand kommune / Oslo kommune', tid: '2019 – 2024' },
      { tittel: 'Sykepleierutdanning', sted: 'VID Vitenskapelige Høgskole', tid: '2021 – 2024' },
    ],
  },

  erfaring: {
    merkelapp: 'Erfaring',
    tittel: 'Erfaring',
    punkter: [
      {
        tittel: 'Studentassistent, IT-Servicedesk',
        sted: 'OsloMet',
        tid: 'okt. 2025 – nå',
        tekst: 'Håndterer henvendelser fra studenter og ansatte, fra feilsøking til veiledning i IT-systemene.',
      },
      {
        tittel: 'Medisinsk rådgiver',
        sted: 'Vertikal Helse / If Helseforsikring, Oslo',
        tid: 'juni 2025 – nå',
        tekst: 'Besvarer kundehenvendelser om sykdom og hva helseforsikringen dekker, og formidler videre til klinikker og leverandører i nettverket.',
      },
      { tittel: 'Miljøarbeider', sted: 'Edvard Munch VGS, Oslo kommune', tid: 'sep. 2024 – 2025', tekst: '[Én linje om hva jeg gjorde]' },
      { tittel: 'Sykepleier, Hjemmetjenesten', sted: 'Kristiansand kommune', tid: '2024', tekst: '[Én linje om hva jeg gjorde]' },
      { tittel: 'Pleieassistent', sted: 'Kristiansand kommune / Oslo kommune', tid: '2019 – 2024', tekst: '[Én linje om hva jeg gjorde]' },
      { tittel: 'Salg- og servicemedarbeider', sted: 'Peppes Pizza, Sørlandssenteret', tid: '2015 – 2020', tekst: '[Én linje om hva jeg gjorde]' },
    ],
  },

  ferdigheter: {
    merkelapp: 'Ferdigheter',
    tittel: 'Ferdigheter',
    grupper: [
      { tittel: 'Programmeringsspråk', ting: ['Java', 'C#', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'] },
      { tittel: 'Rammeverk & biblioteker', ting: ['Spring Boot', 'ASP.NET Core', 'FastAPI', 'React', 'Bootstrap'] },
      { tittel: 'Databaser & testing', ting: ['PostgreSQL', 'SQLite', 'Vitest', 'Testprinsipper (ISTQB)'] },
      {
        tittel: 'Verktøy & systemer',
        ting: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Vite', 'Linux', 'Claude Code', 'Canva', 'Microsoft Entra ID', 'Intune'],
      },
    ],
  },

  kontakt: {
    merkelapp: 'Kontakt',
    tittel: 'Kontakt',
    lenker: [
      { navn: 'E-post', tekst: 'sarasabir26@outlook.com', href: 'mailto:sarasabir26@outlook.com' },
      { navn: 'LinkedIn', tekst: 'linkedin.com/in/sara-khudadad-dev', href: 'https://www.linkedin.com/in/sara-khudadad-dev' },
      { navn: 'GitHub', tekst: 'github.com/sakh26', href: 'https://github.com/sakh26' },
    ],
  },
}
