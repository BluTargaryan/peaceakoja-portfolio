'use client'

import {motion as m} from 'framer-motion'

import { GoDotFill } from "react-icons/go";

const ScrollingText = () => {
  return (
    <m.section className='flex flex-col  w-full h-40'>
        {/* <m.span
        
        initial={{ x: 0 }}
        animate={{ x: -1000 }}
        transition={{ ease: 'easeInOut', duration: 30}}
        >
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
            Peace
        </m.span> */}
        <m.div className='w-[300%] h-1/2 bg-customBlue text-customWhite font-medium flex items-center gap-5 px-5 '
         initial={{ x: 0 }}
         animate={{ x: -1000 }}
         transition={{ 
            ease: 'easeIn', 
            duration: 8,
            repeat: Infinity}}
        >
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Peace Akoja <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Peace Akoja <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Peace Akoja <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Peace Akoja <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Peace Akoja <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Peace Akoja <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Peace Akoja <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Peace Akoja <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Peace Akoja <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Peace Akoja <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Peace Akoja <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Peace Akoja <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Peace Akoja <GoDotFill className='text-xl'/></span>

        </m.div>

        <m.div className='w-[400%] h-1/2 bg-customBlack text-customWhite flex items-center gap-5 px-5 '
         initial={{ x: -1000}}
         animate={{ x: 0}}
         transition={{ 
            ease: 'easeIn', 
            duration: 8,
            repeat: Infinity}}
        >
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>
<span className='h-full text-5xl text-customWhite flex items-center gap-5'>Web Developer <GoDotFill className='text-xl'/></span>


        </m.div>
    </m.section>
  )
}

export default ScrollingText