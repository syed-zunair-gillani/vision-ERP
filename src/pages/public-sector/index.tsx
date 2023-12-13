import ChooseCardTwo, { cardsData } from '@/components/choose/chooseCardTwo'
import PageBanner from '@/components/main/pageBanner'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

const PublicSector = () => {
     return (
          <>
               <PageBanner
                    title="At Vision ERP, we're dedicated to delivering cutting - "
                    subTitle="edge solutions to help your business thrive."
                    description="As a Unit4 premier partner, we specialise in providing top-of-the-line Enterprise Resource Planning (ERP) and Financial Planning & Analysis (FP&A) software, along with innovative Talent Management solutions."
                    image="/image/pgbanner.png"
                    buttonText="Learn More"
                    buttonLink="#"
                    breadCrum="Home - <span>Public Sector</span>"
               />
               <TwoColGrid
                    position="right"
                    heading="Elevate Your Business Operations with Unit4 ERP"
                    text1="In the dynamic world of business, flexibility, efficiency, and data-driven decision-making are paramount. Vision ERP offers the most robust and versatile Unit4 ERP solutions to streamline your operations and drive growth. With Unit4 ERP, you can:"
                    text2="In the dynamic world of business, flexibility, efficiency, and data-driven decision-making are paramount. Vision ERP offers the most robust and versatile Unit4 ERP solutions to streamline your operations and drive growth. With Unit4 ERP, you can:"
                    image="/image/2.png"
                    buttonText="Contact us"
                    link="#"
               />

               <section className='bg-[#F4FCFF] py-[100px]'>
                    <div className='container mx-auto px-4'>
                         <h2 className='md:leading-[48px] md:text-[42px] text-[25px] font-[700] py-3 text-center'>What We Offer</h2>
                         <p className='text-center max-w-[1000px] mx-auto'>In the ever-evolving landscape of the public sector, Vision ERP stands as your dedicated partner in achieving operational excellence. Our suite of Unit4 solutions, tailored to meet the unique demands of public sector organisations, empowers you to streamline processes, enhance accountability, and elevate service delivery.</p>
                         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12'>
                              {[1, 2, 3]?.map((card: any, idx: number) => (
                                   <div key={card.id} className={
                                        ` bg-white text-[#3F3F3F] bx rounded-[20px] p-5 px-6`}>
                                        <Image src={`/image/017-erp 1.png`} alt={`icon`} width={56} height={56} className='mb-4' />
                                        <h3 className='font-semibold mb-2 text-lg md:text-xl'>Unit4 FP&A</h3>
                                        <p className='text-sm mb-6 lg:text-[15px] font-light'>Unit4 FP&A plays a pivotal role in the public sector, where financial planning and analysis are vital. Our experts guide you through implementation and provide consultancy to help you harness the full potential of Unit4...</p>
                                        <Link href="#" className={`g4 px-6 md:py-3 py-6 button inline-flex rounded-[10px] hover:border-none hover:text-white text-[#00619D] border border-[#00619D] font-semibold items-center gap-2 hover:scale-105`}>Read More <IoArrowForward className="text-lg" /></Link>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               <TwoColGrid
                    position="left"
                    heading="Elevate Your Business Operations with Unit4 ERP"
                    text1="In the dynamic world of business, flexibility, efficiency, and data-driven decision-making are paramount. Vision ERP offers the most robust and versatile Unit4 ERP solutions to streamline your operations and drive growth. With Unit4 ERP, you can:"
                    text2="In the dynamic world of business, flexibility, efficiency, and data-driven decision-making are paramount. Vision ERP offers the most robust and versatile Unit4 ERP solutions to streamline your operations and drive growth. With Unit4 ERP, you can:"
                    image="/image/2.png"
                    buttonText="Contact us"
                    link="#"
               />

               <section className='bg-[#FFFDF4] py-[20px]'>
                    <ChooseCardTwo
                         title="Why Choose Us"
                         info="At Vision ERP, we offer more than just solutions; we offer a transformative partnership. We understand the distinct needs of public sector organisations and are committed to customising Unit4 ERP, Unit4 FP&A, and Unit4 Talent Management to perfectly align with your unique requirements.As your trusted partner, we provide comprehensive support for implementation, consultancy, and ongoing management, ensuring that your public sector entity achieves operational excellence, cost-efficiency, transparency, and impact."
                         data={cardsData}
                         className="my-20 !rounded-[20px]"
                         rounded="!rounded-[20px]"
                    />
               </section>
          
               <TwoColGrid
                    position="right"
                    heading="Elevate Your Business Operations with Unit4 ERP"
                    text1="In the dynamic world of business, flexibility, efficiency, and data-driven decision-making are paramount. Vision ERP offers the most robust and versatile Unit4 ERP solutions to streamline your operations and drive growth. With Unit4 ERP, you can:"
                    image="/image/2.png"
                    buttonText="Contact us"
                    link="#"
               />
          </>
     )
}

export default PublicSector