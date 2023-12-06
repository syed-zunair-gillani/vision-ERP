import Image from 'next/image';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';

function Offer() {
  return (
    <div className='container mx-auto px-4'>
      <div className='container text-center items-center text-[#02153a] lg:mt-20 mt-10 lg:w-[110vh] w-full mx-auto'>
        <h2 className='lg:text-[42px] text-[30px] font-[700]'>What We Offer</h2>
        <p>
          In the ever-evolving landscape of the public sector, Vision ERP stands as your dedicated partner in achieving operational excellence.
        </p>
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10 py-16'>
 {/* /////1////        */}
        <div>
          <h3 className='text-[42px] font-[700]'>Unit4 ERP</h3>
          <p className='py-4'>
            Unit4 ERP is your key to efficient and transparent operations in the public sector. Our comprehensive implementation and consultancy services ensure that you leverage the full potential of Unit4 ERP.
            <br /><br />
            We integrate your financial, HR, supply chain, and project management functions, providing total visibility and enhancing transparency in your operations. With our ongoing management support, you can adapt to changing requirements, optimize performance, and achieve greater efficiency.
          </p>
          <Link href="/" className='flex bg-[#5ECAF3] w-[25vh] px-4 py-3 rounded-lg text-white font-semibold items-center gap-3 hover:scale-105
            '>Read More <IoArrowForward /></Link>
        </div>
        <div className='text-center'>
            <Image src='/image/4.png' alt='Rehab Fit' width={450} height={650} className='w-full h-auto ' />
        </div>
 {/* /////2////////////       */}
        <div className='text-center'>
            <Image src='/image/5.png' alt='Rehab Fit' width={450} height={650} className='w-full h-auto ' />
        </div>
        <div>
          <h3 className='text-[42px] font-[700]'>Unit4 FP&A</h3>
          <p className='py-4'>
          Unit4 FP&A plays a pivotal role in the public sector, where financial planning and analysis are vital. Our experts guide you through implementation and provide consultancy to help you harness the full potential of Unit4 FP&A.
           <br /><br />
          Real-time insights and enhanced collaboration enable your organisation to make informed decisions and set comprehensive financial plans and budgets. Ongoing management ensures your public sector entity remains agile, efficient, and fully prepared to meet its financial objectives.
          </p>
          <Link href="/" className='flex bg-[#5ECAF3] w-[25vh] px-4 py-3 rounded-lg text-white font-semibold items-center gap-3 hover:scale-105
            '>Read More <IoArrowForward /></Link>
        </div>
{/* ///////3////// */}

        <div>
          <h3 className='lg:text-[42px] text-[30px] font-[700]'>Unit4 Talent Management</h3>
          <p className='py-4'>
          In the public sector, building and nurturing high-performing workforces is essential. Unit4 Talent Management provides you with the tools to attract, develop, and retain top talent.
           <br /><br />
          We help you create a culture of continuous learning, enhance individual and team performance, and maximise efficiency. Our ongoing management support ensures that your public sector workforce remains motivated, engaged, and equipped to meet the ever-evolving demands of your community.
          </p>
          <Link href="/" className='flex bg-[#5ECAF3] w-[25vh] px-4 py-3 rounded-lg text-white font-semibold items-center gap-3 hover:scale-105
            '>Read More <IoArrowForward /></Link>
        </div>
        <div className='text-center'>
            <Image src='/image/6.png' alt='Rehab Fit' width={450} height={650} className='w-full h-auto ' />
        </div>












      </div>
    </div>
  );
}

export default Offer;
