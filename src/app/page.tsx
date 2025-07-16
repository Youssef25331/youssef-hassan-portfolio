import { NavBarLoader } from "./components/Navbar";
import '@fontsource-variable/outfit';
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Widgets from "./components/Widgets";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Footer from "./components/Footer";
import LenisScrollProvider from "./providers/lenis-provider";
import SnowfallEffect from "./components/SnowfallEffect";
import { SmoothCursor } from "./components/Cursor";

export default function Home() {
  return (
    <>
      <div className="z-200 fixed">

        <SmoothCursor />
        <NavBarLoader />
      </div>
      <SnowfallEffect />
      <LenisScrollProvider />
      <main className="flex flex-col gap-10">
        <div id="hero">
          <Hero />
        </div>
        <div id="stack">
          <Stack />
        </div>
        <div className="my-15" id="about">
          <About />
          <Widgets />
        </div>
        <div className="my-15" id="projects">
          <Showcase />
        </div>
        <Footer />
      </main>

      {/* </LenisScrollProvider> */}
    </>
  );
}
