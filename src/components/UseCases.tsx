import React from 'react'
import Image from 'next/image'

export default function UseCases() {
  return (
    <section className=' text-gray-600 flex justify-center ' id="cases">
      <div className='container flex py-24 flex-col'>
        <div className="flex flex-col items-center text-center w-full mb-5">
          <h2 className="text-4xl font-bold text-gray-800 title-font mb-4">Training Use Cases</h2>
          <text className=" font-medium title-font mb-4 w-3/4 ">Unlock limitless LMS adventures: from onboarding to boosting sales and customer team wins, crafting flexible, bespoke learning paths for career growth, upskilling, and talent stickiness!</text>
        </div>
        <div className='flex flex-col-reverse md:flex-row items-center justify-evenly p-6 md:p-16 gap-8'>
          <div className='flex flex-col md:w-2/5 '>
            <h3 className='text-4xl font-bold text-gray-800 title-font mb-4'>Onboarding</h3>
            <text className=' tracking-normal '>Onboard new hires like your business depends on it, because it does. Automate manual tasks and equip new hires with structured training enabling them to be floor ready from Day 1.</text>
          </div>
          <div>
            <Image src='/onboarding.svg' alt='illustration' width='450' height='350' />
          </div>
        </div>

        <div className='flex flex-col-reverse  md:flex-row-reverse items-center justify-evenly p-6 md:p-16 gap-8'>
          <div className=' flex flex-col md:w-2/5'>
            <h3 className='text-4xl font-bold text-gray-800 title-font mb-4'>Customer Service</h3>
            <text className=' tracking-normal '>Invest in your customer service team with the right training and tools to help them provide exceptional service and drive business results.</text>
          </div>
          <div>
            <Image src='/customer_service.svg' alt='illustration' width='450' height='350' />
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row items-center justify-evenly p-6 md:p-16 gap-8'>
          <div className=' flex flex-col md:w-2/5'>
            <h3 className='text-4xl font-bold text-gray-800 title-font mb-4'>Manufacturing</h3>
            <text className=' tracking-normal '>Bridge the manufacturing skills gap and prepare your workforce for Industry 4.0 with a digital-first safety culture by upskilling and providing the right training to ensure quality production</text>
          </div>
          <div>
            <Image src='/manufacturing.svg' alt='illustration' width='450' height='350' />
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row-reverse items-center justify-evenly p-6 md:p-16 gap-8'>
          <div className=' flex flex-col md:w-2/5'>
            <h3 className='text-4xl font-bold text-gray-800 title-font mb-4'>Sales</h3>
            <text className=' tracking-normal '>Enhance sales skills and performance with interactive, data-driven training modules on our comprehensive LXP platform.</text>
          </div>
          <div>
            <Image src='/sales.svg' alt='illustration' width='450' height='350' />
          </div>
        </div>


      </div>
    </section>
  )
}