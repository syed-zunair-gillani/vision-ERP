import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';

function Speak() {
  return (
    <div className='container mx-auto  bg-gradient-to-b from-[#5ECAF3] via-[#00619D] to-[#02153a] rounded-2xl'>
      <div className='grid lg:grid-cols-2  gap-4 lg:gap-8'>
        <div className='flex flex-col justify-center lg:ml-10 lg:mt-10 text-white px-4'>
          <h2 className='text-3xl lg:text-4xl font-semibold py-3'>Speak With an Expert</h2>
          <p className='text-base lg:text-lg pb-5'>
            Drop us a message with any questions you may have and we'll get back to you shortly
          </p>
          <Link href="/" className='flex bg-white w-[25vh] px-4 py-3 rounded-lg text-black font-semibold items-center gap-3 hover:scale-105'>
            Read More <IoArrowForward />
          </Link>
        </div>
        <div className='flex justify-center'>
          <div className='lg:w-full'>
            <Image src='/image/12.png' alt='Rehab Fit' width={450} height={650} className='mx-auto mr-0 w-full rounded-2xl' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speak;
