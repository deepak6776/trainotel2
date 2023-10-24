import React from 'react'
import Image from 'next/image'

export default function Features() {
  return (
<section className="text-gray-600 py-24 xl:px-14 body-font bg-purple-50" id='features'>
  <div className="container mx-auto py-4">
    <div className="flex flex-col items-center text-center w-full mb-5">
      <h2 className="text-4xl font-bold text-gray-800 title-font mb-4">Features</h2>
      <text className=" font-medium title-font mb-4 w-3/5 ">Trainotel offers smart automation, dynamic upskilling, and seamless integrations, all in one powerful, user-friendly platform.</text>
    </div>
    <div className="flex flex-wrap ">
      <div className="xl:w-1/3 md:w-1/2 p-4 flex flex-grow">
          <div className="border border-blue-50 bg-white p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
             <Image src='/hub.svg' alt='hub and spoke' width='60' height='60' />
            </div>
            <h3 className="text-lg text-gray-900 font-extrabold title-font mb-2 tracking-wide"> Learner Engagement</h3>
            <p className="leading-relaxed text-base">Gamification and forums keep learners engaged, fostering healthy competition and shared experiences. Gather feedback to refine content, boosting productivity and workforce satisfaction.</p>
          </div>
        </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 flex flex-grow">
          <div className="border border-blue-50 bg-white p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
             <Image src='/folder.svg' alt='folder' width='60' height='60' />
            </div>
            <h3 className="text-lg text-gray-900 font-extrabold title-font mb-2 tracking-wide">Automated Processes</h3>
            <p className="leading-relaxed text-base">Utilise AI for course creation, auto-enrollments, and unbiased grading. Minimise managerial tasks and celebrate achievements with auto-generated certificates, making the learning personalised.</p>
          </div>
        </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 flex flex-grow">
          <div className="border border-blue-50 bg-white p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
             <Image src='/warning.svg' alt='warning sign' width='60' height='60' />
            </div>
            <h3 className="text-lg text-gray-900 font-extrabold title-font mb-2 tracking-wide">Compliance & Risk</h3>
            <p className="leading-relaxed text-base">Strengthen compliance through targeted content and quizzes. Ensure each employee meets standards, reducing organisational risk and enhancing safety measures.</p>
          </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 flex flex-grow">
          <div className="border border-blue-50 bg-white p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
             <Image src='/rupee.svg' alt='rupee currency sign' width='60' height='60' />
            </div>
            <h3 className="text-lg text-gray-900 font-extrabold title-font mb-2 tracking-wide">Cost Reduction</h3>
            <p className="leading-relaxed text-base">Speed up ROI by making new hires job-ready. Cut costs on external training and travel, and provide focused and targeted training to the individual. Streamline onboarding for immediate readiness.</p>
          </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 flex flex-grow">
          <div className="border border-blue-50 bg-white p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
             <Image src='/pencil.svg' alt='pencil and scale' width='60' height='60' />
            </div>
            <h3 className="text-lg text-gray-900 font-extrabold title-font mb-2 tracking-wide">Content Management</h3>
            <p className="leading-relaxed text-base">Overcome writer&apos;s block with AI-driven course creation. Maintain quiz integrity through randomised question banks. Offer instant feedback for accelerated learning.</p>
          </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 flex flex-grow">
          <div className="border border-blue-50 bg-white p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
             <Image src='/barchart.svg' alt='bar chart' width='60' height='60' />
            </div>
            <h3 className="text-lg text-gray-900 font-extrabold title-font mb-2 tracking-wide">Insights</h3>
            <p className="leading-relaxed text-base">Obtain real-time or comprehensive analytics on your L&D initiatives. Go beyond tracking completions to assess the true impact of your training programs on key business metrics.</p>
          </div>
      </div>
    </div>
    
  </div>
</section>
  )
}