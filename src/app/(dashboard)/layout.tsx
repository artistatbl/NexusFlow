import React from 'react'
import Sidebar from '@/components/sidebar'
import InfoBar from '@/components/infobar'

type Props = { children: React.ReactNode }

const OwnerLayout = ({ children }: Props) => {
  return (
  //   <div className="flex  h-screen border-b">
	//  <Sidebar/>
  //     <div className="w-full border-b  pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll ">
  //       <InfoBar />
  //       {props.children}
  //     </div>
  //   </div>

  <div className="flex h-screen w-full">
  <Sidebar domains={null}/>
  <div className="w-full h-screen flex flex-col pl-20 md:pl-4">
    {children}
  </div>
</div>
  )
}

export default OwnerLayout