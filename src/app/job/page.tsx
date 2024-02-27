import Image from "next/image";
import jobImg from "/public/assets/projects/jobBoard.png";
import { RiRadioButtonFill, RiCheckboxFill } from "react-icons/ri";
import { HiCheck } from "react-icons/hi";
import Link from "next/link";

export default function Job() {
  return (
    <div className=" w-full">
      <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className=" absolute z-1"
          layout="fill"
          objectFit="cover"
          src={jobImg}
          alt="/"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Job Board</h2>
          <h3>Under Construction - React JS / Typescript / SQLLite</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-5">
        <div className=" col-span-4">
          <h2 className="pb-2">Project Overview</h2>
          <p>
            This project is a job board that is built upon an existing codebase.
            I tackled this because it presented a unique approach to
            development, mirroring real-world scenarios where understanding
            existing codebases and independently solving tasks are crucial
            skills. It began with a codebase filled with complexity, reflecting
            the challenges of a mature project. This complexity served as an
            opportunity for growth, as deciphering and building upon existing
            structures is a fundamental aspect of professional development.
          </p>
          <br />

          <p>
            The backend is handled by the Prisma library and a well documented
            API. The main focus is frontend development using React with Vite.
            The project leverages libraries such as React Router, React Hook
            Form, and Zod, enhancing efficiency and functionality. In summary,
            this project allows being immersed in the complexities and nuances
            of real-world development.
          </p>

          <button className="px-8 py-2 mt-4 mr-8 bg-gradient-to-r  from-gray-400 to-gray-300 text-slate-800">
            Currently Building
          </button>
          <button className=" px-8 py-2 mt-4 from-gray-400 to-gray-300 text-slate-800">
            Currently Building
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 ">
          <div className="pt-2">
            <p className="text-center font-bold pb-1">Technologies</p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className=" text-gray-600 py-2 flex items-center">
                <RiCheckboxFill className="pr-1 text-theme-color" /> React
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiCheckboxFill className="pr-1 text-theme-color" /> Tailwind
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiCheckboxFill className="pr-1 text-theme-color" /> Vite
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiCheckboxFill className="pr-1 text-theme-color" /> SQLLite
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiCheckboxFill className="pr-1 text-theme-color" /> Stripe
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
