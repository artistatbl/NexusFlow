import { SIDE_BAR_MENU } from '@/constants/menu'
import { LogOut, Menu, MonitorSmartphone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
// import DomainMenu from './domain-menu'
import MenuItem from './menu-item'

type Props = {
  onExpand(): void
  current: string
  onSignOut(): void
  domains:
    | {
        id: string
        name: string
        icon: string | null
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
          className="animate-fade-in opacity-0 delay-300 fill-mode-forwards"
        />
        <p className="text-sm font-bold ">Flow</p>
      </aside>
        <Menu
          className="cursor-pointer animate-fade-in opacity-0 delay-300 fill-mode-forwards"
          onClick={onExpand}
        />
      </div>
      <div className="animate-fade-in opacity-0 delay-300 fill-mode-forwards flex flex-col justify-between h-full pt-10">
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-3">MENU</p>
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem
              size="max"
              {...menu}
              key={key}
              current={current}
            />
          ))}
          {/* <DomainMenu domains={domains} /> */}
        </div>
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-3">OPTIONS</p>
          <MenuItem
            size="max"
            label="Sign out"
            icon={<LogOut />}
            onSignOut={onSignOut}
          />
          <MenuItem
            size="max"
            label="Mobile App"
            icon={<MonitorSmartphone />}
          />
        </div>
      </div>
    </div>
  )
}

export default MaxMenu