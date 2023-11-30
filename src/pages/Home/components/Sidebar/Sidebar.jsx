import React from 'react'
import SidebarHeader from './components/SidebarHeader'
import SidebarContent from './components/SidebarContent'

export default function Sidebar() {


  return (
    <div className='w-[400px] h-screen shadow-md'>
        <SidebarHeader/>
        <SidebarContent/>
    </div>
  )
}
