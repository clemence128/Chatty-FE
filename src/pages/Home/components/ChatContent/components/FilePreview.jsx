import React from 'react'
import { useSelector } from 'react-redux'
import FilePreviewHeader from './FilePreviewHeader'
import FilePreviewDetail from './FilePreviewDetail'
import FilePreviewList from './FilePreviewList'

export default function FilePreview() {
  return <div className='flex justify-center fixed inset-0 z-[900000] bg-black bg-opacity-90'>
        <div className='max-w-[1500px] w-full p-4 py-6 h-full flex flex-col'>
            <FilePreviewHeader/>
            <FilePreviewDetail/>
            <FilePreviewList/>
        </div>
    </div>
  
}
