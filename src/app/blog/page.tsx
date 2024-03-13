import blogImg from "/public/assets/projects/blog.png";
import ProjectDisplay from "../components/ProjectDisplay";

export default function Blog() {
  // info for blog
  // image
  const projectImg = blogImg;
  // title
  const title = "React Blog (Placeholder API)";
  // subtitle
  const subtitle = "React JS / Vite";
  // desciption array
  const description = [
    "This is a blog project aimed at enhancing user interaction through actions and forms, focusing on filtering, creating, and editing posts. It is built in React and uses the JSONServer for the API endpoints. The blog uses these API endpoints for creating and updating posts, as well as filtering posts based on user-defined queries and user IDs.",
    "In the project, user convenience is enhanced by integrating filtering options on the 'Posts' page, enabling users to sift through posts by query or even by the user who authored them. It also includes features like disabling submit buttons during form submission and robust validation checks to ensure data integrity, including mandatory fields such as title, body, and user information. This project encapsulates the essence of user-centric design and robust functionality.",
  ];
  // demo link
  const hrefDemo = "https://blog-project-adv.netlify.app";
  // demo target
  const targetDemo = "_blank";
  // alternative demo button
  const altDemo = "";
  // code link
  const hrefCode = "https://github.com/rootdown001/blog-project-adv";
  // code target
  const targetCode = "_blank";
  // alternative code button
  const altCode = "";
  // technology array
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
        altDemo={altDemo}
        altCode={altCode}
      />
    </div>
  );
}
