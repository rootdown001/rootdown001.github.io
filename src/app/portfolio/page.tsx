import Image from "next/image";
import portfolioImg from "/public/assets/projects/portfolio.png";
import { RiRadioButtonFill, RiCheckboxFill } from "react-icons/ri";
import { HiCheck } from "react-icons/hi";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className=" w-full">
      <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className=" absolute z-1"
          layout="fill"
          objectFit="cover"
          src={portfolioImg}
          alt="/"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Portfolio Site</h2>
          <h3>React JS / Tailwind / Next JS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-5">
        <div className=" col-span-4">
          <h2 className="pb-2">Project Overview</h2>
          <p>
            This portfolio project is built in React and Typescript, using the
            Next.js framework. Specifically, it uses the /app features of
            Next.js for routing, as well as client-side and server-side
            rendering. For the CSS styling, Tailwind is used, as well as some
            global CSS styling in globals.css and tailwind.config.ts.
          </p>
          <br />
          <p></p>

          <button className=" px-8 py-2 mt-4 mr-8 from-gray-400 to-gray-300 text-slate-800">
            Current Site
          </button>

          <Link
            href="https://github.com/rootdown001/new-portfolio"
            target="_blank"
          >
            <button className=" px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-md p-2">
          <div className="pt-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className=" text-gray-600 py-2 flex items-center">
                <RiCheckboxFill className="pr-1 text-theme-color" /> React
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiCheckboxFill className="pr-1 text-theme-color" /> Tailwind
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiCheckboxFill className="pr-1 text-theme-color" /> Next.js
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}
