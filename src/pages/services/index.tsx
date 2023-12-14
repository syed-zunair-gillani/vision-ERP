import Button from '@/components/UI/button'
import Choose, { cardsData } from '@/components/choose/choose'
import BlogBanner from '@/components/main/blogBanner'
import Image from 'next/image'
import React from 'react'

const Services: React.FC<any> = () => {
     return (
          <>
               <BlogBanner title="What we do" breadcrum="Services" />
               <Choose
                    title="Unit4 ERP Consultancy"
                    info="We offer a variety of services to our clients including"
                    data={cardsData}
                    className="my-24"
               />
               <section className='container mx-auto p-4'>
               <div className='grid md:grid-cols-2 bg-[#FFFDF4] items-center mb-20 p-10 gap-10 rounded-[20px]'>
                    <div>
                         <h2 className='text-[#122029] text-4xl mb-5 text-center md:text-left font-bold'>Some specific things we’ve built for other customers</h2>
                         <Button link="#" className="">Contact Us</Button>
                    </div>
                    <div className='flex gap-5'>
                         <div className='bg-white'>
                              <figure className='p-6'>
                                   <Image src="/image/s1.png" alt="logo" width={200} height={200} className='h-[100px]' />
                              </figure>
                              <p className='bg-[#008FD4] text-white p-2'>I-Connect LGPS Return for Unit4 ERP</p>
                         </div>
                         <div className='bg-white'>
                              <figure className='p-6'>
                                   <Image src="/image/s2.png" alt="logo" width={200} height={200} className='h-[100px]' />
                              </figure>
                              <p className='bg-[#008FD4] text-white p-2'>I-Connect LGPS Return for Unit4 ERP</p>
                         </div>
                    </div>
               </div>
               </section>
          </>
     )
}

export default Services