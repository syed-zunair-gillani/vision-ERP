import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';
import { RxCross2 } from "react-icons/rx";
import { navLinks } from './navlinks';
import { mobilenav } from './mobilenav';
import Request from '../modelbox/request';
import Modal from 'react-modal';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      border: 'none',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
     
      <div className='w-full h-auto py-4 font-[Montserrat] px-4 z-50'>
        <div className='container mx-auto bg-white py-2 px-3 z-50 relative items-center rounded-lg lg:shadow-lg'>
          <div className='flex justify-between items-center '>
            <Link href='/'>
              <Image src='/image/logo.png' alt='Rehab Fit' width={450} height={650} className='w-12' />
            </Link>
            <ul className='hidden lg:flex space-x-5 text-[16px] font-[500] text-[#01253A] items-center'>
              {
                navLinks.map((nav, idx) => (
                  <li key={idx}>
                    <Link href={nav.link}>{nav.name}</Link>
                    <ul className='hidden'>
                      {
                        nav?.subNav?.map((subItem, id) => (
                          <li key={id} className='cursor-pointer'><Link href={subItem.link}>{subItem.name}</Link></li>
                        ))
                      }
                    </ul>
                  </li>
                ))
              }
              <button onClick={openModal} className='bg-[#01253A] text-white py-3 px-4 hover:scale-105 rounded-lg flex items-center gap-2'>
                Request a Demo <IoArrowForward />
              </button>
            </ul>


            <div className='lg:hidden'>
              <button onClick={toggleMenu} >
                {isMenuOpen ? (
                  <RxCross2 className='h-9 w-9 text-gray-900' />
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-9 w-9 pt-1 text-gray-900'
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
                  mobilenav.map((nav, idx) => (
                    <li key={idx}>
                      <Link href={nav.link}>{nav.name}</Link>
                      <ul className='hidden'>
                        {
                          nav?.subNav?.map((subItem, id) => (
                            <li key={id}><Link href={subItem.link}>{subItem.name}</Link></li>
                          ))
                        }
                      </ul>
                    </li>
                  ))
                }

                <button className='bg-[#01253A] text-white py-2 px-4 rounded-lg flex hover:scale-105 items-center gap-2 mt-4'>
                  Request a Demo <IoArrowForward />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='px-4'>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          id="modelbox"
        >
          <div className='flex justify-end'><button onClick={closeModal} className='p-2 bg-[#FDC8C8] cursor-pointer hover:scale-105 rounded-full'><RxCross2 className="text-xl opacity-75"/></button></div>
          <Request />
        </Modal>
      </div>
    </>
  );
}

export default Navbar;
