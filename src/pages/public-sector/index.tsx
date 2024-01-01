import ChooseCardTwo, { cardsData } from '@/components/choose/chooseCardTwo'
import PageBanner from '@/components/main/pageBanner'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'
import { Axios } from '@/config/Axios'
import { baseURL } from '@/const'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
var qs = require('qs');


const PublicSector = ({data}:any) => {
     const { Hero, Grid, Info, Title, Cards, Grid_2, Choose_Title, Choose_Info, Choose_Cards, Grid_3 } = data

     return (
          <>
               <PageBanner
                    title={Hero.title}
                    description={Hero.description}
                    image={`${baseURL}${Hero.Image.data.attributes.url}`}
                    buttonText={Hero.Button.Name}
                    buttonLink={Hero.Button.Link}
                    breadCrum="Home - <span>Public Sector</span>"
               />
               <TwoColGrid
                    position={Grid.Image_Position}
                    heading={Grid.Title}
                    text1={Grid?.Content.content}
                    image={`${baseURL}${Grid?.Image?.data?.attributes.url}`}
                    link={Grid.button.Link}
                    buttonText={Grid.button.Name}
               />

               <section className='bg-[#F4FCFF] py-[100px]'>
                    <div className='container mx-auto px-4'>
                         <h2 className='md:leading-[48px] md:text-[42px] text-[25px] font-[700] py-3 text-center'>{Title}</h2>
                         <p className='text-center max-w-[1000px] mx-auto'>{Info}</p>
                         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-12'>
                              {Cards?.map((card: any, idx: number) => (
                                   <div key={card.id} className={
                                        ` bg-white text-[#3F3F3F] bx rounded-[20px] p-5 px-6`}>
                                        <Image src={`${baseURL}${card?.Icon?.data?.attributes.url}`} alt={`icon`} width={56} height={56} className='mb-4' />
                                        <h3 className='font-semibold mb-2 text-lg md:text-xl'>{card?.Title}</h3>
                                        <p className='text-sm mb-6 lg:text-[15px] font-light'>{card?.Content}</p>
                                        <Link href={card?.Button.Link} className={`g4 px-6 md:py-3 py-6 button inline-flex rounded-[10px] hover:border-none hover:text-white text-[#00619D] border border-[#00619D] font-semibold items-center gap-2 hover:scale-105`}>{card.Button.Name} <IoArrowForward className="text-lg" /></Link>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               <TwoColGrid
                    position={Grid_2.Image_Position}
                    heading={Grid_2.Title}
                    text1={Grid_2?.Content.content}
                    image={`${baseURL}${Grid_2?.Image?.data?.attributes.url}`}
                    link={Grid_2.button.Link}
                    buttonText={Grid_2.button.Name}
               />

               <section className='bg-[#FFFDF4] py-[20px]'>
                    <ChooseCardTwo
                         title={Choose_Title}
                         info={Choose_Info}
                         data={Choose_Cards}
                         className="my-20 !rounded-[20px]"
                         rounded="!rounded-[20px]"
                    />
               </section>
          
               <TwoColGrid
                    position={Grid_3.Image_Position}
                    heading={Grid_3.Title}
                    text1={Grid_3?.Content.content}
                    image={`${baseURL}${Grid_3?.Image?.data?.attributes.url}`}
                    link={Grid_3.button.Link}
                    buttonText={Grid_3.button.Name}
               />
          </>
     )
}

export default PublicSector



export const getServerSideProps: GetServerSideProps = (async () => {
     const params = qs.stringify({
          populate: [
               'Hero.Image', 'Hero.Button',
               'Grid.Content', 'Grid.Image', 'Grid.button',
               'Cards.Content', 'Cards.Icon', 'Cards.Button',
               'Choose_Cards.Content', 'Choose_Cards.Icon',
               'Grid_2.Content', 'Grid_2.Image', 'Grid_2.button',
               'Grid_3.Content', 'Grid_3.Image', 'Grid_3.button',
          ]
     })

     const erpPage = await Axios.get(`/public-sector-page?${params}`);
     const data = erpPage.data?.data?.attributes;

     return { props: { data } }
})