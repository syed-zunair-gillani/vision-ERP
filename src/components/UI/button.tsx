import Link from 'next/link'
import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

const Button = ({link, children, className}:any) => {
     return (
          <Link href={link} className={`g1 ${className} px-6 md:py-4 py-6 button inline-flex rounded-[10px] text-white font-semibold items-center gap-2 hover:scale-105`}>{children} <IoArrowForward className="text-lg"/></Link>
     )
}

export default Button