import Main from '@/components/main/main'
import Choose, { cardsData } from '@/components/choose/choose'
import Maximise from '@/components/maximise/maximise'
import Offer from '@/components/offer/offer'
import Customer from '@/components/customer/logo'
import Partnership from '@/components/customer/partnership'
import Blog from '@/components/customer/blog'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'
import { GetServerSideProps } from 'next'
import { Axios } from '@/config/Axios'
import { baseURL } from '@/const'
var qs = require('qs');


export default function Home({ data }: any) {
  console.log("🚀 ~ file: index.tsx:13 ~ Home ~ data:", data)
  const { About, Choose_us, Customers, FPA_grid, Partnership, Grid, Hero, Intel_Partnership, Offer_Title, Talent_Management, grid, offer_info } = data

  return (
    <>
      <Main hero={Hero} />
      <TwoColGrid
        position={About.Image_Position}
        heading={About.Title}
        text1={About?.Content.content}
        image={`${baseURL}${About?.Image?.data?.attributes.url}`}
        link="#"
      />
      <Choose
        title="Why Choose Us"
        info="At Vision ERP, we offer more than just solutions; we offer a transformative partnership."
        data={Choose_us}
      />

      <section className='bg-[#F4FCFF] mt-24'>
        <TwoColGrid
          position={Grid.Image_Position}
          heading={Grid.Title}
          text1={Grid?.Content.content}
          image={`${baseURL}${Grid?.Image?.data?.attributes.url}`}
          link="#"
        />
      </section>

      {/* what we offer  */}
      <section className='container mx-auto px-4'>
        <div className='container text-center items-center text-[#02153a] lg:mt-20 mt-10 lg:w-[110vh] w-full mx-auto'>
          <h2 className='lg:text-[42px] text-[30px] font-[700]'>{Offer_Title}</h2>
          <p>{offer_info}</p>
        </div>
        {
          grid.map((g: any, idx: number) => (
            <TwoColGrid
              key={idx}
              position={g.Image_Position}
              heading={g.Title}
              text1={g?.Content.content}
              image={`${baseURL}${g?.Image?.data?.attributes.url}`}
              link="#"
            />
          ))
        }
      </section>
      <TwoColGrid
        position={FPA_grid.Image_Position}
        heading={FPA_grid.Title}
        text1={FPA_grid?.Content.content}
        image={`${baseURL}${FPA_grid?.Image?.data?.attributes.url}`}
        link="#"
      />
      <TwoColGrid
        position={Talent_Management.Image_Position}
        heading={Talent_Management.Title}
        text1={Talent_Management?.Content.content}
        image={`${baseURL}${Talent_Management?.Image?.data?.attributes.url}`}
        link="#"
      />

      <Customer data={Customers} />

      <section className='container mx-auto px-4'>
        <div className='bg-[#FFFDF4] w-full h-auto rounded-xl md:px-20 lg:mt-16 mt-10'>
          <TwoColGrid
            position={Partnership.Image_Position}
            heading={Partnership.Title}
            text1={Partnership?.Content.content}
            image={`${baseURL}${Partnership?.Image?.data?.attributes.url}`}
            link="#"
          />
        </div>
      </section>

      <TwoColGrid
        position={Intel_Partnership.Image_Position}
        heading={Intel_Partnership.Title}
        text1={Intel_Partnership?.Content.content}
        image={`${baseURL}${Intel_Partnership?.Image?.data?.attributes.url}`}
        link="#"
      />
      <Blog />
    </>
  )
}


export const getServerSideProps: GetServerSideProps = (async () => {
  const params = qs.stringify({
    populate: [
      'Hero.Image', 'Hero.Button',
      'About.Image', 'About.Button', 'About.Content',
      'Choose_us.Icon',
      'Grid.Content', 'Grid.Image', 'Grid.button',
      'grid.Content', 'grid.Image', 'grid.button',
      'FPA_grid.Content', 'FPA_grid.Image', 'FPA_grid.button',
      'Talent_Management.Content', 'Talent_Management.Image', 'Talent_Management.button',
      'Customers.Icon',
      'Partnership.Content', 'Partnership.Image', 'Partnership.button',
      'Intel_Partnership.Content', 'Intel_Partnership.Image', 'Intel_Partnership.button',
      'Partnership.Content', 'Partnership.Image', 'Partnership.button',
    ]
  })

  const homePage = await Axios.get(`/main-page?${params}`);
  const data = homePage.data?.data?.attributes;

  return { props: { data } }
})


