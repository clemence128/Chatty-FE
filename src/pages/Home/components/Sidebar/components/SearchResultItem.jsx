import React from 'react'
import { useDispatch } from 'react-redux';
import { openConservation } from '../../../../../redux/conservationSlice';

export default function SearchResultItem({result, setIsSearching}) {
    const {_id, name, avatar} = result;
    const dispatch = useDispatch();

    const openConservationHandler = () => {
      dispatch(openConservation(_id))
      setIsSearching(false)
    }

  return (
    <div onClick={openConservationHandler} className='py-4 px-2 hover:bg-base-300 transition cursor-pointer'>
      <div className='flex gap-2 items-center'>
        <div className='avatar'>
          <div className='w-12 rounded-full'>
            <img src={avatar}/>
          </div>
        </div>

        <div>
          <p className='text-lg font-semibold'>{name}</p>
        </div>
      </div>
    </div>
  )
}
