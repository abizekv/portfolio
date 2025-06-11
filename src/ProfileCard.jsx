import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaRegEnvelope } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import profileBanner from "./assets/profile-imgs/profile-banner.jpeg";
import profileImg from "./assets/profile-imgs/profile-img.png"
export default function ProfileCard() {
    return (
        <section className="profile-card">
            <div className="profile-card-cover-wrapper">
                <img src={profileBanner} alt="profile banner image" className="cover-img" />
            </div>
            <div className="profile-img-wrapper">
                <img src={profileImg} alt="Abhishek's profile picture" />
            </div>
            <div className="profile-card-body">
                <div className="profile-bio">
                    <h1 className="profile-name">Abhishek V</h1>
                    <p className="profile-about">
                        🧑🏻‍💻 Aspiring Full Stack Developer
                    </p>
                    <p className="profile-about">
                        🧑🏻‍🎓 BSc Math graduate
                    </p>
                    <p className="profile-about">
                        📍 Kerala, India
                    </p>
                </div>

                <div className="profile-card-socials-group">
                    <a href="https://www.linkedin.com/in/abizekv/" className="profile-card-social-link"><FaLinkedin /></a>
                    <a href="https://github.com/abizekv" className="profile-card-social-link"><FaGithubSquare /></a>
                    <a href="https://x.com/abizekv" className="profile-card-social-link"><FaTwitterSquare /></a>
                </div>
                <div className="profile-card-contact">
                    <a href="mailto:abizekv@gmail.com" className="btn btn-primary logo-btn">
                        <FaRegEnvelope />
                        Email
                    </a>
                    <a 
                    href="https://drive.google.com/file/d/1vXIIsIMV5__ZwWoF1w33y2H_67DF7Yzy/view?usp=drive_link"
                    target="_blank"
                    className="btn btn-outline logo-btn">
                        <IoDocumentTextOutline />
                        Resume
                    </a>
                </div>
            </div>
        </section>
    )
}