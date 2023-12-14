import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TbDownload } from "react-icons/tb";


const CloudResources = () => {
     return (
          <>
               <section className='container mx-auto px-4 md:mb-20 mb-0 -mt-[100px]'>
                    <div className='bg-white p-10 rounded-[20px] grid md:grid-cols-2'>
                         <div className='md:border-r border-[#92BFCF]'>
                              <h2 className='text-2xl sm:text-3xl md:text-[42px] mb-2 mt-2 font-bold md:leading-[50px]'>Cloud resources</h2>
                              <p>To support your journey, we provide expertise in the following;</p>
                              <ul className='grid md:grid-cols-2 gap-3 mt-6'>
                                   {
                                        resources.map((l,id)=>(
                                             <li className='flex items-center gap-2' key={id}>
                                                  <span className='p-1.5 bg-[#5ECAF3] rounded-full'/>
                                                  <span>{l}</span>
                                                  </li>
                                        ))
                                   }
                              </ul>
                         </div>
                         <div className='md:pl-8 md:flex items-center gap-5 mt-8 md:mt-0'>
                              <div>
                                   <h3 className='text-xl text-[#122029] mb-5 font-bold text-center md:text-left'>Please download our Unit4 Cloud Migration brochure for to see how we can help you.</h3>
                                   <Link href="#" className={`g1 px-3 py-3 button inline-flex rounded-full text-white font-semibold items-center gap-2 hover:scale-105`} download> 
                                        <span className='bg-[#5ECAF3] p-2 rounded-full'><TbDownload className="text-xl"/></span>
                                   Download Now </Link>
                              </div>
                              <div>
                                   <Image src="/image/asset.png" alt="img" width={450} height={250} />
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default CloudResources


const resources = [
     "Project Management",
     "Solution Architect",
     "Change Management",
     "Business Analysis",
     "Functional (cloud) consultancy",
     "Technical (cloud ) consultancy",
     "Test Management",
     "Training"
]