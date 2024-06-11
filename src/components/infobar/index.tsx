import React from 'react'
import BreadCrumb from './infoBar'
import { Card } from '../ui/card'
import { UserButton } from '@clerk/nextjs'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import { Separator } from "../ui/separator"


type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center py-1 px-4 ">
      <BreadCrumb />
  
      <div className="flex gap-3 items-center">
        <div>
        {/* <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
  
   
    <CommandSeparator />
  
  </CommandList>
</Command> */}

        </div>
      </div>
      
    </div>
  )
}

export default InfoBar