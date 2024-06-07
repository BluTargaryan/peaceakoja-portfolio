'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { MdArrowRight, MdArrowRightAlt } from "react-icons/md";

interface linkSpec {
    submittedLink: string;
    backgroundColor:string
    typeLong:Boolean
    color:string,
    borderColor:string
  }

const PAButtonWIcon = ({submittedLink,backgroundColor,typeLong, color, borderColor}:linkSpec) => {
  return (
    <Button className={`${typeLong?'w-[447px]':'w-52'} h-14 flex items-center justify-between px-3.5 text-${color} text-xl bg-${backgroundColor} border-[3px] border-${borderColor} rounded-lg
    hover:pr-2.5 hover:${backgroundColor?'bg-transparent':''} transition-all`}>
   <Link href={submittedLink}>Go to Projects</Link>
<MdArrowRightAlt className='text-3xl'/>
   </Button>
  )
}

export default PAButtonWIcon