import React, { useState } from 'react';
import { Button } from './ui/button';
import { Separator } from "./ui/separator";

function HamburgerMenu() {
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
        className={`md:hidden absolute top-2 right-4 z-50 ${
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
        className={`mt-6 absolute top-10 left-0 h-screen w-1/3 bg-white md:bg-transparent transition duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-8  md:p-0 w-full">
        
          <li className="mb-2 md:mb-0 hover:bg-gray-100 transition duration-200 ease-in-out rounded-md w-full h-full hover:cursor-pointer border-b px-6 py-2">
            <a href="/" className="text-xl font-medium text-gray-700 hover:text-gray-600">
              Home
            </a>
          </li>

          <li className="mb-2 md:mb-0 hover:bg-slate-100 transition duration-200 ease-in-out rounded-md w-full h-full hover:cursor-pointer border-b px-6 py-2">
            <a href="/food" className="text-xl font-medium text-gray-700 hover:text-gray-600">
              Food
            </a>
          </li>

          <li className="mb-2 md:mb-0 hover:bg-slate-100 transition duration-200 ease-in-out rounded-md w-full h-full hover:cursor-pointer border-b px-6 py-2">
            <a href="/about" className="text-xl font-medium text-gray-700 hover:text-gray-600">
              About
            </a>
          </li>

          <li className="mb-2 md:mb-0 hover:bg-slate-100 transition duration-200 ease-in-out rounded-md w-full h-full hover:cursor-pointer border-b px-6 py-2">
            <a href="/contact" className="text-xl font-medium text-gray-700 hover:text-gray-600">
              Contact
            </a>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
