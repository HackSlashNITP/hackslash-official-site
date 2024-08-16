import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    // this is just for basic navigation | The design will be changed in future
  return (
    <section className='flex justify-center h-16 items-center'>
        <nav className='flex gap-4'>
            <Link href={'/'}>Hackslash</Link>
            <Link href={'/'}>Home</Link>
            <Link href={'/resources'}>Resources</Link>
            <Link href={'/blogs'}>Blog</Link>
            <Link href={'/gallery'}>Gallery</Link>
            <Link href={'/events'}>Events</Link>
            <Link href={'/projects'}>Our projects</Link>
            <Link href={'/contact'}>Contact us</Link>
        </nav>
    </section>
  )
}

export default Navbar