import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogDesign = ({data}) => {
  return (
    <article className='shadow2 rounded-[20px] group'>
          <figure >
               <Image src="/image/blog-img.png" alt="img" width={500} height={350} className='rounded-[20px]'/>
          </figure>
          <div className='p-4 px-6'>
               <h2 className='text-[17px] font-semibold text-[#01253A]'><Link href="/blogs/slug">How AI is giving employees more autonomy over their assignments!</Link></h2>
               <p className='text-[#3F3F3F] mt-1 text-[15px] mb-3'>Have you ever wondered what would happen if you let your employees choose their next assignment or role?</p>
               <Link href="/blogs/slug" className='text-[#3F3F3F] font-semibold group-hover:text-[#00619D]'>Read More</Link>
          </div>
    </article>
  )
}

export default BlogDesign