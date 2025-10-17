import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import logoDev from "../assets/logoDev.png";
import { Globe } from "lucide-react";
import "../styles/navbar.css";

function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [open, setOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const dropdownRef = useRef(null);

    //gestione larghezza finestra
    useEffect(() => {
        const updateWidth = () => setWindowWidth(window.innerWidth);
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const toggleDropdown = () => setOpen((prev) => !prev);

    const handleSelect = (lang) => {
        setLanguage(lang);
        setOpen(false);
    };

    //useEffect per chiudere dropdown anche cliccando fuori
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const links = document.querySelectorAll('.navbar a[href^="#"]');
        const handleLinkClick = () => setOpen(false);
        links.forEach((link) => link.addEventListener("click", handleLinkClick));
        return () => links.forEach((link) => link.removeEventListener("click", handleLinkClick));
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar_inner">
                <a href="#hero" className="navbar_logo">
                    <img src={logoDev} alt="Emanuela Calderone Dev logo" />
                </a>

                <div className="navbar_links">
                    <a href="#about">{t.navbar.about}</a>
                    <a href="#projects">{t.navbar.projects}</a>
                    <a href="#contact">{t.navbar.contact}</a>
                </div>

                <div className="navbar_lang" ref={dropdownRef}>
                    <button
                        className="lang_button"
                        onClick={() => {
                            if (windowWidth <= 600) {
                                // mobile > cambio diretto lingua al click
                                setLanguage(language === "it" ? "en" : "it");
                            } else {
                                // tablet / desktop > apro dropdown
                                toggleDropdown();
                            }
                        }}
                    >
                        <Globe size={18} />
                        <span>{language === "it" ? t.navbar.italian : t.navbar.english}</span>

                        {/* freccia visibile su tablet e desktop */}
                        {windowWidth > 600 && (
                            <span className={`arrow ${open ? "up" : ""}`}>▾</span>
                        )}
                    </button>

                    {open && windowWidth > 600 && (
                        <div className="lang_dropdown">
                            <button onClick={() => handleSelect("it")}>
                                {t.navbar.italian}
                            </button>
                            <button onClick={() => handleSelect("en")}>
                                {t.navbar.english}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
