import React, { useEffect } from 'react'
import AuthInput from '../../../components/form/AuthInput'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {signup} from "./../../../redux/userSlice"

const validationSchema = Yup.object({
  name: Yup.string().required("Please provide your name"),
  email: Yup.string().required("Please provide your email").email("Please provide a valid email"),
  password: Yup.string().required("Please provide your password").min(8, "Password must be at least 8 characters").max(32, "Password must be at least 32 characters")
})

export default function RegisterForm() {
  const navigate = useNavigate();
  const {isLoading, isLoggedIn, error} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(validationSchema)});

  const submitHandler = async(data) => {
    dispatch(signup({...data}))
  }

  useEffect(() => {
    if(isLoggedIn) navigate('/')
  }, [isLoggedIn])

  return (
    <div className='bg-white w-[450px] shadow-md rounded-md'>
      <div className='space-y-4 p-6'>
        <h1 className='font-bold text-2xl text-base-content'>Register</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
        <div className='space-y-2 mb-3'>
            <label className='text-sm font-medium text-base-content block'>Name</label>
            <AuthInput error={errors.name?.message} name={"name"} placeholder={"Enter your name"} register={register}/>
          </div>

          <div className='space-y-2 mb-3'>
            <label className='text-sm font-medium text-base-content block'>Email</label>
            <AuthInput error={errors.email?.message} name={"email"} placeholder={"Enter your email"} register={register}/>
          </div>

          <div className='space-y-2 mb-3'>
            <label className='text-sm font-medium text-base-content block'>Password</label>
            <AuthInput error={errors.password?.message} name={"password"} placeholder={"Enter your password"} register={register} type={"password"}/>
          </div>
          
          <div className='space-y-2 mb-3'>
            <button className={`btn btn-primary w-full text-lg`}>
              {isLoading ? <span className='loading loading-spinner'>loading</span> :<span>Register</span> }
            </button>

            {error && <p className='text-error text-sm mt-1'>{error}</p>} 
          </div>
          
          <div>
            <p className='text-sm font-light text-gray-500'>
              Already have account?
              <Link to={"/login"} className='font-medium text-primary hover:underline ml-1 cursor-pointer'>Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
