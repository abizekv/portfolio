import { IoMdEye, IoMdCode } from "react-icons/io";
import projectImg from "../../assets/project-imgs/mockup.jpg"
export default function ProjectCard(props) {

    const techStackElements = props.techStacks.map(ts => (
        <div
            key={crypto.randomUUID()}
            className="tech-stack">

            <ts.logo style={{ color: ts.logoColor }} />
            {ts.name}
        </div>
    ))

    return (
        <div className="project-card">
            <img className="project-img" src={props.projectImgSrc} alt="" />
            <div className="card-body">
                <h3 className="project-title">
                    {props.projectName}
                </h3>
                <p className="project-description">
                    {props.projectDescription}
                </p>
                <div className="project-tech-stacks-container">
                    {techStackElements}
                </div>
                <div className="project-links">
                    <a href={props.sourceCodeUrl} className="view-code">
                        <IoMdCode />
                        View Code
                    </a>
                    <a href={props.projectUrl} className="see-project">
                        <IoMdEye />
                        See Project</a>
                </div>
            </div>
        </div>
    )
}