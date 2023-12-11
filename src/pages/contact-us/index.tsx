import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import { MdPhoneInTalk } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { PiMapPinLineFill } from "react-icons/pi";

const ContactUs = () => {
     return (
          <main className='g3 py-20 pt-32 -mt-24'>
               <div className='container mx-auto px-4  items-center gap-5'>
                    <div className='bg-white p-8 rounded-[30px]'>
                         <div className='flex flex-col-reverse md:flex-row gap-10'>
                              <div className='md:w-1/2'>
                                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155455.2783273756!2d-2.028439145562243!3d52.49744370076527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C%20UK!5e0!3m2!1sen!2s!4v1702315787534!5m2!1sen!2s" width="600" height="600" className='w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                              </div>
                              <div className='md:hidden'>
                                   <Info />
                              </div>
                              <div className='md:w-1/2'>
                                   <h2 className='text-4xl font-semibold'>Get In Touch..</h2>
                                   <p className='text-gray-500 mt-2'>To see how an ERP could help your business, or discuss how you can improve your current system, send us a message.</p>
                                   <form className='mt-4'>
                                        <input type="text" name="" id="" placeholder='Full Name' className='w-full bg-[#F8FAFB] focus:outline-none border-[1px] border-[#DAE9F1] p-4 rounded-lg' />
                                        <input type="email" name="" id="" placeholder='E-mail address' className='w-full bg-[#F8FAFB] mt-4 focus:outline-none border-[1px] border-[#DAE9F1] p-4 rounded-lg' />
                                        <input type="text" name="" id="" placeholder='Subject' className='w-full bg-[#F8FAFB] mt-4 focus:outline-none border-[1px] border-[#DAE9F1] p-4 rounded-lg' />
                                        <textarea placeholder='Type your message here' className='w-full h-[180px] bg-[#F8FAFB] mt-4 focus:outline-none border-[1px] border-[#DAE9F1] p-4 rounded-lg' />
                                        <button className={`g1 w-full justify-center mt-3 px-6 md:py-4 py-6 button inline-flex rounded-[10px] text-white font-semibold items-center gap-2 hover:scale-105`}>Submit Now <IoArrowForward className="text-lg" /></button>
                                   </form>
                              </div>
                         </div>
                         <div className='hidden md:block'>
                              <Info />
                         </div>
                    </div>
               </div>
          </main>
     )
}

export default ContactUs


const Info = () => {
     return (
          <div className='border-t-[1px] mt-10 pt-10 pb-3 border-gray-100 grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-10 md:gap-6'>
               <div className='flex items-center gap-2 '>
                    <div className='text-[#008FD4] bg-[#E2F5FF] p-3 text-3xl rounded-full'><MdPhoneInTalk /></div>
                    <div>
                         <h6 className='text-gray-500 text-lg'>Phone number</h6>
                         <strong className=''>0121 227 5052</strong>
                    </div>
               </div>
               <div className='flex items-center gap-2'>
                    <div className='text-[#008FD4] bg-[#E2F5FF] p-3 text-3xl rounded-full'><FaEnvelope /></div>
                    <div>
                         <h6 className='text-gray-500 text-lg'>Email Address</h6>
                         <strong className=''>enquiries@visionerp.co.uk</strong>
                    </div>
               </div>
               <div className='flex items-center gap-2'>
                    <div className='text-[#008FD4] bg-[#E2F5FF] p-3 text-3xl rounded-full'><PiMapPinLineFill /></div>
                    <div>
                         {/* <h6 className='text-gray-500 text-lg'>Grosvenor House </h6> */}
                         <strong className=''>Grosvenor House 11 St Paul's Square Birmingham West Midlands B3 1RB</strong>
                    </div>
               </div>
          </div>
     )
}