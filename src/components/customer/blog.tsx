import React from 'react'
import { IoArrowForward } from 'react-icons/io5';
import BlogDesign from '../BlogDesign/BlogDesign'

function blog() {
   return (
      <div className='container mx-auto px-4'>
         <div className='py-10'>
            <h2 className='text-[42px] font-[700] text-[#02153a] text-center'>Latest Blog News</h2>
         </div>
         <section className="container mx-auto px-4 gap-4 gap-y-7 mb-10 mt-5 grid sm:grid-cols-2 md:grid-cols-3 ">
        {[1, 2, 3].slice(0,3).map((item, idx) => {
          return <BlogDesign key={idx} data={item} />;
        })}
      </section>
      <div className="my-20 flex justify-center">
          <button
            className={`g1 px-6 md:py-4 py-6 button inline-flex rounded-[10px] text-white font-semibold items-center gap-2 hover:scale-105`}
          >
            Load More <IoArrowForward className="text-lg" />
          </button>
        </div>
      </div>
   )
}

export default blog