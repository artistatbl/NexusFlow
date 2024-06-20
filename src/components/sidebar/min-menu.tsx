import { SIDE_BAR_MENU } from '@/constants/menu'

import React from 'react'
import { Separator } from '@/components/ui/separator'

import { LogOut, MonitorSmartphone } from 'lucide-react'
import { MenuLogo } from '@/components/icons/menu-logo'
import MenuItem from './menu-item'
import DomainMenu from './domain-menu'
import { UserButton } from '@clerk/nextjs'

type MinMenuProps = {
  onShrink(): void
  current: string
  onSignOut(): void
  domains:
    | {
        id: string
        name: string
        icon: string | null
        description: string
        subdomain: string

      }[]
    | null
    | undefined
}

export const MinMenu = ({
  onShrink,
  current,
  onSignOut,
  domains,
}: MinMenuProps) => {
  return (
    <div className="p-3 flex flex-col items-center  h-full">

      <span className="animate-fade-in opacity-0 delay-300 fill-mode-forwards cursor-pointer">
        <MenuLogo onClick={onShrink} />
      </span>
{/* <Separator className='mt-7' /> */}
    
      <div className="animate-fade-in opacity-0 delay-300 fill-mode-forwards flex flex-col justify-between h-full pt-4 ">

     



        <div className="flex flex-col mb-10 ">
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem
              size="min"
              {...menu}
              key={key}
              current={current}
            />
          ))}



          <DomainMenu
            min
            domains={domains}
          />


        </div>

 


        <div className="flex flex-col">
        <UserButton />
          <MenuItem
            size="min"
            label="Sign out"
            icon={<LogOut />}
            onSignOut={onSignOut}
          />
         
        
        </div>
      </div>
    </div>
  )
}