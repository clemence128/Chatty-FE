import React from 'react'

export default function FilePreviewCard({file, index}) {
    const {type, data} = file
  return <div>
          <img src={data} className='w-[75px] h-[75px] object-cover'/>
    </div>
}
