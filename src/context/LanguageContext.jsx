import { createContext, useContext, useState, useEffect } from "react";
import translations from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    //inizializzo la lingua leggendo da localStorage / "it" di default
    const [language, setLanguage] = useState(localStorage.getItem("lang") || "it");

    //salvo la lingua scelta ogni volta che cambia
    useEffect(() => {
        localStorage.setItem("lang", language);
    }, [language]);

    //recupero le traduzioni della lingua corrente
    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

//hook personalizzato per accedere alla lingua ovunque
export function useLanguage() {
    return useContext(LanguageContext);
}
