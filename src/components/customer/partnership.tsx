import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';
import TwoColGrid from '../twoColGrid/TwoColGrid';

function Partnership() {
  return (
    <div className='container mx-auto px-4'>
      <div className='bg-[#FFFDF4] w-full h-auto rounded-xl md:px-20 lg:mt-16 mt-10'>
        <TwoColGrid
          position="left"
          heading="A Unit4 Partnership"
          text1="An official Partnership with the software vendor to ensure consistent delivery of an ERP system fit for purpose"
          image="/image/2.png"
          link="#"
        />
      </div>
    </div>
  );
}

export default Partnership;
