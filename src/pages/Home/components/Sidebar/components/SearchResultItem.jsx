import React from 'react'

export default function SearchResultItem({result}) {
    const {_id, name, avatar} = result;
  return (
    <div className='py-4 px-2 hover:bg-base-300 transition cursor-pointer'>
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
