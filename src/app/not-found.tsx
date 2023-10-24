import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='container flex flex-col-reverse lg:flex-row items-center justify-center mx-auto py-20 gap-5'>
      <div className='flex flex-col w-full lg:w-1/2 px-5 gap-10'>
        <h1 className='font-bold text-4xl'>Page Not Found</h1>
        <p>Oops! The page you are looking for does not exist. Click the button below to return to our homepage.</p>
        <Link href='/'>
          <button className='inline-flex justify-center text-white bg-purple-500 border-0 py-3 px-3 focus:outline-none hover:bg-purple-600 rounded text-lg w-1/2 '>Homepage</button>
        </Link>
      </div>
      <div>
        <img src="/not_found.svg" />
      </div>
    </main>
  )
}
