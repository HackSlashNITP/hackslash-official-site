'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const List = [
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Blogs", path: "/blogs" },
  { name: "Gallery", path: "/gallery" },
  { name: "Our Projects", path: "/projects" }
];

const Navbar = () => {
  const  pathname = usePathname();
  const [active , setActive] = useState("pathname");

  useEffect(()=> { 
    setActive(pathname);
  }, [pathname])
  return (
    <>
      <div className='w-full h-[30px] lg:h-[55.06px] bg-transparent sticky top-[22.5px] grid grid-cols-3 items-center'>
        <div className=" ml-[30px] md:ml-[50px] xl:ml-[90px] col-span-1 bottom-1">
          <Image src="/hackslash-logo.png" alt="HackSlash Logo" width={150} height={36} />
        </div>
        <div className='flex justify-end col-span-2 items-center space-x-3 md:space-x-6 lg:space-x-9 xl:space-x-12 mr-[12px] md:mr-[30px] xl:mr-[50px]'>
          {List.map((link, index) => (
            <div className='relative hidden md:flex'>
              <Link key={index} href={link.path} className='text-base lg:text-xl hover:text-slate-300 transition-all' onClick={() => setActive(link.path)}>
              {link.name}
            </Link>
            {active === link.path && (
              <span className='absolute left-1/2 transform -translate-x-1/2 -bottom-[0.4px] w-[120%] h-[2px] bg-primary'></span>)}
            </div>
          ))}
          <button className='leading-none text-base xl:text-xl font-medium bg-primary px-1 md:px-3 py-0.5 md:py-1 text-black rounded-sm hover:scale-105  transition-all delay-[120] hover:bg-dark'>
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;