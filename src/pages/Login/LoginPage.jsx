import React from 'react'
import LoginForm from './components/LoginForm'

export default function LoginPage() {
  return (
    <div className='h-screen bg-slate-100 relative'>
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <LoginForm/>
        </div>
    </div>
  )
}
