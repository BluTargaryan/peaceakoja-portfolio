import React from 'react'
import PAButtonWIcon from './PAButtonWIcon'
import Image, {StaticImageData} from 'next/image'
import PAButtonWIconFunc from './PAButtonWIconFunc'

interface footerType {
  image:StaticImageData,
  link:string,
  btnTitle:string,
  isLinkType:Boolean
}

const FooterLinks = ({image,link,btnTitle,isLinkType}:footerType) => {
  return (
    <div className='w-[214px] h-[214px] relative'>
        <div className='rounded-full w-full h-full bg-customWhite'>
        <Image 
    src={image}
    width="0"
    height="0"
    sizes="100vw"
    className="h-full w-auto"
    alt="graduate working on his computer setup"
   />
        </div>

       <div className='absolute bottom-0 left-0'>
       {isLinkType?
       <PAButtonWIcon
       submittedLink={link}
       backgroundColor='customWhite'
       typeLong={false}
       color="customBlack"
       borderColor='customBlack'
       title={btnTitle}/>:
       <PAButtonWIconFunc
   submittedLink={link}
   backgroundColor='customWhite'
   typeLong={false}
   color="customBlack"
   borderColor='customBlack'
   title={btnTitle}/>}
       </div>
    </div>
  )
}

export default FooterLinks