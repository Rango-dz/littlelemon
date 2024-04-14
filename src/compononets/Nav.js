import React from 'react'
import { Link } from 'react-router-dom';
import HamburgerMenu from './HambergerMenu';

export default function Nav() {
  return (
    <div className='navbar w-full flex flex-row bg-slate-100 justify-between shadow'>
        <div className='basis-1/4 justify-center'>
        <img className='m-2 p-2' src="/logo192.svg" alt="Logo" />
        </div>
        <ul className='flex flex-row space-x-4 basis-3/4 justify-center justify-items-center items-center'>
        <li className='text-base capitalize font-semibold text-gray-700 hover:text-gray-600'><Link to="/food">Food</Link></li>
        <li className='text-base capitalize font-semibold text-gray-700 hover:text-gray-600'><Link to="/">Home</Link></li>
        <li className='text-base capitalize font-semibold text-gray-700 hover:text-gray-600'><Link to="/about">About</Link></li>
        <li className='text-base capitalize font-semibold text-gray-700 hover:text-gray-600'><Link to="/contact">Contact</Link></li>
        </ul>
        <HamburgerMenu />
    </div>
  )
}
