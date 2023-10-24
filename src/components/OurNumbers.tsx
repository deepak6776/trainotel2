import React from 'react'

export default function OurNumbers() {
  return (
    <div className='bg-purple-700 py-20 px-16 '>
      <h2 className='text-4xl font-bold text-gray-50 text-center mb-8 lg:mb-16'>About our numbers</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-50 items-center justify-evenly text-lg p-6'>
        <div className='flex flex-col items-center justify-center '>
          <text className='xl:text-5xl text-3xl font-semibold mb-1 '>850+</text>
          <text >Daily active users</text>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <text className=' xl:text-5xl text-3xl font-semibold mb-1 '>97%</text>
          <text >Client satisfaction</text>
        </div>
        <div className=' flex flex-col items-center justify-center '>
          <text className=' xl:text-5xl text-3xl font-semibold mb-1 '>34,000+</text>
          <text >Hours of training</text>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <text className=' xl:text-5xl text-3xl font-semibold mb-1 '>250+</text>
          <text >Skills</text>
        </div>
        
      </div>
    </div>
  )
}
