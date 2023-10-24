import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="text-white flex flex-col items-left justify-left bg-purple-700 body-font px-5 md:px-8 py-10">
  <div className="container py-8 flex flex-col lg:flex-row gap-5 items-left justify-left lg:items-center lg:justify-between ">
    <a className="flex title-font font-medium items-center md:justify-start justify-left">
      <Image src="/logo_white.svg" width='40' height='40' alt='logo' />
      <span className="ml-3 text-2xl">Trainotel</span>
    </a>
    <div className='flex flex-col lg:flex-row gap-3'>
      <p className="text-md">Copytight © 2024 Trainotel | All rights reserved</p>
      <Link href='/terms' className='underline'>Terms & Conditions</Link>
      <Link href='/privacy' className='underline'>Privacy Policy</Link>
    </div>
    <div>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href='https://www.linkedin.com/company/97433963/admin/notifications/all/' target='_blank'>
        <img src='/linkedin.svg' />
      </a>
    </span>
    </div>
  </div>
  <div className='flex items-left justify-left lg:justify-center'>
      <p>Powered by <a className='underline' target="_blank" href='https://sharpener.design/'>sharpener.design</a></p>
  </div>
</footer>
  )
}
