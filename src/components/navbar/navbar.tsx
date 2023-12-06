import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';
import { RxCross2 } from "react-icons/rx";
import { navLinks } from './navlinks';
import { mobilenav } from './mobilenav';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-[#EEFAFF] w-full h-auto py-4 font-[Montserrat]'>
      <div className='container mx-auto bg-white py-2 px-3 items-center rounded-lg lg:shadow-lg'>
        <div className='flex justify-between items-center '>
          <Link href='/'>
            <Image src='/image/logo.png' alt='Rehab Fit' width={450} height={650} className='w-12' />
          </Link>
          <ul className='hidden lg:flex space-x-5 text-[16px] font-[500] text-[#01253A] items-center'>
            {
              navLinks.map((nav,idx)=>(
                  <li key={idx}> 
                    <Link href={nav.link}>{nav.name}</Link>
                    <ul className='hidden'>
                      {
                        nav?.subNav?.map((subItem, id)=>(
                            <li key={id}><Link href={subItem.link}>{subItem.name}</Link></li>
                        ))
                      }
                    </ul>
                  </li>
              ))
            }
            <Link href='/' className='bg-[#01253A] text-white py-3 px-4 hover:scale-105 rounded-lg flex items-center gap-2'>
              Request a Demo <IoArrowForward />
            </Link>
          </ul>
          
          
          <div className='lg:hidden'>
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <RxCross2 className='h-6 w-6 text-gray-900' />
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-gray-900'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className='lg:hidden mt-4'>
            <div className='flex flex-col items-center list-none space-y-3 mb-4'>
            {
              mobilenav.map((nav,idx)=>(
                  <li key={idx}> 
                    <Link href={nav.link}>{nav.name}</Link>
                    <ul className='hidden'>
                      {
                        nav?.subNav?.map((subItem, id)=>(
                            <li key={id}><Link href={subItem.link}>{subItem.name}</Link></li>
                        ))
                      }
                    </ul>
                  </li>
              ))
            }
             
              <Link href='/' className='bg-[#01253A] text-white py-2 px-4 rounded-lg flex hover:scale-105 items-center gap-2 mt-4'>
                Request a Demo <IoArrowForward />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
