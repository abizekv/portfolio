import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiVite } from "react-icons/si";
export default function OtherTools() {
    return (
        <section className="tech-stack-container other-tools">
            <div className="tech-stack">
                <div className="tech-stack-icon">
                    <VscVscode />
                </div>
                <p className="tech-stack-name">VsCode</p>
            </div>
            <div className="tech-stack">
                <div className="tech-stack-icon">
                    <FaGitAlt />
                </div>
                <p className="tech-stack-name">Git</p>
            </div>
            <div className="tech-stack">
                <div className="tech-stack-icon">
                    <FaGithub />
                </div>
                <p className="tech-stack-name">GitHub</p>
            </div>
            <div className="tech-stack">
                <div className="tech-stack-icon">
                    <SiPostman />
                </div>
                <p className="tech-stack-name">Postman</p>
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