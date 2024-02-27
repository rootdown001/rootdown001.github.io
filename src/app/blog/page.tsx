import Image from "next/image";
import blogImg from "/public/assets/projects/blog.png";
import { RiRadioButtonFill, RiCheckboxFill } from "react-icons/ri";
import { HiCheck } from "react-icons/hi";
import Link from "next/link";

export default function Blog() {
  return (
    <div className=" w-full">
      <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className=" absolute z-1"
          layout="fill"
          objectFit="cover"
          src={blogImg}
          alt="/"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">React Blog (Placeholder API)</h2>
          <h3>React JS / Vite</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-5">
        <div className=" col-span-4">
          <h2 className="pb-2">Project Overview</h2>
          <p>
            This is a blog project aimed at enhancing user interaction through
            actions and forms, focusing on filtering, creating, and editing
            posts. It is built in React and uses the JSONServer for the API
            endpoints. The blog uses these API endpoints for creating and
            updating posts, as well as filtering posts based on user-defined
            queries and user IDs.
          </p>
          <br />
          <p>
            In the project, user convenience is enhanced by integrating
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            filtering options on the "Posts" page, enabling users to sift
            through posts by query or even by the user who authored them. It
            also includes features like disabling submit buttons during form
            submission and robust validation checks to ensure data integrity,
            including mandatory fields such as title, body, and user
            information. This project encapsulates the essence of user-centric
            design and robust functionality.
          </p>
          <br />
          <p></p>
          <Link href="https://blog-project-adv.netlify.app/" target="_blank">
            <button className=" px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link
            href="https://github.com/rootdown001/blog-project-adv"
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
                <RiCheckboxFill className="pr-1 text-theme-color" /> JavaScript
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiCheckboxFill className="pr-1 text-theme-color" /> React
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiCheckboxFill className="pr-1 text-theme-color" /> JSONServer
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
