import { nanoid } from "nanoid";
import ProjectImages from "./ProjectImages";

const ProjectData = [
  {
    key: nanoid(10),
    name: "Caesar chiffer løser",
    image: ProjectImages.caesarCipher,
    githubLink: "https://github.com/Georg-Kodehode/caesar-cipher-solver",
    siteLink: "https://georg-kodehode.github.io/caesar-cipher-solver/",
    description: "En applikasjon som lar brukeren dekode og enkode tekst.",
  },
  {
    key: nanoid(10),
    name: "Digitalt visittkort",
    image: ProjectImages.digitalBusinessCard,
    githubLink: "https://github.com/Georg-Kodehode/digital-business-card",
    siteLink: "https://georg-kodehode.github.io/digital-business-card/",
    description: "Et digitalt visittkort.",
  },
  {
    key: nanoid(10),
    name: "Fargepalett generator",
    image: ProjectImages.colorSchemeGenerator,
    githubLink: "https://github.com/Georg-Kodehode/color-scheme-generator",
    siteLink: "https://georg-kodehode.github.io/color-scheme-generator/",
    description: "Generer en fargepalett basert på en farge valgt av brukeren.",
  },
  {
    key: nanoid(10),
    name: "Film watchlist",
    image: ProjectImages.movieWatchlist,
    githubLink: "https://github.com/Georg-Kodehode/movie-watchlist",
    siteLink: "https://georg-kodehode.github.io/movie-watchlist/",
    description:
      "En watchlist for filmer, serier og spill, som bruker local storage.",
  },
  {
    key: nanoid(10),
    name: "Juleside",
    image: ProjectImages.countdownToChristmas,
    githubLink: "https://github.com/Georg-Kodehode/countdown-to-christmas",
    siteLink: "https://georg-kodehode.github.io/countdown-to-christmas/",
    description:
      "En jule-nettside som teller ned til jul. Nettsiden lar også brukeren skrive julehilsener som lagres i local storage.",
  },
  {
    key: nanoid(10),
    name: "Parallax nettside",
    image: ProjectImages.parallaxSite,
    githubLink:
      "https://github.com/Georg-Kodehode/html-and-css-task1-parallax-site",
    siteLink:
      "https://georg-kodehode.github.io/html-and-css-task1-parallax-site/",
    description: "En parallax nettside.",
  },
  {
    key: nanoid(10),
    name: "Passordgenerator",
    image: ProjectImages.passwordGenerator,
    githubLink: "https://github.com/Georg-Kodehode/password-generator",
    siteLink: "https://georg-kodehode.github.io/password-generator/",
    description:
      "En applikasjon som genererer passord på minimum 15 tegn. Passordet må inkludere tall og spesialtegn.",
  },
  {
    key: nanoid(10),
    name: "Pokédex",
    image: ProjectImages.pokedex,
    githubLink: "https://github.com/Georg-Kodehode/pokedex",
    siteLink: "https://georg-kodehode.github.io/pokedex/",
    description:
      "En Pokédex som lister opp alle Pokémon som finnes i pokeapi API-en, og lar deg søke etter Pokémon.",
  },
  {
    key: nanoid(10),
    name: "Quiz app",
    image: ProjectImages.quizzical,
    githubLink: "https://github.com/Georg-Kodehode/quizzical-app",
    siteLink: "https://georg-kodehode.github.io/quizzical-app/",
    description: "En quiz app som henter spørsmål fra Open Trivia DB API.",
  },
  {
    key: nanoid(10),
    name: "Reisedagbok",
    image: ProjectImages.travelJournal,
    githubLink: "https://github.com/Georg-Kodehode/travel-journal",
    siteLink: "https://georg-kodehode.github.io/travel-journal/",
    description: "En reisedagbok nettside.",
  },
  {
    key: nanoid(10),
    name: "Solsystem nettside",
    image: ProjectImages.solarSystemSite,
    githubLink: "https://github.com/Georg-Kodehode/hoestoppgave-haugesund-c",
    siteLink: "https://georg-kodehode.github.io/hoestoppgave-haugesund-c/",
    description:
      "En gruppeoppgave der vi brukte en API til å lage en nettside om solsystemet.",
  },
  {
    key: nanoid(10),
    name: "Strømmåler UI",
    image: ProjectImages.techyon,
    githubLink: "https://github.com/Georg-Kodehode/techyon-ui-time-series",
    siteLink: "https://georg-kodehode.github.io/techyon-ui-time-series/",
    description:
      "Et UI for strømmålere, der en bruker kan få oversikt over sine strømmålere. Oppgave gitt av bedrift.",
  },
  {
    key: nanoid(10),
    name: "Figma - streaming nettside",
    image: ProjectImages.figmaStreamingSite,
    githubLink: "",
    figmaLink:
      "https://www.figma.com/file/b7s7y727QVZ0L7ndUuidfO/Georg---various?node-id=203%3A2049&t=sQlkiuZUtZWN73Zc-0",
    siteLink:
      "https://www.figma.com/proto/b7s7y727QVZ0L7ndUuidfO/Georg---various?node-id=203%3A2049&scaling=min-zoom&page-id=14%3A391&starting-point-node-id=203%3A2049",
    description:
      "En enkel versjon av Netflix gjenskapt i Figma. Figmasiden inkluderer tre carousel-er og en dropdown meny",
  },
  {
    key: nanoid(10),
    name: "Figma - Tripletex nettside",
    image: ProjectImages.figmaTripletexSite,
    githubLink: "",
    figmaLink:
      "https://www.figma.com/file/b7s7y727QVZ0L7ndUuidfO/Georg---various?node-id=203%3A1357&t=sQlkiuZUtZWN73Zc-0",
    siteLink:
      "https://www.figma.com/proto/b7s7y727QVZ0L7ndUuidfO/Georg---various?node-id=203%3A1357&scaling=min-zoom&page-id=4%3A2",
    description: "Tripletex sin nettside gjenskapt i Figma.",
  },
];

export default ProjectData;
