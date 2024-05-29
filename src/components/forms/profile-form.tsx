'use client'

import React, { use, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EditUserProfileSchema } from '@/lib/types'
import { User, Mail, Loader2 } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

type Props = {
  user: any
  onUpdate?: any
}

const ProfileForm = ({ user, onUpdate }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: 'onChange',
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  })

//   const handleSubmit = async (
//     values: z.infer<typeof EditUserProfileSchema>
//   ) => {
//     setIsLoading(true)
//     await onUpdate(values.name)
//     setIsLoading(false)
//   }

//   useEffect(() => {
//     form.reset({ name: user.name, email: user.email })
//   }, [user])

  return (
   
	<Form {...form}>
	<form
	  className="flex flex-col gap-6"
	 // onSubmit={form.handleSubmit(handleSubmit)}
	>
	  <FormField
	    disabled={true}
	    control={form.control}
	    name="name"
	    render={({ field }) => (
		 <FormItem>
		   <FormLabel className="text-lg flex items-center">
			<User className="mr-2" /> Full name
		   </FormLabel>
		   <FormControl>
			<Input
			  {...field}
			  placeholder="Name"
			/>
		   </FormControl>
		   <FormMessage />
		 </FormItem>
	    )}
	  />
	  <FormField
	    control={form.control}
	    name="email"
	    render={({ field }) => (
		 <FormItem>
		   <FormLabel className="text-lg flex items-center">
			<Mail className="mr-2" /> Email
		   </FormLabel>
		   <FormControl>
			<Input
			  {...field}
			  disabled={true}
			  placeholder="Email"
			  type="email"
			/>
		   </FormControl>
		   <FormMessage />
		 </FormItem>
	    )}
	  />
	  <Button
	    type="submit"
	    className="self-start bg-[#2F006B] text-white hover:bg-[#250054] transition-colors duration-300"
	  >
	    {isLoading ? (
		 <>
		   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
		   Saving
		 </>
	    ) : (
		 'Save'
	    )}
	  </Button>
	</form>
   </Form>
 )
}

export default ProfileForm