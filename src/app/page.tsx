import Image from "next/image";
import { NavBarLoader } from "./components/Navbar";
import '@fontsource-variable/outfit';
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import SmoothScroller from "./components/SmoothScroller";

export default function Home() {
  return (
    <>
      <NavBarLoader />
      <SmoothScroller>
        <main className="scroll-smooth">
          <Hero />
          <Stack />
        </main>
      </SmoothScroller>
    </>
  );
}
