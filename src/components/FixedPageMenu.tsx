import React from 'react'

import { MdMenu } from "react-icons/md";
import Link from 'next/link';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
const FixedPageMenu = () => {

  const menuList = [
    {
      id:1,
      sectionName:'Welcome',
      sectionLink:'/#starter'
    },
    {
      id:2,
      sectionName:'Projects',
      sectionLink:'/#projects-preview'
    },
    {
      id:3,
      sectionName:'About Me',
      sectionLink:'/#aboutme'
    },
    {
      id:4,
      sectionName:'Links',
      sectionLink:'/#home-footer'
    },
  ]
  return (
    <DropdownMenu>
  <DropdownMenuTrigger className='fixed bottom-8 right-8 bg-customBlack rounded-lg w-16 h-16 z-10 flex items-center justify-center'>
    <MdMenu className='text-4xl text-customWhite'/>
    </DropdownMenuTrigger>
  <DropdownMenuContent className='bg-customBlack rounded-lg text-customWhite '>

  {menuList.map((item, index )=> (
    <React.Fragment key={item.id}>
<DropdownMenuItem className='hover:text-customBlack cursor-pointer'>
              <Link href={item.sectionLink}>{item.sectionName}</Link>
            </DropdownMenuItem>
            {index < menuList.length -1 && <DropdownMenuSeparator />}
  </React.Fragment>
              
        ))}

  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default FixedPageMenu