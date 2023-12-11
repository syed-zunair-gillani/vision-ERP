import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';

function Speak() {
  return (
    <div className='container relative mx-auto z-10 bg-gradient-to-bl shadow1 from-[#5ECAF3]  to-[#0491c8] border-[4px] rounded-[30px]'>
      <div className='grid relative md:grid-cols-2 gap-4 lg:gap-8 overflow-hidden'>
        <div className='flex flex-col justify-center lg:ml-10 text-white md:px-4 py-12 pb-16 md:py-0 px-10'>
          <h2 className='text-3xl text-center md:text-left lg:text-4xl font-semibold py-3'>Speak With an Expert</h2>
          <p className='text-base text-center md:text-left lg:text-lg pb-5'>
            Drop us a message with any questions you may have and we'll get back to you shortly
          </p>
          <Link href="/" className='flex bg-white md:w-[25vh] px-6 w-full py-4 rounded-lg text-black font-semibold items-center gap-3 hover:scale-105'>
            Read More <IoArrowForward />
          </Link>
        </div>
        <div className='flex justify-center'>
          <div className='lg:w-full'>
            <Image src='/image/12.png' alt='Rehab Fit' width={450} height={650} className='mx-auto mr-0 w-full h-[400px] object-top object-cover rounded-[26px]' />
          </div>
        </div>
        <Image src="/image/doted.png" alt="dots" width={250} height={250} className='absolute md:left-60 top-[20%] right-1/2 translate-x-1/2 md:top-1/2 transform md:-translate-y-1/2'/>
      </div>
    </div>
  );
}

export default Speak;
