import React from 'react'
import { Button } from './ui/button'

export default function HomeCofee() {
  return (
    <div className=' w-[90%] flex flex-col lg:flex-row justify-around lg:justify-between items-center bg-[#f3f4f6] text-white rounded-lg mx-auto gap-10 ~mt-5/10 ~mb-5/10 h-screen'>
      <div className='flex flex-col text-center ~p-4/8 ~gap-5/10 justify-center items-center align-middle mt-5 lg:mt-0'>
        <div className='~text-xl/3xl font-bold text-yellow-400'>AND A DELICIOUS COFFEE TO GO WITH IT!</div>
        <p className='font-semibold text-black ~text-3xl/6xl'>We serve sensational coffee from freshly roasted beans!</p>
        <p className='font-semibold text-black ~text-xl/2xl text-left'>Freshly roasted coffee ensures great aroma, taste, and smell. We have our own roasting plant, where we roast coffee beans at the customer's request.</p>
        <Button variant="outline" className="bg-yellow-300 text-black ~text-xl/2xl ~px-4/8 ~py-4/8 ~w-40/80 mt-5 hover:bg-yellow-400 border-yellow-300">Order Now</Button>
      </div>
      <div className='w-[90%] flex justify-center items-center'><img className='object-cover rounded-md w-[60%] lg:w-[80%] place justify-center mb-5 lg:mb-0' src="/cofee.jpg" alt="cofee" /></div>
    </div>
  )
}
