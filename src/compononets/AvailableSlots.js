import React from 'react'

export default function AvailableSlots({slots}) {
  console.log(slots)

  const allTheSlots = slots.map((slot,index) => {
    return <div key={index} className='flex flex-col'>
      <div>{slot.time}</div>
      {(slot.available) ? <div className=''>available</div> : <div className=''>Not available</div>}
    </div>
  })
  return (
    <div className='flex flex-row gap-6'>{allTheSlots}</div>
  )
}
