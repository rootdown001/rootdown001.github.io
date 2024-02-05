import Image from "next/image";
import AboutImg from "/public/assets/tarn-nguyen-pbBZFYKnd34-unsplash.jpg";

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className=" py-4">A Little About Me...</h2>
          <p className=" py-2 text-gray-600">
            -- My path is somewhat unique --
          </p>
          <p className=" py-2 text-gray-600">
            Here is some text about me. It isn't good text, and will need to be
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
          <p className=" py-2 text-gray-600 underline cursor-pointer">
            View some projects on which I have worked.
          </p>
        </div>
        <div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className=" rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
}
