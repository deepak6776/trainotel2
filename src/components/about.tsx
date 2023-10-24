import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <>
    <span > </span>
    <section className="text-gray-600 body-font" id="about"  >
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    
    <div className="flex flex-col flex-wrap lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">    
        <div className="flex-grow text-base">
          <h2 className="text-4xl font-bold text-gray-800 mb-10 ">About Us</h2>
          <p className="mb-10">We are a dynamic team with a passion for tech innovation. Trainotel was born from our own need to address training challenges, proving its effectiveness within our youthful workforce.</p>
          <p className="mb-10">Recognising its potential, we are now sharing Trainotel with businesses aiming to invest in their teams. We believe in empowering individuals to become innovators, and our platform is designed to cultivate a skilled and adaptable workforce.</p>
          
        </div>    
      </div>   
    </div>
    <div className=" flex items-center justify-center lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <Image src="/about.svg" alt="illustration of a team in office" width="600" height="400"/>
    </div> 
  </div>
</section>
</>
  )
}



