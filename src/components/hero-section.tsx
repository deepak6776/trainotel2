import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
<section className="text-gray-600 body-font bg-gradient-to-r flex items-center justify-center from-purple-100 to-purple-300">
  <div className="container flex px-5 py-20 md:py-24 md:flex-row flex-col-reverse items-center justify-center gap-8">
    <div className="lg:flex-grow-0 md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center gap-8">
      <h1 className="title-font text-4xl lg:text-6xl font-bold text-purple-800">Trainotel LMS</h1>   
      <p className=" leading-relaxed">Revolutionize your training with our LMS, automating seamless learning journeys, amplifying upskilling, and delivering impactful ROI in every initiative!</p>
      <div className="flex justify-center">
       <Link href='#contact'>
        <button className="inline-flex text-white bg-purple-500 border-0 py-3 px-10 focus:outline-none hover:bg-purple-600 rounded text-lg">Book a demo</button>
       </Link> 
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image src='/hero.svg' alt='illustration' width='640' height='415' />
    </div>
  </div>
</section>
  )
}
