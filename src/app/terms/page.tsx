import Link from 'next/link'
import React from 'react'

export default function Terms() {
  return (
    <div className='container p-10'>
      <h1 className='text-4xl font-bold text-gray-800 title-font mb-6'>Terms & Conditions</h1>
      <div className='p-2'>
      <div className='mb-4'>
        <h2 className='text-2xl font-bold mb-2'>Acceptance of terms</h2>
        <p className='text-gray-600 text-lg'>By accessing or using the Trainotel Learning Management System (LMS), you agree to abide by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please refrain from using our services.</p>
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl font-bold mb-2'>User Accounts</h2>
        <p className='text-gray-600 text-lg'>You may be required to create a user account to access certain features of our LMS. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl font-bold mb-2'>Content & Intellectual Property</h2>
        <p className='text-gray-600 text-lg'>All content on the Trainotel LMS, including but not limited to text, graphics, software, and course materials, is protected by copyright and other intellectual property rights. You may not copy, reproduce, distribute, or modify any content without prior written consent from Trainotel.</p>
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl font-bold mb-2'>User Conduct</h2>
        <p className='text-gray-600 text-lg'>Users are expected to behave respectfully and responsibly while using our services. Inappropriate behavior, including but not limited to harassment, hacking, or unauthorized access, may result in the termination of your account.</p>
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl font-bold mb-2'>Termination</h2>
        <p className='text-gray-600 text-lg'>Trainotel reserves the right to terminate or suspend your account at any time, with or without notice, for any reason.</p>
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl font-bold mb-2'>Disclaimers</h2>
        <p className='text-gray-600 text-lg'>Trainotel provides its services &quot;as is&quot;and makes no warranties regarding the accuracy, reliability, or completeness of its content. Trainotel is not responsible for any damages or losses resulting from the use of its LMS.</p>
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl font-bold mb-2'>Privacy Policy</h2>
        <p className='text-gray-600 text-lg'>Please review our <Link href="/privacy" className='text-blue-600'> Privacy Policy</Link> for information on how we collect, use, and protect your personal data.</p>
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl font-bold mb-2'>Changes to terms & conditions</h2>
        <p className='text-gray-600 text-lg'>Trainotel may update these Terms and Conditions from time to time. Users will be notified of any changes, and continued use of our LMS after such changes constitute acceptance of the updated terms.</p>
      </div>
      </div> 
    </div>
  )
}
