import calanderImg from "/public/assets/projects/calander.png";
import ProjectDisplay from "../components/ProjectDisplay";

export default function Calander() {
  const projectImg = calanderImg;
  const title = "Google Calander Clone";
  const subtitle = "React / Typescript / Vite";
  const description = [
    "This project is a calendar application aimed at replicating some functionalities of Google Calendar. Although a simplified version, it presented a significant complexity and offered a chance to use React and TypeScript for complex UI interactions.",
    "The Calendar component serves as the centerpiece, rendering the current month by default. Users can easily create new events, triggering a modal form with fields for event details such as name, time, and color. The form includes validation logic, ensuring essential fields are filled correctly. Additionally, events are sorted and displayed within the calendar view, with options to edit or delete them via modals.",
    "One of the project's challenges involves managing overflow events, ensuring smooth rendering and interaction. This includes dynamically updating the display when the calendar is resized or when the number of events changes. Implementing animations for modal opening and closing adds a polished touch to the user experience, enhancing the overall feel of the application.",
  ];
  const hrefDemo = "https://calendarclonela.netlify.app/";
  const targetDemo = "_blank";
  const hrefCode = "https://github.com/rootdown001/calender-clone";
  const targetCode = "_blank";
  const tech = ["Javascript", "React", "Vite"];

  return (
    <div>
      <ProjectDisplay
        projectImg={projectImg}
        title={title}
        subtitle={subtitle}
        description={description}
        hrefDemo={hrefDemo}
        targetDemo={targetDemo}
        hrefCode={hrefCode}
        targetCode={targetCode}
        tech={tech}
      />
    </div>
  );
}
