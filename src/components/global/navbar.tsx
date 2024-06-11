'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import Button from '../cartoon/Button'; // Adjust the path to where you save Button.tsx
import { ModeToggle } from '@/components/global/mode-toggle';

type Props = {
  
};

const Navbar =  ( props: Props) => {
  return (
    <header className="fixed right-0 text-black dark:text-white  dark:bg-neutral-950 left-0 top-0 py-4 px-4 bg-white backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 dark:border-white justify-between">
      <aside className="flex ml-10 items-center gap-[2px]">
        <p className="text-lg font-bold">Nexus</p>
        <Image
          src="/logo.png"
          width={10}
          height={10}
          alt="fuzzie logo"
          className="shadow-sm bg-main"
        />
        <p className="text-lg font-bold">Flow</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 ml-12 list-none">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Button>
          <Link href="/dashboard">
           Dashboard
          </Link>
        </Button>
        {/* {user ? <UserButton afterSignOutUrl="/" /> : null} */}
        <MenuIcon className="md:hidden" />
        <ModeToggle />

      </aside>
    </header>
  );
};

export default Navbar;
