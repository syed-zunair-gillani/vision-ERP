import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Main from '@/components/main/main'
import Choose from '@/components/choose/choose'
import Maximise from '@/components/maximise/maximise'
import Offer from '@/components/offer/offer'
import Customer from '@/components/customer/logo'
import Partnership from '@/components/customer/partnership'
import Raven from '@/components/customer/raven'
import Blog from '@/components/customer/blog'
import Speak from '@/components/speak/speak'
import Footer from '@/components/footer/footer'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'


export default function Home() {
  return (
   <>
    <Main/>
    <TwoColGrid 
      position="right"
      heading="About Vision ERP"
      text1="We have industry specific experts who understand business functionality as well as system functionality. This helps us to understand your issues, as we have probably felt the same pain in previous careers.      "
      text2="This enables us to put ourselves in your shoes, experience your frustrations and needs, and develop solutions which are industry specific, and are tailored to work for you      "
      image="/image/2.png"
      link="#"
    />
    <Choose/>
    <Maximise/>
    <Offer/>
    <Customer/>
    <Partnership/>
    <Raven/>
    <Blog/>
    <Speak/>
    <Footer/>
   </>
  )
}
