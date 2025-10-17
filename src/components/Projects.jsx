import { useState, useRef, useEffect } from "react";
import { projects } from "../data/projects";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/projects.css";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
    const { t } = useLanguage();
    const [isReversed, setIsReversed] = useState(false);
    const orderedProjects = isReversed ? [...projects].reverse() : projects;

    return (
        <section id="projects" className="projects">
            <h2>{t.projects.title}</h2>

            <button className="order_btn" onClick={() => setIsReversed((p) => !p)}>
                {isReversed ? (
                    <>
                        <FaChevronUp className="order_icon" /> {t.projects.showNewest}
                    </>
                ) : (
                    <>
                        <FaChevronDown className="order_icon" /> {t.projects.showOldest}
                    </>
                )}
            </button>

            <div className="projects_list">
                {orderedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    const { t, language } = useLanguage();
    const images = project.images || [];
    const [current, setCurrent] = useState(0);

    const prevImage = () =>
        setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
    const nextImage = () =>
        setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));

    //rif al contenitore del carosello
    const containerRef = useRef(null);

    //gestione swipe per mobile
    useEffect(() => {
        const carouselContainer = containerRef.current;
        if (!carouselContainer || images.length <= 1) return;

        let startX = 0;

        const handleTouchStart = (e) => {
            startX = e.touches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) nextImage(); // swipe sinistra > next
                else prevImage();          // swipe destra > prev
            }
        };

        carouselContainer.addEventListener("touchstart", handleTouchStart);
        carouselContainer.addEventListener("touchend", handleTouchEnd);

        return () => {
            carouselContainer.removeEventListener("touchstart", handleTouchStart);
            carouselContainer.removeEventListener("touchend", handleTouchEnd);
        };
    }, [images.length, nextImage, prevImage]);

    return (
        <div className="project_card">
            <div className="project_image">
                {images.length > 0 ? (
                    <div className="carousel_container" ref={containerRef}>
                        <div className="carousel">
                            {images.map((img, i) => {
                                const offset = (i - current + images.length) % images.length;
                                let pos = "hidden";
                                if (offset === 0) pos = "active";
                                else if (offset === 1) pos = "side right";
                                else if (offset === images.length - 1) pos = "side left";

                                return (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`${project.title} preview ${i + 1}`}
                                        className={`carousel_item ${pos}`}
                                    />
                                );
                            })}
                            {images.length > 1 && (
                                <>
                                    <button className="carousel_btn prev" onClick={prevImage}>
                                        ‹
                                    </button>
                                    <button className="carousel_btn next" onClick={nextImage}>
                                        ›
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ) : project.video ? (
                    <video
                        controls
                        className="carousel_video"
                        preload="metadata"
                        playsInline
                        muted={false}
                        poster={project.poster || `${project.video}#t=0.1`}
                    >
                        <source src={project.video + "#t=0.1"} type="video/mp4" />
                        {t.projects.videoUnsupported ||
                            "Il tuo browser non supporta la riproduzione video."}
                    </video>
                ) : (
                    <img
                        src="https://via.placeholder.com/380x250?text=No+Preview"
                        alt="No preview"
                    />
                )}
            </div>

            <div className="project_info">
                <h3>{project.title}</h3>
                <p>{project.description[language] || project.description.it}</p>

                <div
                    className={`project_links ${project.appStore || project.playStoreBadge || project.github
                        ? "project_links--stacked"
                        : ""
                        }`}
                >
                    {project.liveSite && (
                        <Link to={project.liveSite}>
                            {t.projects.visitSite}
                        </Link>
                    )}

                    {project.playStoreBadge && (
                        <div className="store_badge disabled">
                            <img
                                src={project.playStoreBadge}
                                alt="Disponibile su Google Play"
                                className="badge_img"
                            />
                        </div>
                    )}

                    {project.appStore && project.appStoreBadge && (
                        <a
                            href={project.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="store_badge badge_apple"
                        >
                            <img
                                src={project.appStoreBadge}
                                alt="Scarica su App Store"
                                className="badge_img badge_apple"
                            />
                        </a>
                    )}

                    {project.chromeStore && project.chromeStoreBadge && (
                        <a
                            href={project.chromeStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="store_badge"
                        >
                            <img
                                src={project.chromeStoreBadge}
                                alt="Disponibile nel Chrome Web Store"
                                className="badge_img"
                            />
                        </a>
                    )}

                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            {t.projects.github}
                        </a>
                    )}
                    {project.github_frontend && (
                        <a
                            href={project.github_frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t.projects.githubFrontend}
                        </a>
                    )}
                    {project.github_backend && (
                        <a
                            href={project.github_backend}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t.projects.githubBackend}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Projects;
