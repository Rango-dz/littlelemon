import React from 'react'

export default function ButtonHero(props) {
  return (
    <>
        <button className='bg-yellow-300 rounded-md font-semibold text-lg w-1/3 my-2'>{props.name}</button>
    </>
  )
}
