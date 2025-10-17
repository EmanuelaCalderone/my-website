import imageL from "../assets/imageL.jpg";
import "../styles/about.css";
import { useLanguage } from "../context/LanguageContext";
import parse from "html-react-parser"; // per rendere HTML nei testi (es. link nel testo)

function About() {
    const { t } = useLanguage(); // traduzioni

    return (
        <section id="about" className="about-section">
            <h2>{t.about.title}</h2>

            <div className="about-top">
                <div className="about-image">
                    <img
                        src={imageL}
                        alt={t.about.caption}
                    />
                    <p className="image-caption">{t.about.caption}</p>
                </div>

                <div className="about-text">
                    <blockquote className="quote">{t.about.quote}</blockquote>

                    <p>{parse(t.about.paragraph1)}</p>
                    <p>{parse(t.about.paragraph2)}</p>
                    <p>{parse(t.about.paragraph3)}</p>
                    <p>{parse(t.about.paragraph4)}</p>
                    <p>{parse(t.about.paragraph5)}</p>
                </div>
            </div>

            <h2>{t.about.skillsTitle}</h2>

            <div className="skills-grid">
                {t.about.skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <span className="skill-badge">{index + 1}</span>
                        <p>{parse(skill)}</p>
                    </div>
                ))}
            </div>

            <h2>{t.about.stackTitle}</h2>

            <div className="stack-grid">
                <div className="stack-column">
                    <h4>{t.about.stack.frontend}</h4>
                    <ul className="tech-list">
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" /> HTML5</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" /> CSS3</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /> JavaScript</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /> React</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" /> React Native</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" alt="Expo" /> Expo</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" /> Bootstrap</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" /> Vite</li>
                    </ul>
                </div>

                <div className="stack-column">
                    <h4>{t.about.stack.backend}</h4>
                    <ul className="tech-list">
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /> Node.js</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" /> Express.js</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" /> MySQL</li>
                    </ul>

                    <h4>{parse(t.about.stack.tools)}</h4>
                    <ul className="tech-list">
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /> Git</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" /> GitHub</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" /> Figma</li>
                        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg" alt="Trello" /> Trello</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
