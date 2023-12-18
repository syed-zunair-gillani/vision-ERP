import React from 'react';
import Image from 'next/image';
import Button from '../UI/button';
import { baseURL } from '@/const';

function Main({hero}:any) {
  return (
    <div className='g3 w-full h-auto pt-28 -mt-24'>
      <div className='container mx-auto px-4'>
       <div className='grid lg:grid-cols-2 md:grid-cols-2'>
        <div className='w-full  '>
            <h1 className='lg:text-[55px] md:text-[45px] text-[28px]  font-[700] text-[#01253A] py-4 lg:mt-16 lg:leading-[70px]'>{hero?.title}</h1>
            <p className='text-[18px] text-[#02153a] pb-10'>{hero?.description}</p>
            <Button link={hero?.Button?.link || '#'}>{hero?.Button?.Name}</Button>
        </div>
        <div>
          <Image src={`${baseURL}${hero.Image?.data?.attributes.url}`} alt='Rehab Fit' width={450} height={650} className=' w-full  mx-auto' />
        </div>
       </div>
      </div>
    </div>
  );
}

export default Main;
