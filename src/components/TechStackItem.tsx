import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface stackType {
    title: string;
    image:StaticImageData
  }

const TechStackItem = ({title, image}:stackType) => {
  return (
    <div className='flex flex-col w-24 h-36 justify-between items-center text-2xl'>
        <div className='w-24 h-24 flex items-center justify-center'>
        <Image 
    src={image}
    width="0"
    height="0"
    sizes="100vw"
    className="h-full w-auto"
    alt="graduate working on his computer setup"
   />
        </div>
        <span>{title}</span>
    </div>
  )
}

export default TechStackItem