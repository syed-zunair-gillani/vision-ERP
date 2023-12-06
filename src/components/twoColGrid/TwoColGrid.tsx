import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5';
import Button from '../UI/button';
function TwoColGrid({position, heading, text1, text2, image, link}:any) {
  return (
    <div className='container mx-auto px-4 py-20'>
       <div className={`grid md:grid-cols-2`}>
       <div className={`${position === 'left' && 'order-2' }`}>
       <Image src={image} alt='Rehab Fit' width={450} height={650} className=' mx-auto' />
        </div>
           <div className='text-[#02153a] mx-auto'>
              <h2 className='lg:text-[42px] md:text-[42px] text-[25px] font-[700] py-3'>{heading}</h2>
              <p className='mb-5'>{text1}
               <br /> <br />
              {text2}</p>
              <Button link={link}>Read more</Button>
           </div>
       </div>

    </div>
  )
}

export default TwoColGrid