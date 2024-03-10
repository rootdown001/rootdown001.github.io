import blogImg from "/public/assets/projects/blog.png";
import ProjectDisplay from "../components/ProjectDisplay";

export default function Blog() {
  const projectImg = blogImg;
  const title = "React Blog (Placeholder API)";
  const subtitle = "React JS / Vite";
  const description = [
    "This is a blog project aimed at enhancing user interaction through actions and forms, focusing on filtering, creating, and editing posts. It is built in React and uses the JSONServer for the API endpoints. The blog uses these API endpoints for creating and updating posts, as well as filtering posts based on user-defined queries and user IDs.",
    "In the project, user convenience is enhanced by integrating filtering options on the 'Posts' page, enabling users to sift through posts by query or even by the user who authored them. It also includes features like disabling submit buttons during form submission and robust validation checks to ensure data integrity, including mandatory fields such as title, body, and user information. This project encapsulates the essence of user-centric design and robust functionality.",
  ];
  const hrefDemo = "https://blog-project-adv.netlify.app/posts";
  const targetDemo = "_blank";
  const hrefCode = "https://github.com/rootdown001/blog-project-adv";
  const targetCode = "_blank";
  const tech = ["Javascript", "React", "Vite"];

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
