import { ProjectItem } from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helper/ProjectList";

export const Projects = () => (
  <div className="projects">
    <div className="projectList">
      {ProjectList.map((project, idx) => {
        console.log(idx);
        return (
          <ProjectItem id={idx} image={project.image} name={project.name} />
        );
      })}
    </div>
  </div>
);
