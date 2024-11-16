'use client'
import { login } from '@/lib/actions';
import { UserContext } from '@/lib/userContext';
import { redirect, useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'

const Login = () => {
  const [message, setMessage] = useState({});
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const submit = async (formData) => {
    try {
      const data = await login(formData);
      setMessage(data);
      // server actions (or server components)

      if (data?.user) {
        localStorage.setItem('user', data.user) // setting up the user in localstorage | we cannot accesss localStorage in 
        setUser((prev) => JSON.parse(data.user))
      }
      console.log("Loggin");
      return router.push('/admin');

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className='flex flex-col items-center justify-center h-[calc(100vh-64px)]'>
      {/* <h1 className='text-yellow-500'>Do not use this page if you have not download mongoDB or mongoDB is not currently running in your PC</h1> */}
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