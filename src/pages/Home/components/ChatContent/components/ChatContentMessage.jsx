import React from 'react'
import { useSelector } from 'react-redux'

export default function ChatContentMessage() {
  const {messages} = useSelector(state => state.message)
  return (
    <div className='flex-1 p-2'>
      <div className='flex flex-col gap-2'>
        {messages.map(message => <p key={message._id}>{message.content}</p>)}
      </div>
    </div>
  )
}
