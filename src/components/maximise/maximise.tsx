import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoArrowForward } from 'react-icons/io5';
function maximise() {
  return (
    <div className='bg-[#F4FCFF]  h-auto mt-20 py-10'>
       <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 mt-16 gap-10'>
        <div>
           <Image src='/image/1.png' alt='Rehab Fit' width={450} height={650} className='  mx-auto' />
         </div>
         <div>
            <h2 className='lg:text-[42px] text-[35px] font-[700]'>Maximise Public Sector Impact with Our Unit4 Solutions</h2>
            <p className='pb-10 py-4'>In today's modern public sector, shared services play a crucial role in improving efficiency, cutting costs, and ensuring transparency. But to make it work seamlessly, you need total visibility.
            <br /><br />
            That's where Vision ERP's Unit4 solutions step in. They provide the foundation for streamlining and optimising shared services, breaking down data barriers, and promoting collaboration across all functions.</p>
            <Link href="/" className='flex bg-[#5ECAF3] w-[25vh] px-4 py-3 rounded-lg text-white font-semibold items-center gap-3 hover:scale-105
            '>Read More <IoArrowForward /></Link>
         </div>
        </div>
       </div>
    </div>
  )
}

export default maximise