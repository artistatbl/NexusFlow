'use client'
import React, { useEffect } from 'react'
import { ModeToggle } from '../global/mode-toggle'
import { Search , CircleHelp, Bell} from 'lucide-react'
import { Input } from '@/components/ui/input'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { UserButton } from '@clerk/nextjs'
// import { UserButton } from '@clerk/nextjs'
// import { useBilling } from '@/providers/billing-provider'
// import { onPaymentDetails } from '@/app/(main)/(pages)/billing/_actions/payment-connecetions'

type Props = {}

const InfoBar = (props: Props) => {
//   const { credits, tier, setCredits, setTier } = useBilling()

//   const onGetPayment = async () => {
//     const response = await onPaymentDetails()
//     if (response) {
//       setTier(response.tier!)
//       setCredits(response.credits!)
//     }
//   }

//   useEffect(() => {
//     onGetPayment()
//   }, [])

  return (
    <div className="flex flex-row sticky justify-end gap-6 items-center px-2 py-2  w-full dark:bg-black ">
      {/* <span className="flex items-center gap-2 font-bold"> */}
        <p className="text-sm font-light  bg-cyan-100 p-2 rounded-xl text-black">Credits</p>


        {/* {tier == 'Unlimited' ? (
          <span>Unlimited</span>
        ) : (
          <span>
            {credits}/{tier == 'Free' ? '10' : tier == 'Pro' && '100'}
          </span>
        )}
      </span> */}


      <span className="flex items-center rounded-full bg-muted px-4 h-8 ">
        <Search  className='mr-2'/>
        <Input
          placeholder="Quick Search"
          className="border-none bg-transparent h-2 gap-2 text-sm"
        />
      </span>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Bell />
          </TooltipTrigger>
          <TooltipContent>
            <p>Notifications</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <CircleHelp />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <UserButton />
    </div>
  )
}

export default InfoBar