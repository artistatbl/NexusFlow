'use server'

import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { RedirectToSignIn } from '@clerk/nextjs'
import { onGetAllAccountDomains } from '../settings'


export const onLoginUser = async () => {
  const user = await currentUser()
  if (!user){
     return RedirectToSignIn({redirectUrl: '/sign-in'})
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