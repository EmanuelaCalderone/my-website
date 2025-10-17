import { useState } from "react";
import "../styles/contact.css";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
    const { t } = useLanguage();
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/movknpnz", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else throw new Error("Form submission failed");
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="contact">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.subtitle}</p>

            <form className="contact_form" onSubmit={handleSubmit}>
                <div className="form_group">
                    <input
                        type="text"
                        name="name"
                        placeholder={t.contact.name}
                        required
                    />
                </div>

                <div className="form_group">
                    <input
                        type="email"
                        name="email"
                        placeholder={t.contact.email}
                        required
                    />
                </div>

                <div className="form_group">
                    <textarea
                        name="message"
                        rows="5"
                        placeholder={t.contact.message}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn_submit">
                    {t.contact.send}
                </button>

                {status === "success" && (
                    <p className="form_message success">{t.contact.success}</p>
                )}
                {status === "error" && (
                    <p className="form_message error">{t.contact.error}</p>
                )}
            </form>
        </section>
    );
}

export default Contact;
