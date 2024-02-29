import Image from "next/image";
import AboutImg from "/nextjs-github-pages/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg";
import Link from "next/link";
import LanceImg from "/nextjs-github-pages/lance_kitty.png";

export default function About() {
  return (
    <div
      id="about"
      className="w-full md:h-screen mx-1 p-2 flex items-center py-16 scroll-mt-28 md:scroll-mt-28 lg:scroll-mt-0"
    >
      <div className="mx-1 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className=" uppercase text-xl tracking-widest text-theme-color">
            About
          </p>
          <div className="flex items-center">
            <h2 className=" py-4">A Little About Me.</h2>
            <div className="ml-4  rounded-md shadow-lg  hover:scale-105 ease-in duration-300">
              <Image src={LanceImg} className="rounded-md" alt="/" width={90} />
            </div>
          </div>

          <p className="py-2 uppercase text-sm tracking-widest text-theme-color/60">
            From healthcare to coding
          </p>
          <p className=" pt-2 text-gray-600">
            I grew up in San Francisco and was coding for fun starting in the
            8th grade. I received a BA in Biology from the University of
            California at Santa Barbara; while there, I took many computer
            science classes, and I graduated with Highest Honors. I decided to
            enter the healthcare field, and did my graduate work at Michigan
            State University. I took more computer science classes there, and
            also graduated at the top of my class.
          </p>
          <br />
          <p className=" text-gray-600">
            I loved helping people in the healthcare field; however, I found
            myself constantly wanting to continue creating and maintaining a
            large database I had built for our office. Everywhere I looked, I
            was seeing opportunities for creating apps that would be helpful to
            others. I decided to return to my first love, computer programming.
            After examining my goals for development, I immersed myself in
            Javascript, Typescript, Advanced React, and Next.js.
          </p>
          <Link href="#projects">
            <p className=" py-3 text-gray-600 underline cursor-pointer">
              A few projects on which I have worked.
            </p>
          </Link>
        </div>
        <div className="p-2 mt-2 md:mt-0 mx-auto">
          <div className="w-full max-w-[360px]  h-auto m-auto shadow-lg shadow-gray-400 rounded-md flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
            <Image src={AboutImg} className=" rounded-md" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
