import React, { useEffect, useState } from "react";
import BlogBanner from "../../components/main/blogBanner";
import BlogDesign from "../../components/BlogDesign/BlogDesign";
import Button from "../../components/UI/button";
import { IoArrowForward } from "react-icons/io5";
import { Axios } from "@/config/Axios";
var qs = require("qs");

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const [pageNo, setPageNo] = useState(1)

  useEffect(() => {
    (async function () {
      const params = qs.stringify({
        populate: ["Feature_image"],
      });
      const blogs = await Axios.get(`/blogs?${params}&pagination[page]=${pageNo}&pagination[pageSize]=12`);
      const data = blogs.data?.data;
      setBlogs(data);
    })();
  }, [pageNo]);

  return (
    <>
      <BlogBanner title="Latest Blogs & Updates" breadcrum="Blogs" />
      <section className="container mx-auto px-4 gap-4 gap-y-7 my-16 grid sm:grid-cols-2 md:grid-cols-3 ">
        {blogs?.map((item, idx) => {
          return <BlogDesign key={idx} data={item} />;
        })}
      </section>
      <div className="my-20 flex justify-center">
        <button
          onClick={()=>setPageNo(pageNo+1)}
          disabled={blogs?.length < 12 && true}
          className={`g1 px-6 md:py-4 py-6 button inline-flex rounded-[10px] text-white font-semibold items-center gap-2 hover:scale-105`}
        >
          {blogs?.length < 12 ? 'No More Data!' : 'Load More'}
           <IoArrowForward className="text-lg" />
        </button>
      </div>
    </>
  );
};

export default Blogs;
