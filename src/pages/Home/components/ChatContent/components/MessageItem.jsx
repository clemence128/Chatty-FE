import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment/moment';

export default function MessageItem({message}) {
    const {currentUser} = useSelector(state => state.user);

    const isUserMessage = () => {
        return message.sender === currentUser._id
    }

    const {content, createdAt} = message
  return (
    <div className={`flex flex-col gap-1 p-2 rounded-2xl w-fit max-w-[450px] ${isUserMessage() ? 'bg-primary text-white self-end': 'bg-gray-200 '}`}>
        <span className='pr-8'>{content}</span>
        <span className='text-right text-xs'>{moment(createdAt).format('HH:mm')}</span>
    </div>
  )
}
