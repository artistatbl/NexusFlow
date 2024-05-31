import React from 'react'
import Sidebar from '@/components/sidebar'
import InfoBar from '@/components/infobar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen border-b">
      {/* <Sidebar /> */}
	 <Sidebar />
      <div className="w-full border-b  pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll ">
        <InfoBar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout