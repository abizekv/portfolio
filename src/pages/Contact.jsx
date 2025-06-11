import { FaRegEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Contact() {
    return (
        <section className="contact-section">
            <h2 className="contact-section-title">📲 Get in touch</h2>
            <hr />
            <p className="contact-section-text">
                Feel free to reach out if you’d like to connect, collaborate, or just talk tech. I’m always happy to chat!
            </p>
            <div className="contact-links-container">
                <a href="mailto:abizekv@gmail.com"
                target="_blank"
                className="btn btn-secondary logo-btn">
                    <FaRegEnvelope />
                    Email</a>
                <a href="https://www.linkedin.com/in/abizekv/"
                target="_blank"
                className="btn btn-secondary logo-btn">
                    <FaLinkedin />
                    Linkedin</a>
            </div>
        </section>

    )
}