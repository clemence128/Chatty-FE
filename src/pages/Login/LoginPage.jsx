import React, { useEffect } from 'react'
import LoginForm from './components/LoginForm'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate =useNavigate();
  const {isLoggedIn, isLoading} = useSelector(state => state.user);

  useEffect(() => {
    if(isLoggedIn) navigate('/')

  }, [isLoggedIn])

  if(isLoading)
    return <div className='fixed inset-0'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <span className='loading loading-spinner text-primary loading-lg'></span>
      </div>
    </div>
    
  return (
    <div className='h-screen bg-slate-100 relative'>
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <LoginForm/>
        </div>
    </div>
  )
}
