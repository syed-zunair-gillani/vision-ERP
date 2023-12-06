import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

function Partnership() {
  return (
    <div className='container mx-auto px-4'>
      <div className='bg-[#FFFDF4] w-full h-auto rounded-xl lg:mt-16 mt-10'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 py-10 px-4'>
          <div className='lg:ml-20 lg:mt-16'>
            <h2 className='text-2xl lg:text-[42px] font-semibold py-5'>A Unit4 Partnership</h2>
            <p className='pb-10'>
              An official Partnership with the software vendor to ensure consistent delivery of an ERP system fit for purpose
            </p>
            <Link href='/' className='flex bg-[#5ECAF3] w-[25vh] px-4 py-3 rounded-lg text-white font-semibold items-center gap-3 hover:scale-105'>
              Read More <IoArrowForward />
            </Link>
          </div>
          <div className='text-center'>
            <Image src='/image/7.png' alt='Rehab Fit' width={450} height={650} className='mx-auto' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
