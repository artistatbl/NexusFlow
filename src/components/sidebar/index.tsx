'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import clsx from 'clsx'
import { Separator } from '@/components/ui/separator'
import { BellIcon, Database, GitBranch, LucideMousePointerClick ,LogOut, Menu, MonitorSmartphone } from 'lucide-react'
 import { ModeToggle } from '../global/mode-toggle'
 import Image from 'next/image'
import { useTheme } from 'next-themes'
import MenuItem from './menu-item'
import { MenuLogo } from '../icons/menu-logo'
import { cn } from '@/lib/utils'
import useSideBar from '@/content/use-sidebar'
import {MinMenu} from './min-menu'
import MaxMenu from './max-menu'



type Props = {
  domains:
    | {
        id: string
        name: string
        icon: string
      }[]
    | null
    | undefined
}

const SideBar = ({ domains }: Props) => {
  const { expand, onExpand, page, onSignOut } = useSideBar()

  return (
    <div
      className={cn(
        'bg-indigo dark:bg-neutral-950 h-full w-[100px] fill-mode-forwards fixed md:relative',
        expand == undefined && '',
        expand == true
          ? 'animate-open-sidebar'
          : expand == false && 'animate-close-sidebar'
      )}
    >
      {expand ? (
        <MaxMenu
          domains={domains}
          current={page!}
          onExpand={onExpand}
          onSignOut={onSignOut}
        />
      ) : (
        <MinMenu
          domains={domains}
          onShrink={onExpand}
          current={page!}
          onSignOut={onSignOut}
        />
      )}
    </div>
  )
}

export default SideBar