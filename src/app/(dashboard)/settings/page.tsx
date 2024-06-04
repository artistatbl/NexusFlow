import React, { useState } from 'react'
import { User } from 'lucide-react'
import DarkModetoggle from '@/components/setting/dark-mode'
import InfoBar from '@/components/infobar'
import BillingSettings from '@/components/setting/billing-setting'

const Settings = () => {


  return (
      <>
      <InfoBar />

      <div>Settings</div>



   <BillingSettings />
      <DarkModetoggle />
    
     

       
     
      </>
  )
}

export default Settings
