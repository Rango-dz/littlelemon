import React from 'react'
import { Button } from './ui/button'

export default function HeroHome() {
  return (
    <div className='bg-[#495E57] grid md:grid-cols-2 md:p-8 justify-center align-middle'>
        <div className="w-full scroll-m-20 grid grid-flow-row gap-2 md:gap-5 lg:gap-7 px-5 lg:px-10 py-8 mx-auto justify-center align-middle place-content-center">
            <h1 className="~text-4xl/7xl font-extrabold tracking-tight ">Little Lemon</h1>
            <h2 className='pb-2 md:pb-0 ~text-3xl/5xl font-semibold tracking-tight first:mt-0 '>Chicago</h2>
            <p className='prose md:py-0 text-white ~text-base/2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aperiam exercitationem assumenda dolore sit atque, iure doloribus sequi qui quo maiores laborum pariatur itaque eveniet maxime quos obcaecati dignissimos veniam.</p>
            <Button variant="outline" className="bg-yellow-300 text-black ~text-base/2xl ~px-4/8 ~py-4/8 ~w-40/80 mt-5 hover:bg-yellow-400 border-yellow-300">Reserve a Table</Button>
        </div>
        <div className='w-full md:order-1 scroll-m-20 grid grid-flow-row justify-center p-4 py-8'>
        <div className='md:block hidden rounded-md bg-white bg-cover'><img className="bg-cover w-full h-full object-cover rounded-md" src="/plate.png" alt="" /></div>
        </div>
    </div>
  )
}
