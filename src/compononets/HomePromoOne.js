import React from 'react'

export default function HomePromoOne() {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen gap-10 mb-10 w-full bg-[url('/public/special.png')] object-cover bg-no-repeat bg-cover border-b-8 border-yellow-400">
    <div>
    <img className='w-16 h-16 animate-in transition-all duration-500 ease-in' src='/lemon.svg' alt=''></img></div>
    <div className='text-center ~text-4xl/8xl font-bold capitalize flex flex-col items-center justify-center ~gap-2/5'>
      <span>We have</span> <span className='text-yellow-400 animate-[pulse_1.5s_infinite]'>something special</span> <span>for you</span>
    <p className='text-center ~text-xl/2xl max-w-md bg-white p-4 opacity-80 lg:bg-none'>We offer quick meals for great hunger. Interested? Are you dreaming of a hamburger with fries? How about a salad or pizza? Explore our menu and see what we can offer you.</p>
    </div>
    <div>
    </div>
    </div>
  )
}
