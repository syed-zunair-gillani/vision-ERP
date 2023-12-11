import React, { FC } from 'react'
import Button from '../UI/button'
import Image from 'next/image'

const PageBanner: React.FC<any> = ({ title, subTitle, description, image, buttonText, buttonLink, breadCrum }) => {
     return (
          <main className='g3 py-20 pt-32 -mt-24'>
               <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
                    <div>
                         <div dangerouslySetInnerHTML={{ __html: breadCrum}} className='text-gray-400 bredcrum uppercase'/>
                         <h1 className='text-2xl sm:text-3xl md:text-[42px] mt-2 font-bold md:leading-[50px]'>{title} <span className='font-light'>{subTitle}</span></h1>
                         <p className='md:text-lg mt-5 mb-4 md:mb-8'>{description}</p>
                         <Button className="w-full justify-center md:w-auto" link={buttonLink}>{buttonText}</Button>
                    </div>
                    <div className='mt-8 md:mt-0 flex justify-center'>
                         <Image src={image} alt={title} width={800} height={800} className='w-full'/>
                    </div>
               </div>
          </main>
     )
}

export default PageBanner