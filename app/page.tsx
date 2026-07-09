import { Navbar }            from "./components/navbar";
import { Hero }              from "./components/hero";
import { Status }            from "./components/status";
import { Journey }           from "./components/journey";
import { Timeline }          from "./components/timeline";
import { CurrentlyBuilding } from "./components/currently-building";
import { Skills }            from "./components/skills";
import { Projects }          from "./components/projects";
import { GitHub }            from "./components/github";
import { Roadmap }           from "./components/roadmap";
import { Contact }           from "./components/contact";
import { Footer }            from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Status />
        <Journey />
        <Timeline />
        <CurrentlyBuilding />
        <Skills />
        <Projects />
        <GitHub />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
