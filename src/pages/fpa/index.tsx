import ChooseCardTwo from '@/components/choose/chooseCardTwo'
import PageBanner from '@/components/main/pageBanner'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'
import React from 'react'
import { GetServerSideProps } from 'next'
import { Axios } from '@/config/Axios'
import { baseURL } from '@/const'
var qs = require('qs');


const FPA = ({ data }:any) => {
     const {Hero, Title, Info, Cards, Grid_1, Grid_2} = data

     return (
          <>
               <PageBanner
                    title={Hero.title}
                    description={Hero.description}
                    image={`${baseURL}${Hero.Image.data.attributes.url}`}
                    buttonText={Hero.Button.Name}
                    buttonLink={Hero.Button.Link}
                    breadCrum="Product - <span>Unit4 FP&A</span>"
               />
               <ChooseCardTwo
                    title={Title}
                    info={Info}
                    data={Cards}
                    className="my-20"
               />
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

export default FPA


export const getServerSideProps: GetServerSideProps = (async () => {
     const params = qs.stringify({
          populate: [
               'Hero.Image', 'Hero.Button',
               'Cards.Content', 'Cards.Icon', 'Grid.button',
               'Grid_1.Content', 'Grid_1.Image', 'Grid_1.button', 'Grid_1.faq',
               'Grid_2.Content', 'Grid_2.Image', 'Grid_2.button',
          ]
     })

     const erpPage = await Axios.get(`/fpa-page?${params}`);
     const data = erpPage.data?.data?.attributes;

     return { props: { data } }
})