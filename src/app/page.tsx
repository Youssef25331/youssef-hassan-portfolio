'use client'
import { NavBarLoader } from "./components/Navbar";
import '@fontsource-variable/outfit';
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import SmoothScroller from "./components/SmoothScroller";
import Widgets from "./components/Widgets";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Lenis from "lenis";


export default function Home() {

  useEffect(() => {
    const lenis = new Lenis
    function raf(time: any) {
      lenis.raf(time * 0.5)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  return (
    <>
      <NavBarLoader />
      {/* <SmoothScroller> */}
      <main className="flex flex-col gap-10">
        <Hero />
        <Stack />
        <Widgets />
        <Showcase />
        <About />
        <Footer />
      </main>
      {/* </SmoothScroller> */}
    </>
  );
}
