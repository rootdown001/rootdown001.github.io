import Image from "next/image";
import AboutImg from "/public/assets/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg";
import Link from "next/link";
import LanceImg from "/public/assets/lance-no-bg.png";

export default function About() {
  return (
    <div
      id="about"
      className="w-full md:h-screen mx-1 p-2 flex items-center py-16"
      style={{ scrollMarginTop: "40px" }}
    >
      <div className="mx-1 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className=" uppercase text-xl tracking-widest text-theme-color">
            About
          </p>
          <div className="flex items-center">
            <h2 className=" py-4">A Little About Me...</h2>
            <div className="ml-4 px-2 border-2 border-black/20 rounded-md shadow-lg  hover:scale-105 ease-in duration-300">
              <Image src={LanceImg} className="rounded-md" alt="/" width={36} />
            </div>
          </div>

          <p className=" py-2 text-gray-600">
            -- My path is somewhat unique --
          </p>
          <p className=" py-2 text-gray-600">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Here is some text about me. It isn't good text, and will need to be
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            changed to something informative and clever. I'm really just typing,
            thinking of words to write. This will all be changed later. I hope
            noone is reading this. That would be really embarassing.
          </p>
          <p className=" py-2 text-gray-600">
            I was born one day. It was in July. July 5th 1968 to be exact. I
            went to school. Then more school. It was really a lot of school. :))
            I lived in San Francisco and then Santa Barbara. I spent summers in
            Placerveille. I finished college in Santa Barbara, then moved to
            Michigan. After medical school, I moved to Portland Oregon.
          </p>
          <Link href="#projects">
            <p className=" py-2 text-gray-600 underline cursor-pointer">
              View some projects on which I have worked.
            </p>
          </Link>
        </div>
        <div className="p-2">
          <div className="w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-md flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
            <Image src={AboutImg} className=" rounded-md" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
