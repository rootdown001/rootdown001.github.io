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
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className=" col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is some text to be an overview of the project. Can list
            features, cool things about it, obstacles you hade to overcome,
            technologies, etc.
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
