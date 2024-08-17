'use client'
import { UserContext } from '@/lib/userContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import UserState from './UserState'

const Navbar = () => {
  
    // this is just for basic navigation | The design will be changed in future
  return (
    <section className='flex justify-center gap-4 h-16 items-center bg-black '>
        <nav className='hidden md:flex gap-4'>
            <div className='px-4'>
            <Link href={'/'}>Hackslash (Navbar designed will be changed)</Link>
            </div>
            <Link href={'/'}>Home</Link>
            <Link href={'/resources'}>Resources</Link>
            <Link href={'/blogs'}>Blog</Link>
            <Link href={'/gallery'}>Gallery</Link>
            <Link href={'/events'}>Events</Link>
            <Link href={'/projects'}>Our projects</Link>
            <Link href={'/contact'}>Contact us</Link>
        </nav>

        {/* The In future there will be no registration of new user, only 'us' will be able to login with credentials */}
    
        {/* Do not use the UserState component now. I will make it usable once we get the official mongoDB clustor url */}
        {/* If you want to try out this feature , make sure mongoDB is installed and running in your PC */}

        {/* <UserState /> */} 
    </section>
  )
}

export default Navbar