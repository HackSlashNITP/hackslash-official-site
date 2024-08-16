'use client'
import { login } from '@/lib/actions';
import { UserContext } from '@/lib/userContext';
import React, { useContext, useState } from 'react'

const Login = () => {
  const [message, setMessage] = useState({});
  const {user,setUser} = useContext(UserContext);

  const submit = async (formData) => {
    try {
      const data = await login(formData);
      setMessage(data);
      // server actions (or server components)
      
      if (data?.user) {
        localStorage.setItem('user', data.user) // setting up the user in localstorage | we cannot accesss localStorage in 
        setUser((prev) => JSON.parse(data.user))
    }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className='flex items-center justify-center h-[calc(100vh-64px)]'>
      <form action={submit} className='flex flex-col items-center gap-4 text-black'>
        <h1 className='font-bold text-center text-lg text-white'>Login</h1>
        <input type="Username" className='p-2 rounded-sm' name='username' />
        <input type="Password" className='p-2 rounded-sm' name='password' />
        <button className='p-2 rounded-md bg-blue-500 text-white'>Login</button>
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

export default Login