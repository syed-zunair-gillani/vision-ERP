import React from 'react'
import SingleBlogBanner from '../../components/main/singleBlogBanner'
import Image from 'next/image'
import AboutMe from '../../components/aboutMe/aboutMe'

const SlugBlog = () => {
  return (
    <>
          <SingleBlogBanner
               title="How AI is giving employees more autonomy over their assignments!"
          />
          <figure className='container mx-auto px-4 -mt-40'>
               <Image src="/image/blog-img.png" alt="img" width={1200} height={450} className='rounded-[20px] w-full'/>
          </figure>
          <div className='container mx-auto flex justify-between px-4 py-4 border-b'>
               <div className='flex items-center gap-1'>
                    <Image src="/image/blog-img.png" alt="img" width={100} height={100} className='rounded-full w-[60px] h-[60px] object-cover'/>
                    <span className='text-[#727272] text-lg'>By Jilon Miah</span>
               </div>
               <div className='text-[#727272] text-lg'>
                    <p>Updated on</p>
                    <p>February 20, 2023</p>
               </div>
          </div>
          <div className='text-[#3F3F3F] container mx-auto px-4 py-5'>
               <h2 className='font-semibold text-xl md:text-[32px] md:leading-[40px]'>Have you ever wondered what would happen if you let your employees choose their next assignment or role?</h2>
               <p className='mt-3'>Unit4 solutions have made a real impact in the public sector, helping two police forces save £4 million annually through collaborative finance and HR strategy. The departments were struggling with multiple fragmented and overlapping systems, ranging from duty management, HR and payroll, to performance recording, training, and asset management.<br/> With data locked in silos, the disjointed data delayed decision-making and inhibited change. Unit4’s consolidated record of finance and HR data and process automation helped them deploy the right police resource to the right location, at the right time, with the right skills. Unit4 solutions have made a real impact in the public sector, helping two police forces save £4 million annually through collaborative finance and HR strategy. <br/>The departments were struggling with multiple fragmented and overlapping systems, ranging from duty management, HR and payroll, to performance recording, training, and asset management. With data locked in silos, the disjointed data delayed decision-making and inhibited change. Unit4’s consolidated record of finance and HR data and process automation helped them deploy the right police resource to the right location, at the right time, with the right skills. Unit4 solutions have made a real impact in the public sector, helping two police forces save £4 million annually through collaborative finance and HR strategy. The departments were struggling with multiple fragmented and overlapping systems, ranging from duty management, HR and payroll, to performance recording, training, and asset management.<br/> With data locked in silos, the disjointed data delayed decision-making and inhibited change. Unit4’s consolidated record of finance and HR data and process automation helped them deploy the right police resource to the right location, at the right time, with the right skills. Unit4 solutions have made a real impact in the public sector, helping two police forces save £4 million annually through collaborative finance and HR strategy. The departments were struggling with multiple fragmented and overlapping systems, ranging from duty management, HR and payroll, to performance recording, training, and asset management. With data locked in silos, the disjointed data delayed decision-making and inhibited change. Unit4’s consolidated record of finance and HR data and process automation helped them deploy the right police resource to the right location, at the right time, with the right skills.</p>
          </div>
          <AboutMe/>
    </>
  )
}

export default SlugBlog