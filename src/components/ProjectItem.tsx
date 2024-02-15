import { useNavigate } from "react-router-dom";
type Project = {
  image: string;
  name: string;
  id: number;
};

export const ProjectItem = ({ image, name, id }: Project) => {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate(`/project/${id}`);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
};
