import calanderImg from "/public/assets/projects/calander.png";
import blogImg from "/public/assets/projects/blog.png";
import netflixImg from "/public/assets/projects/netflix.jpg";
import twitchImg from "/public/assets/projects/twitch.jpg";

import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        {/*  eslint-disable-next-line react/no-unescaped-entities */}
        <h2 className="py-4">Some Projects I've Built.</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Google Calander Clone"
            backgroundImg={calanderImg}
            framework="React JS / TypeScript / Vite"
            projectUrl="/calander"
          />
          <ProjectItem
            title="React Blog"
            backgroundImg={blogImg}
            framework="React JS"
            projectUrl="/blog"
          />
          <ProjectItem
            title="Movie Finder"
            backgroundImg={netflixImg}
            framework="React JS"
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Twitch App"
            backgroundImg={twitchImg}
            framework="React JS"
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
}
