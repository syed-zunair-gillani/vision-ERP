import Main from '@/components/main/main'
import Choose, { cardsData } from '@/components/choose/choose'
import Maximise from '@/components/maximise/maximise'
import Offer from '@/components/offer/offer'
import Customer from '@/components/customer/logo'
import Partnership from '@/components/customer/partnership'
import Blog from '@/components/customer/blog'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'
import { GetServerSideProps } from 'next'
import {Axios} from '@/config/Axios'
import { baseURL } from '@/const'
var qs = require('qs');


export default function Home({data}:any) {
  console.log("🚀 ~ file: index.tsx:13 ~ Home ~ data:", data)
  const {About, Choose_us, Customers,FPA_grid, Grid, Hero, Intel_Partnership, Offer_Title, Talent_Management, grid, offer_info} = data
  
  return (
    <>
      <Main hero={Hero}/>
      <TwoColGrid
        position="right"
        heading={About.Title}
        text1={About?.Content.content}
        image={`${baseURL}${About?.Image?.data?.attributes.url}`}
        link="#"
      />
      <Choose
        title="Why Choose Us"
        info="At Vision ERP, we offer more than just solutions; we offer a transformative partnership."
        data={cardsData}
      />
      <Maximise />
      {/* what we offer  */}
      <Offer />

      <Customer />
      <Partnership />

      <TwoColGrid
        position="right"
        heading="Raven Intel Partnership with Unit4      "
        text1="Unit4 has announced a partnership with Raven Intel for service delivery benchmarking and data analysis on customer satisfaction and implementation.      "
        text2="Raven Intel is an independent B2B peer review site focusing on the implementation experience of cloud enterprise software. Their mission is to help customers find their perfect implementation consulting partner.      "
        image="/image/2.png"
        link="#"
      />
      <Blog />
    </>
  )
}


export const getServerSideProps:GetServerSideProps = (async () => {
  const params = qs.stringify({
    populate: ['Hero.Image', 'Hero.Button', 'About.Image', 'About.Button', 'About.Content']
  })
  console.log("🚀 ~ file: index.tsx:59 ~ params ~ params:", params)

  const homePage = await Axios.get(`/main-page?${params}`);
  const data = homePage.data?.data?.attributes;

  return { props: { data } }
})
 