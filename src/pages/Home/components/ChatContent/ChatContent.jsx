import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessagesByConservation } from '../../../../redux/messageSlice';

export default function ChatContent() {
  const {currentConservation} = useSelector(state => state.conservation)
  const {isLoading} = useSelector(state => state.message)

  const dispatch = useDispatch();
  
  useEffect(() => {
    if(currentConservation){
      dispatch(getMessagesByConservation(currentConservation._id))
    }
  }, [currentConservation])

  if(isLoading){
    return <div className='flex-1 h-full w-full flex items-center justify-center'>
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  }

  return (
    <div className='flex-1 h-full'>ChatContent</div>
  )
}
