import React from 'react'
import PAButtonWIcon from './PAButtonWIcon'

const FooterLinks = () => {
  return (
    <div className='w-[214px] h-[214px] relative'>
        <div className='rounded-full w-full h-full bg-customWhite'></div>

       <div className='absolute bottom-0 left-0'>
       <PAButtonWIcon
   submittedLink="/projects"
   backgroundColor='customWhite'
   typeLong={false}
   color="customBlack"
   borderColor='customBlack'/>
       </div>
    </div>
  )
}

export default FooterLinks