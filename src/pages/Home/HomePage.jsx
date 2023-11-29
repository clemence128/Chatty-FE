import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import ChatContent from './components/ChatContent/ChatContent'

export default function HomePage() {
  return (
    <div className='h-screen flex'>
        <Sidebar/>
        <ChatContent/>
    </div>
  )
}
