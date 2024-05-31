'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

interface linkType {
    submittedLink: string;
  }

const PAButton = ({submittedLink}:linkType) => {
  return (
    <Button  asChild className='w-52 h-14 flex items-center text-gray-200 text-xl bg-customBlack rounded-lg'>
   <Link href={submittedLink}>Continue</Link>
   </Button>
  )
}

export default PAButton