import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import HamburgerMenu from './HambergerMenu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../compononets/ui/navigation-menu";
import { Input } from './ui/input';



export default function Nav() {

  const [listMenu, setListMenu] = useState([]);

  const navmenu = [
    {
      name: "Home",
      path: "/",
    },
    { name: "Menu",
      path: "/menu",
    },
    { name: "Book A Table",
      path: "/booking",
    },
    { name: "Contact Us",
      path: "/contact",
    },
    { name: "Checkout",
      path: "/checkout",
    },
  ];

  useEffect(() => {
    const listMenus = navmenu.map((menu, index) => {
      return (
      <NavigationMenuItem key={index}>
      <NavLink to={menu.path}  className="hover:bg-[#f3f4f6] focus:bg-[#f3f4f6] hover:underline hover:underline-offset-8 hover:decoration-yellow-400 focus:underline focus:underline-offset-8 focus:decoration-yellow-400 aria-[current=page]:underline aria-[current=page]:underline-offset-8 aria-[current=page]:decoration-yellow-400 aria-[current=page]:bg-[#f3f4f6] uppercase font-semibold antialiased animate-in transition-transform duration-200 ease-in">
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {menu.name}
      </NavigationMenuLink>
      </NavLink>
      </NavigationMenuItem>
      )
})

    setListMenu(listMenus)
  },[])

  return (
  <>
  <div className='navbar w-full grid grid-cols-[1fr_2fr_auto] md:grid-cols-[1fr_1fr_2fr_auto] justify-items-center items-center bg-white justify-between '>
        <div className=' ustify-center'>
        <img className='~m-2/2 ~p-4/2 ' src="/logo192.svg" alt="Logo" />
        </div>
        <div className="~px-1/2 w-full ">
        <Input type="search" name="search" id="search" placeholder="Search" className=" focus-visible:ring-yellow-300 w-[90%] lg:w-[100%]" />
        </div>
        <NavigationMenu className='justify-center justify-items-center items-center hidden md:flex'>
          <NavigationMenuList>
            {listMenu}
          </NavigationMenuList>
        </NavigationMenu>
        <HamburgerMenu listMenu={listMenu} />
    </div>

  </>
  )
}