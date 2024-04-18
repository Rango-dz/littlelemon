import React from 'react'
import { Link } from 'react-router-dom';
import HamburgerMenu from './HambergerMenu';
import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../compononets/ui/navigation-menu";
import { Input } from './ui/input';



export default function Nav() {
  return (
  <>
  <div className='navbar w-full grid grid-cols-[1fr_2fr_auto] md:grid-cols-[1fr_1fr_2fr_auto] justify-items-center items-center bg-white justify-between shadow '>
        <div className='basis-1/4 justify-center'>
        <img className='m-2 p-2' src="/logo192.svg" alt="Logo" />
        </div>
        <div className="~px-1/2 w-full ">
        <Input type="text" placeholder="Search" />
        </div>
        <NavigationMenu className='justify-center justify-items-center items-center hidden md:flex'>
          <NavigationMenuList>
          <NavigationMenuItem className=''>
            <Link to="/" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-[#f3f4f6] focus:bg-[#f3f4f6]`}>
              Home
            </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className=''>
            <Link to="/menu" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-[#f3f4f6] focus:bg-[#f3f4f6]`}>
              Menu
            </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className=''>
            <Link to="/reservetable" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-[#f3f4f6] focus:bg-[#f3f4f6]`}>
              Reserve A table
            </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className=''>
            <Link to="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-[#f3f4f6] focus:bg-[#f3f4f6] `}>
              Contact Us
            </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className=''>
            <Link to="/checkout" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-[#f3f4f6] focus:bg-[#f3f4f6] `}>
              <img src="/add2.svg" alt="" className="w-10 h-10 bg-[#f3f4f6] shadow-sm rounded-full" />
            </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <HamburgerMenu />
        {/* // <ul className='flex flex-row space-x-4 basis-3/4 justify-center justify-items-center items-center'>
        // <li className='text-base capitalize font-semibold text-gray-700 hover:text-gray-600'><Link to="/food">Food</Link></li>
        // <Separator orientation="vertical" />
        // <li className='text-base capitalize font-semibold text-gray-700 hover:text-gray-600'><Link to="/">Home</Link></li>
        // <Separator orientation="vertical" />
        // <li className='text-base capitalize font-semibold text-gray-700 hover:text-gray-600'><Link to="/about">About</Link></li>
        // <Separator orientation="vertical" />
        // <li className='text-base capitalize font-semibold text-gray-700 hover:text-gray-600'><Link to="/contact">Contact</Link></li>
        // </ul> */}
    </div>

  </>
  )
}