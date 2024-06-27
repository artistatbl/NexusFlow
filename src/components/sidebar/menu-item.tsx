import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
  size: 'max' | 'min'
  label: string
  icon: JSX.Element
  path?: string
  current?: string
  onSignOut?(): void
}

const MenuItem = ({ size, path, icon, label, current, onSignOut }: Props) => {
  switch (size) {
    case 'max':
      return (
        <Link
          onClick={onSignOut}
          className={cn(
            'flex items-center gap-2 px-1 py-2 rounded-lg my-1',
            !current
              ? 'text-black dark:text-white'
              : current == path
              ? 'bg-neutral-500 font-bold text-white dark:bg-white dark:text-black'
              : 'text-black dark:text-white'
          )}
          href={path ? `/${path}` : '#'}
        >
          {icon} {label}
        </Link>
      )
    case 'min':
      return (
        <Link
          onClick={onSignOut}
          className={cn(
            ' flex items-center gap-2 px-2',
            !current
              ? 'text-black dark:text-white'
              : current == path
              ? 'bg-neutral-300 font-bold text-white dark:bg-white dark:text-black'
              : 'text-black dark:text-white',
            'rounded-lg py-2 my-1'
          )}
          href={path ? `/${path}` : '#'}
        >
          {icon}
        </Link>
      )
    default:
      return null
  }
}

export default MenuItem