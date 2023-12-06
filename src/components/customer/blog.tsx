import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoArrowForward } from 'react-icons/io5';
function blog() {
  return (
    <div className='container mx-auto px-4'>
     <div className='py-10'>
        <h2 className='text-[42px] font-[700] text-[#02153a] text-center'>Latest Blog News</h2>
     </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>

        <div className='border pb-5 border-none bg-white'>
         <div>
            <Image src='/image/9.jpeg' alt='Rehab Fit' width={450} height={37} className=' rounded-3xl  mx-auto w-full h-[37vh]' />
         </div>
         <div className='px-4'>
             <h3 className='text-[20px] text-[#02153a] font-[600] py-4'>How AI is giving employees more autonomy over their assignments!</h3>
             <p className='text-[15px] font-[400] text-[#3F3F3F] pb-4'>Have you ever wondered what would happen if you let your employees choose their next assignment or role?</p>
             <Link href="/" className='text-[#3f3f3f] font-[600]  '>Read More</Link>
         </div>
        </div>

        <div className='border pb-5 border-none bg-white shadow-2xl rounded-2xl'>
         <div>
            <Image src='/image/10.jpeg' alt='Rehab Fit' width={450} height={37} className=' rounded-t-3xl  mx-auto h-[37vh] w-full' />
         </div>
         <div className='px-4'>
             <h3 className='text-[20px] text-[#02153a] font-[600] py-4'>How AI is giving employees more autonomy over their assignments!</h3>
             <p className='text-[15px] font-[400] text-[#3F3F3F] pb-4'>Have you ever wondered what would happen if you let your employees choose their next assignment or role?</p>
             <Link href="/" className='text-[#3f3f3f] font-[600]  '>Read More</Link>
         </div>
        </div>

        <div className='border pb-5 border-none bg-white'>
         <div>
            <Image src='/image/11.jpeg' alt='Rehab Fit' width={450} height={37} className=' rounded-3xl  mx-auto h-[37vh] w-full' />
         </div>
         <div className='px-4'>
             <h3 className='text-[20px] text-[#02153a] font-[600] py-4'>How AI is giving employees more autonomy over their assignments!</h3>
             <p className='text-[15px] font-[400] text-[#3F3F3F] pb-4'>Have you ever wondered what would happen if you let your employees choose their next assignment or role?</p>
             <Link href="/" className='text-[#3f3f3f] font-[600]  '>Read More</Link>
         </div>
        </div>

      
      </div>
      <div className='items-center justify-center py-10 lg:mt-10 flex'>
      <Link href="/" className='flex bg-[#5ECAF3] w-[25vh] px-4 py-3 rounded-lg text-white font-semibold items-center gap-3 hover:scale-105
            '>Load More <IoArrowForward /></Link>
      </div>
    </div>
  )
}

export default blog