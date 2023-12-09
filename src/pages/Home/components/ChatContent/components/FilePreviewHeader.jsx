import React from 'react'
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { removeAllFile } from '../../../../../redux/messageSlice';


export default function FilePreviewHeader() {
    const dispatch = useDispatch()

    const removeAllFileHandler = () => {
        dispatch(removeAllFile())
    }
  return (
    <div className='flex justify-between'>
        <span></span>
        <button onClick={removeAllFileHandler} className='bg-inherit border-none'>
            <IoClose className='w-12 h-12 fill-white'/>
        </button>
    </div>
  )
}
