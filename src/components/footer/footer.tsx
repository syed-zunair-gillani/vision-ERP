import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

function Footer() {
  return (
    <div>
      <div className=" bg-[#01253A] h-auto w-full mt-10 py-10">
        
       <div className='container mx-auto px-4 grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 mt-20 gap-5'>

        <div className='text-white  '>
         <Image src='/image/logo.png' alt='Rehab Fit' width={450} height={650} className='w-[102px] h-[70px] ml-6 ' />
         <div className='flex gap-2 mt-5 items-center'>
             <Link href="/" className='bg-[#1E465E] px-3 py-2  rounded-full hover:scale-105'>
                <FaFacebookF className="w-[8px] h-[17px]" />
              </Link>
              <Link href="/" className='bg-[#1E465E] px-3 py-2 rounded-full hover:scale-105'>
                <ImCross className="w-[9px] h-[17px]"/>
              </Link>
              <Link href="/" className='bg-[#1E465E] px-3 py-2 rounded-full hover:scale-105'>
                <FaInstagram className="w-[9px] h-[17px]"/>
              </Link>
              <Link href="/" className='bg-[#1E465E] px-3 py-2 rounded-full hover:scale-105'>
                <FaLinkedinIn className="w-[9px] h-[17px]"/>
              </Link>
         </div>
        </div>

        <div className=''>
            <h4 className='text-white font-[600] text-[19px]'>Quick Links</h4>
            <div className='text-[#BECED8] flex-col flex gap-3 mt-5'>
                <Link href="/">Home</Link>
                <Link href="/">Services</Link>
                <Link href="/">Unit4 Cloud Migration</Link>
                <Link href="/"> Products</Link>
                <Link href="/">Testimonials</Link>
                <Link href="/">Contact</Link>
            </div>
        </div>

        <div className=''>
            <h4 className='text-white font-[600] text-[19px]'>About</h4>
            <div className='text-[#BECED8] flex-col flex gap-3 mt-5'>
                <Link href="/">Careers</Link>
                <Link href="/">Unit4</Link>
                <Link href="/">Our Story</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Product</Link>
            </div>
        </div>

        <div className=''>
        <h4 className='text-white font-[600] text-[19px]'>Products</h4>
            <div className='text-[#BECED8] flex-col flex gap-3 mt-5'>
                <Link href="/">Unit4 ERP</Link>
                <Link href="/">Unit4 FP&A</Link>
                <Link href="/">Unit4 Talent Management</Link>
            </div>
        </div>

        <div className=' text-[#BECED8]'>
           <h4 className='text-white font-[600] text-[19px] '>Get In Touch</h4>
           <div className='mt-3'>
             <Link href="/" className=' flex gap-1'>
               <FaLocationDot className='text-4xl text-blue-600' />
               <p className='mt-3'>Grosvenor House 
                  11 St Paul's Square 
                  Birmingham 
                  West Midlands 
                  B3 1RB</p>
             </Link>
             <Link href="/" className='flex items-center mt-5 gap-3'>
                <FaPhoneVolume className='text-blue-600'/>
                <p>0121 227 5052</p>
             </Link>
             <Link href="" className='flex items-center mt-5 gap-'>
               <MdMarkEmailUnread className='text-blue-600 text-xl'/>
               <p>enquiries@visionerp.co.uk</p>
             </Link>

           </div>
        </div>
       </div>
       <div className='border  w-full border-[#2e4c5f]  mt-10 '></div>
      </div>
    </div>
  );
}

export default Footer;
