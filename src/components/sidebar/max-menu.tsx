import { SIDE_BAR_MENU } from '@/constants/menu'
import { LogOut, CircleChevronRight, MonitorSmartphone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import DomainMenu from './domain-menu'
import MenuItem from './menu-item'
import { Separator } from '../ui/separator'
import UpgradeMenu from './upgrade-menu' 
import { ScrollArea } from '../ui/scroll-area'
import { UserButton } from '@clerk/nextjs'

type Props = {
  onExpand(): void
  current: string
  onSignOut(): void
  domains:
    | {
        id: string
        name: string
        icon: string | null
        description: string 
        subdomain: string
        custom_domain: string
      }[]
    | null
    | undefined
}

const MaxMenu = ({ current, domains, onExpand, onSignOut }: Props) => {
  return (
    <div className="py-3 px-4 flex flex-col h-full">
      <div className="flex justify-between items-center">
        	<aside className="flex ml-2 items-center gap-[2px]">
        <p className="text-sm font-bold ">Nexus</p>
        <Image
          src="/logo.png"
          width={10}
          height={10}
          alt="fuzzie logo"
          className="animate-fade-in bg-neutral-500 dark:bg-neutral-500 opacity-0 delay-300 fill-mode-forwards"
        />
        <p className="text-sm font-bold ">Flow</p>

     
      </aside>
        <CircleChevronRight
          className="cursor-pointer animate-fade-in opacity-0 delay-300 fill-mode-forwards"
          onClick={onExpand}
        />

        
      </div>
     
      <Separator className='mt-7  ' />

      <div className="animate-fade-in opacity-0 delay-300 fill-mode-forwards flex flex-col justify-between h-full pt-10">
        <div className="flex flex-col">
          <p className="text-xs text-gray-500  ">MENU</p>
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem
              size="max"
              {...menu}
              key={key}
              current={current}
            />
          ))}

        
         <ScrollArea className="h-[200px] w-55 p-4 rounded-md border dark:border-white border-black/50">
          <DomainMenu domains={domains} />
        </ScrollArea>
        </div>
        <UpgradeMenu />  
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-3">OPTIONS</p>
          <UserButton />
          <MenuItem
            size="max"
            label="Sign out"
            icon={<LogOut />}
            onSignOut={onSignOut}
          />
       
       
        </div>
      </div>
    </div>
  )
}

export default MaxMenu