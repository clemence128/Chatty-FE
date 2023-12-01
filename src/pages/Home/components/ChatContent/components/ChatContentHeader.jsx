import React from 'react'
import { useSelector } from 'react-redux'
import getCoservationInfo from "./../../../../../utils/getConservationInfo"

export default function ChatContentHeader() {
  const {currentConservation} = useSelector(state => state.conservation)
  const {currentUser} = useSelector(state => state.user)

  return (
    <div className='p-2 bg-base-200'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='avatar'>
            <div className='w-12 rounded-full'>
              <img src={getCoservationInfo(currentConservation, currentUser._id).avatar}/>
            </div>
          </div>

          <p className='text-lg font-semibold'>{getCoservationInfo(currentConservation, currentUser._id).name}</p>
        </div>

        <div></div>
      </div>
    </div>
  )
}
