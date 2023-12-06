import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Main from '@/components/main/main'
import About from '@/components/about/about'
import Choose from '@/components/choose/choose'
import Maximise from '@/components/maximise/maximise'
import Offer from '@/components/offer/offer'
import Customer from '@/components/customer/logo'
import Partnership from '@/components/customer/partnership'
import Raven from '@/components/customer/raven'
import Blog from '@/components/customer/blog'
import Speak from '@/components/speak/speak'
import Footer from '@/components/footer/footer'
export default function Home() {
  return (
   <>
    <Main/>
    <About/>
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
