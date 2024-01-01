import PageBanner from '@/components/main/pageBanner'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'
import React from 'react'
import { faqs } from '../products'
import Image from 'next/image'
import { cardsData } from '@/components/choose/choose'
import { Axios } from '@/config/Axios'
import { GetServerSideProps } from 'next'
import { baseURL } from '@/const'
var qs = require('qs');


const TalentManagement = ({ data }: any) => {
     console.log("🚀 ~ file: index.tsx:13 ~ TalentManagement ~ data:", data)
     const { Hero, Title, Info, Cards, Grid_1, Grid_2 } = data


     return (
          <>
               <PageBanner
                    title={Hero.title}
                    description={Hero.description}
                    image={`${baseURL}${Hero.Image.data.attributes.url}`}
                    buttonText={Hero.Button.Name}
                    buttonLink={Hero.Button.Link}
                    breadCrum="Product - <span>Talent Management</span>"
               />

               <section className={`container mx-auto px-4 my-20`}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10'>
                         <div className={` bg-white text-[#3F3F3F] gap-2 md:flex p-5 px-6`}>

                              <div>
                                   <h2 className='text-2xl font-bold mb-4'>{Title}</h2>
                                   <p className='text-xs'>{Info}</p>

                              </div>
                         </div>
                         {Cards?.map((card: any, idx: number) => {
                              return (
                                   <div key={idx} className={` g2 bg-white text-[#3F3F3F] bx rounded-[30px] gap-2 md:flex p-5 px-6`}>
                                        <figure className='w-20'>
                                             <Image src={`${baseURL}${card.Icon.data.attributes.url}`} alt={card.name} width={56} height={56} className='mb-4' />
                                        </figure>
                                        <div>
                                             <h3 className='font-semibold mb-2 text-lg -mt-1 md:text-xl'>{card?.name || card?.Title}</h3>
                                             <p className='text-sm lg:text-[15px] font-light'>{card.paragraph || card?.Content}</p>
                                        </div>
                                   </div>
                              )
                         })}
                    </div>
               </section>

               <section className='bg-[#F4FCFF]'>
                    <TwoColGrid
                         position={Grid_1.Image_Position}
                         heading={Grid_1.Title}
                         text1={Grid_1?.Content}
                         image={`${baseURL}${Grid_1?.Image?.data?.attributes.url}`}
                         faqs={Grid_1.faq}
                    />
               </section>

               <TwoColGrid
                    position={Grid_2.Image_Position}
                    heading={Grid_2.Title}
                    text1={Grid_2?.Content.content}
                    image={`${baseURL}${Grid_2?.Image?.data?.attributes.url}`}
                    link={Grid_2.button.Link}
                    buttonText={Grid_2.button.Name}
               />
          </>
     )
}

export default TalentManagement


export const getServerSideProps: GetServerSideProps = (async () => {
     const params = qs.stringify({
          populate: [
               'Hero.Image', 'Hero.Button',
               'Cards.Content', 'Cards.Icon', 'Grid.button',
               'Grid_1.Content', 'Grid_1.Image', 'Grid_1.button', 'Grid_1.faq',
               'Grid_2.Content', 'Grid_2.Image', 'Grid_2.button',
          ]
     })

     const erpPage = await Axios.get(`/talent-management-page?${params}`);
     const data = erpPage.data?.data?.attributes;

     return { props: { data } }
})