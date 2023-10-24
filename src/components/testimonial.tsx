import React from 'react'
import Image from 'next/image'

export default function Testimonial() {
  return (
    <section className="text-gray-600 py-24 body-font" id="testimonials">
    <div className="container  mx-auto">
      <div className="flex flex-col items-center text-center w-full mb-5">
        <h2 className="text-4xl font-bold text-gray-800 title-font mb-4">Hear from our clients</h2>
        <text className=" font-medium title-font mb-4 w-3/5 ">Experience real-world impact with Trainotel LMS. From elevating corporate training to transforming hospitality service, our clients attest to significant performance gains.</text>
      </div>
      <div className="flex flex-wrap ">
        <div className="xl:w-1/3 p-4 flex flex-grow">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-5">
                {/* <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                  <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                  </svg>
                </div> */}
                <div>
                  <div className='font-semibold text-xl text-gray-800 '>Raghu Nair</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">General Manager</div>
                </div>
              </div>
              <p className="leading-relaxed text-base mb-5">&quot;Trainotel LMS has transformed the way we approach corporate training. Our employees are more engaged, and their performance has improved significantly. I would highly recommend Trainotel LMS to any business looking to improve their training program.&quot;</p>
              <text className="text-sm text-gray-900 font-extrabold title-font mb-2 tracking-wide">Oterra Hotels</text>
            </div>
          </div>
        <div className="xl:w-1/3 p-4 flex flex-grow">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-5">
                {/* <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                  <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                  </svg>
                </div> */}
                <div>
                  <div className='font-semibold text-xl text-gray-800 '>Shashank Bhardwaj</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Senior Operations Manager</div>
                </div>
              </div>
              <p className="leading-relaxed text-base mb-5">&quot;Running a restaurant means relying on our staff for providing excellent customer service. Our employees are more confident in their job roles, and we have seen a significant improvement in their performance. Trainotel LMS is the future of training for the hospitality industry.&quot;</p>
              <text className="text-sm text-gray-900 font-extrabold title-font mb-2 tracking-wide">46 Ounces Restobar</text>
            </div>
          </div>
        <div className="xl:w-1/3 p-4 flex flex-grow">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-5">
                {/* <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                  <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                  </svg>
                </div> */}
                <div>
                  <div className='font-semibold text-xl text-gray-800 '>Mayank Singh</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Senior Manager Manufacturing</div>
                </div>
              </div>
              <p className="leading-relaxed text-base mb-5">&quot;Trainotel helped align all our training material, before this LMS all our training materials was scattered and new employee onboarding took weeks, now are a well oiled machine with fewer employee accidents, and machinery induced injuries are next to zero.&quot;</p>
              <text className="text-sm text-gray-900 font-extrabold title-font mb-2 tracking-wide">Velankani Electronics</text>
            </div>
          </div>
        
      
      </div>
    </div>
  </section>
  )
}