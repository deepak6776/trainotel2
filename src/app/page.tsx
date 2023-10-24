
import Image from 'next/image'
import HeroSection from '@/components/hero-section'
import Features from '@/components/features'
import Content from '@/components/content'
import About from '@/components/about'
import Vision from '@/components/vision'
import Contact from '@/components/contact'
import Locate from '@/components/locate'
import Testimonial from '@/components/testimonial'
import Clients from '@/components/clients'
import TrustedBy from '@/components/TrustedBy'
import UseCases from '@/components/UseCases'
import OurNumbers from '@/components/OurNumbers'
import Calculator from '@/components/calculator'
import Chart from '@/components/chart'
import Math from '@/components/math'
import TestNav from '@/components/TestNav'





export default function Home() {
  return (
    <main className=' overflow-x-clip '>
      <TestNav/>
      <HeroSection/>
      <TrustedBy/>
      <Features />
      <UseCases />
      <OurNumbers/>
      <Testimonial />
      <Contact />
      <About />
      {/* <Content />
      <Vision /> */}
      {/* <Math /> */}
      {/* <Clients /> */}
      {/* <Calculator /> */}
      {/* <Chart /> */}
      {/* <Locate /> */}
    </main>
  )
}
