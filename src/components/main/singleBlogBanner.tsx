import React, { FC } from 'react'
import Button from '../UI/button'
import Image from 'next/image'

const SingleBlogBanner: React.FC<any> = ({title}:any) => {
     return (
          <main className='g3 py-20 pt-32 pb-60 -mt-24'>
               <div className='container mx-auto px-4 items-center text-center gap-5'>
                    <div>
                         <span className='uppercase text-lg'>Home - <span className='text-[#008FD4]'>Blogs</span></span>
                         <h1 className='max-w-[1000px] mx-auto text-2xl sm:text-3xl md:text-[42px] mt-2 font-bold md:leading-[50px]'>{title}</h1>
                    </div>
               </div>
          </main>
     )
}

export default SingleBlogBanner