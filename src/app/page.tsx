import Image from "next/image";
import { NavBarLoader } from "./components/Navbar";
import '@fontsource-variable/outfit';
import Hero from "./components/Hero";
import Stack from "./components/Stack";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <NavBarLoader />
      <Hero />
      <Stack/>
    </main>
  );
}
