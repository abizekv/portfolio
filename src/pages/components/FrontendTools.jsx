import { FaHtml5, FaReact } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMui, SiVite } from "react-icons/si";

export default function FrontendTools () {
    return (
        <section className="tech-stack-container front-end">
                <div className="tech-stack">
                    <div className="tech-stack-icon">
                        <FaHtml5 />
                    </div>
                    <p className="tech-stack-name">HTML</p>
                </div>
                <div className="tech-stack">
                    <div className="tech-stack-icon">
                        <FaCss3Alt />
                    </div>
                    <p className="tech-stack-name">CSS</p>
                </div>
                <div className="tech-stack">
                    <div className="tech-stack-icon">
                        <IoLogoJavascript />
                    </div>
                    <p className="tech-stack-name">Javascript</p>
                </div>
                <div className="tech-stack">
                    <div className="tech-stack-icon">
                        <FaReact /> 
                    </div>
                    <p className="tech-stack-name">React</p>
                </div>

                <div className="tech-stack">
                    <div className="tech-stack-icon">
                        <SiMui/>
                    </div>
                    <p className="tech-stack-name">Material UI</p>
                </div>
                <div className="tech-stack">
                    <div className="tech-stack-icon">
                        <FaHtml5 />
                    </div>
                    <p className="tech-stack-name">Bootstrap</p>
                </div>
                <div className="tech-stack">
                    <div className="tech-stack-icon">
                        <SiVite />
                    </div>
                    <p className="tech-stack-name">Vite</p>
                </div>
            </section>
    )
}