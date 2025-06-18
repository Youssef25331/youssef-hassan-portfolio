import { NavBar } from "./light-navbar"

export function NavBarLoader() {
  const navItems = [
    { name: 'Home', url: '#',  },
    { name: 'About', url: '',},
    { name: 'Projects', url: '#', },
    { name: 'Resume', url: '#',}
  ]

  return <NavBar items={navItems} />
}
