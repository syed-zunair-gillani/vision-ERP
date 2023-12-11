import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';
import Button from '../UI/button';

function Main() {
  return (
    <div className='g3 w-full h-auto pt-28 -mt-24'>
      <div className='container mx-auto px-4'>
       <div className='grid lg:grid-cols-2 md:grid-cols-2'>
        <div className='w-full  '>
            <h1 className='lg:text-[55px] md:text-[45px] text-[28px]  font-[700] text-[#01253A] py-4 lg:mt-16 lg:leading-[70px]'>Empowering the Public Sector with Tailored Solutions</h1>
            <p className='text-[18px] text-[#02153a] pb-10'>Vision ERP have a versatile and dynamic workforce who can adapt to each individual customer requirements</p>
            <Button link="#">Get In Touch</Button>
        </div>
        <div>
          <Image src='/image/hero.png' alt='Rehab Fit' width={450} height={650} className=' w-full  mx-auto' />
        </div>
       </div>
      </div>
    </div>
  );
}

export default Main;
