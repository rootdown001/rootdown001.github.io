import Image from "next/image";
import Link from "next/link";
import { RiCheckboxFill } from "react-icons/ri";

export default function ProjectDisplay({
  projectImg,
  title,
  subtitle,
  description,
}) {
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
          <p>
            This project is a calendar application aimed at replicating some
            functionalities of Google Calendar. Although a simplified version,
            it presented a significant complexity and offered a chance to use
            React and TypeScript for complex UI interactions.
          </p>
          <br />
          <p>
            The Calendar component serves as the centerpiece, rendering the
            current month by default. Users can easily create new events,
            triggering a modal form with fields for event details such as name,
            time, and color. The form includes validation logic, ensuring
            essential fields are filled correctly. Additionally, events are
            sorted and displayed within the calendar view, with options to edit
            or delete them via modals.
          </p>
          <br />
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            One of the project's challenges involves managing overflow events,
            ensuring smooth rendering and interaction. This includes dynamically
            updating the display when the calendar is resized or when the number
            of events changes. Implementing animations for modal opening and
            closing adds a polished touch to the user experience, enhancing the
            overall feel of the application.
          </p>
          <Link href="https://calendarclonela.netlify.app/" target="_blank">
            <button className=" px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link
            href="https://github.com/rootdown001/calender-clone"
            target="_blank"
          >
            <button className=" px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className=" lg:mt-[360px] md:mt-[270px] col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-md p-2">
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
                <RiCheckboxFill className="pr-1 text-theme-color" /> Typescript
              </p>
              <p className=" text-gray-600 py-2 flex items-center">
                <RiCheckboxFill className="pr-1 text-theme-color" /> Tailwind
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
