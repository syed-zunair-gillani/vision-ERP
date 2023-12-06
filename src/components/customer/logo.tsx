import React from 'react';
import Image from 'next/image';

function Logo() {
  return (
    <div className='container mx-auto px-4'>
      <div className='text-[#02153a] text-center items-center'>
        <h2 className='text-2xl lg:text-[42px] font-semibold py-4'>Our Customers</h2>
        <p className='text-base lg:text-[18px] font-normal'>Here are some of the customers we’ve worked with</p>
      </div>
      <div className='overflow-hidden py-5'>
        <div className='flex space-x-4 lg:space-x-10 '>
          <div className='border rounded-2xl'>
            <Image src='/image/logo1.png' alt='Rehab Fit' width={150} height={150} className='h-16' />
          </div>
          <div className='border rounded-2xl'>
            <Image src='/image/logo2.png' alt='Rehab Fit' width={150} height={150} className='h-16' />
          </div>
          <div className='border rounded-2xl'>
            <Image src='/image/logo3.png' alt='Rehab Fit' width={150} height={150} className='h-16' />
          </div>
          <div className='border rounded-2xl'>
            <Image src='/image/logo4.png' alt='Rehab Fit' width={150} height={150} className='h-16' />
          </div>
          <div className='border rounded-2xl'>
            <Image src='/image/logo5.png' alt='Rehab Fit' width={150} height={150} className='h-16' />
          </div><div className='border rounded-2xl'>
            <Image src='/image/logo6.png' alt='Rehab Fit' width={150} height={150} className='h-16' />
          </div>
          <div className='border rounded-2xl'>
            <Image src='/image/logo7.png' alt='Rehab Fit' width={150} height={150} className='h-16' />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Logo;
