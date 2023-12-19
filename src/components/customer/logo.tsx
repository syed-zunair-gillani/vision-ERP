import React from 'react';
import Image from 'next/image';
import { baseURL } from '@/const';

function Logo({data}:any) {
  return (
    <div className='px-4'>
      <div className='text-[#02153a] text-center items-center'>
        <h2 className='text-2xl lg:text-[42px] font-semibold py-4'>Our Customers</h2>
        <p className='text-base lg:text-[18px] font-normal'>Here are some of the customers we’ve worked with</p>
      </div>
      <div className='overflow-hidden py-5'>
        <div className='grid gap-5 grid-cols-3 md:grid-cols-7'>
          {
            data?.map((logo:any, idx:number)=>(
              <div className='border rounded-2xl flex-1 flex justify-center' key={idx}>
              <Image src={`${baseURL}${logo?.Icon?.data?.attributes.url}`} alt='Rehab Fit' width={70} height={76} className='hover:scale-110'/>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Logo;
