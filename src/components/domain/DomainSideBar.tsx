import Link from 'next/link';
import { GlobeIcon, Settings, Users } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { HomeIcon, UsersIcon, SettingsIcon, Zap } from 'lucide-react';
import { SIDE_BAR_DOMAIN_MENU } from '@/constants/menu';
import MenuItem from '../sidebar/menu-item';
import { UserButton } from '@clerk/nextjs';
import { onGetCurrentDomain } from '@/actions/settings';

type props = {
  params: {
    domain: string;
  };
	
}

const DomainSidebar = async ({params}:props) => {
  const domain  = await onGetCurrentDomain(params.domain)
  if(!domain){
    return 
  }
  return (
    <div className="flex flex-col items-center w-16 h-screen bg-gray-900 text-white py-4 justify-between">
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-md">
          

          <Zap className='w-6 h-6'/>

         
        </div>


      </div>
      <div className="flex flex-col items-center space-y-4 grow justify-center">
        {SIDE_BAR_DOMAIN_MENU.map((menu) => (
          <button className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-md">
            {menu.icon}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-4">
      
        <button className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-md">
          <SettingsIcon className="w-6 h-6" />
        </button>
        <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-md">
          <UserButton/>
        </div>
      
      </div>
    </div>
  );
};

export default DomainSidebar;