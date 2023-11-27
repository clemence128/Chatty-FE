import React from 'react'
import AuthInput from '../../../components/form/AuthInput'

export default function LoginForm() {
  return (
    <div className='bg-white w-[450px] shadow-md rounded-md'>
      <div className='space-y-4 p-6'>
        <h1 className='font-bold text-2xl text-base-content'>Sign in to your account</h1>

        <form>
          <div className='space-y-2 mb-3'>
            <label className='text-sm font-medium text-base-content block'>Email</label>
            <AuthInput/>
          </div>

          <div className='space-y-2 mb-3'>
            <label className='text-sm font-medium text-base-content block'>Password</label>
            <AuthInput/>
          </div>
          
          <div className='space-y-2 mb-3'>
            <button className='btn btn-primary w-full text-lg'>Login</button>
          </div>
          
          <div>
            <p className='text-sm font-light text-gray-500'>
              Don't have account yet?
              <a className='font-medium text-primary hover:underline ml-1 cursor-pointer'>Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
