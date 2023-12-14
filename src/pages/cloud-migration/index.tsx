import Choose, { cardsData } from '@/components/choose/choose'
import ChooseCardTwo from '@/components/choose/chooseCardTwo'
import CloudResources from '@/components/cloudResources/cloudResources'
import PageBanner from '@/components/main/pageBanner'
import TwoColGrid from '@/components/twoColGrid/TwoColGrid'
import React from 'react'

const CloudMigration: React.FC<any> = () => {
     return (
          <>
               <PageBanner
                    title="What is Unit4 Cloud Migration?"
                    description="Unit4 have announced that they are de-supporting their Unit4 ERP on premise solution, this means that all on premise customers must move to Unit4 Cloud by December 31st 2024.If this wasn’t already part of your business plan for 2024, or you are looking for support with the migration to Unit4 Cloud then reach out to us today and we can guide you through the process."
                    image="/image/pgbanner.png"
                    buttonText="Get In Touch"
                    buttonLink="#"
                    breadCrum="Home - <span>Unit4 Cloud Migration</span>"
               />

               <Choose
                    title="What is DATE December 24?"
                    info="DATE December 24 is Vision ERP’s cloud migration methodology. It is designed to de-risk your migration and to ensure that your organisation is ready to align to the Unit4 cloud template by December 31st 2024."
                    data={cardsData.slice(0, 4)}
                    className="my-20"
               />

               <TwoColGrid
                    position="right"
                    heading="About Vision ERP"
                    text1="We have industry specific experts who understand business functionality as well as system functionality. This helps us to understand your issues, as we have probably felt the same pain in previous careers.      "
                    text2="This enables us to put ourselves in your shoes, experience your frustrations and needs, and develop solutions which are industry specific, and are tailored to work for you      "
                    image="/image/2.png"
                    link="#"
               />

               <section className='bg-[#F4FCFF] py-1'>
               <ChooseCardTwo
                         title="Our Cloud Service Offerings"
                         data={cardsData}
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