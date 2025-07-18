'use client'
import { useLenis } from "lenis/react";
import { NavBar } from "./light-navbar"

export function NavBarLoader() {

  const lenis = useLenis()

  const scrollTo = (target: any) => {
    if (lenis) {
      lenis.scrollTo(target, { duration: 2, offset: -80 });
    }
  };

  const navItems = [
    { name: 'Home', url: '#hero', },
    { name: 'Stack', url: '#stack', },
    { name: 'About', url: '#about', },
    { name: 'Projects', url: '#projects', },
    { name: 'Footer', url: '#footer', }
  ]

  return <NavBar items={navItems} scrollTo={scrollTo} />
}
