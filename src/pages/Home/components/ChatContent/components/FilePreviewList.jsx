import React from 'react'
import { useSelector } from 'react-redux'
import FilePreviewCard from './FilePreviewCard'

export default function FilePreviewList() {
  const {files} = useSelector(state => state.message)

  return (
    <div className='flex gap-2 overflow-x-scroll p-2'>
      {files.map(file => <FilePreviewCard file={file}/>)}
    </div>
  )
}
