import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";
import mapImage from "../assets/mapImage.png";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
    const { t, language } = useLanguage();

    //link dinamico in base alla lingua
    const linkedInUrl =
        language === "en"
            ? "https://www.linkedin.com/in/emanuela-calderone-webdeveloper/?locale=en_US"
            : "https://www.linkedin.com/in/emanuela-calderone-webdeveloper/";

    return (
        <footer className="footer">
            <div className="footer_left">
                <p className="footer_location">{t.footer.location}</p>
            </div>

            <div className="footer_center">
                <div className="footer_socials">
                    <a href="mailto:emanuelacld89@gmail.com" target="_blank" aria-label="Email" rel="noreferrer">
                        <FaEnvelope />
                    </a>
                    <a
                        href={linkedInUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/EmanuelaCalderone"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                </div>
                <p className="footer_copy">{t.footer.copy}</p>
            </div>

            <div className="footer_right">
                <img src={mapImage} alt={t.footer.mapAlt} />
            </div>
        </footer>
    );
}

export default Footer;
