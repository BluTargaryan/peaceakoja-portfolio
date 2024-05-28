'use client'

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const NavMenu = () => {
  
const router = useRouter()
const pathname = usePathname()
const [activePage, setActivePage] = useState('')



const routeHandler = (val:string) =>{
router.push(val)
}

useEffect(()=>{
  setActivePage(pathname)
  console.log(activePage)
})
    
  return (
    <ul className=" w-40 h-full text-gray-200 text-xl flex items-center justify-between">
            <li onClick={()=>routeHandler('/')} className="flex flex-col relative">
                <>
                Home
                </>

                {
                  (activePage === '/') ?<div className="w-10 bg-white h-1 absolute top-12 left-0 rounded"></div>:''
                }
            </li>
            <li onClick={()=>routeHandler('/projects')} className="flex flex-col relative justify-center">
                <>
                Projects
                </>

                {
                  activePage === '/projects'?<div className="w-10 bg-white h-1 absolute top-12 left-0 rounded"></div>:''
                }
            </li>
        </ul>
  )
}

export default NavMenu