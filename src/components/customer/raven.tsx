import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

function Raven() {
  return (
    <div className='container mx-auto px-4 w-full'>
      <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 items-center gap-6 lg:py-10 w-full'>
        <div>
          <Image src='/image/8.png' alt='Rehab Fit' width={450} height={650} className='h-auto w-full mx-auto' />
        </div>
        <div className='text-[#02153a]'>
          <h2 className='text-4xl lg:text-3xl xl:text-5xl font-semibold py-5  w-full'>Raven Intel Partnership with Unit4</h2>
          <p className='text-lg lg:text-xl leading-relaxed'>
            Unit4 has announced a partnership with Raven Intel for service delivery benchmarking and data analysis on customer satisfaction and implementation.
            <br /><br />
            Raven Intel is an independent B2B peer review site focusing on the implementation experience of cloud enterprise software. Their mission is to help customers find their perfect implementation consulting partner.
          </p>
          <Link href="/" className='flex bg-[#5ECAF3] w-40 lg:w-[25vh] px-4 py-3 rounded-lg text-white font-semibold items-center gap-3 hover:scale-105 mt-5'>
            Read More <IoArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Raven;
