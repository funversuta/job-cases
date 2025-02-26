import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import projectData from "../../assets/MocDatas/projectData.json";
import "./Project.scss";
import Slider from "../../Components/Slider/Slider";
import ReplyIcon from "@mui/icons-material/Reply";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Header from "../../Components/Header/Header";
interface ProjectPageProps {
  name?: string; // Пример свойства
}

interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
  imgs: string[];
}

const ProjectPage: React.FC<ProjectPageProps> = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | undefined | null>(null);

  useEffect(() => {
    if (id) {
      const findProject = () => {
        const project = projectData.find((p) => p.id === parseInt(id, 10)); // parseInt для преобразования id в число
        setProject(project);
      };

      if (id) {
        findProject();
      }
    }
  }, [id]);

  if (!project) {
    return <div>Проект не найден или загрузка...</div>;
  }

  return (
    <>
      <Header />
      <div className="project">
        <Link className="link" to={"/job-cases/"}>
          <ReplyIcon /> Вернуться на главную
        </Link>
        <h1>{project.title}</h1>
        <Slider slides={project.imgs} />
        {/* <img src={img} /> */}
        <p className="descr" dangerouslySetInnerHTML={{__html :project.description}}/>
        {project.link && <a className="blankLink" href={`${project.link}`} target="_blank">
          Посмотреть ссылку на проект или новость о проекте
          <OpenInNewIcon />
        </a>}
      </div>
    </>
  );
};

export default ProjectPage;
