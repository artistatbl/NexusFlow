'use client'
import React, { useState } from 'react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'

type Props = {
  onOpen: JSX.Element
  children: React.ReactNode
  title: string
  description: string
}

const AppDrawer = ({ children, description, onOpen, title }: Props) => {

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} >
<DialogTrigger>{onOpen}</DialogTrigger>
<DialogContent>
  <div className="container flex flex-col items-center gap-2 pb-10">
    <DialogTitle>{title}</DialogTitle>
    <DialogDescription>{description}</DialogDescription>
    {children}
  </div>
</DialogContent>
</Dialog>
  )
}

export default AppDrawer