import calanderImg from "/public/assets/projects/calander.png";
import blogImg from "/public/assets/projects/blog.png";
import jobImg from "/public/assets/projects/jobBoard.png";
import portfolioImg from "/public/assets/projects/portfolio.png";

import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-full mx-1"
      style={{ scrollMarginTop: "40px" }}
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-theme-color">
          Projects
        </p>
        {/*  eslint-disable-next-line react/no-unescaped-entities */}
        <h2 className="py-4">Some Projects I've Built.</h2>
        <div className="mx-1 grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Google Calander Clone"
            backgroundImg={calanderImg}
            framework="React JS / TypeScript"
            projectUrl="/calander"
          />
          <ProjectItem
            title="Job Board"
            backgroundImg={jobImg}
            framework="Under Construction - React JS / TypeScript"
            projectUrl="/job"
          />
          <ProjectItem
            title="React Blog"
            backgroundImg={blogImg}
            framework="React JS"
            projectUrl="/blog"
          />
          <ProjectItem
            title="Portfolio Site"
            backgroundImg={portfolioImg}
            framework="React JS / Next JS"
            projectUrl="/portfolio"
          />
        </div>
      </div>
    </div>
  );
}
