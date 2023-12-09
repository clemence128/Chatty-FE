import React, { useRef, useState } from 'react'
import { HiOutlinePaperClip } from "react-icons/hi";
import { BiRightArrowAlt } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { addFile, createMessage } from '../../../../../redux/messageSlice';
import {useSocket} from "./../../../../../contexts/socket.context"
import { updateLatestMessage } from '../../../../../redux/conservationSlice';

export default function ChatContentAction() {
    const fileRef = useRef()
    const {socket} = useSocket();
    const [message, setMessage] = useState('');
    const {isLoading} = useSelector(state => state.message);
    const {currentConservation} = useSelector(state => state.conservation);
    const dispatch = useDispatch()

    const sendMessageHandler = async(e) => {
        e.preventDefault()
        if(message.trim() === '') return;

        const response = await dispatch(createMessage({conservationId: currentConservation._id, content: message.trim()}))
        const {data} = response.payload;
        dispatch(updateLatestMessage(data));
        socket.emit('sendMessage', {message: data, conservation: currentConservation})
        setMessage('')

    }

    const selectFileHandler = (e) => {
        const {files} = e.target;
        
        for(let i = 0; i < files.length; i++){
            const file = files[i]
            const {name, size, type} = file;
            console.log(file)
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                dispatch(addFile({type, data: reader.result}))
            }
        }
        
    }

    return (
        <div className='p-2 bg-base-200'>
            <div className='flex gap-2 items-center'>
                <button className='btn btn-glass' onClick={() => fileRef.current.click()}>
                    <HiOutlinePaperClip className='w-6 h-6 text-primary'/>
                    <input multiple onChange={selectFileHandler} type='file' hidden ref={fileRef}/>    
                </button>

                <form onSubmit={sendMessageHandler} className='flex-1 flex gap-2'>
                    <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message here...' type='text' className='w-full transition outline-none rounded-lg p-2 bg-gray-50 border border-gray-300 text-base-content focus:ring-primary focus:border-primary'/>
                    <button className='btn btn-glass'>
                        {isLoading 
                            ? <span className='loading loading-spinner text-primary'></span> 
                            : <BiRightArrowAlt className='w-6 h-6 text-primary'/>
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}
