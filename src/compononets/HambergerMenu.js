import React, { useState } from 'react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../compononets/ui/navigation-menu";
import { Link, NavLink } from 'react-router-dom';

function HamburgerMenu(menu) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="flex justify-between items-center">
      {/* Hamburger Button */}
      <Button variant="outline"
        className={`md:hidden mr-4 ${
          isOpen ? ' opacity-0' : ' opacity-100'
        }`}
        onClick={toggleMenu}
      >
        <svg
          className="fill-[#49SE57] h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#49SE57" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 8h20v2H0V17z" />
        </svg>
      </Button>

      {/* Close Button (Always visible with higher z-index when menu is open) */}
      <Button variant="outline"
        className={`md:hidden absolute top-3 right-4 z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={toggleMenu}
      >
        <svg
          className="fill-[#49SE57] h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.707 3.307a1 1 0 00-1.414 0L0 6.707l4.707 4.707a1 1 0 001.414-1.414L2.307 5h12.707a1 1 0 000-2H2.307L4.707 3.307z"
            clipRule="evenodd"
          />
        </svg>
      </Button>

      {/* Menu Container */}
      <nav
        className={`mt-6 absolute top-10 left-0 h-screen w-auto p-4 border-spacing-4 border-8 border-gray-100 rounded-md bg-white md:bg-transparent transition duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-x-0 z-50' : 'opacity-0 translate-x-full z-50 hidden'
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-8  md:p-0 w-full z-10">
        <NavigationMenu orianation="vertical">
          <NavigationMenuList className='flex flex-col'>
          {menu.listMenu}
          </NavigationMenuList>
        </NavigationMenu>

        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
