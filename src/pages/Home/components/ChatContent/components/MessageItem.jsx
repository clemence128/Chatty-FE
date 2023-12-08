import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment/moment';

export default function MessageItem({message}) {
    const {currentUser} = useSelector(state => state.user);

    const isUserMessage = () => {
        return message.sender._id === currentUser._id
    }
console.log(message)
    const {content, createdAt, sender} = message
  return (
    // <div className={`flex flex-col gap-1 p-2 rounded-2xl w-fit max-w-[450px] ${isUserMessage() ? 'bg-primary text-white self-end': 'bg-gray-200 '}`}>
    //     <span className='pr-8'>{content}</span>
    //     <span className='text-right text-xs'>{moment(createdAt).format('HH:mm')}</span>
    // </div>
    <div className={`chat ${isUserMessage() ? 'chat-end' : 'chat-start'}`}>
     {!isUserMessage() ? <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={sender.avatar}/>
        </div>
      </div> : <></>}

      <div className='chat-header'>
        {!isUserMessage() ? sender?.name: ''} 
      </div>
      <div className={`chat-bubble ${isUserMessage() ? 'chat-bubble-primary' : ''}`}>{content}</div>
      <div className='chat-footer'>
        <time className='text-xs opacity-50'>{moment(createdAt).format("HH:mm")}</time>
      </div>
    </div>
  )
}
