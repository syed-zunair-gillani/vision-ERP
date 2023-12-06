import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5';
function about() {
  return (
    <div className='container mx-auto px-4'>
       <div className='grid lg:grid-cols-2 md:grid-cols-2 reverse '>
       <div className='lg:mt-32'>
       <Image src='/image/2.png' alt='Rehab Fit' width={450} height={650} className=' mx-auto' />
        </div>
           <div className='text-[#02153a] mx-auto lg:mt-32'>
              <h2 className='lg:text-[42px] md:text-[42px] text-[25px] font-[700] py-3'>About Vision ERP</h2>
              <p className='pb-10'>We have industry specific experts who understand business functionality as well as system functionality. This helps us to understand your issues, as we have probably felt the same pain in previous careers.
               <br /> <br />
              This enables us to put ourselves in your shoes, experience your frustrations and needs, and develop solutions which are industry specific, and are tailored to work for you.</p>
              <Link href="/" className='flex bg-[#5ECAF3] w-[25vh] px-4 py-3 rounded-lg text-white font-semibold items-center gap-3 hover:scale-105
            '>Read More <IoArrowForward /></Link>
           </div>
       </div>

    </div>
  )
}

export default about