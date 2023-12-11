import Main from '@/components/main/main'
import Choose, { cardsData } from '@/components/choose/choose'
import Maximise from '@/components/maximise/maximise'
import Offer from '@/components/offer/offer'
import Customer from '@/components/customer/logo'
import Partnership from '@/components/customer/partnership'
import Blog from '@/components/customer/blog'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'


export default function Home() {
  return (
    <>
      <Main />
      <TwoColGrid
        position="right"
        heading="About Vision ERP"
        text1="We have industry specific experts who understand business functionality as well as system functionality. This helps us to understand your issues, as we have probably felt the same pain in previous careers.      "
        text2="This enables us to put ourselves in your shoes, experience your frustrations and needs, and develop solutions which are industry specific, and are tailored to work for you      "
        image="/image/2.png"
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
