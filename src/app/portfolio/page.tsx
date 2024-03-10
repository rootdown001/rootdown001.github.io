import Image from "next/image";
import portfolioImg from "/public/assets/projects/portfolio.png";
import { RiRadioButtonFill, RiCheckboxFill } from "react-icons/ri";
import { HiCheck } from "react-icons/hi";
import Link from "next/link";
import ProjectDisplay from "../components/ProjectDisplay";

export default function Portfolio() {
  const projectImg = portfolioImg;
  const title = "Portfolio Site";
  const subtitle = "React JS / Tailwind / Next JS";
  const description = [
    "This portfolio project is built in React and Typescript, using the Next.js framework. Specifically, it uses the /app features of Next.js for routing, as well as client-side and server-side rendering. For the CSS styling, Tailwind is used, as well as some global CSS styling in globals.css and tailwind.config.ts.",
  ];
  const hrefDemo = "";
  const targetDemo = "_blank";
  const hrefCode = "https://github.com/rootdown001/rootdown001.github.io";
  const targetCode = "_blank";
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
      />
    </div>
  );
}
