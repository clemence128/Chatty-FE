import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessagesByConservation } from '../../../../redux/messageSlice';
import ChatContentHeader from "./components/ChatContentHeader"
import ChatContentMessage from "./components/ChatContentMessage"
import ChatContentAction from './components/ChatContentAction';
import FilePreview from './components/FilePreview';

export default function ChatContent() {
  const {files} = useSelector(state => state.message)
  console.log(files)
  const {currentConservation} = useSelector(state => state.conservation)
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch();
  
  const getMessagesByConservationHandler = async() => {
    if(currentConservation){
      setIsLoading(true)
      await dispatch(getMessagesByConservation(currentConservation._id))
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getMessagesByConservationHandler();
  }, [currentConservation])

  if(isLoading){
    return <div className='flex-1 h-full w-full flex items-center justify-center'>
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  }

  if(!currentConservation){
    return <div className='flex-1 h-full w-full items-center justify-center bg-pink-400'>
      <span></span>
    </div>
  }

  return (
    <div className='flex-1 h-full flex flex-col'>
      {files.length > 0 && 
        <FilePreview/>}
        <>
          <ChatContentHeader/>
          <ChatContentMessage/>
          <ChatContentAction/>
        </>
    
    </div>
  )
}
