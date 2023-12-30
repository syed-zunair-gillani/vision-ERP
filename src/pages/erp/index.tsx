import Choose from '@/components/choose/choose'
import PageBanner from '@/components/main/pageBanner'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'
import React from 'react'
import { GetServerSideProps } from 'next'
import { Axios } from '@/config/Axios'
import { baseURL } from '@/const'
var qs = require('qs');


const ERP = ({ data }: any) => {
     const { Hero, Cards, Info, Title, ERP_Grid, Grid_2 } = data

     return (
          <>
               <PageBanner
                    title={Hero.title}
                    description={Hero.description}
                    image={`${baseURL}${Hero.Image.data.attributes.url}`}
                    buttonText={Hero.Button.Name}
                    buttonLink={Hero.Button.Link}
                    breadCrum="Product - <span>Unit4 ERP</span>"
               />
               <Choose
                    title={Title}
                    className="my-20"
                    info={Info}
                    data={Cards}
               />

               <section className='bg-[#F4FCFF]'>
                    <TwoColGrid
                         position={ERP_Grid.Image_Position}
                         heading={ERP_Grid.Title}
                         text1={ERP_Grid?.Content}
                         image={`${baseURL}${ERP_Grid?.Image?.data?.attributes.url}`}
                         faqs={ERP_Grid.faq}
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

export default ERP


export const getServerSideProps: GetServerSideProps = (async () => {
     const params = qs.stringify({
          populate: [
               'Hero.Image', 'Hero.Button',
               'Cards.Content', 'Cards.Icon', 'Grid.button',
               'ERP_Grid.Content', 'ERP_Grid.Image', 'ERP_Grid.button', 'ERP_Grid.faq',
               'Grid_2.Content', 'Grid_2.Image', 'Grid_2.button',
          ]
     })

     const erpPage = await Axios.get(`/erp-page?${params}`);
     const data = erpPage.data?.data?.attributes;

     return { props: { data } }
})