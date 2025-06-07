import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMongoose } from "react-icons/si";
import { SiPassport } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";
export default function BackendTools(){
    return (
        <section className="tech-stack-container front-end">
                        <div className="tech-stack">
                            <div className="tech-stack-icon">
<FaNodeJs/>
                            </div>
                            <p className="tech-stack-name">NodeJS</p>
                        </div>
                        <div className="tech-stack">
                            <div className="tech-stack-icon">
                                <SiExpress/>
                            </div>
                            <p className="tech-stack-name">Express</p>
                        </div>
                        <div className="tech-stack">
                            <div className="tech-stack-icon">
                                <DiMongodb/>
                            </div>
                            <p className="tech-stack-name">MongoDB</p>
                        </div>
                        <div className="tech-stack">
                            <div className="tech-stack-icon">
                                <SiMongoose/>
                            </div>
                            <p className="tech-stack-name">Mongoose</p>
                        </div>
        
                        <div className="tech-stack">
                            <div className="tech-stack-icon">
                                <SiPassport/>
                            </div>
                            <p className="tech-stack-name">PassportJS</p>
                        </div>
                        <div className="tech-stack">
                            <div className="tech-stack-icon">
                                <FaShieldAlt/>
                            </div>
                            <p className="tech-stack-name">Bcrypt</p>
                        </div>
                    </section>
    )
}