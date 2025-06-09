import { FaRegEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Contact() {
    return (
        <section className="contact-section">
            <h2 className="contact-section-title">📲 Get in touch</h2>
            <hr />
            <p className="contact-section-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta impedit officia et dolores natus architecto minus, quia consequatur, debitis repellat expedita laudantium deserunt repudiandae ipsum, maxime quo eum doloribus quam?
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quibusdam distinctio eum aut eligendi velit tenetur, ipsam error dolores? Optio similique suscipit ea? Suscipit aliquid ducimus ea nesciunt ipsum itaque.
            </p>
            <div className="contact-links-container">
                <a href="mailto:abizekv@gmail.com" className="btn btn-secondary logo-btn">
                    <FaRegEnvelope />
                    Email</a>
                <a href="https://www.linkedin.com/in/abizekv/" className="btn btn-secondary logo-btn">
                    <FaLinkedin />
                    Linkedin</a>
            </div>
        </section>

    )
}