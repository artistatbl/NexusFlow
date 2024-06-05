import React, { useState } from 'react'
import { User } from 'lucide-react'
import DarkModetoggle from '@/components/setting/dark-mode'
import InfoBar from '@/components/infobar'
import BillingSettings from '@/components/setting/billing-setting'
import { Separator } from '@/components/ui/separator'

const Settings = () => {
  return (
      <>
      <InfoBar />
      <Separator/>
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10 mt-20 pl-20">
      {/* <Separator/> */}
   
        <BillingSettings />


        <Separator/>





        <DarkModetoggle />
      </div>
      </>
  )
}

export default Settings


