import videoHero from "../assets/videoHero.mp4";
import "../styles/hero.css";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
    const { t } = useLanguage();

    return (
        <section id="hero" className="hero">
            {/* video hero */}
            <video
                className="hero_video"
                src={videoHero}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* contenuto sopra video */}
            <div className="hero_content">
                <h1>{t.hero.title}</h1>
                <h2>{t.hero.subtitle}</h2>
                <h3>{t.hero.tagline}</h3>

                <div className="hero_buttons">
                    <a href="#projects" className="btn">{t.hero.btnProjects}</a>
                    <a href="#contact" className="btn">{t.hero.btnContact}</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
