"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiCheckboxFill } from "react-icons/ri";

type ProjectDisplayProps = {
  projectImg: StaticImageData;
  title: string;
  subtitle: string;
  description: string[];
  hrefDemo: string;
  targetDemo: string;
  hrefCode: string;
  targetCode: string;
  tech: string[];
};

export default function ProjectDisplay({
  projectImg,
  title,
  subtitle,
  description,
  hrefDemo,
  targetDemo,
  hrefCode,
  targetCode,
  tech,
}: ProjectDisplayProps) {
  const [demo, setDemo] = useState(false);
  const [code, setCode] = useState(false);

  useEffect(() => {
    if (hrefDemo !== "") {
      setDemo(true);
    }
    if (hrefCode !== "") {
      setCode(true);
    }
  }, [hrefDemo, hrefCode]);

  return (
    <div className=" w-full">
      <div className={"w-screen h-[30vh] lg:h-[40vh] fixed z-[90]"}>
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className=" absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectImg}
          alt="/"
        />
        <div className=" absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{title}</h2>
          <h3>{subtitle}</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-5 ">
        <div className=" mt-[230px]  lg:mt-[360px] col-span-4">
          <h2 className="pb-2">Project Overview</h2>

          {description.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <p>{item}</p>
                <br />
              </React.Fragment>
            );
          })}
          <Link href={demo ? `${hrefDemo}` : "#"} target={`${targetDemo}`}>
            <button disabled={!demo} className="px-8 py-2 mt-4 mr-8">
              Demo
            </button>
          </Link>
          <Link href={code ? `${hrefCode}` : "#"} target={`${targetCode}`}>
            <button disabled={!code} className=" px-8 py-2 mt-4">
              Code
            </button>
          </Link>
        </div>
        <div className=" lg:mt-[360px] md:mt-[270px] col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-md p-2">
          <div className="pt-2">
            <p className="text-center font-bold pb-2">Technologies</p>

            <div className=" grid grid-cols-3 md:grid-cols-1">
              {tech &&
                tech.map((t, index) => {
                  return (
                    <React.Fragment key={index}>
                      <p className="text-gray-600 py-2 flex items-center">
                        <RiCheckboxFill className="pr-1 text-theme-color" /> {t}
                      </p>
                    </React.Fragment>
                  );
                })}
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
