
import React from 'react'

export default function TrustedBy() {
  return (
    <div className='py-20 px-5 xl:px-20  font-medium mx-auto '>
      <h2 className=' text-2xl text-center mb-16'>Trusted By</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4 justify-between mx-auto xl:text-xl w-1/2 md:w-2/3 lg:w-full'>
        <div className='flex items-center justify-center gap-4 h-14 xl:h-20'>
          <img className='h-14 xl:h-16' src='/oterralogo.svg' alt='oterra company logo' />
          <text>The Oterra</text>
        </div>
        <div className='flex items-center justify-center gap-4 '>
          <img className='h-12 xl:h-14' src='/alokaspa.svg' alt='oterra company logo'  />
          <text>Aloka Spa</text>
        </div>
        <div className='flex items-center justify-center gap-4 '>
          <img className='h-14 xl:h-16' src='/46ounces.svg' alt='oterra company logo' />
          <text>Forty Six Ounces</text>
        </div>
        <div className='flex items-center justify-center gap-4 '>
          <img className='h-12 xl:h-14' src='/velankanilogo.svg' alt='oterra company logo' />
          <text>Velankani Group</text>
        </div>
        
      </div>
    </div>
  )
}
