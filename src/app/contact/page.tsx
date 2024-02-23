import Image from "next/image";
import contactImg from "/public/assets/freestocks-mw6Onwg4frY-unsplash.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import LanceImg from "/public/assets/lance-no-bg.png";
import { FaDev, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div
      id="contact"
      className="w-full md:h-screen mx-1"
      style={{ scrollMarginTop: "40px" }}
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-theme-color">
          Contact
        </p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2 className=" py-4">Let's Connect!</h2>
        <div className="grid mx-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 md:col-span-1 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-md p-4">
            <div className="lg:p-4 h-full">
              <div className="p-2">
                <div className="w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-md flex items-center justify-center p-3 hover:scale-105 ease-in duration-30">
                  <Image className="rounded-md" src={contactImg} alt="/" />
                </div>
              </div>

              <div>
                <div className="flex items-center pt-4">
                  <h2 className=" py-2">Lance Anderson</h2>
                  <div className="ml-6 px-2 border-2 border-black/20 rounded-md hover:scale-105 ease-in duration-300">
                    <Image
                      src={LanceImg}
                      className="rounded-md"
                      alt="/"
                      width={36}
                    />
                  </div>
                </div>
                <h3 className="lg:mt-2">Web & App Developer</h3>

                {/* <div>
                <h2 className=" py-2">Lance Anderson</h2>
                <div className="flex items-center">
                  <h3>Web & App Developer</h3>
                  <div className="ml-6 px-3 border-2 border-[#5651e5]/20 rounded-xl hover:scale-105 ease-in duration-300">
                    <Image
                      src={LanceImg}
                      className="rounded-xl"
                      alt="/"
                      width={60}
                    />
                  </div>
                </div> */}

                <p className="py-4 ">
                  This is some fake text for my contact section. This will be
                  replaced.
                </p>
              </div>
              <div>
                <p className=" uppercase pt-8">Connect With Me.</p>
              </div>
              <div className=" flex items-center justify-between py-4">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link
                    href="https://www.linkedin.com/in/nwpgpc/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link href="https://github.com/rootdown001" target="_blank">
                    <FaGithub />
                  </Link>
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link href="https://dev.to/rootdown001" target="_blank">
                    <FaDev />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link href="https://twitter.com/rootdown001" target="_blank">
                    <FaXTwitter />
                  </Link>
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a href="mailto:lance.a.585@gmail.com">
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link href="/#form">
                    <BsFillPersonLinesFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div
            id="form"
            className=" col-span-3 md:col-span-1 lg:col-span-3  w-full h-auto shadow-lg shadow-gray-400 rounded-md lg:p-4"
            style={{ scrollMarginTop: "80px" }}
          >
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className=" uppercase text-sm py-2">Name</label>
                    <input
                      className=" border-2 rounded-md p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className=" uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className=" border-2 rounded-md p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Email</label>
                  <input
                    className=" border-2 rounded-md p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Subject</label>
                  <input
                    className=" border-2 rounded-md p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Message</label>
                  <textarea
                    className=" border-2 rounded-md p-3 border-gray-300"
                    rows={10}
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className=" text-theme-color"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
