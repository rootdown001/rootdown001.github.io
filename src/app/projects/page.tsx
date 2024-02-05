import Image from "next/image";
import propertyImg from "/public/assets/projects/property.jpg";
import cryptoImg from "/public/assets/projects/crypto.jpg";
import netflixImg from "/public/assets/projects/netflix.jpg";
import twitchImg from "/public/assets/projects/twitch.jpg";

import Link from "next/link";
import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Some Projects I've Built.</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            framework="React JS"
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            framework="React JS"
            projectUrl="/crypto"
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
