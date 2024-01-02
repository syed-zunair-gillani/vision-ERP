import React from 'react'
import SingleBlogBanner from '../../components/main/singleBlogBanner'
import Image from 'next/image'
import AboutMe from '../../components/aboutMe/aboutMe'
import BlogSlider from '../../components/blogSlider/blogSlider'
var qs = require("qs");
import { Axios } from "@/config/Axios";
import { baseURL } from '@/const'
import Markdown from 'react-markdown'


const SlugBlog = ({data}) => {

  return (
    <>
          <SingleBlogBanner
               title={data.Title}
          />
          <figure className='container mx-auto px-4 -mt-40'>
               <Image src={`${baseURL}${data?.Feature_image?.data?.attributes.url}`} alt="img" width={1200} height={450} className='rounded-[20px] w-full'/>
          </figure>
          <div className='container mx-auto flex justify-between px-4 py-4 border-b'>
               <div className='flex items-center gap-1'>
                    <Image src="/image/blog-img.png" alt="img" width={100} height={100} className='rounded-full w-[60px] h-[60px] object-cover'/>
                    <span className='text-[#727272] text-lg'>By Jilon Miah</span>
               </div>
               <div className='text-[#727272] text-lg'>
                    <p>Updated on</p>
                    <p>February 20, 2023</p>
               </div>
          </div>
          <div className='text-[#3F3F3F] container mx-auto px-4 py-5 content'>
               <Markdown >{data.Content}</Markdown>
          </div>
          

          <AboutMe/>
          <BlogSlider/>
    </>
  )
}

export default SlugBlog


export const getServerSideProps = (async (context) => {
     const slug = context.query.slug
     
     const params = qs.stringify({
          populate: [
               'Feature_image',
          ]
     })

     const erpPage = await Axios.get(`/blogs/${slug}?${params}`);
     const data = erpPage.data?.data?.attributes;

     return { props: { data } }
})