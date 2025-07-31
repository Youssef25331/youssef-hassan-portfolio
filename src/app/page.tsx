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
import ContactModal from "./components/ContactModal";

export default function Home() {
  return (
    <>
      <ContactModal/>
      <SnowfallEffect />
      <div className="z-200 fixed">
        {/* <SmoothCursor /> */}
        <NavBarLoader />
      </div>
      <LenisScrollProvider />
      <main className="flex flex-col">
        <div id="hero">
          <Hero />
        </div>
        <div id="stack">
          <Stack />
        </div>
        <div className="lg:my-15" id="about">
          <About />
          <Widgets />
        </div>
        <div id="projects">
          <Showcase />
        </div>
        <Footer />
      </main>
    </>
  );
}
