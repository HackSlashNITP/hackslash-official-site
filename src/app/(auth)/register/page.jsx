'use client'
import { register } from '@/lib/actions';
import React, { useState } from 'react'

const Register = () => {
  const [message, setMessage] = useState({});


  const submit = async (formData) => {
    // here the formData cannot be accessed, but in the server actions, they can be accessed
    try {
      const data = await register(formData);
      setMessage(data);
      
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <section className='flex flex-col items-center justify-center h-[calc(100vh-64px)]'>
      <h2 className='text-yellow-500'>This page will be deprecated in future </h2>
      <h1 className='text-yellow-500'>Do not use this page if you have not download mongoDB or mongoDB is not currently running in your PC</h1>
      <form action={submit} className='flex flex-col items-center gap-4 text-black'>
        <h1 className='font-bold text-center text-lg text-white'>Register</h1>
        <input type="Username" className='p-2 rounded-sm' name='username' />
        <input type="Password" className='p-2 rounded-sm' name='password' />
        <button className='p-2 rounded-md bg-blue-500 text-white'>Register</button>
        {message?.success && (
          <span className='text-green-500'>{message?.success}</span>
        )}
        {message?.error && (
          <span className='text-red-500'>{message?.error}</span>
        )}
      </form>
    </section>
  )
}

export default Register