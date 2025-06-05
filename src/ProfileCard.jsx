import { FaLinkedin, FaGithubSquare, FaTwitterSquare, FaRegEnvelope } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
export default function ProfileCard() {
    return (
        <section className="profile-card">
            <div className="profile-card-cover-wrapper">
                <img src={null} alt="" className="cover-img" />
            </div>
            <div className="profile-img-wrapper">
                <img src="https://picsum.photos/200/300" alt="" />
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
                    <a href="" className="profile-card-social-link"><FaLinkedin /></a>
                    <a href="" className="profile-card-social-link"><FaGithubSquare /></a>
                    <a href="" className="profile-card-social-link"><FaTwitterSquare /></a>
                </div>
                <div className="profile-card-contact">
                    <a href="" className="btn btn-primary logo-btn">
                        <FaRegEnvelope />
                        Email
                    </a>
                    <a href="" className="btn btn-outline logo-btn">
                        <IoDocumentTextOutline />
                        Resume
                    </a>
                </div>
            </div>
        </section>
    )
}