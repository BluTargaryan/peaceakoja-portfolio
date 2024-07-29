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
const NavAltMenu = () => {

  const menuList = [
    {
      id:1,
      sectionName:'Home',
      sectionLink:'/'
    },
    {
      id:2,
      sectionName:'Projects',
      sectionLink:'/projects'
    },
  ]
  return (
    <DropdownMenu>
  <DropdownMenuTrigger className='z-10 flex items-center justify-center'>
    <MdMenu className='text-xl text-customWhite'/>
    </DropdownMenuTrigger>
  <DropdownMenuContent className='bg-customBlack rounded-lg text-customWhite'>

  {menuList.map((item, index )=> (
    <React.Fragment key={item.id}>
<DropdownMenuItem className='hover:text-customBlack cursor-pointer w-96'>
              <Link href={item.sectionLink}>{item.sectionName}</Link>
            </DropdownMenuItem>
            {index < menuList.length -1 && <DropdownMenuSeparator />}
  </React.Fragment>
              
        ))}

  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default NavAltMenu