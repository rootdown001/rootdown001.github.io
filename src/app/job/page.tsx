import jobImg from "/public/assets/projects/jobBoard.png";
import ProjectDisplay from "../components/ProjectDisplay";

export default function Job() {
  const projectImg = jobImg;
  const title = "Job Board";
  const subtitle = "Under Construction - React JS / Typescript / SQLLite";
  const description = [
    "This project is a job board that is built upon an existing codebase. I tackled this because it presented a unique approach to development, mirroring real-world scenarios where understanding existing codebases and independently solving tasks are crucial skills. It began with a codebase filled with complexity, reflecting the challenges of a mature project. This complexity served as an opportunity for growth, as deciphering and building upon existing structures is a fundamental aspect of professional development.",
  ];
  const hrefDemo = "";
  const targetDemo = "_blank";
  const hrefCode = "";
  const targetCode = "_blank";
  const tech = ["Javascript", "React", "Tailwind", "Vite", "SQLLite"];

  return (
    <div>
      <ProjectDisplay
        projectImg={projectImg}
        title={title}
        subtitle={subtitle}
        description={description}
        hrefDemo={hrefDemo}
        targetDemo={targetDemo}
        hrefCode={hrefCode}
        targetCode={targetCode}
        tech={tech}
      />
    </div>
  );
}
