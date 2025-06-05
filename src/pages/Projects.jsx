import ProjectCard from "./components/ProjectCard";
import projectsData from "../../src/projectsData"



const projectCardElements = projectsData.map(pj => (
    <ProjectCard
        key={pj.id}
       {...pj}
    />
))
export default function Projects() {
    return (
        <section className="projects-section">
            <h2 className="project-section-title">📂 Projects</h2>
            <hr />
            <div className="projects-container">
                {projectCardElements}
            </div>
        </section>
    )
}


