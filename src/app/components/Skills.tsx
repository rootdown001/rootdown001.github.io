import Image from "next/image";
import HtmlImg from "/public/assets/skills/html.png";
import CssImg from "/public/assets/skills/css.png";
import JsImg from "/public/assets/skills/javascript.png";
import ReactImg from "/public/assets/skills/react.png";
import TailwindImg from "/public/assets/skills/tailwind.png";
import FirebaseImg from "/public/assets/skills/firebase.png";
import GithubImg from "/public/assets/skills/github1.png";
import ShopifyImg from "/public/assets/skills/shopify.png";

export default function Skills() {
  return (
    <div className=" w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className=" py-4">My skills to pay the bills</h2>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HtmlImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CssImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={JsImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TailwindImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={FirebaseImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={GithubImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ShopifyImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Shopify</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
