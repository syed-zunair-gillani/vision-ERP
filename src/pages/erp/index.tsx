import Choose, { cardsData } from '@/components/choose/choose'
import PageBanner from '@/components/main/pageBanner'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'
import React from 'react'
import { faqs } from '../products'

const ERP = () => {
     return (
          <>
               <PageBanner
                    title="What is Unit4 ERP?"
                    description="Unit4 ERP is a comprehensive Enterprise Resource Planning system that can revolutionise the way your organisation manages and optimises its core business functions. It offers a unified and flexible platform that integrates various departments, from finance and HR to supply chain and project management. With Unit4 ERP, you can streamline your operations, enhance efficiency, and gain real-time insights, empowering your organisation to thrive in a rapidly evolving business landscape."
                    image="/image/pgbanner.png"
                    buttonText="Learn More"
                    buttonLink="#"
                    breadCrum="Product - <span>Unit4 ERP</span>"
               />
               <Choose
                    title="Why Choose Us"
                    className="my-20"
                    info="At Vision ERP, we offer more than just solutions; we offer a transformative partnership."
                    data={cardsData.slice(0, 4)}
               />

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

export default ERP