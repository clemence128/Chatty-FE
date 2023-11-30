import React, { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"

export default function ConservationsContainer() {
  const {conservations, isLoading} = useSelector(state => state.conservation)

  if(isLoading){
    return (
      <div className='flex-1 flex items-center justify-center'>
        <span className='loading loading-spinner loading-lg text-primary'></span>
      </div>
    )
  }
  
  return (
    <div className='h-full'>
      {conservations.length === 0 
        ? <div className='h-full flex-1 flex items-center justify-center'>
          <p className='text-lg'>You haven't started any conversations yet...</p>
        </div> 
        : <></>
      }
    </div>
  )
}