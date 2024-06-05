'use client'
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

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
        description: string 
        subdomain: string
        custom_domain: string
      }[]
    | null
    | undefined
}

const SideBar = ({ domains }: Props) => {
  const { expand, onExpand, page, onSignOut } = useSideBar()

  return (
    <div
      className={cn(
        ' h-full w-[100px] fill-mode-forwards fixed md:relative border-r border-neutral-300 dark:border-neutral-600',
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