import Button from '@/components/UI/button'
import Choose, { cardsData } from '@/components/choose/choose'
import BlogBanner from '@/components/main/blogBanner'
import { Axios } from '@/config/Axios'
import { baseURL } from '@/const'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React from 'react'
var qs = require('qs');

const Services: React.FC<any> = ({data}:any) => {
     console.log("🚀 ~ file: index.tsx:11 ~ data:", data)
     const { Page_Banner, Cards, Info, Title, Call_To_Action } = data

     return (
          <>
               <BlogBanner title={Page_Banner.title} breadcrum="Services" />
               <Choose
                    title={Title}
                    info={Info}
                    data={Cards}
                    className="my-24"
               />
               <section className='container mx-auto p-4'>
               <div className='grid md:grid-cols-2 bg-[#FFFDF4] items-center mb-20 p-10 gap-10 rounded-[20px]'>
                    <div>
                         <h2 className='text-[#122029] text-4xl mb-5 text-center md:text-left font-bold'>{Call_To_Action.Title}</h2>
                         <Button link={Call_To_Action.Button.Link} className="">{Call_To_Action.Button.Name}</Button>
                    </div>
                    <div className='flex gap-5'>
                         <div className='w-full'>
                              <figure className=''>
                                   <Image src={`${baseURL}${Call_To_Action?.Images?.data[0]?.attributes?.url}`} alt="logo" width={200} height={200} className=' w-full' />
                              </figure>
                              {/* <p className='bg-[#008FD4] text-white p-2'>I-Connect LGPS Return for Unit4 ERP</p> */}
                         </div>
                         
                    </div>
               </div>
               </section>
          </>
     )
}

export default Services



export const getServerSideProps: GetServerSideProps = (async () => {
     const params = qs.stringify({
          populate: [
               'Page_Banner.Image',
               'Cards.Content', 'Cards.Icon', 'Grid.button',
               'Call_To_Action.Button', 'Call_To_Action.Images',
          ]
     })

     const erpPage = await Axios.get(`/service-page?${params}`);
     const data = erpPage.data?.data?.attributes;

     return { props: { data } }
})