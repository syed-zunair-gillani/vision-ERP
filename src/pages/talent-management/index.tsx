import PageBanner from '@/components/main/pageBanner'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'
import React from 'react'
import { faqs } from '../products'
import Image from 'next/image'
import { cardsData } from '@/components/choose/choose'

const TalentManagement = () => {
     return (
          <>
               <PageBanner
                    title="What is Unit4 Talent Management"
                    description="Unit4 ERP is a comprehensive Enterprise Resource Planning system that can revolutionise the way your organisation manages and optimises its core business functions. It offers a unified and flexible platform that integrates various departments, from finance and HR to supply chain and project management. With Unit4 ERP, you can streamline your operations, enhance efficiency, and gain real-time insights, empowering your organisation to thrive in a rapidly evolving business landscape."
                    image="/image/pgbanner.png"
                    buttonText="Learn More"
                    buttonLink="#"
                    breadCrum="Product - <span>Talent Management</span>"
               />

               <section className={`container mx-auto px-4 my-20`}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10'>
                         {cardsData.slice(0,6)?.map((card: any, idx: number) => {
                              if (idx === 0) {
                                   return (
                                        <div key={card.id} className={`  bg-white text-[#3F3F3F]  gap-2 md:flex p-5 px-6`}>

                                             <div>
                                                  <h2 className='text-2xl font-bold mb-4'>Why Choose Us for Unit4 Talent Management Implementation</h2>
                                                  <p className='text-xs'>
                                                  Choose Vision ERP for your Unit4 Talent Management implementation because:
                                                  </p>
                                             </div>
                                        </div>
                                   )
                              }
                              return (
                                   <div key={card.id} className={` g2 bg-white text-[#3F3F3F] bx rounded-[30px] gap-2 md:flex p-5 px-6`}>
                                        <figure className='w-20'>
                                             <Image src={card.image} alt={card.name} width={56} height={56} className='mb-4' />
                                        </figure>
                                        <div>
                                             <h3 className='font-semibold mb-2 text-lg -mt-1 md:text-xl'>{card.name}</h3>
                                             <p className='text-sm lg:text-[15px] font-light'>{card.paragraph}</p>
                                        </div>
                                   </div>
                              )
                         })}
                    </div>
               </section>

               <section className='bg-[#F4FCFF]'>
                    <TwoColGrid
                         position="right"
                         heading="Elevate Your Business Operations with Unit4 ERP"
                         text1="In the dynamic world of business, flexibility, efficiency, and data-driven decision-making are paramount. Vision ERP offers the most robust and versatile Unit4 ERP solutions to streamline your operations and drive growth. With Unit4 ERP, you can:"
                         image="/image/2.png"
                         link="#"
                         faqs={faqs}
                    />
               </section>

               <TwoColGrid
                    position="left"
                    heading="Empower Your Success with Vision ERP"
                    text1="At Vision ERP, we help your business succeed by providing tailored Unit4 solutions that meet your specific needs. Our products are designed to empower your organisation to thrive in the ever-changing business landscape."
                    text2="Get in touch with us today to discover how Vision ERP can be your trusted partner in achieving your business objectives."
                    image="/image/2.png"
                    link="#"
                    buttonText="Contact Us"
               />
          </>
     )
}

export default TalentManagement