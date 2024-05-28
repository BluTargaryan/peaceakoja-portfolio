import Link from "next/link"
import { lustria } from "@/app/layout"
import NavMenu from "./NavMenu"




const Nav = () => {




  return (
    <nav className="w-screen h-[79px] bg-black flex items-center justify-between p-8">
        <Link href='/' className={lustria.className}>
            <span className="text-white text-[32px]">Peace</span>
        </Link>
<NavMenu/>
        
    </nav>
  )
}

export default Nav