import About from "./about/page";
import Contact from "./contact/page";
import Main from "./main/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import { SpeedInsights } from "@vercel/speed-insights/next";

const themeColor = "#4B61A6";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
