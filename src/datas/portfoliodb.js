//COVERS
import appMeteo from "../assets/img/app-meteo.png";
import appCooking from "../assets/img/app-cooking.png";
import siteBali from "../assets/img/site-bali.png";
import appCountries from "../assets/img/app-countries-flag.png";
import pizzaMama from "../assets/img/site-pizzamama.png";
import sliderPhotos from "../assets/img/sliderPhotos.png";
import multiLangues from "../assets/img/multi-languages.png";
import maisonJungle from "../assets/img/maison-jungle.png";
import chrono from "../assets/img/chrono.png";

// LOGOS
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import js from "../assets/logos/javascript.png";
import react from "../assets/logos/react.png";
import python from "../assets/logos/python.png";
import django from "../assets/logos/django.png";

export const portfoliodb = [
  {
    name: "App Météo",
    author: "François Chevalier",
    id: "01js",
    year: "2021",
    url: "https://weatherapp.fch80.com/",
    cover: appMeteo,
    tools: ["HTML-CSS", "JS"],
    toolsLogo: html,
    toolsLogo2: css,
    toolsLogo3: js,
    language: "Fr",
    description:
      "Widget Météo géolocalisé permettant de connaitre le temps, la température et la localisation en temps réel. Il affiche également les températures à venir pour les 7 prochaines heures, ainsi que celles des 7 jours à venir.",
    api: "API utilisée : OpenWeatherMap",
    apiUrl: "https://openweathermap.org/",
  },
  {
    name: "App Cooking",
    author: "François Chevalier",
    id: "01re",
    year: "2022",
    url: "http://cooking-app.fch80.com/",
    cover: appCooking,
    tools: ["React-JS"],
    toolsLogo: html,
    toolsLogo2: css,
    toolsLogo3: react,
    language: "Fr",
    description:
      "Application permettant d'effectuer une recherche de recettes par ingrédients (en anglais). La vue de départ reprend les 250 recettes que nous renvoie l'API. La description précise, l'origine et une vidéo tutorielle sont disponibles pour chacune des recettes listées.",
    api: "API utilisée : TheMealDB",
    apiUrl: "https://www.themealdb.com/",
  },
  {
    name: "Site touristique Bali",
    author: "François Chevalier",
    id: "01ht",
    year: "2022",
    url: "http://site-bali.fch80.com/",
    cover: siteBali,
    tools: ["HTML-CSS"],
    toolsLogo: html,
    toolsLogo2: css,
    language: "Fr",
    description:
      "Site statique type 'Tour Operator' proposant une succincte présentation de l'île de Bali. " +
      "De plus, il propose 3 différentes offres pour la réservation d'un guide personnel. Enfin, un formulaire de contact (inactif) est positionné en bas de page.",
  },
  {
    name: "App Countries Flags",
    author: "François Chevalier",
    id: "02re",
    year: "2022",
    url: "http://countries-flags-app.fch80.com/",
    cover: appCountries,
    tools: ["React-JS"],
    toolsLogo: html,
    toolsLogo2: css,
    toolsLogo3: react,
    language: "Fr",
    description:
      "Application permettant d'effectuer une recherche de pays par continents. Les pays sont triés par le nombre d'habitants, il est possible d'étendre l'affichage grâce au slider (à gauche de la navigation). Enfin, une section 'Blog' (liée à une API que j'ai réalisée) ainsi qu'une section 'À propos' sont également disponibles.",
    api: "API utilisée : REST Countries",
    apiUrl: "https://restcountries.com/",
  },
  {
    name: "Site Pizza Mama",
    author: "François Chevalier",
    id: "01dj",
    year: "2022",
    url: "https://fchpizzamamadjango.herokuapp.com/",
    cover: pizzaMama,
    tools: ["PYTHON", "DJANGO"],
    toolsLogo: html,
    toolsLogo2: css,
    toolsLogo3: python,
    toolsLogo4: django,
    language: "Fr",
    description:
      "Site de pizzeria présentant sa carte. Le site a été réalisé en Python/Django et peut donc être facilement administré (ajout ou suppression de pizzas, modification des recettes, ...).",
  },
  {
    name: "Feature : Slider Photos",
    author: "François Chevalier",
    id: "03re",
    year: "2022",
    url: "http://photoslider.fch80.com/",
    cover: sliderPhotos,
    tools: ["React-JS"],
    toolsLogo: html,
    toolsLogo2: css,
    toolsLogo3: react,
    language: "Fr",
    description:
      "Simple fonctionnalité/composant 'slider' pouvant être exporté dans n'importe quel projet React.",
  },
  {
    name: "Feature : Site multi-langues",
    author: "François Chevalier",
    id: "04re",
    year: "2022",
    url: "http://multilanguages.fch80.com/",
    cover: multiLangues,
    tools: ["React-JS"],
    toolsLogo: html,
    toolsLogo2: css,
    toolsLogo3: react,
    language: "Fr",
    description:
      "Simple fonctionnalité/composant 'multi-langues' pouvant être exporté dans n'importe quel projet React.",
  },
  {
    name: "Site e-commerce : La Maison Jungle",
    author: "François Chevalier",
    id: "05re",
    year: "2022",
    url: "http://maison-jungle.fch80.com/",
    cover: maisonJungle,
    tools: ["React-JS"],
    toolsLogo: html,
    toolsLogo2: css,
    toolsLogo3: react,
    language: "Fr",
    description:
      "Site marchand commercialisant des plantes. Gestion de panier dynamique et affichage par catégorie.",
  },
  {
    name: "App Chrono",
    author: "François Chevalier",
    id: "06re",
    year: "2022",
    url: "http://chrono-react.fch80.com/",
    cover: chrono,
    tools: ["React-JS"],
    toolsLogo: html,
    toolsLogo2: css,
    toolsLogo3: react,
    language: "Fr",
    description:
      "Application type 'Pomodoro' permettant de gérer sa productivité entre des phases 'actives et des phases de 'break'.",
  },
];
