import Image from "next/image";
import htmlImg from "/public/assets/skills/file-type-html.svg";
import cssImg from "/public/assets/skills/file-type-css.svg";
import jsImg from "/public/assets/skills/javascript-js.svg";
import reactImg from "/public/assets/skills/react.svg";
import tailwindImg from "/public/assets/skills/tailwind.png";
import typescriptImg from "/public/assets/skills/typescript-icon.svg";
import githubImg from "/public/assets/skills/github.svg";
import nextImg from "/public/assets/skills/next-js.svg";
import sqlLiteImg from "/public/assets/skills/sqlite-svgrepo-com.svg";

export default function Skills() {
  return (
    <div
      id="skills"
      className="mx-1 w-full lg:h-screen p-2 scroll-mt-28 md:scroll-mt-28 lg:scroll-mt-0 "
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" text-xl tracking-widest uppercase text-theme-color">
          Skills
        </p>
        <h2 className=" py-4">Current Coding Skills.</h2>

        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" mx-4 p-6 shadow-lg rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reactImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="mx-2 p-6 shadow-lg rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={jsImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="mx-2 p-6 shadow-lg rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={typescriptImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>

          <div className="mx-2 p-6 shadow-lg rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nextImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>

          <div className="mx-2 p-6 shadow-lg rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={cssImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="mx-2 p-6 shadow-lg rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tailwindImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="mx-2 p-6 shadow-lg rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={githubImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className="mx-2 p-6 shadow-lg rounded-md hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={sqlLiteImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SqlLite</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
