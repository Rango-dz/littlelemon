import React from 'react'
import ButtonHero from './ButtonHero'

export default function CallToAction() {
  return (
    <>
        <div className="bg-[#495E57] w-full grid grid-flow-row justify-start p-4 py-8">
            <h1 className='text-6xl mx-2'>Little Lemon</h1>
            <h2 className='text-4xl mx-2'>Chicago</h2>
            <p className='prose mx-2 py-4 prose-p:text-white text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aperiam exercitationem assumenda dolore sit atque, iure doloribus sequi qui quo maiores laborum pariatur itaque eveniet maxime quos obcaecati dignissimos veniam.</p>
            <ButtonHero name="Reserve a Table" />
        </div>
    </>
  )
}
