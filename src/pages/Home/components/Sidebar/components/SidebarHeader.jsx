import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from "./../../../../../redux/userSlice"
import { IoMdLogOut } from "react-icons/io";


export default function SidebarHeader() {
    const {currentUser} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <div className='p-3 bg-base-200'>
            <div className='flex gap-2 items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='avatar online'>
                        <div className='w-16 rounded-full'>
                            <img src={currentUser.avatar}/>
                        </div>
                    </div>    

                    <div>
                        <p className='text-lg font-semibold'>{currentUser.name}</p>
                    </div>
                </div>

                <div>
                    <button onClick={logoutHandler} type='button' className='btn btn-ghost'>
                        <IoMdLogOut className='w-7 h-7'/>
                    </button>
                </div>
            </div>
        </div>
  )
}
