import React from 'react'

const Footer = () => {
  return (
    <footer className="w-[90%] sm:w-[90%] lg:w-[90%] md:w-[97%] xl:w-[70%]  mb-10 bg-black  dark:bg-white text-white dark:text-black flex justify-center rounded-xl ">
      <div className="w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-between rounded-lg p-4">
        <div className="flex items-end text-end mb-4 md:mb-0 md:mr-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>

          <p className="ml-1 font-extrabold">NexusFlow</p>
        </div>
        <div className="text-center text-gray-400 text-sm md:text-left  mr-4 ">
          <p>Copyright © 2024 By NexusFlow • All rights reserved</p>
        </div>
        <div className="flex flex-col text-gray-400 text-sm md:flex-row space-y-4 md:space-y-0 md:space-x-8 ">
          <a href="mailto:hello@divity.app" className="hover:text-gray-400">contact@nexusflow.io</a>
          <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-gray-400 text-end">Terms Of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

