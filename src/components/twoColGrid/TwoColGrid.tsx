import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../UI/button';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Markdown from 'react-markdown'


function TwoColGrid({position, heading, text1, text2, image, link, faqs, buttonText}:any) {
   const [activeFaq, setActiveFaq] = useState(0)
   
  return (
    <div className='container mx-auto px-4 py-20'>
       <div className={`grid md:grid-cols-2 items-center gap-5`}>
       <div className={`${position === 'left' && 'order-2' }`}>
       <Image src={image} alt='Rehab Fit' width={450} height={650} className=' mx-auto' />
        </div>
           <div className='text-[#02153a] mx-auto flex flex-col justify-center items-start'>
              <h2 className='md:leading-[48px] md:text-[42px] text-[25px] font-[700] py-3'>{heading}</h2>
              <Markdown className={faqs ? '' : 'mb-2 markdown'}>{text1}</Markdown>
              <div className='mb-5 -mt-2'>
                  {
                     faqs?.map((faq:any,id:number)=>(
                        <div key={id} className={`cursor-pointer ${id+1 === faqs.length && 'border-b'} py-5 ${activeFaq === id ? 'border-t border-[#008FD4]' : 'border-t'}`} onClick={()=>setActiveFaq(id)} >
                           <h5 className={`font-bold flex justify-between items-center ${activeFaq === id ? 'text-[#008FD4]' : 'text-slate-900'}`}>
                              {faq.question}
                              <span className='text-2xl'>{ activeFaq === id ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
                           </h5>
                           <p className={`transition-all duration-300 ease-linear ${activeFaq === id ? 'h-auto mt-2' : 'h-0 overflow-hidden'}`}>{faq.answer}</p>
                        </div>
                     ))
                  }
              </div>
              <Button className="w-full md:w-auto" link={link}>{buttonText ? buttonText : 'Read more'}</Button>
           </div>
       </div>
    </div>
  )
}

export default TwoColGrid