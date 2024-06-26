import { baseURL } from '@/const';
import Image from 'next/image';
import React from 'react';

export const cardsData = [
  {
    id: 1,
    name: 'Expertise in Public Sector',
    image: '/image/logo.png',
    paragraph: 'With extensive experience working with government agencies and public organisations, we have an in-depth understanding of the regulatory, compliance, and transparency requirements.'
  },
  {
    id: 2,
    name: 'Tailored Solutions',
    image: '/image/logo.png',
    paragraph: 'We customise our solutions to align perfectly with the unique needs of public sector entities, ensuring that your organisation gets the right tools for success.'
  },
  {
    id: 3,
    name: 'Proven Success',
    image: '/image/logo.png',
    paragraph: 'Our track record includes successful projects that have significantly improved efficiency, reduced costs, and enhanced transparency in the public sector.'
  },
  {
    id: 4,
    name: 'Data Security and Compliance',
    image: '/image/logo.png',
    paragraph: 'We prioritise data security and compliance with stringent measures to protect sensitive information and ensure adherence to regulatory requirements, safeguarding the integrity and confidentiality of public sector data.'
  },
  {
    id: 5,
    name: 'Cost-Efficiency',
    image: '/image/logo.png',
    paragraph: 'We understand the budget constraints in the public sector. Our solutions are designed to deliver cost-efficiency, helping public organisations achieve more with their available resources.'
  },
  {
    id: 6,
    name: 'Robust Support and Training',
    image: '/image/logo.png',
    paragraph: 'We offer comprehensive support and training programs to ensure your team is well-equipped to leverage our solutions effectively. We are committed to your long-term success.'
  },
  {
    id: 7,
    name: 'Scalability and Future-Readiness',
    image: '/image/logo.png',
    paragraph: 'Our solutions are designed to grow with your organisation. As your needs evolve, our systems can adapt, ensuring that you re prepared for future challenges and opportunities in the public sector.'
  },

];

function ChooseCardTwo({ title, info, data, className, rounded, badge}: any) {
  console.log("🚀 ~ file: chooseCardTwo.tsx:52 ~ ChooseCardTwo ~ data:", data)
  return (
    <div className={`container mx-auto px-4 ${className}`}>
      <div className='text-[#02153a] text-center'>
        <h2 className='text-3xl lg:text-[42px] font-bold mb-4'>{title}</h2>
        <p className='text-base lg:text-lg'>
          {info}
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 pb-20'>
        {data?.map((card: any, idx: number) => (
          <div key={idx} className={` g2 bg-white text-[#3F3F3F] bx rounded-[30px] group gap-2 md:flex p-6 ${rounded}`}>
            <figure className='w-20'>
              <Image src={`${baseURL}${card.Icon?.data?.attributes.url}`} alt={card.name} width={56} height={56} className='mb-4 w-full' />
            </figure>
            <div>
              <h3 className='font-semibold mb-2 text-lg -mt-1 md:text-xl flex justify-between gap-2 items-center'>
                <span>{card.name || card.Title}</span>
                { badge && <span className='text-xs font-normal p-2 py-1.5 group-hover:text-[#008FD4] bg-[#F4FCFF] rounded-3xl'>{card?.Button?.Name}</span>}
              </h3>
              <p className='text-sm lg:text-[15px] font-light'>{card.paragraph || card.Content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseCardTwo;
