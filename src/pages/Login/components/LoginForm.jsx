import React from 'react'
import AuthInput from '../../../components/form/AuthInput'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function LoginForm() {
  const {register, handleSubmit} = useForm();

  const submitHandler = (data) => {
    console.log(data);
  }

  return (
    <div className='bg-white w-[450px] shadow-md rounded-md'>
      <div className='space-y-4 p-6'>
        <h1 className='font-bold text-2xl text-base-content'>Sign in to your account</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
          <div className='space-y-2 mb-3'>
            <label className='text-sm font-medium text-base-content block'>Email</label>
            <AuthInput name={"email"} placeholder={"Enter your email"} register={register}/>
          </div>

          <div className='space-y-2 mb-3'>
            <label className='text-sm font-medium text-base-content block'>Password</label>
            <AuthInput name={"password"} placeholder={"Enter your password"} register={register}/>
          </div>
          
          <div className='space-y-2 mb-3'>
            <button className='btn btn-primary w-full text-lg'>Login</button>
          </div>
          
          <div>
            <p className='text-sm font-light text-gray-500'>
              Don't have account yet?
              <Link to={"/register"} className='font-medium text-primary hover:underline ml-1 cursor-pointer'>Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
