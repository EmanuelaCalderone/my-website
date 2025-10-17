import "../styles/jokePage.css";
import { useLanguage } from "../context/LanguageContext";

function JokePage() {
    const { t } = useLanguage();
    return (
        <div className="JokePageSentence">
            <h4>{t.jokePage.sentence}</h4>
        </div>
    );
}

export default JokePage;
