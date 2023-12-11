import Button from '@/components/UI/button'
import PageBanner from '@/components/main/pageBanner'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'
import Image from 'next/image'
import React, { useState } from 'react'

const Products = () => {
  const [plan, setPlan] = useState(0)

  return (
    <>
      <PageBanner
        title="At Vision ERP, we're dedicated to delivering cutting - "
        subTitle="edge solutions to help your business thrive."
        description="As a Unit4 premier partner, we specialise in providing top-of-the-line Enterprise Resource Planning (ERP) and Financial Planning & Analysis (FP&A) software, along with innovative Talent Management solutions."
        image="/image/pgbanner.png"
        buttonText="Learn More"
        buttonLink="#"
        breadCrum="Home - <span>Products</span>"
      />
      <TwoColGrid
        position="right"
        heading="Elevate Your Business Operations with Unit4 ERP"
        text1="In the dynamic world of business, flexibility, efficiency, and data-driven decision-making are paramount. Vision ERP offers the most robust and versatile Unit4 ERP solutions to streamline your operations and drive growth. With Unit4 ERP, you can:"
        image="/image/2.png"
        link="#"
        faqs={faqs}
      />
      <section className='bg-[#F4FCFF] py-[100px]'>
        <div className='container mx-auto px-4'>
          <h2 className='md:leading-[48px] md:text-[42px] text-[25px] font-[700] text-center py-3'>Drive Informed Financial Planning & Analysis with Unit4 FP&A</h2>
          <p className='max-w-[840px] w-full mx-auto text-center text-lg'>Financial Planning and Analysis is the heartbeat of every successful organisation. Vision ERP offers Unit4 FP&A solutions that empower you to:</p>
          <div className={`grid md:grid-cols-2 items-center mt-16`}>
            <div className='text-[#02153a] mx-auto flex flex-col justify-center items-start'> 
              <div className='mb-5 -mt-2'>
                {
                  financialPlan?.map((p: any, id: number) => (
                    <div key={id} className={`cursor-pointer`} onClick={() => setPlan(id)} >
                      <div className='flex items-start gap-5 py-3'>
                        <button className={`text-xl p-2 font-medium rounded-full w-[58px] h-[53px] border border-[#008FD4] ${ plan === id && 'g1 border-none !text-white'}`}>0{id + 1}</button>
                        <div className='bg-[#F0F6F8] rounded-lg p-4 w-full'>
                          <h6 className=' font-semibold '>{p.title}</h6>
                          <p className={`transition-all mt-3 duration-300 ease-linear ${plan === id ? 'block' : 'hidden'}`}>{p.info}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <Button link={`#`}>Read more</Button>
            </div>
            <div>
              <Image src={`/image/2.png`} alt='Rehab Fit' width={450} height={650} className=' mx-auto' />
            </div>
          </div>
        </div>
      </section>
      
      <TwoColGrid
        position="right"
        heading="Empower Your Success with Vision ERP"
        text1="At Vision ERP, we help your business succeed by providing tailored Unit4 solutions that meet your specific needs. Our products are designed to empower your organisation to thrive in the ever-changing business landscape."
        text2="Get in touch with us today to discover how Vision ERP can be your trusted partner in achieving your business objectives."
        image="/image/2.png"
        link="#"
        buttonText="Contact Us"
      />
      
      <section className='bg-[#FFFDF4]'>
      <TwoColGrid
        position="left"
        heading="Elevate Your Business Operations with Unit4 ERP"
        text1="In the dynamic world of business, flexibility, efficiency, and data-driven decision-making are paramount. Vision ERP offers the most robust and versatile Unit4 ERP solutions to streamline your operations and drive growth. With Unit4 ERP, you can:"
        image="/image/2.png"
        link="#"
        faqs={faqs}
      />
      </section>

    </>
  )
}

export default Products



export const faqs = [
  {
    question: "Optimise Efficiency",
    answer: "Unit4 ERP seamlessly integrates all aspects of your business, from finance and HR to supply chain and project management, providing a holistic view of your operations in one unified platform."
  },
  {
    question: "Empower Data-Driven Decisions",
    answer: "Unit4 ERP seamlessly integrates all aspects of your business, from finance and HR to supply chain and project management, providing a holistic view of your operations in one unified platform."
  },
  {
    question: "Adapt to Change",
    answer: "Unit4 ERP seamlessly integrates all aspects of your business, from finance and HR to supply chain and project management, providing a holistic view of your operations in one unified platform."
  },

]

const financialPlan = [
  {
    title: "Get Real-time Insights",
    info: "Unit4 ERP seamlessly integrates all aspects of your business, from finance and HR to supply chain and project management."
  },
  {
    title: "Enhance Collaboration",
    info: "Unit4 ERP seamlessly integrates all aspects of your business, from finance and HR to supply chain and project management."
  },
  {
    title: "Plan for Success",
    info: "Unit4 ERP seamlessly integrates all aspects of your business, from finance and HR to supply chain and project management."
  },

] 