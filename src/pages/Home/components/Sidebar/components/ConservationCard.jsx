import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getConservationInfo from '../../../../../utils/getConservationInfo';
import { selectConservation } from '../../../../../redux/conservationSlice';

export default function ConservationCard({conservation}) {
  const {currentUser} = useSelector(state => state.user);
  const {currentConservation} = useSelector(state => state.conservation)

  const dispatch = useDispatch()

  const selectConservationHandler = () => {
    dispatch(selectConservation(conservation))
  }

  return (
    <div onClick={selectConservationHandler} className={`py-4 px-2 hover:bg-base-300 transition cursor-pointer ${currentConservation?._id === conservation._id ? 'bg-base-300' : ''}`}>
      <div className='flex gap-2 items-center'>
        <div className='avatar'>
          <div className='w-12 rounded-full'>
            <img src={getConservationInfo(conservation, currentUser._id).avatar}/>
          </div>
        </div>

        <div>
          <p className='text-lg font-semibold'>{getConservationInfo(conservation, currentUser._id).name}</p>
        </div>
      </div>
    </div>
  )
}
