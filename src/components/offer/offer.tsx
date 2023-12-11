import Image from 'next/image';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';
import TwoColGrid from '../twoColGrid/TwoColGrid';

function Offer() {
  return (
    <div className='container mx-auto px-4'>
      <div className='container text-center items-center text-[#02153a] lg:mt-20 mt-10 lg:w-[110vh] w-full mx-auto'>
        <h2 className='lg:text-[42px] text-[30px] font-[700]'>What We Offer</h2>
        <p>
          In the ever-evolving landscape of the public sector, Vision ERP stands as your dedicated partner in achieving operational excellence.
        </p>
      </div>
      <TwoColGrid
        position="left"
        heading="Unit4 ERP"
        text1="Unit4 ERP is your key to efficient and transparent operations in the public sector. Our comprehensive implementation and consultancy services ensure that you leverage the full potential of Unit4 ERP.      "
        text2="We integrate your financial, HR, supply chain, and project management functions, providing total visibility and enhancing transparency in your operations. With our ongoing management support, you can adapt to changing requirements, optimize performance, and achieve greater efficiency.      "
        image="/image/2.png"
        link="#"
      />
    </div>
  );
}

export default Offer;
