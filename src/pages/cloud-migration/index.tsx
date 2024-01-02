import Choose, { cardsData } from '@/components/choose/choose'
import ChooseCardTwo from '@/components/choose/chooseCardTwo'
import CloudResources from '@/components/cloudResources/cloudResources'
import PageBanner from '@/components/main/pageBanner'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'
import { Axios } from '@/config/Axios'
import { baseURL } from '@/const'
import { GetServerSideProps } from 'next'
import React from 'react'
var qs = require('qs');


const CloudMigration: React.FC<any> = ({data}:any) => {
     console.log("🚀 ~ file: index.tsx:13 ~ data:", data)
     const { Hero, Cards, Info, Title, ServicesCard, Grid } = data

     return (
          <>
               <PageBanner
                    title={Hero.title}
                    description={Hero.description}
                    image={`${baseURL}${Hero.Image.data.attributes.url}`}
                    buttonText={Hero.Button.Name}
                    buttonLink={Hero.Button.Link}
                    breadCrum="Home - <span>Unit4 Cloud Migration</span>"
               />

               <Choose
                    title={Title}
                    info={Info}
                    data={Cards}
                    className="my-20"
               />

               <TwoColGrid
                    position={Grid.Image_Position}
                    heading={Grid.Title}
                    text1={Grid?.Content.content}
                    image={`${baseURL}${Grid?.Image?.data?.attributes.url}`}
                    link={Grid.button.Link}
                    buttonText={Grid.button.Name}
               />

               <section className='bg-[#F4FCFF] py-1'>
               <ChooseCardTwo
                         title="Our Cloud Service Offerings"
                         data={ServicesCard}
                         className="my-20 !rounded-[20px]"
                         rounded="!rounded-[20px]"
                         badge={true}
                    />
               </section>
               <CloudResources/>
          </>
     )
}

export default CloudMigration


export const getServerSideProps: GetServerSideProps = (async () => {
     const params = qs.stringify({
          populate: [
               'Hero.Image', 'Hero.Button',
               'Cards.Content', 'Cards.Icon',
               'ServicesCard.Content', 'ServicesCard.Icon', 'ServicesCard.Button',
               'Grid.Content', 'Grid.button', 'Grid.Image'
          ]
     })

     const cloudmigrationPage = await Axios.get(`/cloud-migration-page?${params}`);
     const data = cloudmigrationPage.data?.data?.attributes;

     return { props: { data } }
})