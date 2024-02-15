import { useParams } from "react-router-dom";
import { ProjectList, OneProjectType } from "../helper/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";

export const ProjectDisplay = () => {
  const { id } = useParams<{ id?: string }>();
  const projectId: number = id ? parseInt(id) : -1;
  const project: OneProjectType = ProjectList[projectId];

  if (!project) {
    return <div>Project not found!</div>;
  }
  return (
    <div className="projectDisplay">
      <h1>{project.name}</h1>
      <div
        style={{ backgroundImage: `url(${project.image})` }}
        className="displayImage"
      />
      <p>
        <b>Skills :</b>
        {project.skills}
      </p>
      <p>
        <b>Explain :</b>
        {project.detail}
      </p>

      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
    </div>
  );
};
