'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { MdArrowRight, MdArrowRightAlt } from "react-icons/md";

interface linkSpec {
    submittedLink: string;
    backgroundColor:Boolean
    typeLong:Boolean
    color:string
  }

const PAButtonWIcon = ({submittedLink,backgroundColor,typeLong, color}:linkSpec) => {
  return (
    <Button className={`${typeLong?'w-[447px]':'w-52'} h-14 flex items-center justify-between px-3.5 text-${color} text-xl ${backgroundColor?'bg-transparent':'bg-customBlack'} border-[3px] border-customBlack rounded-lg
    hover:pr-2.5 hover:${backgroundColor?'bg-transparent':''}`}>
   <Link href={submittedLink}>Go to Projects</Link>
<MdArrowRightAlt className='text-3xl'/>
   </Button>
  )
}

export default PAButtonWIcon