import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import ConservationCard from "./ConservationCard"
import { addConservation, updateLatestMessage } from '../../../../../redux/conservationSlice';
import { useSocket } from '../../../../../contexts/socket.context';

export default function ConservationsContainer() {
  const {socket} = useSocket()
  const {conservations, isLoading} = useSelector(state => state.conservation)
  const dispatch = useDispatch();


  useEffect(() => {
    socket.on('receivedMessageForUserNotInRoom', (data) => {
      const {message, conservation} = data;
      dispatch(addConservation(conservation))
      dispatch(updateLatestMessage(message))
    })
    
    return () => {
      socket.off('receivedMessageForUserNotInRoom')
    }
  }, [])

  return isLoading ? (
      <div className='flex-1 flex items-center justify-center'>
        <span className='loading loading-spinner loading-lg text-primary'></span>
      </div>
    ) : (
      <div className='h-full'>
        {conservations.length === 0 ? (
          <div className='h-full flex-1 flex items-center justify-center'>
            <p className='text-lg'>You haven't started any conversations yet...</p>
          </div>
        ) : (
          <>
            {conservations.map(conservation => (
              <ConservationCard key={conservation._id} conservation={conservation} />
            ))}
          </>
        )}
      </div>
    )
}

