import Image from "next/image";
import { NavBarLoader } from "./components/Navbar";
import '@fontsource-variable/outfit';
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <NavBarLoader />
      <Hero />
    </main>
  );
}
