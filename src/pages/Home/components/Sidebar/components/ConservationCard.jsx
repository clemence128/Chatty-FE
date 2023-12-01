import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getConservationInfo from '../../../../../utils/getConservationInfo';
import { selectConservation, updateLatestMessage } from '../../../../../redux/conservationSlice';
import moment from 'moment/moment';
import { useSocket } from '../../../../../contexts/socket.context';

export default function ConservationCard({conservation}) {
  const {socket} = useSocket();
  const {currentUser} = useSelector(state => state.user);
  const {currentConservation} = useSelector(state => state.conservation)
  const {updatedAt, isDeleted, latestMessage} = conservation

  const dispatch = useDispatch()

  const selectConservationHandler = () => {
    dispatch(selectConservation(conservation))
    socket.emit('joinConservation', {conservation})
  }

  useEffect(() => {
    socket.on('receivedMessage', (data) => {
      const {message, conservation} = data;
      dispatch(updateLatestMessage(message))
    })

  }, [])
  
  return (
    <div onClick={selectConservationHandler} className={`py-4 px-2 hover:bg-base-300 transition cursor-pointer ${currentConservation?._id === conservation._id ? 'bg-base-300' : ''}`}>
      <div className='flex gap-2 items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='avatar'>
            <div className='w-12 rounded-full'>
              <img src={getConservationInfo(conservation, currentUser._id).avatar}/>
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <p className='text-lg font-semibold'>{getConservationInfo(conservation, currentUser._id).name}</p>
            <p className='text-sm'>{isDeleted ? "This message is unsent" : 
                                    latestMessage && latestMessage.content ? 
                                    latestMessage.content.length > 35 ? 
                                    latestMessage.content.slice(0, 35) + "...": 
                                    latestMessage.content: ''}</p>
          </div>
        </div>

        <div>
          <p>{latestMessage ?  moment(updatedAt).fromNow(): ""}</p>
        </div>
      </div>
    </div>
  )
}
