'use client';

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
  const pathname = usePathname();
  const [active, setActive] = useState("pathname");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => { 
    setActive(pathname);
  }, [pathname]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className='py-2 md:py-0 w-full h-auto z-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 sticky top-0 grid grid-cols-3 items-center '>
        <div className="ml-[20px] sm:ml-[30px] md:ml-[50px] xl:ml-[90px] col-span-1">
          <Image className='transform scale-90 md:scale-100 md:pt-2 my-2 sm:my-3 xl:my-4' src="/hackslash-logo.png" alt="HackSlash Logo" width={150} height={30} />
        </div>
        <div className='flex justify-end col-span-2 items-center space-x-3 md:space-x-6 lg:space-x-9 xl:space-x-12 mr-[20px] sm:mr-[25px] md:mr-[30px] xl:mr-[50px]'>
          {List.map((link, index) => (
            <div key={index} className='relative hidden md:flex'>
              <Link key={index} href={link.path} className='text-base lg:text-xl hover:text-slate-300 transition-all' onClick={() => setActive(link.path)}>
                {link.name}
              </Link>
              {active === link.path && (
                <span className='absolute left-1/2 transform -translate-x-1/2 -bottom-[0.4px] w-[120%] h-[2px] bg-primary'></span>
              )}
            </div>
          ))}
          <button className='hidden md:flex leading-none text-lg xl:text-xl font-medium bg-primary px-3 md:px-3 py-1.5 md:py-1 text-black rounded-sm hover:scale-105 transition-all delay-[120] hover:bg-dark'>
            Contact Us
          </button>
          
          <button className='md:hidden' onClick={toggleDropdown}>
            <div className='relative h-6 w-6'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`absolute transition-transform duration-500 ease-in-out transform ${isDropdownOpen ? 'scale-0 rotate-45 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`absolute transition-transform duration-500 ease-in-out transform ${isDropdownOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-45 opacity-0'}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
          
        </div>
      </div>

      <div className=' w-full h-auto z-40 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 sticky top-16 flex justify-center'>
        <div className={`transition-transform duration-700 ease-in-out ${isDropdownOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} transform w-full`}>
          {isDropdownOpen && (
            <div className="md:hidden flex flex-col text-center bg-transparent w-full shadow-lg">
              {List.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.path} 
                  className='transition-all duration-[700ms] transform hover:scale-105 decoration-[0.4px] underline underline-offset-4 justify-center items-center text-lg py-2 flex animate-slide-in'
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => {
                    setActive(link.path);
                    setIsDropdownOpen(false); 
                  }}>
                  {link.name}
                </Link>
              ))}
              <div className='flex justify-center'>
                <button className='hover:scale-105 decoration-[0.4px] transform transition-all underline underline-offset-4 justify-center items-center text-lg py-2 px-4 flex'>
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
