import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

function Main() {
  return (
    <div className='bg-[#EEFAFF] w-full h-auto'>
      <div className='container mx-auto px-4'>
       <div className='grid lg:grid-cols-2 md:grid-cols-2'>
        <div className='w-full  '>
            <h1 className='lg:text-[55px] md:text-[45px] text-[28px]  font-[700] text-[#01253A] py-4 lg:mt-16 lg:leading-[70px]'>Empowering the Public Sector with Tailored Solutions</h1>
            <p className='text-[18px] text-[#02153a] pb-10'>Vision ERP have a versatile and dynamic workforce who can adapt to each individual customer requirements</p>
            <Link href="/" className='flex bg-[#5ECAF3] w-[25vh] px-4 py-3 rounded-lg text-white font-semibold items-center gap-3 hover:scale-105
            '>Get In Touch <IoArrowForward /></Link>
        </div>
        <div>
          <Image src='/image/3.png' alt='Rehab Fit' width={450} height={650} className='h-[600px] w-full  mx-auto' />
        </div>
       </div>
      </div>
    </div>
  );
}

export default Main;
