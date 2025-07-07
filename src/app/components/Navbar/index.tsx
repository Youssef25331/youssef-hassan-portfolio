import { NavBar } from "./light-navbar"

export function NavBarLoader({ scrollTo }: { scrollTo: Function }) {
  const navItems = [
    { name: 'Home', url: '#hero', },
    { name: 'My Stack', url: '#stack', },
    { name: 'About', url: '#about', },
    { name: 'Projects', url: '#projects', },
    { name: 'Footer', url: '#footer', }
  ]

  return <NavBar items={navItems} scrollTo={scrollTo} />
}
