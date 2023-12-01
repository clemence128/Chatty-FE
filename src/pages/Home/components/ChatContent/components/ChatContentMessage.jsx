import React from 'react'
import { useSelector } from 'react-redux'
import MessageItem from './MessageItem'

const TODAY = new Date()

export default function ChatContentMessage() {
  const {messages} = useSelector(state => state.message)
  let lastDisplayDate = '';
  return (
    <div className='flex-1 py-6 px-11 overflow-y-scroll'>
      <div className='flex flex-col gap-3'>
        {messages.map(message => {
          let html;
          const messageDate = new Date(message.createdAt);
          const isPastDate = messageDate.setHours(0, 0, 0, 0) < TODAY.setHours(0, 0, 0, 0)

          if(isPastDate && lastDisplayDate.toString() !== messageDate.toString()){
            lastDisplayDate = messageDate;
            html = <p className='text-center'>{messageDate.toDateString()}</p>
          }
          else if(!isPastDate && lastDisplayDate.toString() !== messageDate.toString()){
            lastDisplayDate = messageDate;
            html = <p className='text-center'>Today</p>
          }
          return <React.Fragment key={message._id}>
            {html}
            <MessageItem message={message}></MessageItem>
          </React.Fragment>
        })}
      </div>
    </div>
  )
}
