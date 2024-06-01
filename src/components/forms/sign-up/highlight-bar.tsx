'use client'
import { useAuth } from '@/content/use-auth-content'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {}

const HighLightBar = (props: Props) => {
  const { currentStep } = useAuth()

  return (
    <div className="grid grid-cols-3 gap-3">
      <div
        className={cn(
          'rounded-full h-2 col-span-1',
          currentStep == 1 ? 'bg-grandis' : 'bg-platinum'
        )}
      ></div>
      <div
        className={cn(
          'rounded-full h-2 col-span-1',
          currentStep == 2 ? 'bg-grandis' : 'bg-platinum'
        )}
      ></div>
      <div
        className={cn(
          'rounded-full h-2 col-span-1',
          currentStep == 3 ? 'bg-grandis' : 'bg-platinum'
        )}
      ></div>
    </div>
  )
}

export default HighLightBar