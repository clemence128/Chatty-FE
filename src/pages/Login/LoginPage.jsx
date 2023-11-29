import React, { useEffect } from 'react'
import LoginForm from './components/LoginForm'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate =useNavigate();
  const {isLoggedIn} = useSelector(state => state.user);

  useEffect(() => {
    if(isLoggedIn) navigate('/')

  }, [isLoggedIn])

    
  return (
    <div className='h-screen bg-slate-100 relative'>
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <LoginForm/>
        </div>
    </div>
  )
}
