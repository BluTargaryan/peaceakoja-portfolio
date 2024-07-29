import Link from "next/link"
import { lustria } from "@/app/layout"
import NavMenu from "./NavMenu"
import NavAltMenu from "./NavAltMenu"




const Nav = () => {




  return (
    <nav 
    className="w-full h-[79px] bg-customBlack flex items-center justify-between p-4 relative">
        <Link href='/' className={lustria.className}>
            <span className="text-gray-200 text-xl">Peace</span>
        </Link>
<NavMenu/>
<NavAltMenu />
        
    </nav>
  )
}

export default Nav