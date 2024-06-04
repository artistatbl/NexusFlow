import React from 'react'
import Sidebar from '@/components/sidebar'
import InfoBar from '@/components/infobar'
import { onLoginUser } from '@/actions/auth'

type Props = { children: React.ReactNode }

const OwnerLayout = async ({ children }: Props) => {
   const authenticated = await onLoginUser();
   console.log(authenticated); // Check what value it returns
   if (!authenticated) {
     return <div>Please log in to access this page.</div>;
   }


  return (
    <div className="flex h-screen w-full">
      <Sidebar domains={authenticated?.domain}/>
      <div className="w-full h-screen flex flex-col pl-20 md:pl-4">
        {children}
      </div>
    </div>
  )
}

export default OwnerLayout