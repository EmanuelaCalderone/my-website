//immagini e video dei progetti
import appStoreBadge from "../assets/badges/app-store-badge.svg";
import googlePlayBadge from "../assets/badges/google-play-badge.svg";
import chromeStoreBadge from "../assets/badges/chromeStoreBadge.png";

import CellulariVintage from "../assets/projects-images/CellulariVintage.mov";
import FnIta1 from "../assets/projects-images/FnIta1.png";
import FnIta2 from "../assets/projects-images/FnIta2.png";
import FnIta3 from "../assets/projects-images/FnIta3.png";
import SeIta1 from "../assets/projects-images/SeIta1.png";
import website from "../assets/projects-images/website.png";
import surfVideo from "../assets/projects-images/SurfOcean_recording.mp4";

export const projects = [
    {
        id: 1,
        title: "Emanuela Calderone Dev - website",
        description: {
            it: "Esattamente il sito che state visualizzando (non l'avreste mai detto, lo so). Sviluppato con React e Vite, ne ho curato la struttura, l’esperienza utente e l’estetica, mantenendo un design pulito e responsivo. Il sito è ancora giovane e pensato in origine per desktop, ma cresce giorno dopo giorno: grafica, responsive e logica in continuo aggiornamento.",
            en: "Exactly the website you’re currently looking at (I know, shocking). Built with React and Vite, I handled the structure, UX, and design to maintain a clean, responsive layout. The site is still young and was originally designed for desktop, but it grows day by day - with constant updates to visuals, responsiveness, and logic.",
        },
        images: [website],
        liveSite: "/joke",
        github: "https://github.com/EmanuelaCalderone/my-website",
    },
    {
        id: 2,
        title: "Fun Weather App",
        description: {
            it: "Un’app meteo insolita, sviluppata con React Native ed Expo. Include ricerca intelligente delle città, previsioni orarie e giornaliere, sfondi dinamici, supporto multilingua (IT/EN), ma soprattutto tanta antipatica ironia. Già disponibile per smartphone e tablet, è in costante aggiornamento e miglioramento, sia come grafica che come logica.",
            en: "An unconventional weather app developed with React Native and Expo. It includes smart city search, hourly and daily forecasts, dynamic backgrounds, multilingual support (IT/EN), and-most importantly-a healthy dose of sarcastic humor. Already available for smartphones and tablets, it’s constantly evolving and improving in both visuals and logic.",
        },
        images: [FnIta1, FnIta2, FnIta3],
        appStore: "https://apps.apple.com/it/app/fun-weather/id6752958077",
        comingSoonPlayStore: true,
        appStoreBadge: appStoreBadge,
        playStoreBadge: googlePlayBadge,
        github: "https://github.com/EmanuelaCalderone/FunWeather",
    },
    {
        id: 3,
        title: "Select & Export (Chrome Extension)",
        description: {
            it: "Un'estensione per Google Chrome nata da una personale esigenza di voler salvare immediatamente porzioni di testo; permette, infatti, di evidenziare parti di testo su qualsiasi pagina web, e scaricarle automaticamente in formato .txt. Include dark mode, interfaccia bilingue (IT/EN) e gestione dello storage locale. Un copia e incolla immediato per gente pigra o, come preferisco definirlo io, un semplice esempio di 'work smarter, not harder.'",
            en: "A Chrome extension born from a personal need to instantly save snippets of text. It allows you to highlight parts of any webpage and download them automatically in .txt format. Includes dark mode, bilingual UI (IT/EN), and local storage management. Basically, a copy-and-paste shortcut for lazy people-or, as I prefer to call it, a simple example of 'work smarter, not harder.'",
        },
        images: [SeIta1],
        chromeStore: "https://chromewebstore.google.com/detail/pldekcciphplbkgeokagjamiajnmicll/preview?hl=it&authuser=0",
        chromeStoreBadge: chromeStoreBadge,
        github: "https://github.com/EmanuelaCalderone/select-and-export-chrome-extension",
    },
    {
        id: 4,
        title: "Cellulari Vintage",
        description: {
            it: "Progetto finale e personale per la specializzazione in Front-end con Boolean (ho lavorato solo lato Front-end, la parte di Back-end ci è stata fornita preconfezionata ma troverete ugualmente il link anche al Back-end per i più curiosi e per completezza di informazione). Sviluppato con React e JavaScript, si tratta di un comparatore di cellulari vintage. L'idea nasce dalla più che nota nostalgia che contraddistingue la generazione dei Millennials per gli anni '90 e primi 2000. Sul sito è possibile confrontare i modelli che hanno fatto la storia, aggiungerli ai preferiti, filtrarli e ordinarli per anno o nome. Per i più curiosi, ho aggiunto il prezzo di uscita e l'equivalente odierno. Si stava meglio quando si stava peggio? Nah.",
            en: "Final and personal project for the Front-end specialization with Boolean (I worked exclusively on the Front-end; the Back-end was provided to us, but you’ll find its repo too-for the curious and for completeness). Developed with React and JavaScript, it’s a vintage-phone comparison app inspired by Millennial nostalgia for the 90s and early 2000s. On the site you can compare iconic models, add them to favorites, filter and sort them by year or name. For the truly curious, I even included their original launch prices and today’s equivalents. Was everything better back then? Nah.",
        },
        video: CellulariVintage,
        github_frontend:
            "https://github.com/EmanuelaCalderone/progetto-finale-spec-frontend-front",
        github_backend:
            "https://github.com/EmanuelaCalderone/progetto-finale-spec-frontend-back",
        liveSite: "https://vintage-phones.onrender.com/",
    },
    {
        id: 5,
        title: "OceanFlow Surf Shop",
        description: {
            it: "Progetto di gruppo realizzato durante il corso con Boolean. Si tratta di uno shop online dedicato ad attrezzatura da surf. Sviluppato con React, Node.js, Express e MySQL. Include filtri per categoria, nome e prezzo, gestione dei preferiti e del carrello, validazione dei form e design responsive. Realizzato da tutto il team con passione e caffeina.",
            en: "A group project developed during the Boolean course: an online shop dedicated to surf equipment. Built with React, Node.js, Express, and MySQL. It includes category, name, and price filters, favorites and cart management, form validation, and responsive design. Created by the whole team-with passion and plenty of caffeine.",
        },
        video: surfVideo,
        github_frontend: "https://github.com/EmanuelaCalderone/ocean_flow_react",
        github_backend: "https://github.com/EmanuelaCalderone/ocean_flow_API",
    },
];
