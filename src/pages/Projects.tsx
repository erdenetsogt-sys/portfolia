import { ProjectItem } from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helper/ProjectList";

export const Projects = () => (
  <div className="projects">
    <h1 className="title">個人プロジェクト</h1>

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
