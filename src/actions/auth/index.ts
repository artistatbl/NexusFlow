'use server'

import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { onGetAllAccountDomains } from '../settings'
import {  } from '@clerk/nextjs/server'

export const onLoginUser = async () => {
  const user = await currentUser()
  if (!user){
    return { status: 401 }
  } 
  else {
    try {
      const authenticated = await db.user.findUnique({
        where: {
          clerkId: user.id,
		
        },
        select: {
          name: true,
          id: true,
         
        },
      })
      if (authenticated) {
        const domains = await onGetAllAccountDomains()
        return { status: 200, user: authenticated, domain: domains?.domains }
      }
    } catch (error) {
      return { status: 400 }
    }
  }
}
