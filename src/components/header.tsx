import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Header() {
  return (
    <header className="text-black body-font flex justify-center sticky top-0 left-0 z-10 bg-white">
    <div className="container w-11/12 flex flex-row justify-center p-2 items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image src='/logo.svg' alt="company logo" width='50' height='50' />
        <span className="ml-3 text-xl text-purple-500 font-semibold ">Trainotel</span>
        </a>
        <nav className="ml-auto md:flex flex-wrap hidden items-center text-base justify-center">
          <Link className='mr-7 hover:text-purple-600' href='#features'>Features</Link>  
          <Link className='mr-7 hover:text-purple-600' href='#cases'>Use Cases</Link>  
          <Link className='mr-7 hover:text-purple-600' href='#about'>About Us</Link>  
          <Link className='mr-7 hover:text-purple-600' href='#testimonials'>Testimonials</Link>  
          <Link className='mr-7 hover:text-purple-600' href='#contact'>Contact</Link>   
        </nav>
    </div>

    </header>
    
  )
}
