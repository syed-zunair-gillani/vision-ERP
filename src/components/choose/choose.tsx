import React from 'react';

const cardsData = [
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

function Choose() {
  return (
    <div className='container mx-auto px-4'>
    <div className='text-[#02153a] text-center lg:mt-16 py-10'>
      <h2 className='text-3xl lg:text-5xl font-semibold mb-4'>Why Choose Us</h2>
      <p className='text-base lg:text-lg'>
        At Vision ERP, we offer more than just solutions; we offer a transformative partnership.
      </p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
      {cardsData.map((card) => (
        <div key={card.id} className='bg-white  text-[#3F3F3F] rounded-3xl shadow-xl p-4 hover:bg-gradient transition-all duration-300'>
          <img src={card.image} alt={card.name} className='w-[47px] h-[47px] mb-4 ' />
          <h3 className='font-semibold mb-2 text-lg md:text-xl'>{card.name}</h3>
          <p className='text-sm lg:text-base'>{card.paragraph}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Choose;
