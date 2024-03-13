import portfolioImg from "/public/assets/projects/portfolio.png";
import ProjectDisplay from "../components/ProjectDisplay";

export default function Portfolio() {
  // info for portfolio
  // image
  const projectImg = portfolioImg;
  // title
  const title = "Portfolio Site";
  // subtitle
  const subtitle = "React JS / Tailwind / Next JS";
  // desciption array
  const description = [
    "This portfolio project is built in React and Typescript, using the Next.js framework. Specifically, it uses the /app features of Next.js for routing, as well as client-side and server-side rendering. For the CSS styling, Tailwind is used, as well as some global CSS styling in globals.css and tailwind.config.ts.",
  ];
  // demo link
  const hrefDemo = "";
  // demo target
  const targetDemo = "_blank";
  // alternative demo button
  const altDemo = "Current Site";
  // code link
  const hrefCode = "https://github.com/rootdown001/rootdown001.github.io";
  // code target
  const targetCode = "_blank";
  // alternative code button
  const altCode = "";
  // technology array
  const tech = ["Javascript", "React", "Tailwind", "Next.js"];

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
