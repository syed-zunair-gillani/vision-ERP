import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogDesign = ({data}) => {
  console.log("🚀 ~ file: BlogDesign.jsx:6 ~ BlogDesign ~ data:", data)
  return (
    <article className='shadow2 rounded-[20px] group'>
          <figure >
               <Image src="/image/blog-img.png" alt="img" width={500} height={350} className='rounded-[20px]'/>
          </figure>
          <div className='p-4 px-6'>
               <h2 className='text-[17px] font-semibold text-[#01253A]'><Link href={`/blogs/${data.id}`}>{data.attributes?.Title}</Link></h2>
               <p className='text-[#3F3F3F] mt-1 text-[15px] mb-3'>{data.attributes?.Excerpt}</p>
               <Link href={`/blogs/${data.id}`} className='text-[#3F3F3F] font-semibold group-hover:text-[#00619D]'>Read More</Link>
          </div>
    </article>
  )
}

export default BlogDesign