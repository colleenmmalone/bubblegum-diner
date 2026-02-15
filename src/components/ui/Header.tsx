import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import { BoomBox, Candy, Hamburger, Home, Menu, ShoppingCart, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    {
      to: '/',
      icon: Home,
      label: 'Home',
    },
    {
      to: '/menu',
      icon: Hamburger,
      label: 'Menu',
    },
    {
      to: '/jukebox',
      icon: BoomBox,
      label: 'Jukebox',
    },
    {
      to: '/merch',
      icon: ShoppingCart,
      label: 'Merch',
    },
    {
      to: '/about',
      icon: Candy,
      label: 'About',
    },
  ]

  const testComp = () => {
    return (
      <>
        {navLinks.map((n, i) => (
          <Link
            key={'nav-link-' + i}
            to={n.to}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 py-2 px-5 rounded-full hover:bg-cherry/10 hover:text-cherry transition-colors duration-300 mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 bg-cherry text-white transition-all mb-2',
            }}
          >
            <n.icon size={20} />
            <span className="font-medium">{n.label}</span>
          </Link>
        ))}
      </>
    )
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95  backdrop-blur-md shadow-sm px-4 py-1 flex items-center justify-between shadow-lg">

        <Link to="/" className="flex items-center gap-2 text-3xl">
          🍔
          <span className="text-xl font-black text-cherry"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Bubblegum
          </span>
          <span className="text-sm text-turquoise font-bold ml-1">
            DINER
          </span>
        </Link>



        <nav className="sm:flex p-4 overflow-y-auto hidden ">
          {testComp()}
        </nav>



        <button
          onClick={() => setIsOpen(true)}
          className="sm:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

      </header>

      <aside
        className={`fixed sm:hidden top-0 right-0 h-full w-80 bg-white text-foreground shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-end p-4 pb-1">

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-4 overflow-y-auto">
          {testComp()}
        </nav>
      </aside>
    </>
  )
}
