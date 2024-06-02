import React, { useState } from 'react'
import { User } from 'lucide-react'
import DarkModetoggle from '@/components/setting/dark-mode'

const Settings = () => {


  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky  flex items-center justify-between border-b bg-background/50 p-4 text-xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          {/* <User className="text-2xl" /> */}
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
          {/* <form >
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name:</label>
            <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />

            <label htmlFor="password" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password:</label>
            <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />

            <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Update
            </button>
          </form> */}
        </div>

        {/* <DarkModetoggle /> */}
      </div>
    </div>
  )
}

export default Settings
