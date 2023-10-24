import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactForm from './form'


export default function Contact() {
  return (
  <section className="text-gray-600 bg-purple-50 body-font flex items-center justify-center" id='contact'>
  <div className="container flex flex-col lg:flex-row items-center px-5 py-24 justify-center ">
    <div className="flex flex-col items-center w-full mb-10">
      <Image src='/laptop.svg' width='430' height='240' alt="illustration of laptop" />
      <div className='lg:w-2/3 mt-4'>
      <h1 className="text-3xl md:text-4xl font-semibold title-font mb-4 text-gray-900">Book a demo</h1>
      <p className='mb-2'>Transform your training approach with Trainotel.</p>
      <p>Fill out the form below and one of our representatives will get back to you shortly.</p>
      </div>
    </div>
    <ContactForm />
  </div>
</section>
  )
}
