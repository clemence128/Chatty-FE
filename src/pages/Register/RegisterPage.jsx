import React from 'react'
import RegisterForm from "./components/RegisterForm"

export default function RegisterPage() {
  return (
    <div className='h-screen bg-slate-100 relative'>
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <RegisterForm/>
        </div>
    </div>
  )
}
