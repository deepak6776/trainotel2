import React from 'react'

export default function Content() {
  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Core LMS Features</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">While we boast of AI powered tools we ensure the basics of an LMS are covered.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Course Management</h2>
          <p className="leading-relaxed text-base">Centralized repository for all training material in PDF format, videos and powerpoints, upload your existing data and generate new content on the fly. Maintain lessons, homework, and quizzes</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Live & Classroom Training</h2>
          <p className="leading-relaxed text-base">Conduct live trainings, or play recorded trainings, track trainer and trainee hours, manage attendance and waitlists.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Certificates & Leaderboard</h2>
          <p className="leading-relaxed text-base">Award learners for their accomplishments with certificates, encourage engagement with gamification and leaderboards.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Goal Management</h2>
          <p className="leading-relaxed text-base">Align your goals and assessments with the appropriate trainings and quizzes and keep track of progress and tasks</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Social Collboration</h2>
          <p className="leading-relaxed text-base">Drive engagement and collaboration through our Forums and Communities which allow users to be MVPs and SMEs</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Integrations</h2>
          <p className="leading-relaxed text-base">Integrate with your favorite HRMS, Performance Management System, Zoom, Teams and CRM software</p>
        </div>
      </div>
    </div>
   
  </div>
</section>
  )
}
