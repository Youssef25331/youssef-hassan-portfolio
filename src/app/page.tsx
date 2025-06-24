import { NavBarLoader } from "./components/Navbar";
import '@fontsource-variable/outfit';
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import SmoothScroller from "./components/SmoothScroller";
import Widgets from "./components/Widgets";

export default function Home() {
  return (
    <>
      <NavBarLoader />
      {/* <SmoothScroller> */}
        <main className="flex flex-col gap-10">
          <Hero />
          <Stack />
          <Widgets />
          <div className="h-100"></div>
        </main>
      {/* </SmoothScroller> */}
    </>
  );
}
