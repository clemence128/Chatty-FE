import React from 'react'

export default function AuthInput({type ='text', placeholder, name, register, error = '', ...rest}) {
  return (
    <>
      <input type={type} placeholder={placeholder} name={name} {...register(name)} {...rest} className='transition outline-none w-full rounded-lg p-2 bg-gray-50 border border-gray-300 text-base-content focus:ring-primary focus:border-primary'/>
      <span className='text-error text-sm'>{error}</span>
    </>
  )
}
