import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
