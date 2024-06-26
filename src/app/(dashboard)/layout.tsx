import React from 'react'
import Sidebar from '@/components/sidebar'
// import InfoBar from '@/components/infobar'
import Navbar from '@/components/global/navbar'
import { onLoginUser } from '@/actions/auth'
import { RedirectToSignIn } from '@clerk/nextjs'; // Ensure this is the correct import path and name

// interface AuthenticatedUser {
//   status: number;
//   user?: { id: string; name: string | null };
//   domain?: {
//     id: string; 
//     name: string; 
//     icon: string;
//     description?: string;
//     subdomain?: string;
//     custom_domain?: string;
//   }[];
// }

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

   // Extend domain objects with default values for missing properties
   const extendedDomains = authenticated.domain.map(domain => ({
     ...domain,
     description: domain.description || 'No description available',
     subdomain: domain.subdomain || 'default',
     //custom_domain: domain.custom_domain || 'none'
   }));

   return (
    <div className="flex h-screen w-full">
      <Sidebar domains={extendedDomains}/>
      <div className="w-full h-screen flex flex-col pl-20 md:pl-4">
        {children}
      </div>
    </div>
  )
}

export default OwnerLayout