import Button from '@/components/UI/button'
import PageBanner from '@/components/main/pageBanner'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React, { useState } from 'react'
var qs = require('qs');
import { Axios } from '@/config/Axios'
import { baseURL } from '@/const'


const Products = ({data}:any) => {
  const {Hero, Timeline_Grid, Grid, Grid_1, Grid_2} = data
  const [plan, setPlan] = useState(0)

  return (
    <>
      <PageBanner
        title={Hero.title}
        description={Hero.description}
        image={`${baseURL}${Hero.Image.data.attributes.url}`}
        buttonText={Hero.Button.Name}
        buttonLink={Hero.Button.Link}
        breadCrum="Home - <span>Products</span>"
      />
      <TwoColGrid
        position={Grid.Image_Position}
        heading={Grid.Title}
        text1={Grid?.Content.content}
        image={`${baseURL}${Grid?.Image?.data?.attributes.url}`}
        link={Grid.button.Link}
        buttonText={Grid.button.Name}
        faqs={Grid.faq}
      />
      <section className='bg-[#F4FCFF] py-[100px]'>
        <div className='container mx-auto px-4'>
          <h2 className='md:leading-[48px] md:text-[42px] text-[25px] font-[700] text-center py-3'>{Timeline_Grid?.Title}</h2>
          <p className='max-w-[840px] w-full mx-auto text-center text-lg'>{Timeline_Grid?.info}</p>
          <div className={`grid md:grid-cols-2 items-center mt-16`}>
            <div className='text-[#02153a] mx-auto flex flex-col justify-center items-start'> 
              <div className='mb-5 -mt-2'>
                {
                  Timeline_Grid?.Timeline?.map((p: any, id: number) => (
                    <div key={id} className={`cursor-pointer`} onClick={() => setPlan(id)} >
                      <div className='flex items-start gap-5 py-3'>
                        <button className={`text-xl p-2 font-medium rounded-full w-[58px] h-[53px] border border-[#008FD4] ${ plan === id && 'g1 border-none !text-white'}`}>0{id + 1}</button>
                        <div className='bg-[#F0F6F8] rounded-lg p-4 w-full'>
                          <h6 className=' font-semibold '>{p.Title}</h6>
                          <p className={`transition-all mt-3 duration-300 ease-linear ${plan === id ? 'block' : 'hidden'}`}>{p.Description}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <Button link={`#`}>Read more</Button>
            </div>
            <div>
              <Image src={`${baseURL}${Timeline_Grid.Image.data.attributes.url}`} alt='Rehab Fit' width={800} height={650} className=' mx-auto w-[90%]' />
            </div>
          </div>
        </div>
      </section>
      
      <TwoColGrid
        position={Grid_1.Image_Position}
        heading={Grid_1.Title}
        text1={Grid_1?.Content.content}
        image={`${baseURL}${Grid_1?.Image?.data?.attributes.url}`}
        link={Grid_1.button.Link}
        buttonText={Grid_1.button.Name}
      />
      
      <section className='bg-[#FFFDF4]'>
      <TwoColGrid
        position={Grid_2.Image_Position}
        heading={Grid_2.Title}
        text1={Grid_2?.Content.content}
        image={`${baseURL}${Grid_2?.Image?.data?.attributes.url}`}
        faqs={Grid_2.faq}
      />
      </section>

    </>
  )
}

export default Products


export const faqs = [
  {
    question: "Optimise Efficiency",
    answer: "Unit4 ERP seamlessly integrates all aspects of your business, from finance and HR to supply chain and project management, providing a holistic view of your operations in one unified platform."
  },
  {
    question: "Empower Data-Driven Decisions",
    answer: "Unit4 ERP seamlessly integrates all aspects of your business, from finance and HR to supply chain and project management, providing a holistic view of your operations in one unified platform."
  },
  {
    question: "Adapt to Change",
    answer: "Unit4 ERP seamlessly integrates all aspects of your business, from finance and HR to supply chain and project management, providing a holistic view of your operations in one unified platform."
  },

]


export const getServerSideProps: GetServerSideProps = (async () => {
  const params = qs.stringify({
    populate: [
      'Hero.Image', 'Hero.Button',
      'Grid.Content', 'Grid.Image', 'Grid.button', 'Grid.faq',
      'Timeline_Grid.Timeline', 'Timeline_Grid.Image', 'Timeline_Grid.button',
      'Grid_1.Content', 'Grid_1.Image', 'Grid_1.button',
      'Grid_2.Content', 'Grid_2.Image', 'Grid_2.button', 'Grid_2.faq',
    ]
  })

  const productPage = await Axios.get(`/product?${params}`);
  const data = productPage.data?.data?.attributes;

  return { props: { data } }
})