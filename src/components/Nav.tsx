import Link from "next/link"
import { lustria } from "@/app/layout"
import NavMenu from "./NavMenu"




const Nav = () => {




  return (
    <nav className="w-full h-[79px] bg-black flex items-center justify-between p-8">
        <Link href='/' className={lustria.className}>
            <span className="text-gray-200 text-[32px]">Peace</span>
        </Link>
<NavMenu/>
        
    </nav>
  )
}

export default Nav