import React from 'react'
import Sidebar from '@/components/sidebar'
// import InfoBar from '@/components/infobar'
import Navbar from '@/components/global/navbar'
import { onLoginUser } from '@/actions/auth'

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
   console.log(authenticated); // Check what value it returns
   if (!authenticated || !authenticated.domain) {
     return (
      <>
      <Navbar/>
       <div className='flex justify-center items-center h-screen w-full'>
         <div className='text-center font-extrabold text-red-500 text-4xl'>
           Please log in to access this page.
         </div>
       </div>
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