'use client'
import { login } from '@/lib/actions';
import { UserContext } from '@/lib/userContext';
import { redirect, useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import Link from 'next/link';

const Login = () => {
  const [message, setMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const submit = async (formData) => {
    try {
      setIsLoading(true);
      const data = await login(formData);
      setMessage(data);

      if (data?.user) {
        localStorage.setItem('user', data.user)
        setUser((prev) => JSON.parse(data.user))
        setIsLoading(false);
      }
      return router.push('/admin');

    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <section className='relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
        <div className='absolute top-1/2 right-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse' style={{ animationDelay: '2s' }}></div>
      </div>
      <div className='relative z-10 w-full max-w-md px-4 sm:px-0'>
        <div className='text-center mb-8 sm:mb-12'>
          <div className='inline-block mb-4'>
            <div className='w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-black-400 flex items-center justify-center shadow-lg shadow-cyan-500/50 overflow-hidden group hover:scale-110 transition-transform duration-300'>
              <img
                src='/favicon.ico'
                alt='HackSlash Logo'
                className='w-12 h-12 object-cover group-hover:scale-125 transition-transform'
              />
            </div>
          </div>
          <h1 className='text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent mb-2'>
            HackSlash
          </h1>
          <p className='text-gray-400 text-sm sm:text-base'>Welcome back, Admin</p>
        </div>
        <div className='backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden'>
          <form action={submit} className='flex flex-col gap-5 p-6 sm:p-8'>
            <div className='relative group'>
              <label className='text-gray-300 text-sm font-semibold mb-2 block'>Username</label>
              <div className='relative'>
                <input
                  type="text"
                  name='username'
                  placeholder='Enter your username'
                  className='w-full px-4 py-3 pl-11 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300'
                  required
                />
                <svg className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                </svg>
              </div>
            </div>
            <div className='relative group'>
              <label className='text-gray-300 text-sm font-semibold mb-2 block'>Password</label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='Enter your password'
                  className='w-full px-4 py-3 pl-11 pr-11 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300'
                  required
                />
                <svg className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                </svg>
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-cyan-400 transition-colors'
                >
                  {showPassword ? (
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  ) : (
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <button
              type='submit'
              disabled={isLoading}
              className='w-full mt-4 px-6 py-3 bg-gradient-to-r from-cyan-400 to-green-400 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group'
            >
              {isLoading ? (
                <>
                  <svg className='w-5 h-5 animate-spin' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                  </svg>
                  Logging in...
                </>
              ) : (
                <>
                  Login
                  <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                  </svg>
                </>
              )}
            </button>
            {message?.success && (
              <div className='p-4 bg-green-500/20 border border-green-500/50 rounded-lg'>
                <p className='text-green-300 text-sm font-medium'>{message.success}</p>
              </div>
            )}
            {message?.error && (
              <div className='p-4 bg-red-500/20 border border-red-500/50 rounded-lg'>
                <p className='text-red-300 text-sm font-medium'>{message.error}</p>
              </div>
            )}
          </form>
          <div className='h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>
          <div className='p-6 sm:p-8 text-center'>
            <p className='text-gray-400 text-sm'>
              Don't have an account?{' '}
              <Link href='/register' className='text-cyan-400 font-semibold hover:text-green-400 transition-colors'>
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login