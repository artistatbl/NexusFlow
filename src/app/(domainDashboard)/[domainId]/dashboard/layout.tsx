import React from 'react'
import Sidebar from '@/components/sidebar'
// import InfoBar from '@/components/infobar'
import Navbar from '@/components/global/navbar'
import { onLoginUser } from '@/actions/auth'
import { RedirectToSignIn } from '@clerk/nextjs'; // Ensure this is the correct import path and name
import DomainSidebar from '@/components/domain/DomainSideBar';

type Props = { children: React.ReactNode }

const OwnerLayout = async ({ children }: Props) => {
   const authenticated = await onLoginUser();
  //  const router = useRouter();
   console.log('authenticated', authenticated); // Check what value it returns
   if (!authenticated || !authenticated.domain) {
     // Redirect to login page 
    //  RedirectToSignIn({redirectUrl: '/'});
     return (
      <>
       
           <RedirectToSignIn/>

        
      </>
     );
   }


   const currentDomain = authenticated.domain[0].name;

   


   return (
    <div className="flex h-screen w-full">
            <DomainSidebar params={{domain:currentDomain}}/>

      <div className="w-full h-screen flex flex-col pl-20 md:pl-4">

        {children}
      </div>
    </div>
  )
}

export default OwnerLayout