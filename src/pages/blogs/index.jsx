import React from "react";
import BlogBanner from "../../components/main/blogBanner";
import BlogDesign from "../../components/BlogDesign/BlogDesign";
import Button from "../../components/UI/button";
import { IoArrowForward } from "react-icons/io5";
import { Axios } from '@/config/Axios'

const Blogs = ({data}) => {
  return (
    <>
      <BlogBanner title="Latest Blogs & Updates" breadcrum="Blogs" />
      <section className="container mx-auto px-4 gap-4 gap-y-7 my-16 grid sm:grid-cols-2 md:grid-cols-3 ">
        {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => {
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
    </>
  );
};

export default Blogs;


// export const getServerSideProps = (async () => {
//   const params = qs.stringify({
//        populate: [
//             'Hero.Image', 'Hero.Button',
//             'Cards.Content', 'Cards.Icon', 'Grid.button',
//             'ERP_Grid.Content', 'ERP_Grid.Image', 'ERP_Grid.button', 'ERP_Grid.faq',
//             'Grid_2.Content', 'Grid_2.Image', 'Grid_2.button',
//        ]
//   })

//   const blogs = await Axios.get(`/blog?populate=*`);
//   const data = blogs.data?.data?.attributes;

//   return { props: { data } }
// })