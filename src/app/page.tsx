'use client'
import { NavBarLoader } from "./components/Navbar";
import '@fontsource-variable/outfit';
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Widgets from "./components/Widgets";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";
import Lenis from "lenis";


export default function Home() {

  const lenisRef = useRef<Lenis>(null);

  useEffect(() => {
    const lenis = new Lenis
    lenisRef.current = lenis
    function raf(time: any) {
      lenis.raf(time * 0.8)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const scrollTo = (target: any) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { duration: 2, offset: -80 });
    }
  };

  return (
    <>
      <NavBarLoader scrollTo={scrollTo} />
      <main className="flex flex-col gap-10">
        <div id="hero">
          <Hero />
        </div>
        <div id="stack">
          <Stack />
        </div>
        <div className="my-15">
          <Widgets />
        </div>
        <div className="my-10" id="about">
          <About />
        </div>
        <div className="my-15" id="projects">
          <Showcase />
        </div>
        <div id="footer">
          <Footer />
        </div>
        <button onClick={() => scrollTo('#about')} className="px-4 py-2 bg-blue-500 text-white rounded btn">
          Go to About
        </button>
      </main>
    </>
  );
}
